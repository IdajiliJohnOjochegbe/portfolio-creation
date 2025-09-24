"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University & DeepLearning.AI",
    date: "January 2024",
    description:
      "Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.",
    skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
    status: "Completed",
  },
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "March 2024",
    description: "Validates expertise in building, training, tuning, and deploying machine learning models on AWS.",
    skills: ["AWS", "SageMaker", "ML Deployment", "Cloud Computing"],
    status: "Completed",
  },
  {
    title: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "May 2024",
    description: "Demonstrates ability to design, build, and productionize ML models on Google Cloud Platform.",
    skills: ["GCP", "BigQuery", "Vertex AI", "MLOps"],
    status: "Completed",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "February 2024",
    description: "Validates skills in building and training neural network models using TensorFlow.",
    skills: ["TensorFlow", "Deep Learning", "Computer Vision", "NLP"],
    status: "Completed",
  },
  {
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "June 2024",
    description: "Demonstrates skills in designing and implementing AI solutions using Azure Cognitive Services.",
    skills: ["Azure", "Cognitive Services", "AI Solutions", "Bot Framework"],
    status: "Completed",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "April 2024",
    description: "Validates skills in deploying and managing Kubernetes clusters in production environments.",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
    status: "Completed",
  },
  {
    title: "LLM Operations Specialization",
    issuer: "DeepLearning.AI",
    date: "August 2024",
    description: "Advanced course on deploying and managing Large Language Models in production.",
    skills: ["LLMs", "GPT", "Model Deployment", "AI Operations"],
    status: "Completed",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS",
    date: "September 2024",
    description: "Comprehensive course on building applications with generative AI and LLMs.",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "Fine-tuning"],
    status: "Completed",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in machine learning, cloud computing, and AI
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
                  <Badge variant="secondary" className="ml-2">
                    {cert.status}
                  </Badge>
                </div>
                <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
