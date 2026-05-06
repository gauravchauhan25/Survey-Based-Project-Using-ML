import {
  Shield,
  Github,
  Linkedin,
  Mail,
  BookOpen,
  Database,
  BarChart2,
  Code,
  Target,
  Users,
} from "lucide-react";

const skills = [
  { name: "Data Analysis", level: 85, color: "bg-blue-700" },
  { name: "Python / Pandas", level: 80, color: "bg-blue-600" },
  { name: "Data Visualization", level: 75, color: "bg-yellow-400" },
  { name: "SQL & Databases", level: 70, color: "bg-emerald-600" },
  { name: "Research & Writing", level: 90, color: "bg-slate-700" },
];

const projectObjectives = [
  "Assess awareness levels of IT Act, 2000 and DPDP Act, 2023 among Indian college students",
  "Identify demographic factors influencing data privacy awareness",
  "Analyze online data-sharing behaviour and its risks",
  "Compare India's privacy framework with global standards (GDPR, CCPA)",
  "Recommend evidence-based improvements in digital literacy education",
];

const teamMembers = [
  {
    name: "Mentor",
    course: "BCA",
    college: "Maharaja Surajmal Institute",
    city: "India",
    role: "Guidance",
    skills: ["Decision Making", "Analytical thinking", "Problem solving"],
    initials: "MN",
    color: "bg-red-800",
  },
  {
    name: "Project Lead",
    course: "BCA",
    college: "Maharaja Surajmal Institute",
    city: "India",
    role: "Research Design & Survey Architecture",
    skills: ["Survey Design", "Data Collection", "Statistical Analysis"],
    initials: "PL",
    color: "bg-blue-700",
  },
    {
    name: "Project Manager",
    course: "BCA",
    college: "Maharaja Surajmal Institute",
    city: "India",
    role: "Managing the entire activity of the project",
    skills: ["Motivation", "Leadership"],
    initials: "PM",
    color: "bg-purple-700",
  },
  {
    name: "Analyst",
    course: "BCA",
    college: "Maharaja Surajmal Institute",
    city: "India",
    role: "Data Analysis & Visualization",
    skills: ["Python", "Power BI", "Data Visualization"],
    initials: "DA",
    color: "bg-emerald-600",
  },
  {
    name: "Developer",
    course: "BCA",
    college: "Maharaja Surajmal Institute",
    city: "India",
    role: "Web Development & Dashboard",
    skills: ["React", "Supabase", "Tailwind CSS"],
    initials: "WD",
    color: "bg-slate-700",
  },
];

const toolsUsed = [
  {
    icon: <Database className="w-5 h-5" />,
    name: "AI/ML",
    desc: "For analysis",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    name: "Power BI",
    desc: "Data visualization",
  },
  {
    icon: <Code className="w-5 h-5" />,
    name: "Python / Pandas",
    desc: "Data analysis",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    name: "Google Forms",
    desc: "Data collection",
  },
  {
    icon: <Code className="w-5 h-5" />,
    name: "React + Vite",
    desc: "Web application",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    name: "Legal Research",
    desc: "IT Act & DPDP Act analysis",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-badge bg-yellow-400 text-slate-900">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            About This Project
          </h1>
          <p className="text-blue-200 text-lg">
            Meet the researchers behind the survey
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-badge bg-blue-100 text-blue-700">
                The Project
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Awareness of Data Privacy Laws among College Students in India
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                This is an academic data science project conducted as part of a
                college programme. The project uses survey-based research to
                understand how aware Indian college students are of two major
                data privacy laws: the{" "}
                <strong>Information Technology Act, 2000</strong> and the{" "}
                <strong>Digital Personal Data Protection Act, 2023</strong>.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                The survey was distributed across multiple Indian states and
                responses were analyzed using data science techniques to uncover
                patterns in awareness, behavior, and attitudes toward digital
                privacy.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Academic Research",
                  "Data Science",
                  "Survey Analysis",
                  "Legal Awareness",
                  "Student Project",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-blue-700" /> Project Objectives
              </h3>
              {projectObjectives.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {obj}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-yellow-100 text-yellow-700">
              The Team
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Meet the Researchers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="glass-card card-hover text-center flex flex-col items-center"
              >
                <div
                  className={`w-20 h-20 rounded-2xl ${member.color} text-white flex items-center justify-center text-2xl font-extrabold mb-4 shadow-lg`}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-blue-600 font-semibold mb-0.5">
                  {member.course}
                </p>
                <p className="text-xs text-slate-400 mb-1">{member.college}</p>
                <p className="text-xs text-slate-500 mb-4 bg-slate-50 px-3 py-1.5 rounded-full">
                  {member.role}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-badge bg-slate-100 text-slate-600">
              Stack
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Tools & Technologies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {toolsUsed.map((tool) => (
              <div
                key={tool.name}
                className="glass-card card-hover flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">
                    {tool.name}
                  </div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card text-center">
            <Mail className="w-10 h-10 text-blue-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Get in Touch
            </h3>
            <p className="text-slate-500 mb-6">
              For collaboration, academic queries, or feedback on the project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:khuranahemangi@gmail.com"
                className="btn-primary text-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <a
                href="https://github.com/Hemangi-tech"
                className="btn-outline-white !border-slate-300 !text-slate-700 hover:!bg-slate-700 hover:!text-white text-sm"
                target="_blank"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              This project is for academic purposes only. All data collected is
              anonymized and used solely for research.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
