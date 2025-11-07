import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Inline SVG components
const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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
    {
      title: "Datacamp Donates × Dataglobal Hub Scholarship",
      organization: "Datacamp & Dataglobal Hub",
      year: "Aug. 2025",
      value: "$399",
      status: "Awarded",
      description:
        "Prestigious scholarship for professional development in AI and Machine Learning. Selected from thousands of applicants to access premium Datacamp courses and resources for continuous professional growth.",
      achievements: ["AI/ML Course Access", "Professional Development", "Competitive Selection"],
      type: "scholarship",
    },
    {
      title: "NNPC Total Undergraduate Scholarship",
      organization: "Total NNPC",
      year: "Dec. 2020",
      value: "₦150,000",
      status: "Awarded",
      description:
        "Merit-based scholarship awarded through a competitive online test, tenable throughout undergraduate studies for maintaining strong CGPA. Highly competitive national scholarship recognizing academic excellence.",
      achievements: ["Merit-based", "Competitive Online Test", "CGPA Maintenance Requirement"],
      type: "scholarship",
    },
  ]

  const achievements = [
    {
      title: "Best Final Year Project",
      organization: "Computer Engineering Department, University of Ilorin",
      year: "2023",
      status: "Awarded",
      description: "Recognition for innovative Machine Learning project in Computer Vision applications.",
      type: "award",
    },
    {
      title: "Africa DeepTech Challenge Hackathon",
      organization: "Africa DeepTech",
      year: "Sept. 2025",
      status: "Top 3%",
      description:
        "Advanced to top 3% in prestigious Africa DeepTech Challenge. Selected from 4,000+ applicants across Africa for innovative AI/ML solutions and technical excellence in deep learning applications.",
      achievements: ["Top 3% Selection", "4,000+ Applicants", "AI/ML Innovation"],
      type: "competition",
    },
    {
      title: "Africa to Silicon Valley Hackathon",
      organization: "A2SV",
      year: "July 2024",
      status: "Semi-Finalist",
      description:
        "Advanced to semi-finals in highly competitive international hackathon. Secured position among elite developers after competing with 10,000+ entries from across Africa, demonstrating strong problem-solving and coding skills.",
      achievements: ["Semi-Finalist", "10,000+ Entries", "International Competition"],
      type: "competition",
    },
    {
      title: "Best Poster Presentation",
      organization: "FETICON Student Colloquium",
      year: "May 2025",
      status: "Awarded",
      description:
        "Recognition for outstanding research presentation and poster design at the Federal University of Technology Engineering Conference.",
      type: "award",
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
            Recognition for academic excellence, competitive achievements, and professional development opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allItems.map((item, index) => (
            <Card
              key={index}
              className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-accent mb-2 flex items-center group-hover:text-primary transition-colors">
                      {item.type === "scholarship" ? (
                        <Award className="h-5 w-5 mr-2" />
                      ) : (
                        <Trophy className="h-5 w-5 mr-2" />
                      )}
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-medium text-primary">{item.organization}</CardDescription>
                    <CardDescription className="text-muted-foreground text-sm">{item.year}</CardDescription>
                    {item.value && (
                      <CardDescription className="text-accent font-semibold mt-1">{item.value}</CardDescription>
                    )}
                  </div>
                  <Badge
                    variant={item.status === "Awarded" || item.status.includes("Top") ? "default" : "secondary"}
                    className={
                      item.status === "Awarded" || item.status.includes("Top")
                        ? "bg-accent text-accent-foreground whitespace-nowrap"
                        : "whitespace-nowrap"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
                {item.achievements && (
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-accent/5 text-accent border-accent/20">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                )}
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
