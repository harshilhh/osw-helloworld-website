import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Mic, Building } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-05T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Calendar, label: 'October 05-06, 2025', sublabel: 'Weekend Event' },
    { icon: Users, label: '600+', sublabel: 'Attendees Expected' },
    { icon: Mic, label: '20+', sublabel: 'Expert Speakers' },
    { icon: Building, label: '50+', sublabel: 'Community Partners' },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-glow/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Title */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="text-foreground">OPEN </span>
            <span className="text-gradient text-glow">SOURCE</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">WEEKEND</span>
            <br />
            <span className="text-gradient text-6xl md:text-8xl">2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for an amazing weekend of learning, networking, and celebrating open source innovation. 
            Connect with developers, contribute to projects, and shape the future of technology together.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button className="btn-hero text-lg px-10 py-6">
            Register Now
          </Button>
          <Button className="btn-outline-hero text-lg px-10 py-6">
            Learn More
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="card-elegant p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="font-display font-bold text-2xl text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-display font-semibold mb-6 text-gradient">
            Countdown to the Event
          </h3>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="card-elegant p-4 md:p-6 min-w-[80px]">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground capitalize">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;