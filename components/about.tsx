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

const AwardIcon = () => (
  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const skills = [
  {
    icon: BrainIcon,
    title: "LLMs & Agentic AI",
    description: "Developing autonomous agents powered by Large Language Models for reasoning, planning, and execution",
  },
  {
    icon: EyeIcon,
    title: "Computer Vision & Multimodal AI",
    description: "Object detection, recognition, and integrating vision with language for multimodal tasks",
  },
  {
    icon: CodeIcon,
    title: "Production AI Systems",
    description: "Deploying scalable ML models with cloud platforms, MLOps, and modern frameworks",
  },
  {
    icon: BookOpenIcon,
    title: "Research & Innovation",
    description: "AI research experience in healthcare, assistive technologies, and emerging AI paradigms",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Machine Learning Engineer and Computer Engineering graduate from the University of Ilorin, specializing in
            Large Language Models, Computer Vision, and production-scale AI systems. I'm passionate about connecting
            research with real-world impact across healthcare, technology, and emerging applications, while also
            mentoring peers and contributing to AI education initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                {skill.icon()}
              </div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <p className="text-muted-foreground text-pretty flex-grow">{skill.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Core Focus Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">• LLMs & Agentic AI</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                    Developing autonomous agents powered by Large Language Models for reasoning, planning, and
                    execution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">• Computer Vision & Multimodal AI</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                    Object detection, recognition, and integrating vision with language for multimodal tasks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">• Production AI Systems</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                    Deploying scalable ML models with cloud platforms, MLOps, and modern frameworks.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">• Research & Innovation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed ml-4">
                    AI research experience in healthcare, assistive technologies, and emerging AI paradigms.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">LLMs & Generative AI</h4>
                <div className="flex flex-wrap gap-2">
                  {["GPT-4", "Claude", "Llama", "Fine-tuning", "RAG", "Vector DBs"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Computer Vision & ML</h4>
                <div className="flex flex-wrap gap-2">
                  {["OpenCV", "PyTorch", "TensorFlow", "YOLO", "Object Detection", "Image Processing"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cloud & Production</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "GCP", "Azure", "Docker", "Kubernetes", "MLOps"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-chart-2/10 text-chart-2 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
