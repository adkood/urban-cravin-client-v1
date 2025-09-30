'use client';

import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Shop: ['New Drops', 'Oversized Tees', 'Vests', 'Collections'],
  Help: ['Contact', 'FAQs', 'Size Guide', 'Order Tracking'],
  Policies: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Shipping Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Urban <span className="text-[#9B1E22]">Cravin</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Streetwear that fits your attitude
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#9B1E22] transition-colors text-sm focus:outline-none focus:text-[#9B1E22]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Urban Cravin 2025. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#9B1E22] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#9B1E22] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#9B1E22] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#141414] flex items-center justify-center hover:bg-[#9B1E22] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
