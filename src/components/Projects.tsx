import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: {
    problem: string;
    approach: string;
    architecture: string;
    learned: string;
  };
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "typosquatting-detector",
    title: "PyPI Typosquatting Malicious Package Detector",
    shortDesc: "Detects potentially malicious Python packages using name similarity and behavior analysis.",
    fullDesc: {
      problem: "Typosquatting attacks on PyPI trick developers into installing malicious packages with names similar to popular libraries, potentially compromising entire systems.",
      approach: "Built a detection system using Levenshtein distance algorithms to identify suspicious package names and static analysis to detect malicious patterns in package metadata and installation scripts.",
      architecture: "Python CLI tool with modular analyzers for name similarity, metadata inspection, and behavioral pattern detection. Outputs risk scores and detailed reports.",
      learned: "Deep understanding of supply chain security, package ecosystems, and the importance of proactive security tooling in the developer workflow.",
    },
    tech: ["Python", "PyPI API", "NLP", "Security"],
    github: "https://github.com/saadpatel",
  },
  {
    id: "lambda-cost-optimization",
    title: "AWS Lambda – Cloud Cost Optimization",
    shortDesc: "Automated stale EBS snapshot cleanup using Lambda, CloudWatch scheduling, and SNS alerts.",
    fullDesc: {
      problem: "Organizations accumulate orphaned EBS snapshots over time, leading to unnecessary storage costs that can amount to thousands of dollars monthly.",
      approach: "Developed a serverless solution using AWS Lambda triggered by CloudWatch Events to identify and safely delete snapshots not attached to any active volumes.",
      architecture: "Lambda function with IAM roles, CloudWatch scheduled triggers, SNS notifications for alerts, and CloudWatch Logs for auditing. Includes dry-run mode for safety.",
      learned: "Hands-on experience with AWS cost optimization, serverless architecture patterns, and the importance of automated cloud governance.",
    },
    tech: ["AWS Lambda", "CloudWatch", "SNS", "Python", "Boto3"],
    github: "https://github.com/saadpatel",
  },
  {
    id: "devops-ecommerce",
    title: "DevOps E-commerce Deployment Platform",
    shortDesc: "End-to-end CI/CD and GitOps deployment on AWS EKS using Terraform, GitHub Actions, and Argo CD.",
    fullDesc: {
      problem: "Modern e-commerce platforms need reliable, automated deployment pipelines that can handle frequent updates while maintaining high availability.",
      approach: "Implemented a complete GitOps workflow where infrastructure is defined as code and application deployments are triggered automatically via Git commits.",
      architecture: "Terraform for AWS EKS provisioning, GitHub Actions for CI pipeline (build, test, push to ECR), Argo CD for GitOps-based deployments, Helm charts for Kubernetes manifests.",
      learned: "Comprehensive understanding of GitOps principles, Kubernetes orchestration, infrastructure as code, and the complete DevOps lifecycle.",
    },
    tech: ["AWS EKS", "Terraform", "GitHub Actions", "Argo CD", "Helm", "Docker"],
    github: "https://github.com/saadpatel",
  },
  {
    id: "url-shortener",
    title: "URL Shortener & QR Generator",
    shortDesc: "FastAPI backend with PostgreSQL, deterministic short URLs, and QR code generation.",
    fullDesc: {
      problem: "Need for a reliable URL shortening service with additional features like QR code generation and analytics tracking.",
      approach: "Built a RESTful API with FastAPI using deterministic hashing for consistent short URLs and integrated QR code generation using Python libraries.",
      architecture: "FastAPI application with PostgreSQL database, SQLAlchemy ORM, async request handling, and QR code generation using qrcode library. Deployed with Docker.",
      learned: "REST API best practices, database design for high-throughput applications, and the importance of idempotent operations.",
    },
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Python"],
    github: "https://github.com/saadpatel",
    demo: "#",
  },
  {
    id: "ai-weather",
    title: "AI Weather Insight Web App",
    shortDesc: "Flask app providing AI-generated weather insights, containerized and deployed using Docker.",
    fullDesc: {
      problem: "Weather apps provide data but lack contextual insights about what the weather means for daily activities and planning.",
      approach: "Integrated weather API data with AI language models to generate human-friendly insights and recommendations based on current and forecasted conditions.",
      architecture: "Flask web application consuming OpenWeatherMap API, processing data through an AI model, and presenting insights via a clean responsive UI. Containerized with Docker.",
      learned: "API integration patterns, AI/ML API usage, containerization best practices, and building user-friendly data-driven applications.",
    },
    tech: ["Flask", "Docker", "AI/ML API", "Python", "REST APIs"],
    github: "https://github.com/saadpatel",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-section-alt">
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
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Projects I've <span className="text-gradient">Built</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of projects showcasing my expertise in backend development, cloud infrastructure, and DevOps automation.
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-xl bg-card border border-border card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, "_blank");
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <span className="text-sm text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="text-2xl font-bold mb-4 pr-8">{selectedProject.title}</h2>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">🎯 Problem</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDesc.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">💡 Approach</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDesc.approach}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">🏗️ Architecture</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDesc.architecture}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">📚 What I Learned</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDesc.learned}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-8">
                {selectedProject.github && (
                  <Button asChild className="gradient-primary">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button asChild variant="outline">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
