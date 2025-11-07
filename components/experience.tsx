"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const CalendarDaysIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const mainExperiences = [
  {
    title: "Graduate Research Assistant",
    company: "Computer Engineering Department, University of Ilorin",
    location: "Ilorin, Nigeria",
    period: "Mar. 2025 – Sep. 2025",
    description:
      "Streamlined research processes through advanced data analysis and engineering, focusing on vision-language models and embedded systems deployment.",
    achievements: [
      <>Reduced overall project time by <span className="font-semibold">30%</span> through advanced data analysis and engineering</>,
      <>Optimized vision-language models for Raspberry Pi deployment, enabling real-world edge AI applications</>,
      <>Enhanced ML models via hyperparameter tuning, achieving up to <span className="font-semibold">20%</span> improvement in accuracy</>,
      <>Collected and labeled diverse institutional datasets with data augmentation techniques</>,
    ],
  },
  {
    title: "Machine Learning and Computer Vision Research Intern",
    company: "Queryfier LLC",
    location: "Colorado, USA (Remote)",
    period: "May 2024 – Nov. 2024",
    description:
      "Researched and adapted cutting-edge vision-language models, focusing on human orientation detection and practical computer vision applications.",
    achievements: [
      <>Achieved <span className="font-semibold">15–20%</span> improvement in accuracy across multiple tasks using Gemini Vision API</>,
      <>Applied computer vision techniques to human orientation detection and object recognition</>,
      <>Developed scalable computer vision systems bridging academic research with industry innovation</>,
      <>Implemented image editing solutions including color and brightness adjustment algorithms</>,
    ],
    link: "https://queryfier.com",
  },
  {
    title: "Machine Learning Bootcamp Instructor",
    company: "National Society of Black Engineers in collaboration with Robotics and Artificial Intelligence-INNetworks",
    location: "University of Ilorin, Nigeria",
    period: "Nov. 2024 – Jan. 2025",
    description:
      "Delivered structured lessons on introductory machine learning and computer vision, combining theory with hands-on training.",
    achievements: [
      <>Guided learners through capstone project achieving <span className="font-semibold">92%</span> CNN classification accuracy on chest X-ray dataset</>,
      <>Increased concept retention by <span className="font-semibold">35%</span> through interactive projects and collaborative learning</>,
      <>Improved participant project performance by <span className="font-semibold">30%</span> through structured mentorship</>,
      <>Designed comprehensive curriculum covering ML fundamentals and practical applications</>,
    ],
  },
  {
    title: "Python/Automation Instructor",
    company: "Center for Applied Machine Learning and Data Science (CAMLDS)",
    location: "Abuja, Nigeria",
    period: "Feb. 2025 – May 2025",
    description:
      "Taught Python fundamentals and guided students through beginner-friendly projects while introducing automation scripting.",
    achievements: [
      <>Taught Python fundamentals and guided students in building beginner-friendly projects (calculators, quizzes, simple games)</>,
      <>Introduced automation scripting with hands-on assignments to strengthen practical coding skills</>,
      <>Improved student problem-solving performance by over <span className="font-semibold">40%</span> through project-based learning</>,
    ],
    link: "https://camlds.org",
  },
]

const extraExperiences = [
  {
    title: "Machine Learning Bootcamp Instructor",
    company: "Computer Engineering Student Association (CESA)",
    location: "Ilorin, Nigeria",
    period: "Feb. 2025 – May. 2025",
    description:
      "Co-taught the ML track to STEM students, covering supervised learning, Python, and computer vision concepts with hands-on projects.",
    achievements: [
      <>
        Mentored participants in building and deploying predictive models, including a logistic regression demo (
        <a
          href="https://student-performance-predictor-odj2rxi2gnp5s99yf86sq4.streamlit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          deployed to Streamlit
        </a>
        )
      </>,
      <>Supported interdisciplinary capstone merging ML with web + IoT systems</>,
      <>Demonstrated integration of computer vision and AI into real-world, multi-domain applications</>,
    ],
  },


  {
    title: "Academic/Coding Tutor",
    company: "Enabled Multiconcept",
    location: "Nigeria (Online)",
    period: "July 2025 – Present",
    description:
      "Delivered engaging online lessons to diverse international learners, teaching coding fundamentals and preparing students for competitive exams.",
    achievements: [
      <>Taught Python, automation, and introductory ML to students across Europe and the U.S.</>,
      <>Achieved <span className="font-semibold">35%</span> increase in student engagement through interactive learning activities</>,
      <>Improved pass rates by <span className="font-semibold">30%</span> for students preparing for UK 11+ and GCSE exams</>,
      <>Designed digital tools and quizzes using platforms like Blooket for enhanced learning</>,
    ],
    link: "https://enabledmulticoncept.com",
  },
]

export function Experience() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A journey through research, industry collaboration, and education, each role contributing to my expertise in AI/ML and my passion for knowledge sharing.
          </p>
        </div>

        <div className="space-y-8">
          {[...mainExperiences, ...(showAll ? extraExperiences : [])].map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-primary font-semibold">{exp.company}</p>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <CalendarDaysIcon />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPinIcon />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-muted-foreground text-muted-foreground rounded-lg hover:bg-muted/50 transition text-sm font-medium"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  )
}
