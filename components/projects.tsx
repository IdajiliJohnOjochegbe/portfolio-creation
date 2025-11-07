"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Inline SVGs
const GithubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

// 🔥 Featured (always visible)
const featuredProjects = [
  {
    title: "Assistive Smart Device for the Visually Impaired",
    description:
      "Low-cost wearable system with real-time object detection using YOLOv5, offline GPS navigation, and voice feedback. Deployed on Raspberry Pi with edge AI for enhanced mobility and spatial awareness.",
    image: "/assistive-smart-device-ai.jpg",
    technologies: ["YOLOv5", "Raspberry Pi", "GPS", "OpenCV", "Embedded AI"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Assistive-smart-device",
    badge: "Production-ready",
  },
  {
    title: "Student Performance Predictor",
    description:
      "Machine learning model that predicts academic performance with detailed analytics. Interactive Streamlit Live demo to predict the performance of students.",
    image: "/student-performance-prediction-dashboard.jpg",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Data Analysis", "ML"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/student-performance-predictor",
    streamlitUrl: "https://student-performance-predictor-odj2rxi2gnp5s99yf86sq4.streamlit.app/", // You can update this with your Streamlit link
    badge: "Deployed",
  },
  {
    title: "Handwritten Digit Recognition",
    description:
      "Deep learning model using TensorFlow and neural networks for real-time handwritten digit classification. Foundation for OCR technology achieving 99.26% test accuracy on MNIST dataset.",
    image: "/handwritten-digit-recognition-neural-network.jpg",
    technologies: ["TensorFlow", "Neural Networks", "Python", "Image Classification"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Handwritten-digit-recognition-",
    badge: "Research",
  },
]

// 📚 Other Projects (collapsible)
const otherProjects = [
  {
    title: "Iris Flower Classification",
    description:
      "Classic ML classification model using decision trees and ensemble methods for iris flower classification.",
    image: "/iris-flower-classification-machine-learning.jpg",
    technologies: ["Python", "Scikit-learn", "Classification"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Iris-Flower-Classification",
    badge: "ML Fundamentals",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Anomaly detection system using machine learning to identify fraudulent credit card transactions in real-time.",
    image: "/fraud-detection-machine-learning-credit-card-secur.jpg",
    technologies: ["Python", "Scikit-learn", "Anomaly Detection"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Credit-Card-Fraud-Detection",
    badge: "Security",
  },
  {
    title: "Disease Prediction System",
    description:
      "AI system that predicts diseases based on medical symptoms and patient data using machine learning algorithms.",
    image: "/disease-prediction-ai-healthcare-medical-diagnosis.jpg",
    technologies: ["Python", "ML", "Healthcare AI"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Disease-Prediction",
    badge: "Healthcare",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Predictive analytics model that identifies customers likely to churn, enabling proactive retention strategies.",
    image: "/customer-churn-prediction-analytics-business-intel.jpg",
    technologies: ["Python", "Scikit-learn", "Predictive Analytics"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Customer-Churn-Prediction",
    badge: "Business Analytics",
  },
  {
    title: "Stock Price Prediction",
    description:
      "Time-series forecasting model for predicting stock market prices using historical data and machine learning.",
    image: "/stock-price-prediction-financial-forecasting-ai.jpg",
    technologies: ["Python", "Time Series", "Scikit-learn"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/stock-price-prediction",
    badge: "Finance",
  },
  {
    title: "Chest X-ray Classification",
    description:
      "Deep learning model for medical image analysis - classifying chest X-rays for disease detection and diagnosis.",
    image: "/chest-xray-classification-deep-learning-medical-im.jpg",
    technologies: ["TensorFlow", "CNN", "Medical Imaging"],
    githubUrl: "https://github.com/IdajiliJohnOjochegbe/Chest_Xray",
    badge: "Medical AI",
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of AI-driven projects spanning Agentic AI, RAG systems, computer vision, and real-world ML
            deployments.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
                    {project.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button size="sm" asChild className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                    <span className="ml-2">View on GitHub</span>
                  </a>
                </Button>
                {project.streamlitUrl && (
                  <Button size="sm" asChild variant="outline" className="w-full bg-transparent mt-2">
                    <a href={project.streamlitUrl} target="_blank" rel="noopener noreferrer">
                      <span className="ml-2">View Streamlit Dashboard</span>
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <Button variant="outline" onClick={() => setShowAll(!showAll)} className="text-sm">
            {showAll ? "Show Less" : "Show More Projects"}
          </Button>
        </div>

        {showAll && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.badge && (
                    <span className="absolute top-3 left-3 bg-muted text-foreground text-xs px-3 py-1 rounded-full shadow">
                      {project.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" asChild variant="outline" className="w-full bg-transparent">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon />
                      <span className="ml-2">View on GitHub</span>
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
