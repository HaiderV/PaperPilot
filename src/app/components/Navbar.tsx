import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { LogoMark } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ocr-tool", label: "OCR Tool" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <LogoMark size={36} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              PaperPilot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile burger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-border bg-card/80 hover:border-primary/50 transition-colors"
          >
            <span className="sr-only">Open menu</span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-primary rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-primary rounded-full transition-all duration-300 origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-card/90 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span>{link.label}</span>
                {isActive(link.path) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </nav>
  );
}
