import { Card } from "@/components/ui/card"

const BrainIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const EyeIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const CodeIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 7.943 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const skills = [
  {
    icon: BrainIcon,
    title: "LLMs & Agentic AI",
    description:
      "Building intelligent agents powered by Large Language Models for reasoning, planning, and execution.",
    tools: ["GPT-4", "Claude", "Llama", "Fine-tuning", "RAG", "Vector DBs"],
  },
  {
    icon: EyeIcon,
    title: "Computer Vision & Multimodal AI",
    description:
      "Developing vision systems for object detection, recognition, and integrating language, image, and video.",
    tools: ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "Image Processing"],
  },
  {
    icon: CodeIcon,
    title: "Production AI Systems",
    description:
      "Deploying scalable ML models with cloud platforms, MLOps, and modern frameworks for real-world impact.",
    tools: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "MLOps"],
  },
  {
    icon: BookOpenIcon,
    title: "Research & Innovation",
    description:
      "AI research experience in healthcare, assistive technologies, and emerging AI paradigms.",
    tools: ["Experimentation", "Prototyping", "Scientific Papers"],
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Machine Learning Engineer and Computer Engineering graduate from the University of Ilorin. 
            I specialize in Large Language Models, Computer Vision, and production-scale AI systems. 
            Passionate about connecting research with real-world applications across healthcare, technology, and education.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-shadow h-full flex flex-col justify-between"
            >
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  {skill.icon()}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground mb-6">{skill.description}</p>
              </div>

              {/* Tool bubbles */}
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
