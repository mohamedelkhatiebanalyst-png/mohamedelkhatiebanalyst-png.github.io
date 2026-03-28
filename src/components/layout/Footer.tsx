import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/mohamedelkhatieb-portfolio/visits')
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <footer className="bg-surface-container-low w-full py-12 px-8 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto space-y-6 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="text-lg font-medium text-primary font-headline">
            Mohamed Elkhatieb
          </Link>
          <p className="text-on-surface-variant text-sm mt-2 opacity-60">
            © {new Date().getFullYear()} Mohamed Elkhatieb. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {count !== null && (
            <div className="flex items-center gap-2 text-on-surface-variant text-xs opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block"></span>
              {count.toLocaleString()} visits
            </div>
          )}
          <div className="flex space-x-8 font-body text-sm tracking-wide uppercase">
            <a href="https://www.linkedin.com/in/mohamed-magdy-medical/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
              LinkedIn
            </a>
            <a href="https://github.com/mohamedelkhatiebanalyst-png" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
              GitHub
            </a>
            <a href="mailto:MohamedElkhatieb19@outlook.com" className="text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
