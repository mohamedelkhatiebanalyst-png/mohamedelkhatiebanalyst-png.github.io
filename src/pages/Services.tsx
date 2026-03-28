import { motion } from 'motion/react';
import { Activity, LayoutDashboard, ShieldAlert, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    icon: <Activity className="text-primary" size={32} />,
    title: "Data Analysis",
    desc: "Deep-dive statistical interrogation of clinical trial data, electronic health records (EHR), and patient outcomes. Identifying subtle correlations that standard reporting overlooks.",
    color: "primary"
  },
  {
    icon: <LayoutDashboard className="text-secondary" size={32} />,
    title: "Dashboard Creation",
    desc: "Custom-built, high-fidelity Dashboard for medical directors and operations managers to visualize KPIs in real-time with precision.",
    color: "secondary"
  },
  {
    icon: <ShieldAlert className="text-tertiary" size={32} />,
    title: "Fraud Detection Analysis",
    desc: "Specialized auditing of medical claims data. Using anomaly detection algorithms to identify potential fraudulent patterns, waste, or clinical inconsistencies.",
    color: "tertiary"
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "Process Automation",
    desc: "Eliminating manual data entry and report generation. I build robust Python-based pipelines that automate the flow of medical data from source to final report.",
    color: "primary"
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <span className="text-primary font-label uppercase tracking-[0.2em] text-sm mb-4 block">Specialized Medical Intelligence</span>
            <h1 className="text-5xl md:text-7xl font-headline font-medium tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Precision <span className="hero-gradient">Investigation</span> <br />through Data.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              I bridge the gap between complex clinical datasets and actionable medical insights. My services are designed for healthcare providers, research institutions, and audit teams requiring forensic-level accuracy.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link to="/contact" className="bg-linear-to-br from-primary to-primary-container text-on-primary-container px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start a Project
              </Link>
              <Link to="/projects" className="border border-outline-variant/20 text-primary px-8 py-4 rounded-lg font-semibold hover:bg-surface-container-high transition-colors">
                View Case Studies
              </Link>
            </div>
          </motion.div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-[80px]"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative glass-card p-8 rounded-xl border border-outline-variant/15 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="h-2 w-24 bg-primary/30 rounded-full"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-surface-container-lowest rounded-lg border border-outline-variant/5"></div>
                  <div className="h-20 bg-primary/20 rounded-lg border border-primary/20"></div>
                  <div className="h-20 bg-surface-container-lowest rounded-lg border border-outline-variant/5"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-outline-variant/20 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-outline-variant/20 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-outline-variant/20 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-surface-container-low py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-headline font-medium text-on-surface">Core Analytical Services</h2>
            <div className="h-1 w-20 bg-primary mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "rgba(39, 42, 49, 0.5)" }}
                className="bg-surface p-10 md:p-16 transition-all duration-500 group"
              >
                <div className="mb-8">{service.icon}</div>
                <h3 className={cn(
                  "text-2xl font-headline font-medium mb-4 transition-colors",
                  service.color === "primary" ? "group-hover:text-primary" : 
                  service.color === "secondary" ? "group-hover:text-secondary" : 
                  "group-hover:text-tertiary"
                )}>
                  {service.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 md:py-40">
        <div className="glass-card p-12 md:p-24 rounded-2xl border border-primary/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-medium mb-8">Ready to secure your data's <span className="text-primary">integrity?</span></h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
              Whether reviewing large volumes of medical insurance data or building tools to detect fraud, waste, and abuse, I focus on turning complex datasets into clear, actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-linear-to-br from-primary to-primary-container text-on-primary-container px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
