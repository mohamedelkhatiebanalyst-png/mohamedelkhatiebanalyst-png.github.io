import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Database, Activity, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-block px-3 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full">
              <span className="text-primary font-label text-xs tracking-widest uppercase">Specialist Portfolio</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Turning Data Into <span className="hero-gradient">Insights</span> & <br />Smarter Decisions
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-light">
              Expert <span className="text-primary font-medium">Medical Data Analyst</span> and <span className="text-secondary font-medium">FWA Specialist</span> dedicated to identifying anomalies, preventing fraud, and optimizing clinical outcomes through rigorous data interrogation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="px-8 py-4 bg-linear-to-br from-primary to-primary-container text-on-primary-container rounded-md font-medium flex items-center gap-2 hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border border-outline-variant/30 text-primary rounded-md font-medium hover:bg-surface-container-high transition-all">
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glass-card p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Activity size={120} className="text-primary" />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-label text-on-surface-variant mb-6 tracking-widest uppercase">Analytics Portfolio Overview</div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "6+", label: "Projects", sub: "Healthcare & Data Analytics" },
                    { value: "5+", label: "Years Experience", sub: "Insurance & Healthcare" },
                    { value: "4+", label: "Tools", sub: "Python, SQL, Power BI, Streamlit" },
                    { value: "1", label: "Fraud Detection Tool", sub: "Built for Insurance FWA" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-surface-container-lowest rounded-lg p-4 border border-white/5">
                      <div className="text-4xl font-headline font-bold text-primary">{stat.value}</div>
                      <div className="text-sm font-semibold text-on-surface mt-2">{stat.label}</div>
                      <div className="text-xs text-on-surface-variant mt-1 leading-snug">{stat.sub}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { label: "SQL & Data Analysis", width: "95%", color: "bg-primary", shadow: "#adc6ff" },
                    { label: "Python & Machine Learning", width: "85%", color: "bg-secondary", shadow: "#d0bcff" },
                    { label: "Power BI / Visualization", width: "80%", color: "bg-tertiary", shadow: "#ffb786" },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                        <span>{bar.label}</span>
                        <span>{bar.width}</span>
                      </div>
                      <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: bar.width }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                          className={`h-full ${bar.color}`}
                          style={{ boxShadow: `0 0 8px ${bar.shadow}` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Summary Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-label text-primary tracking-[0.2em] uppercase mb-4">Professional Essence</h2>
              <h3 className="font-headline text-4xl font-semibold mb-8">Investigating the DNA of Medical Claims</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                With 5 years of experience in medical insurance operations and data analytics, I specialize in bridging clinical insights with operational strategy. I focus on detecting and preventing Fraud, Waste, and Abuse (FWA), uncovering patterns and anomalies that often go unnoticed in standard audits, helping organizations make smarter, data-driven decisions.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="text-primary" />, title: "FWA Detection", desc: "Advanced algorithmic auditing to identify provider billing anomalies and potential upcoding in real-time environments." },
                { icon: <Database className="text-secondary" />, title: "Medical Data Analytics", desc: "Deep-dive analysis of electronic health records (EHR) and claims data to drive operational efficiency." },
                { icon: <Activity className="text-tertiary" />, title: "Predictive Modeling", desc: "Developing risk scoring models to prioritize investigations and reduce administrative leakage." },
                { icon: <FileText className="text-primary" />, title: "Clinical Auditing", desc: "Translation of complex medical necessity rules into quantifiable data filters and validation logic." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-surface-container rounded-lg border border-white/5"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-headline text-xl font-medium mb-3">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-primary/5 rounded-full mb-8">
            <Activity size={40} className="text-primary" />
          </div>
          <h2 className="font-headline text-5xl md:text-6xl font-bold mb-6">Let’s work together</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-light">
            Ready to transform your clinical data into a powerful investigative asset? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-10 py-5 bg-linear-to-r from-primary to-primary-container text-on-primary-container font-semibold rounded-md shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3">
              Contact Me
            </Link>
            <Link to="/services" className="px-10 py-5 bg-transparent border border-outline-variant/30 text-on-surface font-semibold rounded-md hover:bg-surface-container transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
