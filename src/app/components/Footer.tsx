import { Link } from "react-router";
import { Github, Twitter, Linkedin } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section: Brand full-width on mobile, 4-col on desktop */}
        <div className="flex flex-col items-center md:hidden space-y-4 mb-8 text-center">
          <div className="flex items-center space-x-2">
            <LogoMark size={32} />
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              PaperPilot
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Convert any PDF to searchable OCR PDF with ease. Fast, reliable,
            and secure.
          </p>
        </div>

        {/* Mobile: Quick Links + Legal side by side */}
        <div className="grid grid-cols-2 gap-6 md:hidden mb-8">
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/ocr-tool" className="text-sm text-muted-foreground hover:text-primary transition-colors">OCR Tool</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
            <ul className="space-y-2 text-center">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile: Connect centered */}
        <div className="flex flex-col items-center md:hidden mb-2">
          <h3 className="font-semibold mb-3 text-foreground">Connect</h3>
          <div className="flex space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors" aria-label="GitHub"><Github className="h-5 w-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Desktop: original 4-col grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LogoMark size={32} />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                PaperPilot
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Convert any PDF to searchable OCR PDF with ease. Fast, reliable,
              and secure.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/ocr-tool" className="text-sm text-muted-foreground hover:text-primary transition-colors">OCR Tool</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} PaperPilot. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed by{" "}
              <span className="text-primary font-semibold">
                Haider S Vadgamwala
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
