"use client";
import { useState } from "react";
import { StartButton } from "./StartButton";
import { contentConfig } from "./content-config";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function NavLink({ href, children, onClick, className = "" }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`garamond text-lg font-medium tracking-wide transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

function Logo() {
  return (
    <a href="#" className="flex-shrink-0">
      <img
        src={contentConfig.assets.logo}
        alt={`${contentConfig.brand.name} Logo`}
        className="h-8 w-auto md:h-10"
        width="80"
      />
    </a>
  );
}

function DesktopNavigationLinks() {
  return (
    <div className="hidden items-center space-x-6 md:flex">
      {contentConfig.navigation.links.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          className="px-1 py-2 text-white hover:text-green-600"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

interface MobileNavigationLinksProps {
  onLinkClick: () => void;
}

function MobileNavigationLinks({ onLinkClick }: MobileNavigationLinksProps) {
  return (
    <div className="space-y-1">
      {contentConfig.navigation.links.map((link, index) => (
        <NavLink
          key={index}
          href={link.href}
          onClick={onLinkClick}
          className="block border-b border-slate-200 px-4 py-3 text-lg text-slate-800 last:border-b-0 hover:bg-slate-100"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className="border-2 border-gray-200 p-2 text-gray-200 transition-colors duration-200 hover:bg-gray-800 hover:text-white md:hidden"
      onClick={onClick}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
}

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-[90vw] max-w-sm border-l-2 border-slate-800 bg-white">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b-2 border-slate-800 p-6">
            <h2 className="garamond text-xl font-bold text-slate-800">Menu</h2>
            <button
              onClick={onClose}
              className="border-2 border-slate-800 p-2 text-slate-800 transition-colors duration-200 hover:bg-slate-800 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-6">
            <MobileNavigationLinks onLinkClick={onClose} />
          </div>

          <div className="border-t-2 border-slate-800 p-6">
            <StartButton slim />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full bg-transparent py-4">
      <div className="section-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Logo />
            <DesktopNavigationLinks />
          </div>

          <div className="flex items-center">
            <StartButton slim />
            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </nav>
  );
}
