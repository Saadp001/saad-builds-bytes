import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code2, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.E. Computer Engineering, GESCOE, Nashik",
  },
  {
    icon: Code2,
    title: "Backend Focus",
    description: "Python APIs, Flask, FastAPI, PostgreSQL",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, Terraform",
  },
  {
    icon: Brain,
    title: "Learning ML",
    description: "Math foundations, data preprocessing, models",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Passionate About{" "}
              <span className="text-gradient">Building & Learning</span>
            </motion.h2>
          </div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <strong className="text-foreground">Computer Engineering student at GESCOE, Nashik</strong>, with a strong foundation in Python backend development, cloud infrastructure, and DevOps automation. I thrive on building systems that are not just functional but scalable, maintainable, and efficient.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My hands-on experience spans across <strong className="text-foreground">AWS services, Docker, Kubernetes (EKS), Terraform, CI/CD pipelines, and GitOps workflows</strong>. I've built projects ranging from cloud cost optimization tools to end-to-end deployment platforms using modern DevOps practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm actively exploring <strong className="text-foreground">Machine Learning</strong> — focusing on mathematical foundations, data preprocessing, and understanding how ML models work in practice. My goal is to combine my backend and cloud expertise with ML to build intelligent, data-driven systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm seeking <strong className="text-foreground">Backend, DevOps, Cloud, and ML internship opportunities</strong> where I can contribute, learn, and grow alongside experienced engineers.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90 not-italic font-medium">
              "I enjoy learning by building and believe in applying theory directly to real-world systems."
            </blockquote>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
