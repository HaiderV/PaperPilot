import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Upload, FileText, X, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";

export function OcrToolPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
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
    setStatusMessage("Uploading PDF...");

    // Retrieve or create a unique session ID
    let sessionId = sessionStorage.getItem("paperpilot_session_id");
    if (!sessionId) {
      sessionId = "session_" + Math.random().toString(36).substring(2, 15) + "_" + Date.now();
      sessionStorage.setItem("paperpilot_session_id", sessionId);
    }

    // Step-by-step progress tracking
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      if (currentProgress < 15) {
        currentProgress += 3;
        setStatusMessage("Uploading PDF...");
      } else if (currentProgress < 75) {
        currentProgress += 1.5;
        setStatusMessage("Running OCR text recognition...");
      } else if (currentProgress < 90) {
        currentProgress += 1;
        setStatusMessage("Generating searchable PDF layout...");
      } else if (currentProgress < 98) {
        currentProgress += 0.5;
        setStatusMessage("Uploading searchable document to cloud...");
      }
      setProgress(Math.floor(currentProgress));
    }, 150);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("sessionId", sessionId);

      const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.DEV 
        ? "http://localhost:5000" 
        : "https://backendpilot-rnyj.onrender.com");

      const response = await fetch(`${API_BASE}/api/ocr/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      clearInterval(progressInterval);

      if (!response.ok || !data.success) {
        throw new Error(data.message || "OCR processing failed.");
      }

      setProgress(100);
      setStatusMessage("Completed!");

      setTimeout(() => {
        setIsProcessing(false);
        setRemainingRequests((prev) => prev - 1);
        navigate("/output", {
          state: {
            fileName: file.name,
            fileUrl: data.fileUrl,
            extractedText: data.extractedText,
          },
        });
      }, 600);

    } catch (err: any) {
      clearInterval(progressInterval);
      setIsProcessing(false);
      setError(err.message || "An unexpected error occurred during OCR.");
      console.error(err);
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
                        {statusMessage || "Processing OCR..."}
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
