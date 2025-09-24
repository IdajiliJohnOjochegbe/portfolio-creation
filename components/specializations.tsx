"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const specializations = [
  {
    title: "Large Language Models (LLMs)",
    description: "Advanced expertise in working with state-of-the-art language models, fine-tuning, and deployment.",
    icon: "🤖",
    skills: [
      "GPT-4/GPT-3.5 Integration",
      "Claude & Anthropic Models",
      "Open Source LLMs (Llama, Mistral)",
      "Fine-tuning & PEFT",
      "Prompt Engineering",
      "RAG Systems",
      "Vector Databases",
      "Model Optimization",
    ],
    projects: ["Custom ChatBot with RAG", "Legal Document Analyzer", "Multi-Agent Content Generation"],
  },
  {
    title: "Agentic AI Systems",
    description: "Building autonomous AI agents that can reason, plan, and execute complex tasks independently.",
    icon: "🧠",
    skills: [
      "Multi-Agent Frameworks",
      "AutoGen & CrewAI",
      "Agent Orchestration",
      "Tool Integration",
      "Reasoning & Planning",
      "Memory Systems",
      "Agent Communication",
      "Workflow Automation",
    ],
    projects: ["Research Assistant Agent", "Code Review Automation", "Customer Service Agent"],
  },
  {
    title: "Deep Learning & Neural Networks",
    description: "Comprehensive knowledge of deep learning architectures and their applications across domains.",
    icon: "🔬",
    skills: [
      "Transformer Architecture",
      "CNNs & Computer Vision",
      "RNNs & Sequence Modeling",
      "GANs & Generative Models",
      "Attention Mechanisms",
      "Transfer Learning",
      "Model Architecture Design",
      "Hyperparameter Optimization",
    ],
    projects: ["Image Classification Systems", "Time Series Forecasting", "Generative Art Models"],
  },
  {
    title: "Natural Language Processing",
    description:
      "Expert-level NLP capabilities spanning from traditional methods to modern transformer-based approaches.",
    icon: "💬",
    skills: [
      "Text Classification",
      "Named Entity Recognition",
      "Sentiment Analysis",
      "Text Summarization",
      "Question Answering",
      "Language Translation",
      "Text Generation",
      "Information Extraction",
    ],
    projects: ["Sentiment Analysis Dashboard", "Document Summarization Tool", "Multilingual Chatbot"],
  },
  {
    title: "Computer Vision",
    description: "Advanced computer vision techniques for image and video analysis, object detection, and recognition.",
    icon: "👁️",
    skills: [
      "Object Detection (YOLO, R-CNN)",
      "Image Segmentation",
      "Facial Recognition",
      "OCR & Document Processing",
      "Video Analysis",
      "Medical Image Analysis",
      "Augmented Reality",
      "3D Vision",
    ],
    projects: ["Real-time Object Detection", "Medical Image Classifier", "Document Scanner App"],
  },
  {
    title: "MLOps & Production AI",
    description:
      "End-to-end machine learning operations, from model development to production deployment and monitoring.",
    icon: "⚙️",
    skills: [
      "Model Deployment",
      "CI/CD for ML",
      "Model Monitoring",
      "A/B Testing",
      "Feature Stores",
      "Model Versioning",
      "Containerization",
      "Scalable Inference",
    ],
    projects: ["ML Pipeline Automation", "Model Performance Dashboard", "Scalable API Services"],
  },
  {
    title: "Data Science & Analytics",
    description: "Comprehensive data science expertise from exploratory analysis to predictive modeling and insights.",
    icon: "📊",
    skills: [
      "Statistical Analysis",
      "Data Visualization",
      "Predictive Modeling",
      "Time Series Analysis",
      "A/B Testing",
      "Feature Engineering",
      "Data Mining",
      "Business Intelligence",
    ],
    projects: ["Customer Churn Prediction", "Sales Forecasting Model", "Market Analysis Dashboard"],
  },
  {
    title: "Cloud AI & Edge Computing",
    description:
      "Deploying AI solutions across cloud platforms and edge devices for optimal performance and scalability.",
    icon: "☁️",
    skills: [
      "AWS SageMaker",
      "Google Vertex AI",
      "Azure ML Studio",
      "Edge AI Deployment",
      "Model Optimization",
      "Serverless ML",
      "Real-time Inference",
      "Cost Optimization",
    ],
    projects: ["Serverless ML API", "Edge AI Camera System", "Multi-Cloud Deployment"],
  },
]

export function Specializations() {
  return (
    <section id="specializations" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Specializations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across cutting-edge AI domains, from Large Language Models to Agentic AI systems and
            traditional machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{spec.icon}</span>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {spec.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{spec.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Projects</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {spec.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
