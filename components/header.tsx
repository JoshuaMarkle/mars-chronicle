"use client";

import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { NewspaperIcon, MenuIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-200",
      isScrolled ? "bg-paper/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center space-x-2">
            <NewspaperIcon className="w-8 h-8 text-accent-red" />
            <div>
              <h1 className="text-2xl font-bold font-playfair tracking-tight">
                THE MARS CHRONICLE
              </h1>
              <p className="text-xs uppercase tracking-widest text-black/70 dark:text-white/70">
                Earth Edition • {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6 font-medium">
                <li className="hover:text-accent-red transition-colors">
                  <a href="#exploration">Exploration</a>
                </li>
                <li className="hover:text-accent-red transition-colors">
                  <a href="#humans">Human Factors</a>
                </li>
                <li className="hover:text-accent-red transition-colors">
                  <a href="#robots">Robotics</a>
                </li>
                <li className="hover:text-accent-red transition-colors">
                  <a href="#future">Future</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="ml-4 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6 text-accent-red" />
              ) : (
                <MenuIcon className="w-6 h-6 text-accent-red" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-b border-black/10 dark:border-white/10">
            <ul className="space-y-3 font-medium">
              <li className="hover:text-accent-red transition-colors">
                <a href="#exploration" onClick={toggleMenu}>Exploration</a>
              </li>
              <li className="hover:text-accent-red transition-colors">
                <a href="#humans" onClick={toggleMenu}>Human Factors</a>
              </li>
              <li className="hover:text-accent-red transition-colors">
                <a href="#robots" onClick={toggleMenu}>Robotics</a>
              </li>
              <li className="hover:text-accent-red transition-colors">
                <a href="#future" onClick={toggleMenu}>Future</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
