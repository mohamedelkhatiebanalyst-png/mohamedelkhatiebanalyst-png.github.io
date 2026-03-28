import { motion } from 'motion/react';

const projects = [
  {
    title: "Global COVID-19 Data Exploration",
    category: "SQL Analysis",
    desc: "Analyzed global COVID-19 datasets using SQL to uncover trends in infections, deaths, and vaccination progress across countries and time periods.",
    tags: ["SQL", "Data Exploration", "Relational Databases"],
    image: "/project1.webp",
  },
  {
    title: "Medical Insurance Cost Prediction",
    category: "Machine Learning",
    desc: "Built a linear regression model to predict healthcare insurance costs based on patient demographics and risk factors such as age, BMI, and smoking status.",
    tags: ["Python", "Pandas", "Scikit-Learn", "Linear Regression"],
    image: "/project2.png",
  },
  {
    title: "Telehealth Utilization Data Analysis",
    category: "SQL Analysis",
    desc: "Explored telehealth datasets to identify usage patterns and trends in virtual healthcare services, highlighting adoption rates across demographics.",
    tags: ["SQL", "Data Analysis", "Healthcare Data"],
    image: "/project3.jpg",
  },
  {
    title: "Revenue Correlation Analysis",
    category: "Python Analysis",
    desc: "Analyzed claims revenu datasets to discover correlations between budget, Policy tier, and success using statistical visualization techniques.",
    tags: ["Python", "Pandas", "NumPy", "Seaborn"],
    image: "/project4.png",
  },
  {
    title: "Insurance Fraud, Waste & Abuse Detection Tool",
    category: "Machine Learning",
    desc: "A tool that analyzes insurance claims data to detect abnormal patterns and highlight potential fraud, waste, and abuse cases with an interactive dashboard.",
    tags: ["Python", "Streamlit", "Pandas", "Data Analytics"],
    image: "/project5.png",
  },
  {
    title: "Healthcare Insurance Claims Performance Dashboard",
    category: "Dashboard",
    desc: "Interactive dashboard analyzing healthcare insurance claims, highlighting cost drivers, provider performance, disease categories, and claim trends to support better decision-making.",
    tags: ["Power BI", "DAX", "Data Modeling", "Healthcare Insurance Data", "Data Visualization"],
    image: "/project6.png",
  },
];

export default function Projects() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <header className="mb-20">
        <span className="font-label text-xs tracking-[0.2em] text-primary uppercase mb-4 block">Portfolio Archive</span>
        <h1 className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tighter mb-6">
          Healthcare <span className="hero-gradient">Data Analyst</span>
        </h1>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-outline-variant/15 pb-8">
        {["All Projects", "SQL Analysis", "Machine Learning", "Python Analysis", "Dashboard"].map((filter, i) => (
          <button
            key={i}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              i === 0
                ? "bg-surface-container-high text-primary border border-primary/20"
                : "bg-surface-container-low text-on-surface-variant hover:text-primary border border-transparent hover:border-primary/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col bg-surface-container rounded-xl overflow-hidden border border-white/5 transition-all duration-500"
          >
            <div className="h-56 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent opacity-80"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label text-[10px] tracking-widest text-primary uppercase py-1 px-2 bg-primary/10 rounded">
                  {project.category}
                </span>
              </div>
              <h3 className="font-headline text-xl text-on-surface mb-3">{project.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-label px-2 py-1 bg-surface-container-high text-on-surface-variant rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </main>
  );
}
