import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, GraduationCap, Briefcase, Code2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: GraduationCap,
    category: "Education",
    items: [
      "B.E. Computer Engineering",
      "GESCOE, Nashik",
      "Expected 2026",
    ],
  },
  {
    icon: Code2,
    category: "Core Skills",
    items: [
      "Python, Flask, FastAPI",
      "AWS, Docker, Kubernetes",
      "Terraform, GitHub Actions",
    ],
  },
  {
    icon: Briefcase,
    category: "Top Projects",
    items: [
      "DevOps E-commerce Platform",
      "AWS Cost Optimization Tool",
      "PyPI Security Detector",
    ],
  },
];

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding">
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
              Resume
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              My <span className="text-gradient">Qualifications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A quick overview of my education, skills, and key projects. Download my full resume for more details.
            </motion.p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{highlight.category}</h3>
                </div>
                <ul className="space-y-2">
                  {highlight.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Resume preview placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-8 rounded-xl bg-card border border-border overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 gradient-primary opacity-5" />
              
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Download Full Resume</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Get a comprehensive overview of my experience, skills, and projects.
                </p>
                <Button className="gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
