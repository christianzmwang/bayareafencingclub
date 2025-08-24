import Image from 'next/image'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-red-700 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/general/logo.png"
              alt="Bay Area Fencing Club Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/bay_area_fencing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-200 hover:text-pink-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.facebook.com/bayareafencing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-200 hover:text-blue-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://www.tiktok.com/@bayareafencingclub?_t=8riZZTpldPS&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-200 hover:text-white transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/bafencing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-200 hover:text-blue-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-600 pt-4 mt-4 text-left">
          <p className="text-red-100 text-sm">
            © {currentYear} Bay Area Fencing Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
