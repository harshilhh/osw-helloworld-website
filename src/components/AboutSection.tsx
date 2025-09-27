import { BookOpen, Users2, Trophy, Code, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import osdLogo from '@/assets/osd-logo.png';

const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learn & Contribute',
      description: 'Discover new technologies, learn best practices, and get hands-on experience contributing to real open source projects.',
    },
    {
      icon: Users2,
      title: 'Connect',
      description: 'Network with fellow developers, open source maintainers, and tech enthusiasts from the Indian tech community.',
    },
    {
      icon: Trophy,
      title: 'Celebrate',
      description: 'Celebrate the achievements of the open source community and discover exciting new projects and opportunities.',
    },
  ];

  const highlights = [
    { icon: Code, label: 'Technical Sessions', value: '15+' },
    { icon: Heart, label: 'Community Workshops', value: '8+' },
    { icon: Zap, label: 'Lightning Talks', value: '12+' },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img src={osdLogo} alt="OSD Logo" className="h-16 w-16 animate-pulse-slow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="bg-gradient-weekend bg-clip-text text-transparent">Open Source Weekend</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Open Source Weekend 2025 is a community-driven event celebrating the power
            of open source software. Join developers, maintainers, and enthusiasts
            for an entire weekend of learning, collaboration, and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-feature text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-display font-bold mb-4">
              What to <span className="text-gradient">Expect</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              A packed day full of learning, networking, and open source contributions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-primary mb-1">
                  {highlight.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Ready to Join Us?</h4>
            <p className="text-muted-foreground mb-6">
              Don't miss out on this amazing open source weekend experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                Register Now
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join WhatsApp Group
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;