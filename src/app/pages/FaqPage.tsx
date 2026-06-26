import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";

export function FaqPage() {
  const faqs = [
    {
      question: "What is OCR and how does it work?",
      answer:
        "OCR (Optical Character Recognition) is a technology that converts different types of documents, such as scanned paper documents or PDF files, into editable and searchable data. PaperPilot uses advanced AI-powered OCR to recognize text in your PDFs and make them fully searchable and selectable.",
    },
    {
      question: "How many files can I convert per day?",
      answer:
        "All users get 20 free conversions per day. This limit resets every 24 hours at midnight UTC. This helps us maintain service quality and ensure fair usage for all users.",
    },
    {
      question: "What file formats are supported?",
      answer:
        "Currently, PaperPilot supports PDF files only. We accept PDF files up to 50MB in size. Support for additional formats may be added in future updates based on user feedback.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely! Your privacy and security are our top priorities. All files are processed securely using encrypted connections. Your documents are automatically deleted from our servers immediately after conversion is complete. We never store, share, or use your files for any purpose other than processing.",
    },
    {
      question: "How accurate is the OCR conversion?",
      answer:
        "Our OCR technology achieves 99%+ accuracy on most documents. The accuracy depends on the quality of the original PDF, font types, and image resolution. Clear, high-quality scans will produce the best results. Handwritten text may have lower accuracy rates.",
    },
    {
      question: "Can I convert password-protected PDFs?",
      answer:
        "Currently, PaperPilot does not support password-protected or encrypted PDF files. Please remove the password protection before uploading. We're working on adding support for this feature in the future.",
    },
    {
      question: "What happens if I exceed my daily limit?",
      answer:
        "If you reach the 20 conversions per day limit, you'll need to wait until the next day (midnight UTC) for your quota to reset. We may introduce premium plans in the future for users who need higher limits.",
    },
    {
      question: "Do you support multiple languages?",
      answer:
        "Right now, No. But we will add more language support in the future.",
    },
    {
      question: "Can I use PaperPilot for commercial purposes?",
      answer:
        "Yes, you can use PaperPilot for both personal and commercial purposes within the daily usage limits. However, please review our Terms of Service for complete usage guidelines and restrictions.",
    },
    {
      question: "What if the OCR conversion isn't accurate?",
      answer:
        "If you experience accuracy issues, try the following: ensure your PDF has good image quality, avoid heavily degraded or low-resolution scans, make sure the text is clear and not too small. If problems persist, please contact our support team with details about the issue.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Currently, PaperPilot is a web-based application that works great on mobile browsers. We're considering developing native mobile apps for iOS and Android based on user demand. Stay tuned for updates!",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about PaperPilot
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center p-8 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-lg border border-primary/20">
          <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Please reach out to our
            support team.
          </p>
          <a href="/contact">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
