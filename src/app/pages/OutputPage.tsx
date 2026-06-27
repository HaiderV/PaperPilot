import { Link, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Download,
  CheckCircle2,
  FileText,
  Search,
  Copy,
  ArrowLeft,
} from "lucide-react";

export function OutputPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const fileName = location.state?.fileName || "document.pdf";

  useEffect(() => {
    // Redirect to OCR tool if no file data
    if (!location.state?.fileName) {
      navigate("/ocr-tool");
    }
  }, [location.state, navigate]);

  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    alert("Download started! (This is a demo)");
  };

  const extractedText = `This is a sample extracted text from your PDF document.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Key Features:
• Text is now selectable
• Full search capability enabled
• Maintains original formatting
• High accuracy OCR recognition

The document has been successfully processed and is ready for download.`;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Conversion Complete!
          </h1>
          <p className="text-lg text-muted-foreground">
            Your PDF has been successfully converted to a searchable OCR
            document
          </p>
        </div>

        {/* File Info Card */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Converted File</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{fileName}</p>
                  <p className="text-sm text-muted-foreground">
                    OCR PDF • Ready for download
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleDownload}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download OCR PDF
              </Button>
              <Link to="/ocr-tool" className="flex-1">
                <Button variant="outline" size="lg" className="w-full border-primary/20">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Convert Another
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Features Enabled */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Features Enabled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Search className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Full-Text Search</h4>
                  <p className="text-sm text-muted-foreground">
                    Search for any word or phrase in your document
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Copy className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Text Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Select and copy text directly from the PDF
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Original Format</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintains the original layout and formatting
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">High Accuracy</h4>
                  <p className="text-sm text-muted-foreground">
                    99%+ accuracy in text recognition
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Extracted Text Preview */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Extracted Text Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-secondary p-6 rounded-lg border border-border max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm font-mono text-foreground">
                {extractedText}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
