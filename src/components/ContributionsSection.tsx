import { useState } from 'react';
import { GitBranch, Star, GitPullRequest, Users, Code, Heart, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import contributionsImg from '@/assets/contributions.png';

const ContributionsSection = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const featuredProjects = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      stars: "220k+",
      contributors: "1.5k+",
      language: "JavaScript",
      category: "Frontend Framework"
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      stars: "102k+",
      contributors: "3k+",
      language: "JavaScript",
      category: "Runtime"
    },
    {
      name: "Kubernetes",
      description: "Production-Grade Container Scheduling and Management",
      stars: "108k+",
      contributors: "6k+",
      language: "Go",
      category: "DevOps"
    },
    {
      name: "TensorFlow",
      description: "An Open Source Machine Learning Framework",
      stars: "185k+",
      contributors: "4k+",
      language: "Python",
      category: "AI/ML"
    }
  ];

  const contributionStats = [
    { icon: GitPullRequest, label: "Pull Requests", value: "2.5M+", growth: "+15%" },
    { icon: Star, label: "Stars Given", value: "890K+", growth: "+22%" },
    { icon: GitBranch, label: "Repositories", value: "125K+", growth: "+18%" },
    { icon: Users, label: "Contributors", value: "45K+", growth: "+28%" }
  ];

  const impactAreas = [
    {
      icon: Code,
      title: "Code Contributions",
      description: "Direct contributions to open source projects through code commits, bug fixes, and feature implementations.",
      metric: "15,000+ commits"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Helping newcomers, answering questions, and fostering an inclusive environment for all contributors.",
      metric: "5,000+ helped"
    },
    {
      icon: Trophy,
      title: "Project Maintenance",
      description: "Maintaining and improving existing projects, ensuring long-term sustainability and growth.",
      metric: "200+ projects"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Creating new tools, libraries, and frameworks that advance the open source ecosystem.",
      metric: "50+ new tools"
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Featured Projects' },
    { id: 'stats', label: 'Contribution Stats' },
    { id: 'impact', label: 'Community Impact' }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
            <GitBranch className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Open Source <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating the power of collaborative development and the amazing contributions 
            from our global community of developers
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 text-center">
          <img 
            src={contributionsImg} 
            alt="Open Source Contributions"
            className="max-w-2xl mx-auto rounded-2xl shadow-xl animate-fade-in-up"
          />
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id 
                    ? "bg-primary text-primary-foreground shadow-glow" 
                    : "border-primary/20 hover:border-primary hover:bg-primary/10"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in-up">
            {activeTab === 'projects' && (
              <div className="grid md:grid-cols-2 gap-6">
                {featuredProjects.map((project, index) => (
                  <div 
                    key={index}
                    className="card-elegant p-6 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.name}
                        </h3>
                        <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <GitBranch className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-primary" />
                          {project.stars}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-primary" />
                          {project.contributors}
                        </span>
                      </div>
                      <span className="text-muted-foreground">{project.language}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contributionStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="card-elegant p-6 text-center group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-display font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-success font-medium">
                      {stat.growth} this year
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="grid md:grid-cols-2 gap-8">
                {impactAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="card-feature animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                      <area.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="text-sm font-semibold text-primary">
                      {area.metric}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="card-elegant p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to <span className="text-gradient">Contribute</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers making meaningful contributions to open source projects. 
            Whether you're a beginner or an expert, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Start Contributing
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Find Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;