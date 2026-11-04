'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'השירותים', href: '#services' },
  { label: 'איך זה עובד', href: '#how-it-works' },
  { label: 'למה פאזל', href: '#why-puzzle' },
  { label: 'יצירת קשר', href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-5 h-[70px] flex items-center justify-between gap-6"
        aria-label="ניווט ראשי"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 flex-shrink-0 group focus-visible:rounded"
          aria-label="פאזל – דף הבית"
          onClick={closeMenu}
        >
          <Logo size={34} />
          <span className="text-xl font-frank font-medium text-text-primary leading-none">
            פאזל
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors flex-shrink-0"
        >
          לתיאום שיחת היכרות
        </a>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            יצירת קשר
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            className="p-2 rounded-md text-text-secondary hover:text-text-primary transition-colors"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-canvas/98 backdrop-blur-sm border-t border-border px-5 pb-5"
        >
          <ul className="flex flex-col gap-1 pt-3 list-none" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-3 text-base text-text-secondary hover:text-text-primary transition-colors rounded-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 w-full flex justify-center items-center px-4 py-3 rounded-md bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            לתיאום שיחת היכרות
          </a>
        </div>
      )}
    </header>
  )
}
