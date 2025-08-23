"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Mail, Database, BarChart3, Cpu, MapPin,
  Sun, Moon, Award, Layers, ExternalLink, GraduationCap, ChartBar, Download
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip
} from "recharts";

function useThemeToggle() { const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
    // default to system preference on first visit
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
}


const PROFILE = {
  name: "Itumeleng Ronald Jr Modikoe",
  title: "Computer Science Student • Business Intelligence & Data Science",
  location: "Pretoria / JHB South, South Africa",
  email: "itumodikoe22@gmail.com",
  phone: "0671724201",
  linkedin: "https://linkedin.com/in/itumeleng-modikoe-127b21347",
  github: "https://github.com/iModikoe",
  photo: "/assets/itumeleng-profile.jpg",
  resume: "/assets/Itumeleng_Modikoe_Resume.pdf",
  whatsapp: "https://wa.me/27671724201",
  summary:
    "Motivated Data Science student with a solid foundation in analytics, BI, and cloud. Passionate about turning data into strategy, with hands‑on projects in Power BI, SQL Server, and modern data stacks.",
};

const TECH = {
  programming: ["Python", "C#", "JavaScript", "SQL", "HTML", "CSS"],
  dataScience: ["Machine Learning", "Data Visualization", "Data Cleaning", "Statistical Analysis", "Data Analysis & Manipulation"],
  tools: ["Power BI", "Talend", "Anaconda", "Scikit‑learn", "Pandas", "NumPy", "R Studio", "Oracle", "MS SQL Server", "Visual Studio", "VS Code"],
  dbDev: ["ERD Design", "T‑SQL", "Stored Procedures", "Triggers", "ETL"],
  other: ["Operations Research", "Linear Programming", "Cloud Computing"],
};

const EDUCATION = [
  {
    school: "Belgium Campus iTversity (Pretoria)",
    program: "Bachelor of Computing Majoring in Business Intelligence (NQF Level 8)",
    year: "2023 – Present (3rd year of 4)",
    details: [
      "A rigorous program blending computing fundamentals with advanced BI, data analysis, and decision‑support systems.",
      "Weighted average 78.1% with 26 distinctions out of 31 modules so far.",
      "Leadership and tutoring experience supporting peers in programming and analytics.",
    ],
  },
  {
    school: "RW Fick Senior Secondary School",
    program: "National Senior Certificate",
    year: "Completed 2022",
    details: ["Strong foundations in mathematics and problem solving."],
  },
];

const ICONS = { bar: BarChart3, db: Database, layers: Layers };

const PROJECTS = [
  {
    title: "EcoTrade Sustainability Insights Dashboard",
    stack: ["Power BI", "DAX", "RLS", "Data Modeling"],
    desc:
      "Interactive dashboard for sustainability KPIs (emissions, product performance, and customer behavior). Includes RLS for secure stakeholder views.",
    whatILearned: [
      "Designed a star schema and relationships for clean visuals",
      "Authored DAX measures for KPI cards and time intelligence",
      "Implemented Row‑Level Security to segment access by role",
    ],
    link: "https://github.com/iModikoe/EcoTrade-Sustainability-Insights-Dashboard-Power-BI-Solution",
    iconKey: "bar",
    image: "/assets/projects/ecotrade.png",
  },
  {
    title: "Paws Haven Animal Shelter Database",
    stack: ["SQL Server", "T‑SQL", "ERD", "Triggers"],
    desc:
      "Normalized 3NF schema with stored procedures and triggers to manage adoptions, medical records, and role‑based access.",
    whatILearned: [
      "3NF normalization and ERD modeling for real workflows",
      "Wrote stored procedures, functions, and audit triggers",
      "Applied role‑based permissions and views for safe access",
    ],
    link: "https://github.com/iModikoe/Paws-Haven-Animal-Shelter-Database",
    iconKey: "db",
    image: "/assets/projects/paws-haven.png",
  },
  {
    title: "E‑Commerce API Backend",
    stack: ["Node.js", "Express", "MongoDB", "CORS", "Rate‑limit"],
    desc:
      "Secure REST API with modules for products, users, orders, payments, and robust error handling.",
    whatILearned: [
      "Authentication with JWT and layered middleware",
      "Input validation & error handling patterns",
      "Performance safety via CORS, rate limiting, and logging",
    ],
    link: "https://github.com/iModikoe/E-Commerce-API-Backend",
    iconKey: "layers",
    image: "/assets/projects/ecommerce.png",
  },
  {
    title: "Oracle Legacy Bookstore Database",
    stack: ["Oracle", "DBF", "Migration"],
    desc:
      "Legacy schema and configuration for books/authors — a practical base for ETL/migration demonstrations.",
    whatILearned: [
      "Legacy‑to‑modern migration considerations",
      "Data export and transformation planning",
      "Schema documentation and config management",
    ],
    link: "https://github.com/iModikoe/Oracle-Legacy-Bookstore-Database",
    iconKey: "db",
    image: "/assets/projects/bookstore.png",
  },
];

const CERTS = [
  {
    name: "IBM Data Science Professional Certificate",
    url: "https://coursera.org/verify/professional-cert/QN9HM7M19XH9",
    skills:
      "Python & SQL for analysis, data visualization, ML fundamentals, and communicating insights.",
  },
  {
    name: "IBM Data Analyst Professional Certificate",
    url: "https://coursera.org/verify/professional-cert/B9GEBMI27GXE",
    skills:
      "Excel + SQL basics, Python for analytics, dashboards with Cognos/Power BI, reporting best practices.",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    url: "https://www.credly.com/badges/53301050-cd85-42c1-823e-559a3aa03d43/public_url",
    skills:
      "Cloud concepts, core AWS services, shared responsibility, pricing, and cost management.",
  },
  {
    name: "Data Analytics Essentials",
    url: "https://coursera.org/verify/SYP8D4HMWW30",
    skills: "Data cleaning, descriptive analytics, SQL queries, and storytelling with data.",
  },
  {
    name: "Intro to Data Science",
    url: "https://www.credly.com/badges/227708e6-0e4c-4f29-956c-4761023b1aa9/public_url",
    skills: "Data wrangling, visualization, and presenting actionable insights.",
  },
  {
    name: "DS Bootcamp 2025 (Udemy)",
    url: "https://www.udemy.com/certificate/UC-7eb2d478-6834-4e4a-8a9d-457a6b3a42e4/",
    skills: "End‑to‑end projects with pandas, scikit‑learn, and deployment‑ready workflows.",
  },
  {
    name: "Mastering SSIS 2016 – Part 1",
    url: "https://www.udemy.com/certificate/UC-38683017-4b17-4622-bb5c-57224469ad1f/",
    skills: "ETL pipeline design, packages, data flows, and SSIS best practices.",
  },
];

const RADAR = [
  { area: "Programming", score: 78 },
  { area: "Data Science", score: 82 },
  { area: "Business Intelligence", score: 88 },
  { area: "ETL / Data Eng", score: 75 },
  { area: "Cloud", score: 70 },
  { area: "Databases", score: 85 },
];

function Section({ id, title, icon, children, subtitle }: any) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-500/30">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
            {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function SkillPill({ text }: any) {
  return <Badge className="rounded-xl text-sm px-3 py-1 mr-2 mb-2">{text}</Badge>;
}

function GradientText({ children }: any) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-500">
      {children}
    </span>
  );
}

export default function Page() {
  const { dark, setDark } = useThemeToggle();
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!query) return PROJECTS;
    return PROJECTS.filter((p) =>
      (p.title + " " + p.stack.join(" ") + " " + p.desc).toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={PROFILE.photo} alt="Profile" className="w-9 h-9 rounded-full object-cover" />
            <div className="font-semibold">Itumeleng Modikoe</div>
          </div>
          <div className="flex items-center gap-2">
            <a href="#skills" className="px-3 py-2 text-sm hover:underline">Skills</a>
            <a href="#projects" className="px-3 py-2 text-sm hover:underline">Projects</a>
            <a href="#education" className="px-3 py-2 text-sm hover:underline">Education</a>
            <a href="#certs" className="px-3 py-2 text-sm hover:underline">Certifications</a>
            <a href="#about" className="px-3 py-2 text-sm hover:underline">About</a>
            <a href="#contact" className="px-3 py-2 text-sm hover:underline">Contact</a>
            <Button variant="ghost" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.07),transparent_55%)]" />
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm <GradientText>{PROFILE.name}</GradientText>
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{PROFILE.title}</p>
            <p className="mt-4 max-w-xl">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => window.open(PROFILE.linkedin, "_blank")}><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
              <Button variant="secondary" onClick={() => window.open(PROFILE.github, "_blank")}><Github className="mr-2 h-4 w-4" /> GitHub</Button>
              <Button variant="outline" onClick={() => (window.location.href = `mailto:${PROFILE.email}`)}><Mail className="mr-2 h-4 w-4" /> Email Me</Button>
              <Button variant="outline" onClick={() => window.open(PROFILE.resume, "_blank")}><Download className="mr-2 h-4 w-4" /> Download Résumé</Button>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> {PROFILE.location}
            </div>
            <div className="mt-6 flex flex-wrap">
              {TECH.programming.map((s) => <SkillPill key={s} text={s} />)}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col items-center gap-6">
            <img src={PROFILE.photo} alt="Profile" className="rounded-2xl w-72 h-72 object-cover shadow-lg" />
            <Card className="rounded-2xl w-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-500/30">
                    <ChartBar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">BI Skill Radar</h3>
                    <p className="text-sm text-muted-foreground">A quick glance at my focus areas</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={RADAR}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="area" tick={{ fontSize: 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                      <Radar name="Score" dataKey="score" fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
                      <Tooltip formatter={(v) => `${v}/100`} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </header>

      {/* SKILLS */}
      <Section id="skills" title="Skills & Tools" icon={<Cpu className="w-5 h-5" />} subtitle="Core strengths that power my BI and data projects.">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Data Science</h3>
                <div className="flex flex-wrap">{TECH.dataScience.map((s) => <SkillPill key={s} text={s} />)}</div>
                <h3 className="font-semibold mt-6 mb-3">Programming</h3>
                <div className="flex flex-wrap">{TECH.programming.map((s) => <SkillPill key={s} text={s} />)}</div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">BI / Tools & Platforms</h3>
                <div className="flex flex-wrap">{TECH.tools.map((s) => <SkillPill key={s} text={s} />)}</div>
                <h3 className="font-semibold mt-6 mb-3">Database Development</h3>
                <div className="flex flex-wrap">{TECH.dbDev.map((s) => <SkillPill key={s} text={s} />)}</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Other</h3>
          <div className="flex flex-wrap">{TECH.other.map((s) => <SkillPill key={s} text={s} />)}</div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" icon={<BarChart3 className="w-5 h-5" />} subtitle="Selected work showcasing BI, SQL, and backend skills.">
        <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
          <div className="text-sm text-muted-foreground">Filter by keyword, stack, or title</div>
          <div className="flex items-center gap-2">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects (e.g., SQL, Power BI, ETL)" className="w-72" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((p, idx) => {
            const Icon = ICONS[p.iconKey as keyof typeof ICONS];
            return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 * idx }}>
                <Card className="rounded-2xl hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                   <div className="relative w-full aspect-[16/9] rounded-t-2xl overflow-hidden border-b border-neutral-200">
                    <Image
                     src={p.image}
                      alt={p.title}
                       fill
                       className="object-cover object-center"
                         sizes="(max-width: 768px) 100vw, 50vw"
                         />
                        </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-500/30">
                          {Icon ? <Icon className="w-5 h-5" /> : null}
                        </div>
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                      <div className="mt-3">
                        <h4 className="font-semibold text-sm">What I did / learned</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-1">
                          {p.whatILearned.map((w) => <li key={w}>{w}</li>)}
                        </ul>
                      </div>
                      <div className="mt-3 flex flex-wrap">{p.stack.map((s) => <SkillPill key={p.title + s} text={s} />)}</div>
                      <div className="mt-5">
                        <Button onClick={() => window.open(p.link, "_blank")}>
                          View Repository <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-5 h-5" />} subtitle="My academic journey and focus.">
        <div className="space-y-4">
          {EDUCATION.map((ed) => (
            <Card key={ed.school} className="rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold">{ed.school}</div>
                    <div className="text-sm text-muted-foreground">{ed.program}</div>
                  </div>
                  <Badge className="rounded-xl">{ed.year}</Badge>
                </div>
                {ed.details?.length > 0 && (
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mt-3">
                    {ed.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CERTS */}
      <Section id="certs" title="Certifications" icon={<Award className="w-5 h-5" />} subtitle="Credentials supporting my BI pathway.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((c) => (
            <a key={c.name} href={c.url} target="_blank" rel="noreferrer" className="group">
              <Card className="rounded-2xl group-hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-500/30">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium leading-snug group-hover:underline">{c.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{c.skills}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" title="About Me" icon={<Cpu className="w-5 h-5" />} subtitle="Final‑year student, tutor, and aspiring data professional.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl md:col-span-2">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                I’m <strong>Itumeleng RJ Modikoe</strong> — a final-year student, tutor, and aspiring data professional who believes in the power of knowledge to transform lives.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Over the past few years, I’ve worn many hats: tutor, student leader, problem-solver, and teammate. Whether it’s helping a fellow student unlock a difficult programming concept, leading a group through challenges, or analyzing complex data, one thing has remained consistent — I thrive where there are problems to solve and people to empower.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                My passion for data science and business intelligence stems from the same drive that fuels my tutoring: turning complexity into clarity, and challenges into opportunities for growth. I see data as more than numbers — it’s a story waiting to be uncovered, a tool to guide decisions, and a bridge to innovation.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I’m a resilient problem-solver who embraces challenges, adapts quickly, and always seeks to add value. Whether through tutoring, leadership, or analytics, my mission is simple: to create insights and solutions that make a real impact.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge className="rounded-xl">Weighted Average: 78.1%</Badge>
                <Badge className="rounded-xl">Distinctions: 26 / 31 modules</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Leadership & Campus Life</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Peer Tutor (Belgium Campus iTversity)",
                  "Residence Representative (2024)",
                  "Student Representative Council (2024)",
                  "Soccer Team Captain (2023–2024)",
                ].map((a) => <Badge key={a} className="rounded-xl">{a}</Badge>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get In Touch" icon={<Mail className="w-5 h-5" />} subtitle="Open to internships, projects, and BI roles.">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a className="hover:underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a className="hover:underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a className="hover:underline" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex w-4 h-4 items-center justify-center">📱</span>
                  <a className="hover:underline" href={PROFILE.whatsapp} target="_blank" rel="noreferrer">WhatsApp me</a>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  <a className="hover:underline" href={PROFILE.resume} download>Download Résumé (PDF)</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /><span>{PROFILE.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Quick Message</h3>
              <form action={`mailto:${PROFILE.email}`} method="post" className="space-y-3">
                <Input placeholder="Your name" required />
                <Input placeholder="Your email" type="email" required />
                <Textarea placeholder="Say hello…" rows={4} required />
                <div className="flex justify-end"><Button type="submit">Send</Button></div>
              </form>
              <p className="text-xs text-muted-foreground mt-2">This uses your email client to send the message.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex items-center justify-between">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="hover:underline">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
