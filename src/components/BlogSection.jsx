"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Typography in Web Design: Best Practices",
      excerpt: "Learn how to use typography effectively to create beautiful and readable web experiences.",
      date: "March 15, 2025",
      author: "John Doe",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      slug: "typography-in-web-design",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with CSS Grid",
      excerpt: "A comprehensive guide to creating flexible and responsive layouts using CSS Grid.",
      date: "February 28, 2025",
      author: "John Doe",
      category: "Development",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      slug: "responsive-layouts-css-grid",
    },
    {
      id: 3,
      title: "The Future of JavaScript: What's Coming in 2025",
      excerpt: "Exploring the upcoming features and trends in JavaScript that will shape web development.",
      date: "February 10, 2025",
      author: "John Doe",
      category: "Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      slug: "future-of-javascript-2025",
    },
    {
      id: 4,
      title: "Designing for Accessibility: Beyond the Basics",
      excerpt: "Taking your accessibility knowledge to the next level with advanced techniques and considerations.",
      date: "January 25, 2025",
      author: "John Doe",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop",
      slug: "designing-for-accessibility",
    },
    {
      id: 5,
      title: "From Figma to Code: A Designer's Journey",
      excerpt: "My personal experience transitioning from design to development and lessons learned along the way.",
      date: "January 12, 2025",
      author: "John Doe",
      category: "Career",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
      slug: "figma-to-code-journey",
    },
    {
      id: 6,
      title: "Creating Custom Fonts: A Step-by-Step Guide",
      excerpt: "Learn how to design and implement your own custom fonts for unique brand identity.",
      date: "December 30, 2024",
      author: "John Doe",
      category: "Design",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop",
      slug: "creating-custom-fonts",
    },
  ]

  // Extract unique categories
  const categories = ["all", ...new Set(blogPosts.map((post) => post.category))]

  // Filter posts based on active category
  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-center mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-purple-600 dark:text-purple-400 font-medium mb-2"
          >
            Latest Articles
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            From The Blog
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Thoughts, insights, and perspectives on design, development, and the digital landscape.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Featured Post (first post) */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <a
              href={`/blog/${filteredPosts[0].slug}`}
              className="group block"
              onClick={(e) => {
                e.preventDefault()
                // Handle navigation to blog post detail
                console.log(`Navigate to: /blog/${filteredPosts[0].slug}`)
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {filteredPosts[0].date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {filteredPosts[0].author}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                    <span className="flex items-center gap-1">
                      <Tag size={14} />
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="inline-flex items-center gap-2 font-medium text-purple-600 dark:text-purple-400 group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="order-1 md:order-2 overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                    <img
                      src={filteredPosts[0].image || "/placeholder.svg"}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={`/blog/${post.slug}`}
                className="group block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                onClick={(e) => {
                  e.preventDefault()
                  // Handle navigation to blog post detail
                  console.log(`Navigate to: /blog/${post.slug}`)
                }}
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500 dark:text-gray-400">No blog posts found in this category.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:gap-3 transition-all"
            onClick={(e) => {
              e.preventDefault()
              // Handle navigation to blog page
              console.log("Navigate to: /blog")
            }}
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogSection

