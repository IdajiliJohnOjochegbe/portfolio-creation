"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPostProps {
  post: {
    title: string
    content: React.ReactNode
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

      <div className="prose prose-lg max-w-none dark:prose-invert">{post.content}</div>

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
