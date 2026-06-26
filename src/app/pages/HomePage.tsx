import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  FileText,
  Search,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function HomePage() {
  const features = [
    {
      icon: FileText,
      title: "PDF to OCR Conversion",
      description:
        "Transform any PDF into a searchable, text-selectable document with advanced OCR technology.",
    },
    {
      icon: Search,
      title: "Text Search & Selection",
      description:
        "Enable full-text search and text selection in scanned documents for better accessibility.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your documents are processed securely and deleted immediately after conversion.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Upload PDF",
      description: "Select and upload your PDF file to our secure platform.",
    },
    {
      number: "02",
      title: "Process OCR",
      description:
        "Our scripts extracts and recognizes text from your document.",
    },
    {
      number: "03",
      title: "Download Result",
      description:
        "Get your searchable, text-selectable OCR PDF ready to use.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">
                  20 Free Conversions Daily
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Transform PDFs into{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Searchable Documents
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              PaperPilot uses advanced OCR technology to convert your scanned
              PDFs into fully searchable and text-selectable documents. Fast,
              secure, and absolutely free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/ocr-tool">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  Start Converting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/faq">
                <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/50">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-12 max-w-4xl mx-auto">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Free to Use</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-primary">20</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Daily Requests</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-primary">99.3%</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make your PDFs searchable and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to convert your PDF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                  <div className="text-6xl font-bold text-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="pt-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Transform Your PDFs?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of users who trust PaperPilot for their document
            conversion needs.
          </p>
          <Link to="/ocr-tool">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
