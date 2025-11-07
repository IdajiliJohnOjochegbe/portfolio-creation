"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredCerts = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI · Coursera · Stanford CPD · UVM",
    date: "May 2024",
    description:
      "Comprehensive specialization covering supervised, unsupervised, and reinforcement learning with real-world projects.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning", "Predictive Modeling"],
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/specialization/9RTLJC3F7XT7",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    date: "Aug 2025",
    description:
      "Fundamental certification in responsible AI use, productivity with AI tools, and effective prompting techniques.",
    skills: ["Prompt Engineering", "AI Productivity", "Responsible AI"],
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/specialization/32A7HJWI14JS",
  },
  {
    title: "Developing LLM Applications with LangChain",
    issuer: "DataCamp",
    date: "Sep 2025",
    description:
      "Hands-on training in building and deploying LLM-powered applications using LangChain, LangGraph, and agentic AI systems.",
    skills: ["LangChain", "LLMs", "Agentic AI", "LangGraph"],
    status: "Completed",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f2a375bf705fb514f416e30e6b4fb0de241214f5",
  },
  {
    title: "Multi AI Agent Systems with crewAI",
    issuer: "DeepLearning.AI",
    date: "Jul 2024",
    description:
      "Hands-on specialization in building and deploying AI agent systems using crewAI framework.",
    skills: ["AI Agents", "Prompt Engineering"],
    status: "Completed",
    link: "https://www.cloudskillsboost.google/public_profiles/00cd399f-d849-4a90-a574-89e67cfcfa80/badges/9724137",
  },
]

const otherCerts = [
  {
    title: "Discover the Art of Prompting",
    issuer: "Google",
    date: "Aug 2025",
    description: "Certification on advanced prompt engineering techniques and applications.",
    skills: ["Prompt Engineering"],
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/records/9YKM8UPYG5RO",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Jul 2024",
    description:
      "Introduction to core generative AI concepts, LLMs, and practical applications of modern AI technologies.",
    skills: ["Generative AI", "LLMs", "AI Applications"],
    status: "Completed",
    link: "https://www.cloudskillsboost.google/public_profiles/00cd399f-d849-4a90-a574-89e67cfcfa80/badges/9724137",
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    date: "May 2024",
    description: "Beginner-level course covering deep learning fundamentals and neural networks.",
    skills: ["Neural Networks", "Deep Learning"],
    status: "Completed",
    link: "https://www.kaggle.com/learn/certification/idajilijohnojochegbe/intro-to-deep-learning",
  },
  {
    title: "Aspire Leaders Program",
    issuer: "Aspire Institute",
    date: "May 2025",
    description:
      "Global leadership development program for high-impact young leaders across diverse backgrounds.",
    skills: ["Leadership", "Global Collaboration", "Problem Solving"],
    status: "Completed",
    link: "https://drive.google.com/file/d/1KRFtkDUoC-Or_9jvGsQzi0qaJHX5P8_6/view?usp=sharing",
  },
]

const inProgressCerts = [
  {
    title: "Google Data Analytics",
    issuer: "Google / Coursera",
    description: "Professional certificate in data analytics covering SQL, data visualization, and business problem-solving.",
    skills: ["Data Analytics", "SQL", "Data Visualization"],
    status: "In Progress",
    link: "#",
  },
  {
    title: "Applied AI Lab: Deep Learning for Computer Vision",
    issuer: "WorldQuant University",
    description:
      "Lab-based course applying advanced deep learning techniques to solve computer vision problems.",
    skills: ["Computer Vision", "Deep Learning", "AI Applications"],
    status: "In Progress",
    link: "#",
  },
  {
    title: "Serverless Agentic Workflow with Amazon Bedrock",
    issuer: "AWS",
    description:
      "Specialization on building agentic AI workflows using AWS Bedrock’s serverless LLM infrastructure.",
    skills: ["Agentic AI", "AWS Bedrock", "Serverless AI"],
    status: "In Progress",
    link: "#",
  },
]

export function Certifications() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of certifications showcasing expertise in AI, machine learning, cloud, and leadership.
          </p>
        </div>

        {/* Featured Certifications */}
        <h3 className="text-2xl font-semibold mb-6">Featured Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {featuredCerts.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
                  <Badge variant="secondary">{cert.status}</Badge>
                </div>
                <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Credential
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Certifications */}
        <h3 className="text-2xl font-semibold mb-6">Other Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {(showAll ? otherCerts : otherCerts.slice(0, 2)).map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
                  <Badge variant="secondary">{cert.status}</Badge>
                </div>
                <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Credential
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mb-12">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>

        {/* In Progress Section */}
        <h3 className="text-2xl font-semibold mb-6">In Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressCerts.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-dashed border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{cert.title}</CardTitle>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {cert.status}
                  </Badge>
                </div>
                <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  View Credential
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
