import { CheckCircle, XCircle, AlertTriangle, Globe } from 'lucide-react';

type CellStatus = 'yes' | 'no' | 'partial';

interface CompRow {
  aspect: string;
  india_it: { status: CellStatus; note: string };
  india_dpdp: { status: CellStatus; note: string };
  eu_gdpr: { status: CellStatus; note: string };
  us_ccpa: { status: CellStatus; note: string };
}

const rows: CompRow[] = [
  {
    aspect: 'Year Enacted',
    india_it:   { status: 'yes', note: '2000 (amended 2008)' },
    india_dpdp: { status: 'yes', note: '2023' },
    eu_gdpr:    { status: 'yes', note: '2018 (effective)' },
    us_ccpa:    { status: 'yes', note: '2020 (California)' },
  },
  {
    aspect: 'Right to Access Data',
    india_it:   { status: 'partial', note: 'Limited under SPDI rules' },
    india_dpdp: { status: 'yes', note: 'Explicit right under Sec. 11' },
    eu_gdpr:    { status: 'yes', note: 'Article 15 — full right' },
    us_ccpa:    { status: 'yes', note: 'Right to know what is collected' },
  },
  {
    aspect: 'Right to Erasure',
    india_it:   { status: 'no', note: 'Not specifically covered' },
    india_dpdp: { status: 'yes', note: 'Right to erasure under Sec. 12' },
    eu_gdpr:    { status: 'yes', note: 'Article 17 — right to be forgotten' },
    us_ccpa:    { status: 'yes', note: 'Right to delete personal info' },
  },
  {
    aspect: 'Consent Requirement',
    india_it:   { status: 'partial', note: 'Consent for SPDI only' },
    india_dpdp: { status: 'yes', note: 'Mandatory free & informed consent' },
    eu_gdpr:    { status: 'yes', note: 'Lawful basis incl. consent' },
    us_ccpa:    { status: 'partial', note: 'Opt-out for sale of data only' },
  },
  {
    aspect: 'Data Breach Notification',
    india_it:   { status: 'partial', note: 'CERT-In notification rules (2022)' },
    india_dpdp: { status: 'yes', note: 'Must notify Data Protection Board' },
    eu_gdpr:    { status: 'yes', note: '72-hour notification to DPA' },
    us_ccpa:    { status: 'partial', note: 'State law required, not federal' },
  },
  {
    aspect: 'Penalties',
    india_it:   { status: 'partial', note: 'Up to ₹5 crore / imprisonment' },
    india_dpdp: { status: 'yes', note: 'Up to ₹250 crore per breach' },
    eu_gdpr:    { status: 'yes', note: '€20M or 4% of global revenue' },
    us_ccpa:    { status: 'partial', note: '$7,500 per intentional violation' },
  },
  {
    aspect: 'Dedicated Regulator',
    india_it:   { status: 'partial', note: 'CERT-In + Adjudicating Officers' },
    india_dpdp: { status: 'yes', note: 'Data Protection Board (to be formed)' },
    eu_gdpr:    { status: 'yes', note: 'National Data Protection Authorities' },
    us_ccpa:    { status: 'partial', note: 'California Privacy Protection Agency' },
  },
  {
    aspect: 'Children\'s Data Protection',
    india_it:   { status: 'no', note: 'Not explicitly addressed' },
    india_dpdp: { status: 'yes', note: 'Parental consent for under 18' },
    eu_gdpr:    { status: 'yes', note: 'Article 8 — parental consent under 16' },
    us_ccpa:    { status: 'yes', note: 'COPPA for children under 13' },
  },
  {
    aspect: 'Extraterritorial Scope',
    india_it:   { status: 'partial', note: 'Limited extraterritorial reach' },
    india_dpdp: { status: 'yes', note: 'Applies to entities outside India processing Indian data' },
    eu_gdpr:    { status: 'yes', note: 'Applies to all processing of EU residents\' data' },
    us_ccpa:    { status: 'partial', note: 'California residents\' data only' },
  },
  {
    aspect: 'Right to Data Portability',
    india_it:   { status: 'no', note: 'Not covered' },
    india_dpdp: { status: 'partial', note: 'Partial — to be notified by rules' },
    eu_gdpr:    { status: 'yes', note: 'Article 20 — full portability right' },
    us_ccpa:    { status: 'yes', note: 'Right to receive data in portable format' },
  },
];

function Cell({ status, note }: { status: CellStatus; note: string }) {
  return (
    <td className="py-4 px-4 text-sm">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          {status === 'yes' && <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />}
          {status === 'no' && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
          {status === 'partial' && <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0" />}
          <span className={`font-semibold text-xs ${status === 'yes' ? 'text-emerald-700' : status === 'no' ? 'text-rose-600' : 'text-yellow-700'}`}>
            {status === 'yes' ? 'Yes' : status === 'no' ? 'No' : 'Partial'}
          </span>
        </div>
        <p className="text-xs text-slate-500 leading-snug">{note}</p>
      </div>
    </td>
  );
}

const overviewCards = [
  {
    country: 'India',
    law: 'IT Act, 2000',
    icon: '🇮🇳',
    year: '2000',
    scope: 'Cybercrime, e-commerce, data protection (limited)',
    regulator: 'CERT-In, Adjudicating Officers',
    strength: 'Foundational cyber law',
    weakness: 'Outdated for modern data economy',
    color: 'border-t-4 border-blue-700',
  },
  {
    country: 'India',
    law: 'DPDP Act, 2023',
    icon: '🇮🇳',
    year: '2023',
    scope: 'Personal data protection, consent, rights',
    regulator: ' Data Protection Board of India (upcoming/established)',
    strength: ' Modern, rights-based framework with clear consent rules',
    weakness: ' Implementation rules still evolving',
    color: 'border-t-4 border-yellow-400',
  },
  {
    country: 'European Union',
    law: 'General Data Protection Regulation, 2018',
    icon: '🇪🇺',
    year: '2018',
    scope: 'Comprehensive data protection, privacy by design, strict compliance',
    regulator: ' National Data Protection Authorities (DPAs)',
    strength: ' Global gold standard for privacy laws',
    weakness: 'Complex compliance burden',
    color: 'border-t-4 border-emerald-600',
  },
  {
    country: 'USA (California)',
    law: 'CCPA, 2020',
    icon: '🇺🇸',
    year: '2020',
    scope: 'Consumer privacy, opt-out rights',
    regulator: 'California Privacy Protection Agency',
    strength: 'Strong consumer rights',
    weakness: 'State-level only, no federal law',
    color: 'border-t-4 border-rose-500',
  },
  {
    country: 'China',
    law: ' Personal Information Protection Law',
    icon: '🇨🇳',
    year: '2021',
    scope: 'Personal data processing, strong control on cross-border transfers',
    regulator: 'Cyberspace Administration of China (CAC)',
    strength: 'Strong enforcement and data sovereignty focus',
    weakness: ' High government control and strict restrictions',
    color: 'border-t-4 border-yellow-400',
  },
  {
    country: 'Japan',
    law: 'Act on the Protection of Personal Information',
    icon: '🇯🇵',
    year: '2003 (amended 2020)',
    scope: 'Personal data handling, sensitive data protection, breach reporting',
    regulator: 'Personal Information Protection Commission (PPC)',
    strength: ' Balanced approach with global alignment (EU adequacy)',
    weakness: 'Less strict compared to GDPR in some areas',
    color: 'border-t-4 border-blue-700',
  },
];

export default function GlobalComparison() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900">Global View</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Global Comparison</h1>
          <p className="text-blue-200 text-lg">How India's data privacy laws compare to global frameworks</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-blue-100 text-blue-700">Overview</span>
            <h2 className="text-3xl font-bold text-slate-900">Laws at a Glance</h2>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {overviewCards.map((card) => (
              <div key={card.law} className={`glass-card card-hover ${card.color}`}>
                <div className="text-3xl mb-2">{card.icon}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{card.country}</div>
                <h3 className="font-extrabold text-slate-900 text-base mb-3">{card.law}</h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <div><span className="font-semibold text-slate-700">Year: </span>{card.year}</div>
                  <div><span className="font-semibold text-slate-700">Scope: </span>{card.scope}</div>
                  <div><span className="font-semibold text-slate-700">Regulator: </span>{card.regulator}</div>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-1.5 text-emerald-700">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0" />
                      {card.strength}
                    </div>
                    <div className="flex items-start gap-1.5 text-rose-600 mt-1">
                      <XCircle className="w-3 h-3 mt-0.5 shrink-0" />
                      {card.weakness}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-emerald-100 text-emerald-700">Detailed Comparison</span>
            <h2 className="text-3xl font-bold text-slate-900">Feature-by-Feature Comparison</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="text-left py-4 px-4 text-sm font-bold text-slate-700 bg-slate-50 rounded-tl-2xl w-48">
                    Aspect
                  </th>
                  {[
                    { flag: '🇮🇳', label: 'IT Act, 2000', sub: 'India' },
                    { flag: '🇮🇳', label: 'DPDP Act, 2023', sub: 'India' },
                    { flag: '🇪🇺', label: 'GDPR, 2018', sub: 'European Union' },
                    { flag: '🇺🇸', label: 'CCPA, 2020', sub: 'California, USA' },
                  ].map((h) => (
                    <th key={h.label} className="text-left py-4 px-4 bg-slate-50 border-l border-slate-100">
                      <div className="text-lg">{h.flag}</div>
                      <div className="text-sm font-bold text-slate-800">{h.label}</div>
                      <div className="text-xs text-slate-400">{h.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.aspect} className={`border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="py-4 px-4 font-semibold text-sm text-slate-800 align-top">{row.aspect}</td>
                    <Cell status={row.india_it.status} note={row.india_it.note} />
                    <Cell status={row.india_dpdp.status} note={row.india_dpdp.note} />
                    <Cell status={row.eu_gdpr.status} note={row.eu_gdpr.note} />
                    <Cell status={row.us_ccpa.status} note={row.us_ccpa.note} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-5 mt-5 justify-center text-sm text-slate-600">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Fully Covered</div>
            <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500" /> Partially Covered</div>
            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-rose-400" /> Not Covered</div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card border-l-4 border-yellow-400">
            <Globe className="w-8 h-8 text-yellow-500 mb-3" />
            <h3 className="font-bold text-slate-900 text-xl mb-2">Key Takeaway</h3>
            <p className="text-slate-600 leading-relaxed">
              India's DPDP Act 2023 is a significant step forward and broadly aligns with global standards like the GDPR. However, its implementation rules are still pending, and the Data Protection Board is yet to be constituted. The key challenge ahead is enforcement, awareness, and ensuring compliance among both corporations and citizens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
