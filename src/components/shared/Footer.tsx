"use client";

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-primary" />
                <span>hello@findhouses.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>123 Real Estate Ave, Suite 100<br />San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/properties" className="hover:text-primary transition-colors">Browse Properties</Link></li>
              <li><Link href="/agents" className="hover:text-primary transition-colors">Our Agents</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/buy" className="hover:text-primary transition-colors">Buy a Home</Link></li>
              <li><Link href="/rent" className="hover:text-primary transition-colors">Rent a Property</Link></li>
              <li><Link href="/sell" className="hover:text-primary transition-colors">Sell Your Home</Link></li>
              <li><Link href="/valuation" className="hover:text-primary transition-colors">Free Valuation</Link></li>
              <li><Link href="/invest" className="hover:text-primary transition-colors">Investment Properties</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-primary">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on new properties and real estate news</p>
 
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FindHouses. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Use
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;