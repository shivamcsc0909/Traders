import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/markets", label: "Markets" },
    { href: "/tools", label: "Tools" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <BarChart2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary font-display">
                TechForex
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary font-semibold" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/education">
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md hover:bg-slate-50",
                  location === link.href ? "text-primary bg-blue-50" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/education" onClick={() => setIsOpen(false)}>
                <button className="w-full rounded-md bg-primary px-3 py-3 text-base font-semibold text-white shadow-sm">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
