import { ExternalLink, Shield, Wifi, AlertTriangle, BookOpen, Globe, CheckCircle } from 'lucide-react';

const timelineItems = [
  {
    year: '2012',
    name: 'National Cyber Security Policy',
    ministry: 'Ministry of Electronics & IT (MeitY)',
    desc: 'India\'s first comprehensive cyber security framework — aimed at creating a secure and resilient cyberspace for citizens, businesses, and government.',
    impact: ['CERT-In strengthened', 'Cyber security task force formed', 'R&D in cyber security promoted'],
    icon: <Shield className="w-5 h-5" />,
    color: 'border-blue-700',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    year: '2018',
    name: 'Cyber Surakshit Bharat Initiative',
    ministry: 'Ministry of Electronics & IT (MeitY)',
    desc: 'A public-private partnership to build a cyber-aware and cyber-secure India. Training and capacity building for IT staff and awareness for government employees.',
    impact: ['500+ Chief Information Security Officers trained', 'Cyber hygiene workshops', 'CISOs across 90+ departments'],
    icon: <Shield className="w-5 h-5" />,
    color: 'border-emerald-600',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    year: '2019',
    name: 'Cyber Dost — Home Ministry Initiative',
    ministry: 'Ministry of Home Affairs (MHA)',
    desc: 'A social media handle and awareness campaign run by MHA to spread awareness about cyber crimes, digital safety, and data privacy among the general public.',
    impact: ['Active on Twitter/X, Instagram', 'Daily safety tips for citizens', 'Reporting mechanism for cyber crimes'],
    icon: <Wifi className="w-5 h-5" />,
    color: 'border-yellow-400',
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    year: '2020',
    name: 'National Cyber Crime Reporting Portal',
    ministry: 'Ministry of Home Affairs (MHA)',
    desc: 'Online portal (cybercrime.gov.in) for reporting cyber crimes including data theft, identity fraud, financial fraud, and online harassment.',
    impact: ['24x7 reporting available', '9 lakh+ complaints registered', 'Direct helpline 1930'],
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'border-rose-500',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    year: '2021',
    name: 'Data Security Council of India (DSCI)',
    ministry: 'Industry Body under NASSCOM',
    desc: 'DSCI runs the National Cyber Security Database, creates best practice frameworks, and conducts awareness programs for students, startups, and enterprises.',
    impact: ['Privacy Maturity Model published', 'School & college awareness programs', 'Annual DSCI Security Summit'],
    icon: <BookOpen className="w-5 h-5" />,
    color: 'border-slate-500',
    tagColor: 'bg-slate-100 text-slate-700',
  },
  {
    year: '2023',
    name: 'Digital Personal Data Protection Act enacted',
    ministry: 'Ministry of Electronics & IT (MeitY)',
    desc: 'India passes its landmark data protection law, giving citizens the right to access, correct, and erase their personal data held by digital platforms.',
    impact: ['Data Protection Board to be set up', 'Penalties up to ₹250 crore', 'Rights for 900M+ internet users'],
    icon: <Shield className="w-5 h-5" />,
    color: 'border-yellow-400',
    tagColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    year: '2024',
    name: 'Cyber Safety Awareness Weeks',
    ministry: 'CERT-In & MeitY',
    desc: 'Annual campaigns conducting nationwide awareness weeks in colleges, targeting students on topics like phishing, data leaks, and safe browsing practices.',
    impact: ['600+ colleges participated', 'Focus on youth & students', 'Regional language content published'],
    icon: <Globe className="w-5 h-5" />,
    color: 'border-blue-500',
    tagColor: 'bg-blue-100 text-blue-700',
  },
];

const activeInitiatives = [
  {
    title: 'Cyber Dost',
    url: 'https://cyberdost.in',
    desc: 'MHA\'s social media awareness handle — follow for daily cyber safety tips.',
    icon: <Wifi className="w-5 h-5" />,
    color: 'bg-yellow-50 border-yellow-200',
    iconColor: 'bg-yellow-400 text-slate-900',
  },
  {
    title: 'Cyber Crime Portal',
    url: 'https://cybercrime.gov.in',
    desc: 'Report cyber crimes including data theft, identity fraud, and online harassment.',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: 'bg-rose-50 border-rose-200',
    iconColor: 'bg-rose-500 text-white',
  },
  {
    title: 'CERT-In',
    url: 'https://cert-in.org.in',
    desc: "India's national cyber emergency response team — advisories and incident reporting.",
    icon: <Shield className="w-5 h-5" />,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'bg-blue-700 text-white',
  },
  {
    title: 'DSCI',
    url: 'https://dsci.in',
    desc: 'Data Security Council of India — frameworks, research and student programs.',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'bg-emerald-600 text-white',
  },
];

export default function Campaigns() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900">Government</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Government Campaigns</h1>
          <p className="text-blue-200 text-lg">Initiatives taken by India to build data privacy awareness</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge bg-blue-100 text-blue-700">Timeline</span>
            <h2 className="text-3xl font-bold text-slate-900">Key Milestones in India's Data Privacy Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-700 via-blue-300 to-yellow-400" />

            <div className="space-y-8 pl-16">
              {timelineItems.map((item, i) => (
                <div key={i} className="relative animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="absolute -left-14 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-700 flex items-center justify-center shadow-md">
                      <span className="text-xs font-extrabold text-blue-700">{item.year.slice(-2)}</span>
                    </div>
                  </div>

                  <div className={`glass-card card-hover border-l-4 ${item.color}`}>
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${item.tagColor}`}>
                        {item.year}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-2">{item.ministry}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                    <div className="border-t border-slate-100 pt-3">
                      <p className="text-xs font-semibold text-slate-500 mb-2">Key Impact</p>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {item.impact.map((imp) => (
                          <li key={imp} className="flex items-center gap-1.5 text-xs text-slate-600">
                            <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-yellow-100 text-yellow-700">Active Resources</span>
            <h2 className="text-3xl font-bold text-slate-900">Active Government Initiatives</h2>
            <p className="text-slate-500 mt-3">Currently running programs you can access right now</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activeInitiatives.map((init) => (
              <a
                key={init.title}
                href={init.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-2xl border p-5 card-hover flex flex-col ${init.color}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${init.iconColor}`}>
                  {init.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{init.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{init.desc}</p>
                <div className="mt-auto flex items-center gap-1 text-blue-600 text-xs font-semibold">
                  Visit <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
