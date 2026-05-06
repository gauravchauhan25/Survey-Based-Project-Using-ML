import { Link } from 'react-router-dom';
import { Shield, Mail, ExternalLink, Github, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Know the Acts', path: '/know-the-acts' },
  { label: 'Take Survey', path: '/questionnaire' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Analysis & Insights', path: '/analysis' },
  { label: 'Govt. Campaigns', path: '/campaigns' },
  { label: 'Global Comparison', path: '/global-comparison' },
  { label: 'About Us', path: '/about' },
];

const legalLinks = [
  { label: 'IT Act, 2000 — MeitY', path: 'https://www.meity.gov.in/content/information-technology-act' },
  { label: 'DPDP Act, 2023 — MeitY', path: 'https://www.meity.gov.in/content/digital-personal-data-protection-act-2023' },
  { label: 'GDPR — EU', path: 'https://gdpr.eu/' },
  { label: 'Cyber Dost — MHA', path: 'https://cyberdost.in/' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-700">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-sm">DataPrivacy<span className="text-yellow-400">India</span></span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              A research project exploring awareness of data privacy laws among college students across India, focusing on the IT Act 2000 and DPDP Act 2023.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>dataprivacy.india@research.in</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Official Resources</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Participate</h4>
            <p className="text-sm text-slate-400 mb-4">Help us gather insights by completing our survey. It takes less than 5 minutes!</p>
            <Link to="/questionnaire" className="btn-accent text-sm px-5 py-2.5">
              Form
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © 2024 DataPrivacy India Research Project. Academic Use Only.
          </p>
          <p className="text-xs text-slate-500">
            Built as part of a Data Science project — BCA / B.Tech / BBA programme
          </p>
        </div>
      </div>
    </footer>
  );
}
