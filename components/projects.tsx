import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Inline SVG components for icons
const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const projects = [
  {
    title: "Multi-Agent Research Assistant",
    description:
      "Autonomous AI system using AutoGen framework with specialized agents for research, analysis, and report generation. Integrates with multiple data sources and APIs for comprehensive research automation.",
    image: "/ai-research-assistant-multi-agent-system.jpg",
    technologies: ["Python", "AutoGen", "OpenAI API", "LangChain", "Vector DB", "FastAPI"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Legal Document Analyzer with RAG",
    description:
      "Advanced NLP system combining Large Language Models with Retrieval-Augmented Generation for legal document analysis, contract review, and compliance checking with 95% accuracy.",
    image: "/legal-document-ai-analyzer-rag-system.jpg",
    technologies: ["Python", "GPT-4", "Pinecone", "LangChain", "Streamlit", "PDF Processing"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Intelligent Customer Service Agent",
    description:
      "Production-ready agentic AI system for customer service using CrewAI framework. Handles complex queries, escalates appropriately, and maintains conversation context across multiple channels.",
    image: "/intelligent-customer-service-ai-agent.jpg",
    technologies: ["Python", "CrewAI", "Claude", "Redis", "WebSocket", "React"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Medical Image Classification with LLMs",
    description:
      "Multimodal AI system combining computer vision and Large Language Models for medical image analysis. Provides detailed diagnostic insights and explanations for healthcare professionals.",
    image: "/medical-ai-multimodal-diagnostic-system.jpg",
    technologies: ["Python", "GPT-4V", "PyTorch", "OpenCV", "DICOM", "FastAPI"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Code Review Automation Agent",
    description:
      "Agentic AI system that automatically reviews code, suggests improvements, checks for security vulnerabilities, and ensures coding standards compliance using specialized LLMs.",
    image: "/code-review-automation-ai-agent-system.jpg",
    technologies: ["Python", "GitHub API", "CodeLlama", "AST", "Docker", "CI/CD"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Real-Time Object Detection System",
    description:
      "Advanced computer vision system using YOLO and OpenCV for real-time object detection and tracking. Deployed on edge devices with 95% accuracy for security and surveillance applications.",
    image: "/computer-vision-object-detection-dashboard.jpg",
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "Edge AI", "Flask"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Medical Image Classification",
    description:
      "Deep learning model for medical image analysis using CNNs to classify X-ray images for pneumonia detection. Achieved 92% accuracy on test dataset with data augmentation techniques.",
    image: "/medical-ai-image-classification-interface.jpg",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Facial Recognition Attendance System",
    description:
      "Automated attendance system using facial recognition technology. Built with deep learning models for face detection and recognition with real-time processing capabilities.",
    image: "/facial-recognition-attendance-system-interface.jpg",
    technologies: ["Python", "OpenCV", "dlib", "Face Recognition", "SQLite"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Agricultural Crop Disease Detection",
    description:
      "Computer vision application for detecting plant diseases from leaf images using convolutional neural networks. Helps farmers identify crop diseases early for better yield management.",
    image: "/agricultural-ai-crop-disease-detection-app.jpg",
    technologies: ["Python", "PyTorch", "OpenCV", "Streamlit", "PIL"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Traffic Sign Recognition System",
    description:
      "Deep learning model for autonomous vehicle applications that recognizes and classifies traffic signs in real-time. Trained on German Traffic Sign Recognition Benchmark dataset.",
    image: "/traffic-sign-recognition-ai-system-dashboard.jpg",
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Scikit-learn"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Neural network implementation for recognizing handwritten digits using the MNIST dataset. Features both traditional ML approaches and deep learning solutions with comparative analysis.",
    image: "/handwritten-digit-recognition-neural-network-inter.jpg",
    technologies: ["Python", "TensorFlow", "Keras", "MNIST", "Jupyter"],
    liveUrl: "https://github.com/johnidajili9",
    githubUrl: "https://github.com/johnidajili9",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of cutting-edge AI projects spanning Agentic AI systems, Large Language Models, computer vision,
            and production-scale machine learning applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon />
                      <span className="ml-2">View Project</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon />
                      <span className="ml-2">Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
