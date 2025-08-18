import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    main: [
      { name: 'Home', href: '#home' },
      { name: 'Programs', href: '#programs' },
      { name: 'Schedules', href: '#schedules' },
      { name: 'Competitions', href: '#competitions' },
      { name: 'Account', href: '#account' },
      { name: 'Learn More', href: '#learn-more' }
    ],
    resources: [
      { name: 'Gallery', href: '#gallery' },
      { name: 'Coaches', href: '#coaches' },
      { name: "Parents' Resources", href: '#parents-resources' },
      { name: 'Careers', href: '#careers' }
    ],
    contact: [
      { name: 'Los Gatos: (408) 384-8408', href: 'tel:4083848408' },
      { name: 'Pleasanton: (925) 236-0280', href: 'tel:9252360280' }
    ]
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-200">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🤺</span>
              </div>
              <span className="text-xl font-bold text-white">Bay Area Fencing Club</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Excellence in fencing through teamwork, sportsmanship, and integrity. 
              Join us for fencing programs in Los Gatos and Pleasanton.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2">
                {footerLinks.contact.map((contact) => (
                  <li key={contact.name}>
                    <a
                      href={contact.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {contact.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Free Trial Class</h3>
              <p className="text-gray-300 mb-4">
                Ready to start your fencing journey? Book your free trial class today!
              </p>
              <a href="#free-trial" className="btn-primary">
                Book Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            ©2021-2024 Bay Area Fencing Club All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
