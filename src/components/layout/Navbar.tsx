import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-primary/15 shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_15px_rgba(59,130,246,0.05)]">
      <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-medium tracking-tighter text-primary font-headline">
          Mohamed Elkhatieb
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline font-medium tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors relative py-1",
                location.pathname === link.path 
                  ? "text-primary" 
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/contact"
            className="hidden sm:block bg-linear-to-r from-primary to-primary-container text-on-primary-container px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95 duration-200"
          >
            Contact Me
          </Link>
          
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-primary/15 px-8 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-medium",
                location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-linear-to-r from-primary to-primary-container text-on-primary-container px-6 py-3 rounded-lg font-medium"
          >
            Contact Me
          </Link>
        </motion.div>
      )}
    </header>
  );
}
