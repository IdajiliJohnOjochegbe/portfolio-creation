"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const blogPosts = [
  {
    slug: "future-of-llms-2024",
    title: "The Future of Large Language Models: Trends and Predictions for 2024",
    excerpt:
      "Exploring the key trends, challenges, and opportunities shaping the future of Large Language Models in 2024 and beyond.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["LLMs", "AI", "Machine Learning", "Future Tech"],
    author: "John Ojochegbe",
  },
  {
    slug: "building-agentic-ai-systems",
    title: "Building Agentic AI Systems: A Practical Guide",
    excerpt:
      "A comprehensive guide to building autonomous AI agents that can plan, reason, and execute complex tasks independently.",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Agentic AI", "AutoGen", "CrewAI", "AI Development"],
    author: "John Ojochegbe",
  },
  {
    slug: "mlops-best-practices-2024",
    title: "MLOps Best Practices: Deploying ML Models at Scale",
    excerpt:
      "Essential practices and tools for successfully deploying and managing machine learning models in production environments.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["MLOps", "DevOps", "Machine Learning", "Production"],
    author: "John Ojochegbe",
  },
  {
    slug: "computer-vision-trends-2024",
    title: "Computer Vision in 2024: From Object Detection to Multimodal AI",
    excerpt:
      "Exploring the latest advances in computer vision, including real-time object detection, image generation, and multimodal applications.",
    date: "2024-01-20",
    readTime: "9 min read",
    tags: ["Computer Vision", "Object Detection", "Multimodal AI", "Deep Learning"],
    author: "John Ojochegbe",
  },
  {
    slug: "nlp-transformers-evolution",
    title: "The Evolution of Transformers: From BERT to GPT and Beyond",
    excerpt:
      "A deep dive into how transformer architecture has revolutionized NLP and continues to drive innovation in language understanding.",
    date: "2024-01-25",
    readTime: "11 min read",
    tags: ["NLP", "Transformers", "BERT", "GPT", "Language Models"],
    author: "John Ojochegbe",
  },
  {
    slug: "cloud-ai-deployment-strategies",
    title: "Cloud AI Deployment Strategies: AWS vs GCP vs Azure",
    excerpt:
      "Comparing major cloud platforms for AI deployment, covering costs, features, and best practices for each provider.",
    date: "2024-01-30",
    readTime: "13 min read",
    tags: ["Cloud Computing", "AWS", "GCP", "Azure", "AI Deployment"],
    author: "John Ojochegbe",
  },
]

export function BlogList() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-4">AI & Machine Learning Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on the latest developments in artificial intelligence, machine learning, and
          emerging technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link key={index} href={`/blog/${post.slug}`}>
            <Card className="hover:shadow-lg transition-all duration-300 border-border/50 group h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">By {post.author}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
