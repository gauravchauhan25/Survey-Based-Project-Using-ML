import { TrendingUp, AlertTriangle, CheckCircle, Users, BookOpen, Lock, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const keyFindings = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    stat: '78%',
    title: 'Unaware of DPDP Act, 2023',
    desc: "More than three-quarters of surveyed students had no prior knowledge of India's most recent data protection law, enacted in August 2023.",
    severity: 'high',
    color: 'border-rose-500 bg-rose-50',
    iconColor: 'bg-rose-500 text-white',
    tag: 'Critical Finding',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    stat: '62%',
    title: 'Unaware of IT Act, 2000',
    desc: "Despite being 23 years old, the IT Act remains largely unknown among college students — indicating a systemic gap in digital literacy education.",
    severity: 'high',
    color: 'border-orange-400 bg-orange-50',
    iconColor: 'bg-orange-500 text-white',
    tag: 'Key Finding',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    stat: '51%',
    title: "Never Read Privacy Policies",
    desc: 'Over half of respondents admitted they never read privacy policies before using apps or websites — exposing themselves to potential data misuse.',
    severity: 'high',
    color: 'border-amber-400 bg-amber-50',
    iconColor: 'bg-amber-500 text-white',
    tag: 'Behavioural Gap',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    stat: '45%',
    title: 'Social Media as Primary Source',
    desc: "Social media platforms were cited as the primary source of data privacy awareness — more than colleges and universities combined.",
    severity: 'moderate',
    color: 'border-blue-500 bg-blue-50',
    iconColor: 'bg-blue-700 text-white',
    tag: 'Interesting Pattern',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: <Users className="w-6 h-6" />,
    stat: '72%',
    title: 'Shared Data Without Consent Review',
    desc: "Nearly three-fourths of students have shared personal information online without reviewing privacy terms — a major security risk.",
    severity: 'high',
    color: 'border-rose-400 bg-rose-50',
    iconColor: 'bg-rose-600 text-white',
    tag: 'Critical Finding',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    stat: '3.2/5',
    title: 'Average Importance Rating',
    desc: "Students rated data privacy as moderately important (avg 3.2/5) — suggesting awareness campaigns could shift attitudes significantly.",
    severity: 'moderate',
    color: 'border-emerald-500 bg-emerald-50',
    iconColor: 'bg-emerald-600 text-white',
    tag: 'Attitude Insight',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
];

const recommendations = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Introduce Data Privacy in Curriculum',
    desc: 'Universities should include a mandatory module on Indian data privacy laws in all undergraduate programmes.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Government Social Media Campaigns',
    desc: 'Since students learn primarily via social media, targeted campaigns on Instagram, YouTube and X can be highly effective.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Simplify Legal Language',
    desc: 'MeitY and CERT-In should publish simplified, youth-friendly guides to the IT Act and DPDP Act in regional languages.',
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: 'College-Level Awareness Workshops',
    desc: 'NSS, NCC, and student bodies should organize hands-on workshops on safe digital practices and legal rights.',
  },
];

export default function Analysis() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900">Research</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Analysis & Insights</h1>
          <p className="text-blue-200 text-lg">Key findings from the survey on data privacy awareness among college students</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-badge bg-blue-100 text-blue-700">Key Findings</span>
            <h2 className="text-3xl font-bold text-slate-900">What the Data Reveals</h2>
            <p className="text-slate-500 mt-3">Survey-backed insights from 500+ college students across 18 Indian states</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFindings.map((finding) => (
              <div key={finding.title} className={`rounded-2xl border-2 p-6 card-hover flex flex-col ${finding.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${finding.iconColor}`}>
                    {finding.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${finding.tagColor}`}>
                    {finding.tag}
                  </span>
                </div>
                <div className="text-5xl font-extrabold text-slate-900 mb-2">{finding.stat}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{finding.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{finding.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-emerald-100 text-emerald-700">Methodology</span>
            <h2 className="text-3xl font-bold text-slate-900">Research Methodology</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '524', label: 'Total Responses', sub: 'Valid survey entries' },
              { num: '18', label: 'States', sub: 'Geographic coverage' },
              { num: '15', label: 'Questions', sub: 'Multi-section questionnaire' },
              { num: '2', label: 'Acts Studied', sub: 'IT Act & DPDP Act' },
            ].map((s) => (
              <div key={s.label} className="glass-card text-center card-hover">
                <div className="text-4xl font-extrabold text-blue-700 mb-1">{s.num}</div>
                <div className="font-bold text-slate-800 text-sm">{s.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Research Design</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <div className="font-semibold text-slate-800 mb-2">Type of Research</div>
                <p>Descriptive, survey-based research using a structured questionnaire distributed to college students across India.</p>
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-2">Sampling Method</div>
                <p>Convenience and snowball sampling via online platforms including Google Forms and WhatsApp college groups.</p>
              </div>
              <div>
                <div className="font-semibold text-slate-800 mb-2">Analysis Tools</div>
                <p>Data analyzed using Python (Pandas, Matplotlib), Excel, and visualized through Power BI dashboards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-yellow-100 text-yellow-700">Action Points</span>
            <h2 className="text-3xl font-bold text-slate-900">Recommendations</h2>
            <p className="text-slate-500 mt-3">Evidence-based suggestions to improve data privacy awareness</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((rec, i) => (
              <div key={i} className="glass-card border-l-4 border-blue-700 card-hover flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 mt-1">
                  {rec.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{rec.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{rec.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 hero-bg">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Want to See the Full Dataset?</h2>
          <p className="text-blue-100 mb-6 text-sm">Explore the interactive dashboard for more detailed charts and filters.</p>
          <Link to="/dashboard" className="btn-accent">
            Open Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
