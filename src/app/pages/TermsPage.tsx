import { Card, CardContent } from "../components/ui/card";
import { FileText } from "lucide-react";

export function TermsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: June 21, 2026
          </p>
        </div>

        {/* Content */}
        <Card className="border-border bg-card">
          <CardContent className="p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using PaperPilot ("the Service"), you agree to
                be bound by these Terms of Service and all applicable laws and
                regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                2. Service Description
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                PaperPilot provides an online OCR (Optical Character
                Recognition) conversion service that transforms standard PDF
                files into searchable, text-selectable documents. The Service is
                provided "as is" and "as available" without any warranties,
                express or implied.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                3. Usage Limits
              </h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Users are granted the following usage limits:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Maximum 20 conversions per day per user</li>
                  <li>Maximum file size of 50MB per upload</li>
                  <li>Supported format: PDF files only</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these limits at any time
                  without prior notice. Attempting to circumvent these limits
                  may result in temporary or permanent suspension of access.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                4. Acceptable Use
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the Service only for lawful purposes. You are
                prohibited from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  Uploading files containing illegal, harmful, or offensive
                  content
                </li>
                <li>
                  Attempting to gain unauthorized access to our systems
                </li>
                <li>Using automated tools to abuse the Service</li>
                <li>Violating any applicable local, state, or federal laws</li>
                <li>
                  Uploading files that violate copyright or intellectual
                  property rights
                </li>
                <li>Transmitting viruses, malware, or harmful code</li>
                <li>
                  Interfering with or disrupting the Service or servers
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service, including its original content, features, and
                functionality, is owned by PaperPilot and is protected by
                international copyright, trademark, and other intellectual
                property laws. You retain all rights to the documents you upload
                and convert.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                6. User Content
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain full ownership of any files you upload to the
                Service. By uploading files, you grant us a temporary license to
                process these files solely for the purpose of OCR conversion. We
                do not claim any ownership rights to your content and will
                delete all uploaded files immediately after processing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
                We make no warranties, expressed or implied, regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The accuracy or completeness of OCR conversions</li>
                <li>Uninterrupted or error-free operation</li>
                <li>The results obtained from using the Service</li>
                <li>The correction of defects or errors</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                8. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, PaperPilot shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses resulting from your use of
                the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                9. Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless PaperPilot and its
                developers, including Haider S Vadgamwala, from any claims,
                damages, losses, liabilities, and expenses arising from your use
                of the Service or violation of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                10. Service Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the
                Service at any time without notice. We may also impose limits on
                certain features or restrict access to parts or all of the
                Service without liability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                11. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to the Service
                immediately, without prior notice or liability, for any reason,
                including if you breach these Terms. Upon termination, your
                right to use the Service will immediately cease.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                12. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which the Service operates,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                13. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify users of any changes by updating the "Last updated" date.
                Your continued use of the Service after such modifications
                constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                14. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us
                through our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                By using PaperPilot, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
