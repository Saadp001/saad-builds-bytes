import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, TrendingUp, Lightbulb, Zap } from "lucide-react";

const learningTopics = [
  {
    icon: Brain,
    title: "ML Fundamentals",
    description: "Understanding the mathematical intuition behind algorithms — linear algebra, calculus, and statistics.",
  },
  {
    icon: TrendingUp,
    title: "Real Datasets",
    description: "Applying ML to real-world datasets, learning data cleaning, preprocessing, and feature engineering.",
  },
  {
    icon: Lightbulb,
    title: "Model Training",
    description: "Training, evaluating, and improving models — regression, classification, and understanding metrics.",
  },
  {
    icon: Zap,
    title: "ML + Backend",
    description: "Combining ML with backend and cloud systems to build intelligent, production-ready applications.",
  },
];

export function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning" className="section-padding">
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
              Current Focus
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              What I'm <span className="text-gradient">Learning Right Now</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Actively expanding my skillset into Machine Learning while strengthening my backend and DevOps expertise.
            </motion.p>
          </div>

          {/* Learning cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {learningTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-card border border-primary/20 card-hover relative overflow-hidden"
              >
                {/* Gradient accent */}
                <div className="absolute inset-0 gradient-primary opacity-5" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <topic.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-muted-foreground italic text-sm flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-border" />
              I believe learning is continuous — this section evolves as I do.
              <span className="w-8 h-px bg-border" />
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
