import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Cloud, GitBranch, Brain, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Python", "Flask", "FastAPI", "REST APIs", "Authentication"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3, IAM, CloudWatch, RDS, Route53)", "Docker", "Kubernetes (EKS)", "Terraform", "Helm"],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Automation",
    skills: ["GitHub Actions", "Jenkins", "Argo CD (GitOps)", "Bash scripting"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    isLearning: true,
    skills: ["Python for ML", "NumPy", "Pandas", "Matplotlib", "Data preprocessing", "Feature engineering", "Basic ML models"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Technical Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              My <span className="text-gradient">Tech Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Technologies and tools I use to build scalable backend systems, automate infrastructure, and explore machine learning.
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-xl bg-card border card-hover ${
                  category.isLearning ? "border-primary/30 relative overflow-hidden" : "border-border"
                }`}
              >
                {category.isLearning && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-bl-lg flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Currently Learning
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    category.isLearning ? "gradient-primary" : "bg-secondary"
                  }`}>
                    <category.icon className={`h-5 w-5 ${
                      category.isLearning ? "text-primary-foreground" : "text-foreground"
                    }`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
