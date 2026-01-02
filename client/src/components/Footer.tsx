import { Link } from "wouter";
import { BarChart2, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                <BarChart2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-display">TechForex</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              TechForex provides professional trading tools, real-time market data, and comprehensive education for traders worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/markets" className="hover:text-primary transition-colors">Live Markets</Link></li>
              <li><Link href="/tools" className="hover:text-primary transition-colors">Trading Tools</Link></li>
              <li><Link href="/education" className="hover:text-primary transition-colors">Education & Books</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/education" className="hover:text-primary transition-colors">Beginner's Guide</Link></li>
              <li><Link href="/education" className="hover:text-primary transition-colors">Advanced Strategies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Risk Management</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Support Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <span>123 Financial District,<br />New York, NY 10005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>support@techforex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} TechForex. All rights reserved. Trading involves risk.</p>
        </div>
      </div>
    </footer>
  );
}
