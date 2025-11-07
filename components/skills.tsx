"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Cloud, Wrench } from "lucide-react"

const skills = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Programming Languages",
    items: ["Python", "JavaScript / TypeScript", "SQL", "R", "Java", "C++"],
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "ML / AI Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Keras",
      "Hugging Face",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "Cloud & MLOps",
    items: [
      "AWS (SageMaker, EC2, S3, Lambda, Bedrock)",
      "Google Cloud (Vertex AI, BigQuery, AutoML)",
      "Azure (Azure ML, Cognitive Services)",
      "Vercel (Serverless, Edge Functions)",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Weights & Biases",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Development Tools & AI Platforms",
    items: [
      "Git & GitHub Actions",
      "Jupyter",
      "VS Code",
      "Streamlit",
      "FastAPI",
      "Flask",
      "Next.js",
      "React",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "OpenAI API",
      "Anthropic Claude",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "Chroma",
      "FAISS",
      "Gradio",
      "Chainlit",
      "AutoGen",
      "CrewAI",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated overview of my technical expertise across programming,
            machine learning, cloud platforms, and modern AI tools.
          </p>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
