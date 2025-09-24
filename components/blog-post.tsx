"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

interface BlogPostProps {
  post: {
    title: string
    content: string
    date: string
    readTime: string
    tags: string[]
    author: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            ← Back to Blog
          </Button>
        </Link>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-6 text-balance">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-bold text-foreground mb-6 mt-8">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">{children}</h3>,
            p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
            ul: ({ children }) => <ul className="text-muted-foreground mb-4 space-y-2">{children}</ul>,
            li: ({ children }) => (
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{children}</span>
              </li>
            ),
            strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
            code: ({ children }) => <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
                {children}
              </blockquote>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Written by</p>
            <p className="font-semibold text-foreground">{post.author}</p>
          </div>
          <Link href="/blog">
            <Button variant="outline">Read More Articles</Button>
          </Link>
        </div>
      </div>
    </article>
  )
}
