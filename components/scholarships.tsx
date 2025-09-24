import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Inline SVG components
const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export function Scholarships() {
  const scholarships = [
    {
      title: "Academic Excellence Scholarship",
      organization: "University of Ilorin",
      year: "2020-2023",
      status: "Awarded",
      description: "Merit-based scholarship for outstanding academic performance in Computer Engineering program.",
      type: "scholarship",
    },
    {
      title: "Nigerian Universities Engineering Scholarship",
      organization: "Federal Ministry of Education",
      year: "2019",
      status: "Applied",
      description: "Competitive scholarship program for engineering students with exceptional academic records.",
      type: "scholarship",
    },
  ]

  const achievements = [
    {
      title: "Best Final Year Project",
      organization: "Computer Engineering Department",
      year: "2023",
      status: "Awarded",
      description: "Recognition for innovative Machine Learning project in Computer Vision applications.",
      type: "award",
    },
    {
      title: "AI/ML Hackathon Winner",
      organization: "Tech Innovation Hub",
      year: "2022",
      status: "1st Place",
      description: "Developed winning solution for real-world computer vision problem using deep learning.",
      type: "competition",
    },
    {
      title: "Kaggle Competition",
      organization: "Kaggle",
      year: "2023",
      status: "Top 10%",
      description: "Achieved top 10% ranking in computer vision competition with 2000+ participants.",
      type: "competition",
    },
  ]

  const allItems = [...scholarships, ...achievements]

  return (
    <section id="scholarships" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-accent mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Scholarships & Achievements</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognition for academic excellence and achievements in technology competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allItems.map((item, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-accent mb-2 flex items-center">
                      {item.type === "scholarship" ? (
                        <Award className="h-5 w-5 mr-2" />
                      ) : (
                        <Trophy className="h-5 w-5 mr-2" />
                      )}
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-medium text-primary">{item.organization}</CardDescription>
                    <CardDescription className="text-muted-foreground">{item.year}</CardDescription>
                  </div>
                  <Badge
                    variant={item.status === "Awarded" || item.status === "1st Place" ? "default" : "secondary"}
                    className={
                      item.status === "Awarded" || item.status === "1st Place" ? "bg-accent text-accent-foreground" : ""
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            More achievements and recognitions to be updated as they are received.
          </p>
        </div>
      </div>
    </section>
  )
}
