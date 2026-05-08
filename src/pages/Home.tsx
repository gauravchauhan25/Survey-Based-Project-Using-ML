import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Lock,
  FileText,
  AlertTriangle,
  Users,
  BookOpen,
  TrendingUp,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe,
  Eye,
} from "lucide-react";

const didYouKnowFacts = [
  {
    icon: <Users className="w-6 h-6" />,
    stat: "87%",
    text: "of Indian college students share personal data online without reading privacy policies",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-700 text-white",
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    stat: "61%",
    text: "of students surveyed had no awareness of the Digital Personal Data Protection Act, 2023",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    iconBg: "bg-yellow-400 text-slate-900",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    stat: "₹250 Cr",
    text: "maximum penalty under DPDP Act for significant data breaches by data fiduciaries",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-600 text-white",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    stat: "23 yrs",
    text: "the IT Act 2000 predates today's digital era — India's first comprehensive cyber law",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "bg-rose-600 text-white",
  },
];

const actCards = [
  {
    icon: <FileText className="w-7 h-7" />,
    tag: "Legacy Law",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Information Technology Act, 2000",
    desc: "India's first major legislation governing electronic transactions, cybercrime, and digital infrastructure. Amended significantly in 2008 to include data protection provisions.",
    highlights: [
      "Section 43 — Data protection",
      "Section 66 — Cybercrime",
      "Section 72 — Privacy breach",
    ],
    link: "/know-the-acts",
    accent: "border-t-4 border-blue-700",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    tag: "New Law 2023",
    tagColor: "bg-yellow-100 text-yellow-800",
    title: "Digital Personal Data Protection Act, 2023",
    desc: "India's landmark personal data protection law passed in August 2023. Establishes rights of data principals and obligations of data fiduciaries, aligned with global standards.",
    highlights: [
      "Consent-based data processing",
      "Right to erasure & correction",
      "Penalties up to ₹250 crore",
    ],
    link: "/know-the-acts",
    accent: "border-t-4 border-yellow-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 border border-blue-400/10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              How Well Do India's Students Know Their{" "}
              <span className="text-yellow-400">Digital Rights?</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              A comprehensive survey exploring awareness of data privacy laws —
              the <strong className="text-white">IT Act, 2000</strong> and the{" "}
              <strong className="text-white">DPDP Act, 2023</strong> — among
              college students across India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/questionnaire"
                className="btn-accent text-base px-8 py-4"
              >
                Form
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/analysis"
                className="btn-outline-white text-base px-8 py-4"
              >
                Explore Insights
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { num: "150", label: "Responses" },
                { num: "10+", label: "Key Insights" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {s.num}
                  </div>
                  <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-blue-200 animate-bounce">
          <span className="text-xs">Scroll down</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge bg-blue-100 text-blue-700">
              The Laws
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              India's Data Privacy Framework
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-lg">
              Two landmark laws shaping how personal data is collected, stored,
              and used in India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {actCards.map((card) => (
              <div
                key={card.title}
                className={`glass-card card-hover ${card.accent} flex flex-col`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                    {card.icon}
                  </div>
                  <div>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${card.tagColor}`}
                    >
                      {card.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {card.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {card.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    to={card.link}
                    className="btn-primary text-sm px-5 py-2.5"
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Understand the Laws",
                desc: "Deep dive into the IT Act 2000 and DPDP Act 2023 in simple, student-friendly language.",
                link: "/know-the-acts",
                cta: "Explore Laws",
                bg: "bg-blue-700",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "View Survey Dashboard",
                desc: "See live charts and visualizations from collected survey data across India.",
                link: "/dashboard",
                cta: "See Dashboard",
                bg: "bg-slate-800",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Comparison",
                desc: "How does India's DPDP Act compare with GDPR, CCPA and other global frameworks?",
                link: "/global-comparison",
                cta: "Compare Now",
                bg: "bg-emerald-700",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group glass-card card-hover flex flex-col items-start"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>
                <div className="mt-auto flex items-center gap-1 text-blue-700 font-semibold text-sm group-hover:gap-2 transition-all">
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 hero-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Voice Matters
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Help us understand the state of data privacy awareness in India. The
            survey takes under 5 minutes and contributes to real research.
          </p>
          <Link to="/questionnaire" className="btn-accent text-base px-10 py-4">
            Start Survey Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
