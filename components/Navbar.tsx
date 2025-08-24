'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const buttonRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const mainNavigationItems = [
    { href: '/programs', label: 'Programs' },
    { href: '/schedules', label: 'Schedules' },
    { href: '/competitions', label: 'Competitions' }
  ]

  const dropdownItems = [
    { href: 'https://bayareafencing.pike13.com/accounts/sign_in', label: 'Account', external: true },
    { href: '/careers', label: 'Careers' },
    { href: '/coaches', label: 'Coaches' },
    { href: '/resources', label: "Parent's Resources" }
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <header className="backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-white/20 dark:border-gray-800/50 shadow-lg sticky top-0 z-50 transition-all duration-300 w-full">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-left">
              <Image
                src="/images/general/logo.png"
                alt="Bay Area Fencing Club Logo"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation - Absolutely Centered */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center">
              {mainNavigationItems.map((item, index) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 text-base font-medium px-4 py-2"
                >
                  {item.label}
                </a>
              ))}
              
              {/* More Dropdown Button */}
              <div className="relative" ref={buttonRef}>
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center space-x-1 text-base font-medium px-4 py-2 transition-colors duration-200 ${
                    isDropdownOpen 
                      ? 'text-primary dark:text-primary-light' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light'
                  }`}
                >
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <a 
              href="https://calendly.com/lisaposthumus-pfn_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary/90 hover:bg-primary text-white px-6 py-2 font-semibold transition-colors duration-200 backdrop-blur-sm shadow-lg"
            >
              Free Trial Class
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Width Dropdown Background - Same Height as Navbar */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-md bg-white/70 dark:bg-black/70 border-t border-white/20 dark:border-gray-800/50 shadow-lg z-40 h-16" ref={dropdownRef}>
          <div className="w-full h-full px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-center h-full">
              {dropdownItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 text-base font-medium px-4 py-2"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/80 dark:bg-black/80 border-t border-white/20 dark:border-gray-800/50">
            {mainNavigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Dropdown Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
              <div className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                More Options
              </div>
              {dropdownItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
