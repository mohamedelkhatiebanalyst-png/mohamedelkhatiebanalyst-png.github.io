/* ═══════════════════════════════════════════════════════════════
   THE CLINICAL INVESTIGATOR — script.js
   Handles: routing · navbar · mobile menu · animations ·
            project filters · project modal · contact form
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA  (used by the modal)
───────────────────────────────────────────────────────────── */
const PROJECTS = {
  'oncology-network-auditor': {
    title: 'Oncology Network Auditor',
    category: 'Dashboard',
    image: 'https://picsum.photos/seed/oncology/800/600',
    desc: 'Real-time visualization of claims processing for a multi-state oncology provider, highlighting treatment variance across regional networks. The dashboard surfaces outliers that manual review would miss, enabling rapid escalation.',
    tags: ['Tableau', 'Python', 'Snowflake'],
    details: [
      { label: 'Scope', value: 'Multi-state oncology provider network — 14 facilities' },
      { label: 'Outcome', value: 'Reduced claim review cycle time by 35%' },
      { label: 'Method', value: 'Statistical process control + real-time streaming' },
    ],
  },
  'anomaly-detection-engine': {
    title: 'Anomaly Detection Engine',
    category: 'Machine Learning',
    image: 'https://picsum.photos/seed/anomaly/800/600',
    desc: 'Predictive model identifying outlier billing patterns in clinical trials using unsupervised isolation forests. Trained on 4M+ historical claims to flag potential FWA cases with a 99.8% precision rate.',
    tags: ['PyTorch', 'SciKit-Learn', 'AWS SageMaker'],
    details: [
      { label: 'Model', value: 'Isolation Forest + LSTM ensemble' },
      { label: 'Dataset', value: '4.2M historical insurance claims' },
      { label: 'Precision', value: '99.8% detection rate, <0.1% false positives' },
    ],
  },
  'trial-site-performance': {
    title: 'Trial Site Performance SQL',
    category: 'SQL Analysis',
    image: 'https://picsum.photos/seed/trial/800/600',
    desc: 'Complex multi-join analysis across disparate clinical datasets to identify high-performing research sites. Used recursive CTEs and window functions to rank sites on 12 composite KPIs.',
    tags: ['PostgreSQL', 'dbt', 'BigQuery'],
    details: [
      { label: 'Sites Analyzed', value: '87 clinical research sites across 6 countries' },
      { label: 'Technique', value: 'Recursive CTEs, window functions, materialized views' },
      { label: 'Deliverable', value: 'Executive scorecard + automated dbt pipeline' },
    ],
  },
  'pharma-compliance-tracker': {
    title: 'Pharma Compliance Tracker',
    category: 'Dashboard',
    image: 'https://picsum.photos/seed/pharma/800/600',
    desc: 'Executive-level metrics for drug manufacturing compliance and quality assurance across three global plants. Integrates live ERP data feeds into a single Power BI governance hub.',
    tags: ['PowerBI', 'Azure'],
    details: [
      { label: 'Plants', value: '3 global manufacturing facilities' },
      { label: 'Refresh Rate', value: 'Near real-time (15-min intervals via Azure Data Factory)' },
      { label: 'Impact', value: 'Zero compliance findings in 2 consecutive FDA audits' },
    ],
  },
  'genetic-sequence-auditor': {
    title: 'Genetic Sequence Auditor',
    category: 'Machine Learning',
    image: 'https://picsum.photos/seed/genetic/800/600',
    desc: 'Clustering algorithm to identify rare diagnostic billing errors in large-scale genomic sequencing projects. K-means and DBSCAN applied to ICD-11 coding patterns to surface systematic miscoding.',
    tags: ['TensorFlow', 'Pandas'],
    details: [
      { label: 'Algorithm', value: 'K-means + DBSCAN hybrid clustering' },
      { label: 'Codes Analyzed', value: '220K+ ICD-11 billing codes' },
      { label: 'Findings', value: 'Identified $800K in systematic miscoding errors' },
    ],
  },
};

/* ─────────────────────────────────────────────────────────────
   ROUTING — show/hide page sections
───────────────────────────────────────────────────────────── */
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

function navigateTo(pageId, pushState = true) {
  // Hide all pages
  pages.forEach(p => p.classList.remove('active'));

  // Show target page
  const target = document.getElementById('page-' + pageId);
  if (!target) return;
  target.classList.add('active');

  // Update active nav link
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  // Update URL hash without triggering scroll
  if (pushState) {
    history.pushState({ page: pageId }, '', '#' + pageId);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Trigger page-specific animations
  if (pageId === 'home') animateHeroBars();
  if (pageId === 'about') initSkillBars();
}

/* Handle browser back/forward */
window.addEventListener('popstate', e => {
  const page = e.state?.page || getPageFromHash() || 'home';
  navigateTo(page, false);
});

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '');
  return hash || 'home';
}

/* Delegate all nav-page-link clicks */
document.addEventListener('click', e => {
  const link = e.target.closest('.nav-page-link');
  if (!link) return;
  e.preventDefault();
  const page = link.dataset.page;
  if (!page) return;
  closeMobileMenu();
  navigateTo(page);
});

/* ─────────────────────────────────────────────────────────────
   NAVBAR — scroll shadow + mobile menu
───────────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
const iconMenu = hamburger.querySelector('.icon-menu');
const iconX = hamburger.querySelector('.icon-x');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  iconMenu.classList.toggle('hidden', isOpen);
  iconX.classList.toggle('hidden', !isOpen);
});

function closeMobileMenu() {
  mobileNav.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  iconMenu.classList.remove('hidden');
  iconX.classList.add('hidden');
}

/* ─────────────────────────────────────────────────────────────
   HOME — hero bar animations
───────────────────────────────────────────────────────────── */
function animateHeroBars() {
  const bars = document.querySelectorAll('#page-home .bar-fill');
  bars.forEach(bar => {
    bar.style.width = '0%';
    const target = bar.dataset.width + '%';
    // Small timeout so CSS transition fires after width reset
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)';
        bar.style.width = target;
      });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   ABOUT — skill bar IntersectionObserver
───────────────────────────────────────────────────────────── */
let skillBarsInitialized = false;

function initSkillBars() {
  if (skillBarsInitialized) return;
  skillBarsInitialized = true;

  const fills = document.querySelectorAll('#page-about .skill-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const fill = entry.target;
      const target = fill.dataset.width + '%';
      fill.style.transition = 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      fill.style.width = target;
      observer.unobserve(fill);
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => {
    fill.style.width = '0%';
    observer.observe(fill);
  });
}

/* ─────────────────────────────────────────────────────────────
   PROJECTS — filter buttons
───────────────────────────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ─────────────────────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────────────────────── */
const modalOverlay = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalCat = document.getElementById('modal-cat');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');
const modalDetails = document.getElementById('modal-details');

function openModal(projectId) {
  const project = PROJECTS[projectId];
  if (!project) return;

  modalImg.src = project.image;
  modalImg.alt = project.title;
  modalCat.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;

  modalTags.innerHTML = project.tags
    .map(tag => `<span class="modal-tag">${tag}</span>`)
    .join('');

  modalDetails.innerHTML = project.details
    .map(d => `
      <div class="modal-data-item">
        <span class="modal-data-lbl">${d.label}</span>
        <span class="modal-data-val">${d.value}</span>
      </div>
    `).join('');

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* Open on card button click */
document.addEventListener('click', e => {
  const btn = e.target.closest('.project-detail-btn');
  if (btn) openModal(btn.dataset.id);
});

/* Close via button or overlay click */
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

/* Close via Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});

/* ─────────────────────────────────────────────────────────────
   CONTACT FORM — validation + success state
───────────────────────────────────────────────────────────── */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
const formResetBtn = document.getElementById('form-reset-btn');

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errEl = document.getElementById('err-' + fieldId.replace('form-', ''));
  if (field) field.classList.add('invalid');
  if (errEl) errEl.textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.form-field input, .form-field textarea').forEach(f => f.classList.remove('invalid'));
  document.querySelectorAll('.form-err').forEach(e => e.textContent = '');
}

function validateForm(data) {
  let valid = true;
  if (!data.name.trim()) {
    showError('form-name', 'Full name is required.');
    valid = false;
  }
  if (!data.email.trim()) {
    showError('form-email', 'Email address is required.');
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    showError('form-email', 'Please enter a valid email address.');
    valid = false;
  }
  if (!data.subject.trim()) {
    showError('form-subject', 'Subject is required.');
    valid = false;
  }
  if (!data.message.trim()) {
    showError('form-message', 'Message cannot be empty.');
    valid = false;
  }
  return valid;
}

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  clearErrors();

  const data = {
    name: document.getElementById('form-name').value,
    email: document.getElementById('form-email').value,
    subject: document.getElementById('form-subject').value,
    message: document.getElementById('form-message').value,
  };

  if (!validateForm(data)) return;

  // Simulate sending (no backend)
  const submitBtn = document.getElementById('form-submit-btn');
  submitBtn.disabled = true;
  submitBtn.querySelector('.submit-text').textContent = 'Sending…';

  setTimeout(() => {
    contactForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.querySelector('.submit-text').textContent = 'Send Message';
  }, 900);
});

formResetBtn.addEventListener('click', () => {
  contactForm.reset();
  clearErrors();
  contactForm.classList.remove('hidden');
  formSuccess.classList.add('hidden');
});

/* Live validation — clear error on input */
document.querySelectorAll('.form-field input, .form-field textarea').forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
    const errId = 'err-' + input.id.replace('form-', '');
    const errEl = document.getElementById(errId);
    if (errEl) errEl.textContent = '';
  });
});

/* ─────────────────────────────────────────────────────────────
   INIT — run on page load
───────────────────────────────────────────────────────────── */
(function init() {
  const startPage = getPageFromHash();
  navigateTo(startPage, false);
})();
