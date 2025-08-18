import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-4">
              Bay Area Fencing Club
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Excellence in fencing through teamwork, sportsmanship, and integrity. 
              Join us for fencing programs in Los Gatos and Pleasanton.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">About</a></li>
              <li><a href="#values" className="text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">Values</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">Locations</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200">Programs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@bayareafencing.club</li>
              <li>📞 (408) 555-0123</li>
              <li>📍 Bay Area, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Bay Area Fencing Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
