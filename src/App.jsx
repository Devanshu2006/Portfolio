import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ExternalLink, Code2, Database, BarChart3, Terminal, 
  Moon, Sun, Briefcase, Layout, ShieldCheck, Cloud, Zap, Search
} from 'lucide-react';
import { SiPandas, SiNumpy, SiPython, SiFlask, SiReact, SiFirebase, SiGmail} from 'react-icons/si';
import { MdApi, MdBuild, MdInsertChart, MdInsights, MdPayment } from 'react-icons/md';
import { FaBriefcase, FaChartLine, FaCss3, FaEnvelope, FaExchangeAlt, FaFileExcel, FaGithub, FaHtml5, FaJs, FaWhatsapp } from 'react-icons/fa';
import myPhoto from './assets/my-photo.jpeg'; 

const DATA = {
  profile: {
    name: "Devanshu Girare",
    title: "Backend Developer | Data Analyst | Tester | Freelancer | Poet",
    email: "devanshupawar20@gmail.com",
    contact: "7999178184",
    github: "github.com/devanshu2006",
    linkedin: "www.linkedin.com/in/devanshu-girare-2491a3373",
    summary: "Backend Software Developer and Data Analyst skilled in building real-time applications and transforming datasets into insights. Experienced in Software Testing, API validation, and root-cause analysis."
  },
  skillsWithIcons: [
      { name: "Python", icon: <SiPython size={20} />, color: "text-blue-500" },
      { name: "Flask", icon: <SiFlask size={20} />, color: "text-orange-500" },
      { name: "Pandas", icon: <SiPandas size={20} />, color: "text-green-400" },
      { name: "NumPy", icon: <SiNumpy size={20} />, color: "text-purple-600" },
      { name: "Power BI", icon: <MdInsertChart size={20} />, color: "text-yellow-400"},
      { name: "SQL & Databases", icon: <Database size={20} />, color: "text-green-500" },
      { name: "React.js", icon: <SiReact size={20} />, color: "text-cyan-400" },
      { name: "Data Analysis", icon: <BarChart3 size={20} />, color: "text-purple-500" },
      { name: "Software Testing", icon: <ShieldCheck size={20} />, color: "text-red-500" },
      { name: "Cloud (AWS)", icon: <Cloud size={20} />, color: "text-yellow-600" },
      { name: "WebSockets", icon: <Zap size={20} />, color: "text-yellow-400" },
      { name: "Business Strategist", icon: <FaBriefcase size={20} />, color: "text-sky-900"},
      { name: "Postman", icon: <FaEnvelope size={20} />, color: "text-pink-900"},
      { name: "RESTApi", icon: <MdApi size={20} />, color: "text-violet-200"},
      { name: "DevOps", icon: <MdBuild size={20} />, color: "text-indigo-400"},
      { name: "GitHub", icon: <FaGithub size={20} />, color: "text-blue-50"},
      { name: "PaymentTech", icon: <MdPayment size={20} />, color: "text-green-800"},
      { name: "NoSqlDB", icon: <SiFirebase size={20} />, color: "text-orange-200"},
      { name: "Excel", icon: <FaFileExcel size={20} />, color: "text-blue-500"},
      { name: "EDA", icon: <MdInsights size={20} />, color: "text-red-500"},
      { name: "KPI", icon: <FaChartLine size={20} />, color: "text-rose-50"},
      { name: "ELT & ETL", icon: <FaExchangeAlt size={20} />, color: "text-purple-400"},
      { name: "HTML", icon: <FaHtml5 size={20} />, color: "text-yellow-400"},
      { name: "CSS", icon: <FaCss3 size={20} />, color: "text-blue-400"},
      { name: "JavaScript", icon: <FaJs size={20} />, color: "text-purple-400"},
    ],
  experience: [
    {
      role: "Intern - Business & Data Analyst",
      company: "DenQr (Startup)",
      date: "Oct 2025 – Dec 2025",
      points: [
        "Collaborated with stakeholders to translate business requirements into technical solutions.",
        "Analyzed large datasets using SQL and performed data cleaning to ensure 100% reporting accuracy.",
        "Conducted end-to-end testing of interactive dashboards before client presentations.",
        "Simplifying complex data into actionable recommendations for non-technical clients."
      ]
    }
  ],
  projects: [
    {
      id: "food-system",
      title: "Online Food Ordering System",
      type: "Full-Stack & Business Management",
      date: "June 2025 – Nov 2025",
      desc: "Real-time order management with secure payments and automated receipts.",
      tech: ["Python", "Flask", "JavaScript", "React", "WebSockets", "Razorpay", "AWS"],
      live: "https://denqr.onrender.com",
      github: "https://github.com/devanshu2006/DenQr",
      details: "It is basically an online food ordering system eithin restaurant. It provides medium for client and customer to track an order and make an order.I had also continued it as a startup for a couple of months but ended up closing it due to insufficient amount to run. Developed a real-time system with WebSocket synchronization. Performed rigorous API testing via Postman to ensure secure transaction verification and automated receipt generation."
  },
    {
      id: "complaint-system",
      title: "Complaint Management System",
      type: "Full-Stack Development",
      date: "Feb 2025 – Feb 2026",
      live: "https://github.com/devanshu2006/Complaint-Management-Syatem",
      github: "https://github.com/Devanshu2006/power-bi-projects/blob/main/Complaint%20Management%20system.png",
      desc: "Ai-Powered Complaint management system for the complaints. It assigns priority according to the concern automatically.",
      tech: ["Python", "Flask", "JavaScript", "Firebase", "SQL", "Manual Testing"],
      details: "Devloped an advanced prototype of Railway Complaint Register apps. We have integrated the Artificial Intilligence for quick priority assignment on the category of complaints. We have used HTML CSS JavaScript for the frontend part and Python Flask for the backend. we have used Firebase NoSql as database for storing all the data related to the web app or service."
    },
    {
      id: "mobile-sales",
      title: "Mobile Sales Analysis",
      type: "Data Analysis & Visualization",
      date: "Oct 2025 – Nov 2025",
      github: "https://github.com/Devanshu2006/power-bi-projects",
      live: "https://github.com/Devanshu2006/power-bi-projects/blob/main/power%20bi%20project.png",
      desc: "Sales trend dashboard with rigorous data pre-processing and validation.",
      tech: ["Pandas", "Power BI", "Excel", "Data Validation"],
      details: "Improved data accuracy by handling missing values and removing duplicates. Built dynamic slicers to test purchasing patterns across different models and cities."
    }
  ]
};

const Section = ({ id, title, children }) => (
  <section id={id} className={`py-20 px-6 bg-[#3D2C24]`}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-white underline decoration-white underline-offset-8">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const downloadResume = (type) => {
    const resumeMap = {
      'Analyst': '/assets/Data_Analyst_w.pdf',
      'Tester': '/assets/Software_Tester.pdf',
      'Developer': '/assets/Devanshu_Girare_Resume.pdf',
    };
    const link = document.createElement('a');
    link.href = resumeMap[type];
    link.setAttribute('download', `${DATA.profile.name}_${type}_Resume.pdf`);
    link.setAttribute('target', '_blank'); // Isse file open hone ke chances badh jaate hain
    
    document.body.appendChild(link); // Body mein add karein
    link.click();
    document.body.removeChild(link); // Click ke baad hata dein
};

  return (
    <div className="min-h-screen bg-[#3D2C24] font-sans selection:bg-blue-100 selection:text-blue-600 text-white">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 bg-[#3D2C24]/70 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span 
            onClick={() => setShowAbout(true)} 
            className="font-black text-xl tracking-tighter uppercase cursor-pointer hover:text-blue-400 transition"
          >
            {DATA.profile.name}
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a onClick={() =>setShowAbout(true)} className="hover:text-blue-200 transition cursor-pointer">Overview</a>
              <a href="#projects" className="hover:text-blue-200 transition">Projects</a>
              <a href="#skills" className="hover:text-blue-200 transition">Skills</a>
              <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="pt-40 pb-24 px-6 bg-[#3D2C24]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img src={myPhoto} alt={DATA.profile.name} className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-8 border-white/10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Welcome to my Portfolio.</h1>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 justify-center md:justify-start">
              <Terminal size={28} className="text-blue-500"/>
              {DATA.profile.title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto md:mx-0">
              {DATA.profile.summary}
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <button 
                onClick={() => setShowResumeModal(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center gap-2"
              >
                <ExternalLink size={18} /> Download Resume
              </button>
              <a href="#contact" className="border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections (Experience, Projects, Skills, Contact) ... same as your code */}
      <Section id="experience" title="Work Experience">
         {/* ... (Experience mapping same as before) */}
         <div className="max-w-4xl mx-auto">
          {DATA.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-white/20">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
              <div className="mb-2 flex flex-wrap justify-between items-center gap-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">{exp.date}</span>
              </div>
              <p className="text-lg font-semibold text-white/80 mb-4">{exp.company}</p>
              <ul className="space-y-3">
                {exp.points.map((p, i) => (
                  <li key={i} className="text-white/70 flex gap-2">
                    <span className="text-blue-600 text-lg leading-none">▹</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Featured Work">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.projects.map(p => (
            <motion.div 
              key={p.id} whileHover={{ y: -10 }} onClick={() => setSelectedProject(p)}
              className="bg-[#2D1F19] p-6 rounded-3xl border border-white/10 cursor-pointer shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="flex justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {p.type}
                </span>
                <Search size={18} className="text-white/40" />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/60 text-sm mb-6 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-[#1F140F] rounded uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="My Skills">
        <div className="flex flex-wrap justify-center gap-4">
          {DATA.skillsWithIcons.map((skill, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} className="flex items-center gap-3 px-5 py-3 bg-[#2D1F19] border border-white/10 rounded-2xl shadow-sm">
              <span className={skill.color}>{skill.icon}</span>
              <span className="font-bold text-sm text-white/90">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get In Touch">
        <div className="text-center bg-[#2D1F19] p-12 rounded-3xl border border-white/10 max-w-3xl mx-auto">
          <p className="text-white/70 mb-8 max-w-lg mx-auto">Seeking opportunities to apply full-stack development and analytical testing to high-impact projects.</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 mt-4">
              <a href={`https://${DATA.profile.linkedin}`} target="_blank" rel="noreferrer" className="p-3 bg-[#1F140F] rounded-full border border-white/10 text-white/70 hover:text-blue-600 transition shadow-sm"><Briefcase size={24} /></a>
              <a href={`https://${DATA.profile.github}`} className="p-3 bg-[#1F140F] rounded-full border border-white/10 text-white/70 hover:text-blue-600 transition shadow-sm"><FaGithub size={24} /></a>
              <a href={`mailto:${DATA.profile.email}`} className="p-3 bg-[#1F140F] rounded-full border border-white/10 text-white/70 hover:text-blue-600 transition shadow-sm"><SiGmail size={24} /></a>
              <a href={`https://wa.me/${DATA.profile.contact}`} className="p-3 bg-[#1F140F] rounded-full border border-white/10 text-white/70 hover:text-blue-600 transition shadow-sm"><FaWhatsapp size={24} /></a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-white/50 text-xs border-t border-white/10">© 2026 All rights are reserved.</footer>

      {/* --- ALL MODALS --- */}
      <AnimatePresence>
        {/* Project Modal */}
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#1F140F] max-w-2xl w-full p-8 rounded-3xl relative shadow-2xl text-white border border-white/10" onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-white/40 hover:text-blue-600 transition">✕</button>
              <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
              <span className="text-blue-600 font-bold text-xs mb-6 block uppercase tracking-widest">{selectedProject.date}</span>
              <p className="text-white/70 mb-8 leading-relaxed">{selectedProject.details}</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition cursor-pointer" onClick={() => window.open(selectedProject.github, "_blank")}>View Source</button>
                <button className="flex-1 border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition cursor-pointer" onClick={() => window.open(selectedProject.live, "_blank")}>Live Demo</button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* About Modal */}
        {showAbout && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-md" onClick={() => setShowAbout(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#1F140F] max-w-2xl w-full p-8 rounded-3xl relative shadow-2xl text-white border border-white/10" onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowAbout(false)} className="absolute top-6 right-6 text-white/40 hover:text-blue-600 transition">✕</button>
              <h2 className="text-3xl font-bold mb-2">{DATA.profile.name}</h2>
              <span className="text-blue-600 font-bold text-xs mb-6 block uppercase tracking-widest">Overview</span>
              <div className="text-white/70 mb-8 leading-relaxed space-y-4">
                <p>Versatile Software Developer and Data Analyst with a focus on building and optimizing real-time business solutions. From architecting backend systems with Python Flask to delivering data-driven insights via Power BI, I specialize in the full lifecycle of product development. Passionate about solving real-world problems through clean code, rigorous testing, and analytical storytelling.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#2D1F19] p-4 rounded-xl border border-white/5">
                    <h4 className="text-blue-400 font-bold text-xs uppercase mb-2">Education</h4>
                    <p className="text-sm">B.Tech - CS Engineering</p>
                    <p className="text-xs text-white/50">CGPA: 7.72/10 | RGPV Bhopal</p>
                  </div>
                  <div className="bg-[#2D1F19] p-4 rounded-xl border border-white/5">
                    <h4 className="text-green-400 font-bold text-xs uppercase mb-2">Location</h4>
                    <p className="text-sm">Bhopal, MP, India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href={`mailto:${DATA.profile.email}`} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition text-center">Email</a>
                <button onClick={() => setShowAbout(false)} className="flex-1 border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/10 transition">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* --- NEW: Resume Download Modal --- */}
        {showResumeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-md" onClick={() => setShowResumeModal(false)}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#1F140F] max-w-xl w-full p-8 rounded-3xl relative shadow-2xl border border-white/10 text-white" onClick={e => e.stopPropagation()}>
              <button onClick={() => setShowResumeModal(false)} className="absolute top-6 right-6 text-white/40 hover:text-blue-600 transition">✕</button>
              
              <h2 className="text-3xl font-bold mb-2">My Resumes</h2>
              <span className="text-blue-600 font-bold text-xs mb-6 block uppercase tracking-widest">Choose a specific resume to download</span>
              
              <div className="space-y-4 mb-8">
                {/* Data Analyst Card */}
                <div onClick={() => downloadResume('Analyst')} className="group flex items-center justify-between p-4 bg-[#2D1F19] rounded-2xl border border-white/5 hover:border-blue-500/50 cursor-pointer transition">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500"><BarChart3 size={24}/></div>
                    <div>
                      <p className="font-bold">Data Analyst</p>
                      <p className="text-xs text-white/40 italic">SQL, Power BI, Python Focus</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-white/20 group-hover:text-blue-500 transition"/>
                </div>

                {/* Software Tester Card */}
                <div onClick={() => downloadResume('Tester')} className="group flex items-center justify-between p-4 bg-[#2D1F19] rounded-2xl border border-white/5 hover:border-red-500/50 cursor-pointer transition">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-500/10 rounded-xl text-red-500"><ShieldCheck size={24}/></div>
                    <div>
                      <p className="font-bold">Software Tester</p>
                      <p className="text-xs text-white/40 italic">Manual & API Testing Focus</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-white/20 group-hover:text-red-500 transition"/>
                </div>

                {/* Developer Card */}
                <div onClick={() => downloadResume('Developer')} className="group flex items-center justify-between p-4 bg-[#2D1F19] rounded-2xl border border-white/5 hover:border-purple-500/50 cursor-pointer transition">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500"><Code2 size={24}/></div>
                    <div>
                      <p className="font-bold">Software Developer</p>
                      <p className="text-xs text-white/40 italic">Backend & Flask Focus</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-white/20 group-hover:text-purple-500 transition"/>
                </div>
              </div>

              <button onClick={() => setShowResumeModal(false)} className="w-full border border-white/10 text-white/60 py-3 rounded-xl font-bold hover:bg-white/5 transition">Cancel</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}