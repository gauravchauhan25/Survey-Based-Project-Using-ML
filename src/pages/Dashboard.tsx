import { BarChart2, PieChart, TrendingUp, Users, Globe, BookOpen } from 'lucide-react';

function BarChart({ data, colors }: { data: { label: string; value: number }[]; colors: string[] }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={item.label}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-600 font-medium">{item.label}</span>
            <span className="text-xs font-bold text-slate-800">{item.value}%</span>
          </div>
          <div className="h-7 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${colors[i % colors.length]} transition-all duration-700`}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ segments }: { segments: { label: string; value: number; color: string }[] }) {
  const total = segments.reduce((s, d) => s + d.value, 0);
  let offset = 0;
  const r = 60;
  const circ = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 160 160" className="w-36 h-36">
        {segments.map((seg) => {
          const pct = seg.value / total;
          const dash = pct * circ;
          const gap = circ - dash;
          const rotDeg = offset * 360;
          offset += pct;
          return (
            <circle
              key={seg.label}
              cx="80" cy="80" r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="20"
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={-((offset - pct) * circ)}
              transform="rotate(-90 80 80)"
              strokeLinecap="butt"
            />
          );
        })}
        <circle cx="80" cy="80" r="50" fill="white" />
        <text x="80" y="84" textAnchor="middle" className="text-xs font-bold" fill="#1e293b" style={{ fontSize: 13, fontWeight: 700 }}>
          {total}
        </text>
        <text x="80" y="98" textAnchor="middle" fill="#94a3b8" style={{ fontSize: 9 }}>
          responses
        </text>
      </svg>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-1.5 text-xs text-slate-600">
            <div className="w-3 h-3 rounded-full" style={{ background: seg.color }} />
            {seg.label} ({Math.round((seg.value / total) * 100)}%)
          </div>
        ))}
      </div>
    </div>
  );
}

const charts = [
  {
    id: 1,
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Awareness of IT Act, 2000',
    subtitle: 'Have you heard of the IT Act?',
    type: 'donut',
    iconBg: 'bg-blue-700',
    data: [
      { label: 'Yes', value: 38, color: '#1d4ed8' },
      { label: 'No', value: 62, color: '#dbeafe' },
    ],
  },
  {
    id: 2,
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Awareness of DPDP Act, 2023',
    subtitle: 'Have you heard of the DPDP Act?',
    type: 'donut',
    iconBg: 'bg-yellow-500',
    data: [
      { label: 'Yes', value: 22, color: '#f5c518' },
      { label: 'No', value: 78, color: '#fef9c3' },
    ],
  },
  {
    id: 3,
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Source of Awareness',
    subtitle: 'How did respondents first learn about data privacy?',
    type: 'bar',
    iconBg: 'bg-emerald-600',
    data: [
      { label: 'Social Media', value: 45 },
      { label: 'College / University', value: 28 },
      { label: 'News / Media', value: 17 },
      { label: 'Family / Friends', value: 6 },
      { label: 'Govt. Website', value: 4 },
    ],
    colors: ['bg-emerald-500', 'bg-emerald-400', 'bg-emerald-300', 'bg-emerald-200', 'bg-emerald-100'],
  },
  {
    id: 4,
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Privacy Policy Reading Habits',
    subtitle: 'How often do students read privacy policies?',
    type: 'bar',
    iconBg: 'bg-rose-600',
    data: [
      { label: 'Never', value: 51 },
      { label: 'Rarely', value: 31 },
      { label: 'Sometimes', value: 14 },
      { label: 'Always', value: 4 },
    ],
    colors: ['bg-rose-500', 'bg-rose-400', 'bg-rose-300', 'bg-rose-200'],
  },
  {
    id: 5,
    icon: <Users className="w-5 h-5" />,
    title: 'Course-wise Distribution',
    subtitle: 'Which programmes participated the most?',
    type: 'bar',
    iconBg: 'bg-slate-700',
    data: [
      { label: 'B.Tech / BE', value: 34 },
      { label: 'BCA', value: 26 },
      { label: 'BBA', value: 18 },
      { label: 'B.Com', value: 12 },
      { label: 'Other', value: 10 },
    ],
    colors: ['bg-slate-700', 'bg-slate-600', 'bg-slate-500', 'bg-slate-400', 'bg-slate-300'],
  },
  {
    id: 6,
    icon: <Globe className="w-5 h-5" />,
    title: 'Confidence in Data Protection',
    subtitle: 'Average self-reported confidence score (1–5 scale)',
    type: 'bar',
    iconBg: 'bg-blue-700',
    data: [
      { label: 'Score 1 (Not confident)', value: 15 },
      { label: 'Score 2', value: 22 },
      { label: 'Score 3', value: 35 },
      { label: 'Score 4', value: 20 },
      { label: 'Score 5 (Very confident)', value: 8 },
    ],
    colors: ['bg-blue-200', 'bg-blue-300', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700'],
  },
];

const kpiStats = [
  { label: 'Total Responses', value: '524', change: '+12% this week', color: 'text-blue-700', bg: 'bg-blue-50' },
  { label: 'Aware of DPDP Act', value: '22%', change: 'Of all respondents', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Never Read Privacy Policy', value: '51%', change: 'Alarming trend', color: 'text-rose-600', bg: 'bg-rose-50' },
  { label: 'States Covered', value: '18', change: 'Pan-India reach', color: 'text-emerald-600', bg: 'bg-emerald-50' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900">Live Data</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Survey Dashboard</h1>
          <p className="text-blue-200 text-lg">Visual insights from survey responses collected across India</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {kpiStats.map((s) => (
            <div key={s.label} className={`rounded-2xl p-5 ${s.bg} border border-white`}>
              <div className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
              <div className="text-sm font-semibold text-slate-800">{s.label}</div>
              <div className="text-xs text-slate-500 mt-1">{s.change}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {charts.map((chart) => (
            <div key={chart.id} className="glass-card card-hover flex flex-col">
              <div className="flex items-center gap-3 mb-1">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${chart.iconBg}`}>
                  {chart.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{chart.title}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5">{chart.subtitle}</p>

              {chart.type === 'donut' ? (
                <DonutChart segments={chart.data as { label: string; value: number; color: string }[]} />
              ) : (
                <BarChart
                  data={chart.data as { label: string; value: number }[]}
                  colors={(chart as { colors: string[] }).colors}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 glass-card text-center py-8">
          <PieChart className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 mb-2">Power BI Embed Placeholder</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            To embed your Power BI dashboard, replace this section with your Power BI iframe embed code from the "Publish to Web" option in Power BI service.
          </p>
          <div className="mt-5 bg-slate-50 rounded-xl p-4 max-w-lg mx-auto">
            <code className="text-xs text-slate-500 font-mono">
              {`<iframe src="https://app.powerbi.com/view?r=YOUR_EMBED_TOKEN" ... />`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
