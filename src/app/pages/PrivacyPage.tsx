import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Shield } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: June 21, 2026
          </p>
        </div>

        {/* Content */}
        <Card className="border-border bg-card">
          <CardContent className="p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to PaperPilot. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you about how we handle your data when you use our
                OCR conversion service and tell you about your privacy rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                2. Information We Collect
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-2">
                    2.1 Files You Upload
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you use our OCR conversion service, we temporarily
                    process the PDF files you upload. These files are
                    automatically deleted from our servers immediately after
                    conversion is complete.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2.2 Usage Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect anonymous usage statistics such as the number of
                    conversions performed, file sizes, and processing times to
                    improve our service. This data is aggregated and does not
                    identify individual users.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">2.3 Technical Data</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect IP addresses, browser type, device
                    information, and other technical data to ensure service
                    security and functionality.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                3. How We Use Your Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Process your PDF files for OCR conversion</li>
                <li>Monitor and enforce daily usage limits</li>
                <li>Improve our service quality and performance</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>
                  Ensure the security and integrity of our platform
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>All file uploads use encrypted HTTPS connections</li>
                <li>
                  Files are stored temporarily in secure, isolated environments
                </li>
                <li>
                  Automatic deletion of files immediately after processing
                </li>
                <li>Regular security audits and updates</li>
                <li>
                  Access to data is restricted to authorized personnel only
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                5. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your uploaded PDF files are deleted from our servers immediately
                after the OCR conversion is complete and you've downloaded the
                result. We do not store your documents. Anonymous usage
                statistics may be retained for up to 12 months for analytical
                purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                6. Third-Party Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use third-party services for analytics, error tracking,
                and infrastructure. These services have their own privacy
                policies and we ensure they meet our data protection standards.
                We do not sell or share your personal data with third parties
                for marketing purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Know what data we collect and how it's used</li>
                <li>Request deletion of your usage data</li>
                <li>Opt-out of analytics tracking</li>
                <li>File a complaint with a data protection authority</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                8. Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use minimal cookies to maintain your session and track daily
                usage limits. These cookies are essential for the service to
                function properly. We do not use cookies for advertising or
                tracking across websites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                9. Children's Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PaperPilot is not intended for use by children under 13 years of
                age. We do not knowingly collect personal information from
                children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our data
                practices, please contact us through our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                By using PaperPilot, you agree to the collection and use of
                information in accordance with this privacy policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
