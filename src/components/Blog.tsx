import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "How I Automated AWS Cost Cleanup Using Lambda",
    excerpt: "A deep dive into building a serverless solution for identifying and deleting orphaned EBS snapshots to reduce cloud costs.",
    category: "DevOps",
    readTime: "5 min read",
    date: "Dec 2025",
    link: "https://medium.com/@saadpatel",
  },
  {
    title: "Getting Started with Terraform on AWS EKS",
    excerpt: "Step-by-step guide to provisioning a production-ready Kubernetes cluster using Infrastructure as Code.",
    category: "Cloud",
    readTime: "8 min read",
    date: "Nov 2025",
    link: "https://medium.com/@saadpatel",
  },
  {
    title: "Building CI/CD Pipelines with GitHub Actions",
    excerpt: "Best practices for setting up automated testing, building, and deployment workflows for your projects.",
    category: "DevOps",
    readTime: "6 min read",
    date: "Oct 2025",
    link: "https://medium.com/@saadpatel",
  },
];

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-section-alt">
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
              Writing & Notes
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Technical <span className="text-gradient">Blog</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Sharing my learnings through Medium articles, technical notes, and DevOps + ML insights.
            </motion.p>
          </div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-xl bg-card border border-border card-hover block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <a href="https://medium.com/@saadpatel" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                View All Articles on Medium
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
