import { FileText, Shield, AlertTriangle, CheckCircle, Lock, User, Database, Gavel, BookOpen, ChevronRight, ExternalLink } from 'lucide-react';

const itActSections = [
  {
    section: 'Section 43',
    title: 'Compensation for failure to protect data',
    desc: 'Provides civil remedies to persons whose data is accessed, downloaded, copied, or damaged without authorization. Compensation may be directed by the Adjudicating Officer.',
  },
  {
    section: 'Section 66',
    title: 'Computer-related offences',
    desc: 'Criminalizes unauthorized access, data theft, introduction of viruses, and damage to computer systems. Carries imprisonment up to 3 years and/or a fine.',
  },
  {
    section: 'Section 67',
    title: 'Punishment for obscene material',
    desc: 'Prohibits publishing or transmitting obscene material in electronic form. This was a pioneering provision for regulating online content.',
  },
  {
    section: 'Section 72',
    title: 'Breach of confidentiality and privacy',
    desc: 'Any person who has secured access to electronic records or information and discloses them without consent is liable with up to 2 years imprisonment or ₹1 lakh fine.',
  },
  {
    section: 'Section 72A',
    title: 'Punishment for disclosure of information',
    desc: 'Covers disclosure of information in breach of a lawful contract, with imprisonment up to 3 years or fine up to ₹5 lakh.',
  },
  {
    section: 'Section 79',
    title: 'Exemption of intermediaries',
    desc: 'Provides safe harbour protection to intermediaries who do not initiate, select the receiver, or modify the transmission. Critical for platforms and ISPs.',
  },
];

const dpdpHighlights = [
  {
    icon: <User className="w-5 h-5" />,
    title: 'Data Principal Rights',
    points: [
      'Right to access information about personal data',
      'Right to correct or erase personal data',
      'Right to nominate a person for data after death',
      'Right to grieve against data fiduciary',
    ],
    color: 'border-l-4 border-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Data Fiduciary Obligations',
    points: [
      'Obtain free, specific, and informed consent',
      'Ensure accuracy and completeness of data',
      'Implement security safeguards',
      'Notify Data Protection Board of breaches',
    ],
    color: 'border-l-4 border-yellow-400',
    bg: 'bg-yellow-50',
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Consent Framework',
    points: [
      'Consent must be freely given, specific, informed',
      'Can be withdrawn at any time',
      'Clear, plain language notice required',
      'Parental consent for children under 18',
    ],
    color: 'border-l-4 border-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: <Gavel className="w-5 h-5" />,
    title: 'Penalties & Enforcement',
    points: [
      'Up to ₹250 crore for major breaches',
      'Up to ₹200 crore for children\'s data violations',
      'Data Protection Board adjudicates complaints',
      'Appeals to High Court available',
    ],
    color: 'border-l-4 border-rose-500',
    bg: 'bg-rose-50',
  },
];

const timeline = [
  { year: '2000', event: 'IT Act enacted — India\'s first cyber law', law: 'IT Act' },
  { year: '2008', event: 'IT (Amendment) Act — cybercrime provisions strengthened', law: 'IT Act' },
  { year: '2011', event: 'IT (Reasonable Security Practices) Rules notified', law: 'IT Act' },
  { year: '2017', event: 'Puttaswamy judgment — Right to Privacy declared fundamental', law: 'Milestone' },
  { year: '2018', event: 'Justice Srikrishna Committee Report on data protection', law: 'DPDP' },
  { year: '2023', event: 'Digital Personal Data Protection Act passed by Parliament', law: 'DPDP' },
];

export default function KnowTheActs() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900 mb-3">Legal Framework</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Know the Acts</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Understand India's two most important data privacy laws in simple, student-friendly language.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-2/5">
              <span className="section-badge bg-blue-100 text-blue-700">Est. 2000</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Information Technology Act, 2000
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                The IT Act was enacted on June 9, 2000 to provide a legal framework for electronic governance and commerce in India. It was India's first step toward regulating the digital world — covering electronic contracts, digital signatures, cybercrime, and data protection.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                A landmark amendment in <strong>2008</strong> added provisions addressing cybercrime, data theft, and privacy breaches, responding to the growing digital economy and emerging cyber threats.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: 'Enacted', val: 'June 9, 2000' },
                  { label: 'Amended', val: '2008, 2011' },
                  { label: 'Chapters', val: '13 Chapters' },
                  { label: 'Schedules', val: '4 Schedules' },
                ].map((item) => (
                  <div key={item.label} className="bg-blue-50 rounded-xl p-4">
                    <div className="text-xs text-blue-500 font-semibold uppercase">{item.label}</div>
                    <div className="text-sm font-bold text-blue-900 mt-1">{item.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-3/5">
              <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-700" />
                Key Sections Related to Data Privacy
              </h3>
              <div className="space-y-4">
                {itActSections.map((s) => (
                  <div key={s.section} className="glass-card border-l-4 border-blue-700 !py-4 !px-5 card-hover">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                        {s.section}
                      </span>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">{s.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge bg-yellow-100 text-yellow-800">New Legislation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Digital Personal Data Protection Act, 2023
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Passed on August 11, 2023, this is India's most comprehensive data protection law — establishing a framework aligned with global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {dpdpHighlights.map((item) => (
              <div key={item.title} className={`rounded-2xl p-6 ${item.bg} ${item.color} card-hover`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-xl shadow-sm text-slate-700">{item.icon}</div>
                  <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">What is a Data Fiduciary?</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Under the DPDP Act, any entity (person, company, government body) that determines the <strong>purpose and means of processing personal data</strong> is a <strong>Data Fiduciary</strong>. Examples include social media platforms, e-commerce companies, banks, and hospitals.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { term: 'Data Principal', def: 'The individual whose personal data is being processed — i.e., you!' },
                { term: 'Data Fiduciary', def: 'Entity that decides why and how your data is processed.' },
                { term: 'Consent Manager', def: 'A registered entity that helps you manage your consent across fiduciaries.' },
              ].map((item) => (
                <div key={item.term} className="bg-slate-50 rounded-xl p-4">
                  <div className="font-bold text-blue-700 text-sm mb-1">{item.term}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-blue-100 text-blue-700">History</span>
            <h2 className="text-3xl font-bold text-slate-900">Legislative Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />
            <div className="space-y-6 pl-16">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm
                    bg-blue-700 text-white">
                    {i + 1}
                  </div>
                  <div className={`glass-card card-hover !py-4 border-l-4 ${item.law === 'DPDP' ? 'border-yellow-400' : item.law === 'Milestone' ? 'border-emerald-500' : 'border-blue-700'}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl font-extrabold text-slate-900">{item.year}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.law === 'DPDP' ? 'bg-yellow-100 text-yellow-700' : item.law === 'Milestone' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                        {item.law}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
