import { ExternalLink, Heart, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sponsor1 from '@/assets/sponsor-1.png';
import sponsor2 from '@/assets/sponsor-2.png';
import sponsor3 from '@/assets/sponsor-3.png';

const SponsorsSection = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      description: "Our premier partners driving open source innovation",
      sponsors: [
        {
          name: "TechCorp",
          logo: sponsor1,
          website: "https://techcorp.com",
          description: "Leading cloud infrastructure provider empowering developers worldwide",
        },
      ],
    },
    {
      tier: "Gold Sponsors",
      description: "Committed partners supporting the open source community",
      sponsors: [
        {
          name: "DevFlow",
          logo: sponsor2,
          website: "https://devflow.com",
          description: "Modern development tools for collaborative coding",
        },
        {
          name: "CloudTech",
          logo: sponsor3,
          website: "https://cloudtech.com",
          description: "Scalable cloud solutions for modern applications",
        },
      ],
    },
  ];

  const communityPartners = [
    "GitHub", "GitLab", "JetBrains", "MongoDB", "Redis", "Docker", 
    "Kubernetes", "CNCF", "Apache Foundation", "Mozilla", "Linux Foundation", "OpenJS"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Handshake className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're grateful to our amazing sponsors and community partners who make Open Source Weekend possible
          </p>
        </div>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tierIndex} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2 text-gradient">
                {tier.tier}
              </h3>
              <p className="text-muted-foreground">
                {tier.description}
              </p>
            </div>

            <div className={`grid gap-8 ${tier.sponsors.length === 1 ? 'justify-center' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {tier.sponsors.map((sponsor, index) => (
                <div 
                  key={index}
                  className="card-elegant p-8 text-center group hover:shadow-glow animate-fade-in-up"
                  style={{ animationDelay: `${(tierIndex * 3 + index) * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h4 className="text-xl font-display font-semibold mb-3 text-foreground">
                    {sponsor.name}
                  </h4>
                  
                  <p className="text-muted-foreground mb-6">
                    {sponsor.description}
                  </p>

                  <Button 
                    variant="outline" 
                    className="border-primary/20 hover:border-primary hover:bg-primary/10 group-hover:shadow-md"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Community Partners */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">
            Community <span className="text-gradient">Partners</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Proud to be supported by these amazing organizations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {communityPartners.map((partner, index) => (
            <div 
              key={index}
              className="card-elegant p-4 text-center group hover:shadow-md animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {partner}
              </div>
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="card-elegant p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
            <Heart className="h-8 w-8 text-primary-foreground" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Join Our <span className="text-gradient">Mission</span>
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us to support the open source community and showcase your commitment to innovation. 
            Multiple sponsorship tiers available with great visibility and networking opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero">
              Become a Sponsor
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Sponsorship Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;