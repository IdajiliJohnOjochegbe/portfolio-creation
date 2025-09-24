"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const programmingLanguages = [
  { name: "Python", level: 95, icon: "🐍" },
  { name: "JavaScript/TypeScript", level: 90, icon: "⚡" },
  { name: "SQL", level: 85, icon: "🗃️" },
  { name: "R", level: 80, icon: "📊" },
  { name: "Java", level: 75, icon: "☕" },
  { name: "C++", level: 70, icon: "⚙️" },
]

const mlFrameworks = [
  { name: "TensorFlow", level: 90, icon: "🧠" },
  { name: "PyTorch", level: 85, icon: "🔥" },
  { name: "Scikit-learn", level: 95, icon: "🔬" },
  { name: "Keras", level: 88, icon: "🎯" },
  { name: "Hugging Face", level: 82, icon: "🤗" },
  { name: "OpenCV", level: 78, icon: "👁️" },
  { name: "Pandas", level: 95, icon: "🐼" },
  { name: "NumPy", level: 92, icon: "🔢" },
]

const cloudPlatforms = [
  { name: "AWS", level: 85, services: ["SageMaker", "EC2", "S3", "Lambda", "Bedrock"] },
  { name: "Google Cloud", level: 80, services: ["Vertex AI", "BigQuery", "Cloud Run", "AutoML"] },
  { name: "Microsoft Azure", level: 75, services: ["Azure ML", "Cognitive Services", "Functions"] },
  { name: "Vercel", level: 90, services: ["Deployment", "Serverless", "Edge Functions"] },
]

const devTools = [
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub Actions",
  "MLflow",
  "Weights & Biases",
  "Jupyter",
  "VS Code",
  "Postman",
  "Streamlit",
  "FastAPI",
  "Flask",
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Redis",
]

const aiTools = [
  "OpenAI API",
  "Anthropic Claude",
  "Langchain",
  "LlamaIndex",
  "Pinecone",
  "Chroma",
  "FAISS",
  "Ollama",
  "Gradio",
  "Chainlit",
  "AutoGen",
  "CrewAI",
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, frameworks, and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Programming Languages */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {programmingLanguages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground flex items-center gap-2">
                      <span className="text-lg">{lang.icon}</span>
                      {lang.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{lang.level}%</span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* ML/AI Frameworks */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">ML/AI Frameworks & Libraries</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mlFrameworks.map((framework, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground flex items-center gap-2">
                      <span className="text-lg">{framework.icon}</span>
                      {framework.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{framework.level}%</span>
                  </div>
                  <Progress value={framework.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Cloud Platforms */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Cloud Platforms & Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-foreground">{platform.name}</h4>
                    <span className="text-sm text-muted-foreground">{platform.level}%</span>
                  </div>
                  <Progress value={platform.level} className="h-2" />
                  <div className="space-y-1">
                    {platform.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs mr-1 mb-1">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Development Tools & AI Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Development Tools & Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {devTools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">AI Tools & Platforms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
