import { TrendingUp, Users, Code2, Award } from 'lucide-react';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      value: '600+',
      label: 'Expected Attendees',
      description: 'Developers, students, and tech enthusiasts',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Community Partners',
      description: 'Leading tech companies and organizations',
    },
    {
      icon: Code2,
      value: '20+',
      label: 'Expert Speakers',
      description: 'Industry leaders and open source maintainers',
    },
    {
      icon: TrendingUp,
      value: '25+',
      label: 'Technical Sessions',
      description: 'Workshops, talks, and hands-on activities',
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Impact</span> in Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a growing community of developers committed to advancing open source technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="card-elegant p-8 text-center group hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elegant p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Be Part of the <span className="bg-gradient-weekend bg-clip-text text-transparent">Weekend Revolution</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Open Source Weekend 2025 is more than just an event - it's a movement. 
              Join us for an entire weekend of shaping the future of technology through collaboration and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Secure Your Spot
              </button>
              <button className="btn-outline-hero">
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;