"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const specializations = [
  {
    title: "Large Language Models (LLMs)",
    description: "Advanced expertise in fine-tuning, deployment, and LLM systems.",
    icon: "🤖",
    skills: ["GPT", "Claude", "RAG", "Prompt Engineering"]
  },
  {
    title: "Agentic AI Systems",
    description: "Designing autonomous multi-agent workflows and orchestration.",
    icon: "🧠",
    skills: ["CrewAI", "AutoGen", "Planning", "Tool Use"]
  },
  {
    title: "Deep Learning & Neural Networks",
    description: "Transformers, CNNs, GANs, and sequence models.",
    icon: "🔬",
    skills: ["Transformers", "CNNs", "GANs", "Optimization"]
  },
  {
    title: "Natural Language Processing",
    description: "Modern NLP tasks with transformer-based architectures.",
    icon: "💬",
    skills: ["NER", "Text Gen", "Summarization", "QA Systems"]
  },
  {
    title: "Computer Vision",
    description: "Image modeling, detection, and document AI pipelines.",
    icon: "👁️",
    skills: ["YOLO", "OCR", "Image Segmentation", "OpenCV"]
  },
  {
    title: "MLOps & Production AI",
    description: "Full model lifecycle from dev to scalable deployment.",
    icon: "⚙️",
    skills: ["CI/CD", "Deployment", "Monitoring", "Containerization"]
  },
  {
    title: "Data Science & Analytics",
    description: "Predictive modeling, EDA, visualization, and insights.",
    icon: "📊",
    skills: ["EDA", "BI", "Forecasting", "Feature Engineering"]
  },
  {
    title: "Cloud AI & Edge Computing",
    description: "Deploying and optimizing AI on cloud and edge.",
    icon: "☁️",
    skills: ["SageMaker", "Vertex AI", "Serverless", "Inference"]
  }
]

export function Specializations() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <section id="specializations" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Specializations</h2>
            <p className="text-muted-foreground text-lg">
              Core areas of expertise across AI, deep learning, and intelligent systems.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollLeft}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollRight}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
                     scrollbar-hide pb-4"
        >
          {specializations.map((spec, index) => (
            <Card
              key={index}
              className="min-w-[280px] max-w-[280px] snap-start hover:shadow-lg transition-all border-border/50"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{spec.icon}</span>
                  <CardTitle className="text-xl text-foreground">{spec.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{spec.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-4">
                  {spec.skills.map((skill, skillIndex) => (
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
