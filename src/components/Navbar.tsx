import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Know the Acts', path: '/know-the-acts' },
  { label: 'Survey', path: '/questionnaire' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Analysis', path: '/analysis' },
  { label: 'Campaigns', path: '/campaigns' },
  { label: 'Global View', path: '/global-comparison' },
  { label: 'Quick Access', path: '/quick' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className={`p-1.5 rounded-lg transition-colors ${scrolled || !isHome ? 'bg-blue-700' : 'bg-white/20'}`}>
              <Shield className={`w-5 h-5 ${scrolled || !isHome ? 'text-white' : 'text-white'}`} />
            </div>
            <div className="leading-tight">
              <span className={`font-bold text-sm block ${scrolled || !isHome ? 'text-blue-900' : 'text-white'}`}>
                DataPrivacy<span className="text-yellow-400">India</span>
              </span>
              <span className={`text-xs ${scrolled || !isHome ? 'text-slate-400' : 'text-blue-200'}`}>
                Awareness Project
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? scrolled || !isHome
                        ? 'bg-blue-700 text-white'
                        : 'bg-white/20 text-white'
                      : scrolled || !isHome
                      ? 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                      : 'text-blue-100 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/questionnaire"
              className="ml-3 btn-accent text-sm px-4 py-2 rounded-lg"
            >
              Take Survey
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/15'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? 'bg-blue-700 text-white'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/questionnaire"
              className="block w-full text-center btn-accent text-sm mt-2"
            >
              Take Survey
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
