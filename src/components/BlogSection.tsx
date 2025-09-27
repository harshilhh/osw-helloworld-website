import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogHero from '@/assets/blog-hero.png';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Open Source Development",
      excerpt: "Exploring how open source technologies are shaping the future of software development and collaboration.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Technology",
      image: blogHero,
    },
    {
      id: 2,
      title: "Building Community-Driven Projects",
      excerpt: "Learn the essential strategies for creating and maintaining successful open source projects that attract contributors.",
      author: "Michael Chen",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Community",
      image: blogHero,
    },
    {
      id: 3,
      title: "Open Source in Enterprise: A Complete Guide",
      excerpt: "How enterprises are adopting open source technologies and the benefits they're seeing in their development workflows.",
      author: "Emily Rodriguez",
      date: "March 8, 2025",
      readTime: "6 min read",
      category: "Enterprise",
      image: blogHero,
    },
  ];

  const categories = ["All", "Technology", "Community", "Enterprise", "Tutorials"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights from the open source community
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "border-primary/20 hover:border-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="card-elegant group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center text-primary font-medium group-hover:text-primary-glow transition-colors duration-300">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="btn-hero">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;