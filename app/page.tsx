import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Specializations } from "@/components/specializations"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Scholarships } from "@/components/scholarships"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Specializations />
      <Projects />
      <Education />
      <Scholarships />
      <Contact />
    </main>
  )
}
