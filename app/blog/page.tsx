import { Navigation } from "@/components/navigation"
import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <BlogList />
      </div>
    </main>
  )
}
