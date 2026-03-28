import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { Database, Activity, TableProperties, Eraser, LineChart, GitBranch, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row gap-16 mb-24 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1"
        >
          <div className="mb-4 inline-flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-label font-semibold text-on-surface-variant">Active Investigation</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface tracking-tighter leading-none mb-8">
            The <span className="text-primary italic">Lupus</span> Registry Audit.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-body">
            An exhaustive forensic deep-dive into multi-center clinical trial data to identify reporting anomalies and patient outcome variances.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/3 flex flex-col gap-6"
        >
          <div className="p-6 bg-surface-container border-t border-white/5 rounded-xl">
            <span className="text-[10px] uppercase tracking-widest font-label text-primary font-bold">Primary Goal</span>
            <p className="mt-2 text-on-surface text-lg">Cross-validate electronic health records (EHR) against patient-reported outcomes to detect fraud patterns.</p>
          </div>
          <div className="p-6 bg-surface-container border-t border-white/5 rounded-xl">
            <span className="text-[10px] uppercase tracking-widest font-label text-secondary font-bold">Investigator</span>
            <p className="mt-2 text-on-surface text-lg">Lead Forensic Analyst: Dr. J. Sterling</p>
          </div>
        </motion.div>
      </header>

      {/* Problem & Data: Bento Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl relative overflow-hidden">
          <span className="absolute -top-10 -right-5 text-[12rem] font-bold text-white/5 leading-none select-none">01</span>
          <h2 className="text-3xl font-headline font-medium text-on-surface mb-8">Problem Description</h2>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              Clinical trials rely on the absolute integrity of data reported from decentralised sites. During the Phase III audit of the Rheumatology Cohort, significant "clumping" of data points was detected in non-standard distributions.
            </p>
            <p>
              The goal was to build a detective framework that could ingest raw SQL dumps and identify "perfect-world" data reporting which often signals manual fabrication or system-wide calibration errors.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container p-10 rounded-xl">
          <h2 className="text-2xl font-headline font-medium text-on-surface mb-8">Data Parameters</h2>
          <ul className="space-y-8">
            {[
              { icon: <Database className="text-primary" />, label: "Source", value: "Inter-Agency EHR Database" },
              { icon: <Activity className="text-secondary" />, label: "Data Type", value: "Time-Series Bio-Markers (CSV)" },
              { icon: <TableProperties className="text-tertiary" />, label: "Volume", value: "4.2M Records / 128 Features" },
            ].map((param, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1">{param.icon}</div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant">{param.label}</span>
                  <span className="text-on-surface font-medium">{param.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach Section */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-headline font-medium text-on-surface">The Investigation Pipeline</h2>
          <div className="h-px flex-1 bg-outline-variant/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Eraser className="text-primary" />, title: "01. Sterilization", desc: "Data cleansing focused on handling missing physiological indicators through K-Nearest Neighbors imputation to maintain sample variance without introducing bias.", color: "bg-primary" },
            { icon: <LineChart className="text-secondary" />, title: "02. Distribution Analysis", desc: "Applied Benford's Law and digit preference analysis to identify sites where leading digits in blood-pressure readings deviated from natural mathematical distributions.", color: "bg-secondary" },
            { icon: <GitBranch className="text-tertiary" />, title: "03. Predictive Modeling", desc: "Random Forest Regressors were trained to predict \"Site Authenticity Scores.\" Sites scoring below 0.6 were flagged for physical secondary audits.", color: "bg-tertiary" },
          ].map((step, i) => (
            <div key={i} className="group">
              <div className={cn("h-1 mb-6 transition-all duration-500 opacity-20 group-hover:opacity-100", step.color)}></div>
              <h3 className="text-xl font-headline font-medium mb-4 flex items-center gap-2">
                {step.icon}
                {step.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visuals Area */}
      <section className="mb-20 bg-surface-container-lowest p-8 rounded-2xl border border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-2xl font-headline font-medium text-on-surface">Audit Visualization Dashboard</h2>
            <p className="text-on-surface-variant">Interactive forensic mapping of anomaly clusters across 48 clinical sites.</p>
          </div>
          <div className="flex gap-4">
            <select className="bg-surface-container-high border-none text-on-surface rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-hidden">
              <option>All Sites</option>
              <option>Flagged Only</option>
              <option>Verified</option>
            </select>
            <button className="bg-surface-variant hover:bg-surface-bright text-on-surface px-4 py-2 rounded-lg text-sm transition-colors border border-outline-variant/30">
              Export Report
            </button>
          </div>
        </div>
        <div className="aspect-[16/9] w-full rounded-xl overflow-hidden relative group">
          <img 
            src="https://picsum.photos/seed/dashboard/1600/900" 
            alt="Forensic Data Dashboard" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute bottom-8 right-8 glass-card p-6 rounded-xl border-l-4 border-primary max-w-xs"
          >
            <h4 className="text-primary font-bold text-xs uppercase tracking-tighter mb-2">Live Insight</h4>
            <p className="text-on-surface text-sm">Cluster 4 demonstrates a 12.4% higher variance in placebo reports compared to the control mean.</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-1 w-24 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
              <span className="text-[10px] text-on-surface-variant">75% Confidence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-4xl font-headline font-medium text-on-surface mb-8">Key Findings</h2>
          <div className="space-y-8">
            {[
              { num: "01", title: "Synthetic Bias Detection", desc: "Identified three distinct clinical sites where heart rate data was being manually rounded to the nearest five, suggesting lack of proper monitoring equipment.", color: "text-primary" },
              { num: "02", title: "Correlation Breakthrough", desc: "Found a direct correlation between site coordinator turnover and data integrity decay, allowing for preemptive site interventions.", color: "text-secondary" },
            ].map((finding, i) => (
              <div key={i} className="flex gap-6">
                <div className={cn("text-4xl font-headline font-bold opacity-30", finding.color)}>{finding.num}</div>
                <div>
                  <h4 className="text-xl font-medium mb-2">{finding.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{finding.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary-container/10 p-10 rounded-2xl border border-primary/10">
          <h3 className="text-xl font-headline font-medium text-primary mb-6">Investigator's Verdict</h3>
          <blockquote className="text-2xl font-body italic text-on-surface leading-snug mb-8">
            "Data never lies, but the people reporting it often hide the truth in the averages. This audit proved that forensic analysis is as vital to medicine as the microscope."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
              <img src="https://picsum.photos/seed/investigator/100/100" alt="Investigator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-bold text-sm">Dr. Julian Sterling</p>
              <p className="text-xs text-on-surface-variant">The Clinical Investigator</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
