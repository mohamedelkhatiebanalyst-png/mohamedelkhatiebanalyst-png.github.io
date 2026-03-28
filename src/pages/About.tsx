import { motion } from 'motion/react';
import { CheckCircle2, Download } from 'lucide-react';
import { cn } from '../lib/utils';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero / Profile Summary Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-label uppercase tracking-widest text-xs mb-4 block">Medical Data Specialist</span>
            <h1 className="text-5xl lg:text-7xl font-headline font-medium tracking-tighter text-on-surface mb-8 leading-tight">
              Bridging <span className="hero-gradient">Clinical Expertise</span> and Data Intelligence.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mb-10">
              With a foundation in Pharmacy and years navigating the complexities of Medical Insurance, I’ve pivoted to Clinical Data Analytics to uncover the narratives hidden within healthcare datasets. I don’t just process numbers; I audit them for integrity, efficiency, and life-changing insights.
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-br from-primary to-primary-container text-on-primary-container font-semibold rounded-lg hover:opacity-90 transition-all active:scale-95"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-surface-container relative z-10">
              <img
                src="/photo.jpg"
                alt="Mohamed Elkhatieb"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-secondary/20 rounded-bl-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Skill Bento Grid */}
      <section className="bg-surface-container-low py-32 mb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col mb-20">
            <h2 className="text-3xl font-headline font-medium tracking-tight mb-4">Core Competencies</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Technical Skills */}
            <div className="glass-card p-10 rounded-xl border-t border-white/5 flex flex-col h-full">
              <h3 className="text-xl font-headline font-medium mb-6">Technical Architecture</h3>
              <div className="space-y-4 flex-grow">
                {[
                  { name: "Python (Pandas, Scikit-learn)", level: "INTERMEDIATE", width: "65%" },
                  { name: "SQL (PostgreSQL, BigQuery)", level: "INTERMEDIATE", width: "65%" },
                  { name: "Power BI", level: "ADVANCED", width: "85%" },
                ].map((skill, i) => (
                  <div key={i} className="pt-2">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-on-surface-variant">{skill.name}</span>
                      <span className="text-primary font-label text-xs">{skill.level}</span>
                    </div>
                    <div className="w-full bg-surface-container h-1">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        className="bg-primary h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain Expertise */}
            <div className="glass-card p-10 rounded-xl border-t border-white/5 flex flex-col h-full">
              <h3 className="text-xl font-headline font-medium mb-6">Domain Expertise</h3>
              <ul className="space-y-4 text-on-surface-variant leading-relaxed">
                {[
                  "Medical Insurance Operations & Claims Analysis",
                  "Fraud, Waste & Abuse (FWA) Detection",
                  "Medical Data Analytics & Reporting",
                  "Pharmacist Expertise",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytical Approach */}
            <div className="glass-card p-10 rounded-xl border-t border-white/5 flex flex-col h-full">
              <h3 className="text-xl font-headline font-medium mb-6">Analytical Methodology</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Implementing creative data techniques to identify anomalies in patient outcomes and cost-of-care patterns & enhancing operations reporting.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PREDICTIVE MODELING", "DEEP ANALYSIS", "STATISTICAL SUMMARIZATION"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-surface-container-high rounded text-xs font-label text-tertiary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-4xl font-headline font-medium tracking-tighter mb-6">Career Timeline</h2>
              <p className="text-on-surface-variant leading-relaxed mb-8">
                A strategic evolution from patient-facing clinical care to high-impact data forensics in the insurance and healthcare sectors.
              </p>
              <div className="p-6 bg-surface-container rounded-xl border-l-4 border-primary">
                <p className="text-sm italic text-primary">"The intersection of medicine and math is where the most critical human insights are born."</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-12">
            {[
              {
                title: "Medical Intelligence Specialist",
                period: "Jul 2025 — Present",
                desc: "Managing healthcare data systems and developing data-driven solutions to support clinical and operational decision-making.",
                color: "bg-primary"
              },
              {
                title: "Quality Assurance Executive",
                period: "Jan 2025 — Jun 2025",
                desc: "Improved claims quality processes and implemented reporting automation to enhance accuracy and operational efficiency.",
                color: "bg-primary"
              },
              {
                title: "Senior Medical Claims Fraud Analyst",
                period: "Feb 2024 — Sep 2024",
                desc: "Analyzed claims data to identify fraudulent patterns and built fraud detection tools and interactive dashboards for investigation teams.",
                color: "bg-secondary"
              },
              {
                title: "Medical Claims Assessor",
                period: "Aug 2023 — Jan 2024",
                desc: "Reviewed and adjudicated insurance claims based on policy guidelines, ensuring accurate and compliant claim settlements.",
                color: "bg-secondary"
              },
              {
                title: "Medical Quality & Approval Analyst",
                period: "Jun 2022 — Jun 2023",
                desc: "Audited medical approvals for quality and compliance, and actively supported fraud detection and prevention activities.",
                color: "bg-tertiary"
              },
              {
                title: "Pre-Authorization Medical Officer",
                period: "Oct 2021 — Sep 2023",
                desc: "Reviewed treatment approval requests and ensured all authorizations met clinical and policy compliance requirements.",
                color: "bg-tertiary"
              },
              {
                title: "Community Pharmacist",
                period: "Nov 2020 — Sep 2021",
                desc: "Dispensed medications and provided patient counseling, building the clinical foundation that underpins my data work today.",
                color: "bg-outline-variant"
              },
              {
                title: "Bachelor of Pharmacy",
                period: "2020",
                desc: "Graduated from Misr University for Science & Technology — the academic foundation of my career in healthcare and data analytics.",
                color: "bg-outline-variant"
              },
            ].map((role, i) => (
              <div key={i} className="relative pl-8 pb-12 border-l border-outline-variant/30 last:pb-0">
                <div className={cn("absolute -left-1.5 top-0 w-3 h-3 rounded-full", role.color)}></div>
                <div className="mb-3">
                  <h4 className="text-xl font-headline font-medium text-on-surface">{role.title}</h4>
                  <span className="text-on-surface-variant font-label text-xs tracking-wider">{role.period}</span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
