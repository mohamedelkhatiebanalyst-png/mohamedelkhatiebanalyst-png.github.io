import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import React, { useState } from 'react';

// Steps to activate the contact form:
// 1. Go to https://formspree.io and sign up free
// 2. Create a new form and copy your form ID
// 3. Replace YOUR_FORM_ID below with your actual form ID
const FORMSPREE_ID = 'YOUR_FORM_ID';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="mb-20">
        <span className="font-label text-xs tracking-[0.2em] text-primary uppercase mb-4 block">Get In Touch</span>
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tighter mb-6">
          Let’s Start an <span className="hero-gradient">Investigation</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Have a complex dataset that needs auditing or analysis? Reach out and let's discuss how data can solve your challenges.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            {[
              { icon: <Mail className="text-primary" />, label: "Email", value: "MohamedElkhatieb19@outlook.com", href: "mailto:MohamedElkhatieb19@outlook.com" },
              { icon: <Phone className="text-secondary" />, label: "Phone", value: "01229592030", href: "tel:01229592030" },
              { icon: <MapPin className="text-tertiary" />, label: "Location", value: "Egypt, Cairo", href: "#" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div className="p-4 bg-surface-container rounded-xl border border-white/5 group-hover:border-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-1">{item.label}</span>
                  <a href={item.href} className="text-xl font-medium text-on-surface hover:text-primary transition-colors">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-outline-variant/15">
            <h3 className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6">Social Channels</h3>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mohamed-magdy-medical/" },
                { icon: <Github size={20} />, href: "https://github.com/mohamedelkhatiebanalyst-png" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border border-white/5 text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary outline-hidden transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary outline-hidden transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  placeholder="Clinical Audit Inquiry"
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary outline-hidden transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                <textarea 
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Tell me about your data challenges..."
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary outline-hidden transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-linear-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-lg shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                <Send size={18} />
              </button>
              {status === 'success' && (
                <p className="text-center text-sm text-primary mt-4">✓ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm text-red-400 mt-4">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
