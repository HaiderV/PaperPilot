import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Upload, FileText, X, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { toast } from "sonner";

interface OCRResponse {
  success: boolean;
  message: string;
  cloudinaryFile: {
    publicId: string;
    secureUrl: string;
  };
}

export function OcrToolPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [remainingRequests, setRemainingRequests] = useState(20);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf") {
        setError("Please select a valid PDF file");
        return;
      }
      if (selectedFile.size > 50 * 1024 * 1024) {
        setError("File size must be less than 50MB");
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.type !== "application/pdf") {
        setError("Please select a valid PDF file");
        return;
      }
      setFile(droppedFile);
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const processOCR = async () => {
    if (!file) return;

    if (remainingRequests <= 0) {
      setError("Daily request limit reached. Please try again tomorrow.");
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setError(null);

    // Visual progress animation indicator (caps at 95% until response comes)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          return 95;
        }
        return prev + 5;
      });
    }, 200);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("https://backendpilot-rnyj.onrender.com/api/ocr/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let errMsg = `Server error: ${response.status} ${response.statusText}`;
        try {
          const errData = await response.json();
          if (errData && errData.message) {
            errMsg = errData.message;
          }
        } catch {
          // ignore json parse errors
        }
        throw new Error(errMsg);
      }

      const data: OCRResponse = await response.json();

      if (!data.success || !data.cloudinaryFile?.secureUrl) {
        throw new Error(data.message || "OCR processing failed.");
      }

      setProgress(100);
      clearInterval(interval);

      // Brief delay so 100% progress is visible
      setTimeout(() => {
        setIsProcessing(false);
        setRemainingRequests((prev) => prev - 1);
        navigate("/output", {
          state: {
            fileName: file.name,
            fileUrl: data.cloudinaryFile.secureUrl,
          },
        });
      }, 300);

    } catch (err: any) {
      clearInterval(interval);
      setIsProcessing(false);
      setProgress(0);
      const errMsg = err.message || "An unexpected error occurred during OCR.";
      setError(errMsg);
      toast.error(errMsg);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            OCR Conversion Tool
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your PDF and convert it to a searchable document
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm text-primary">
              {remainingRequests} requests remaining today
            </span>
          </div>
        </div>

        {/* Upload Card */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Upload PDF File</CardTitle>
            <CardDescription>
              Supported format: PDF (Max size: 50MB)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {!file ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-border hover:border-primary/50 rounded-lg p-12 text-center cursor-pointer transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      Drop your PDF here or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      PDF files up to 50MB
                    </p>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={removeFile}
                    disabled={isProcessing}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Processing OCR...
                      </span>
                      <span className="text-primary font-medium">
                        {progress}%
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                <Button
                  onClick={processOCR}
                  disabled={isProcessing || remainingRequests <= 0}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Convert to OCR PDF"
                  )}
                </Button>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">High Quality</h3>
              <p className="text-sm text-muted-foreground">
                Advanced OCR technology ensures accurate text recognition
              </p>
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-muted-foreground">
                Files are deleted immediately after processing
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
