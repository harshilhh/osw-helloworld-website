import { Calendar, Clock, MapPin, Users, Code, Coffee, Trophy, Mic } from 'lucide-react';

const EventSchedule = () => {
  const scheduleData = [
    {
      day: "Saturday - Day 1",
      date: "October 05, 2025",
      events: [
        {
          time: "09:00 AM",
          title: "Registration & Welcome Coffee",
          type: "registration",
          icon: Coffee,
          description: "Network with fellow developers and grab some coffee",
          location: "Main Hall"
        },
        {
          time: "10:00 AM",
          title: "Opening Keynote",
          type: "keynote",
          icon: Mic,
          description: "The Future of Open Source Development",
          speaker: "Sarah Johnson, GitHub",
          location: "Auditorium"
        },
        {
          time: "11:00 AM",
          title: "Building Community-Driven Projects",
          type: "talk",
          icon: Users,
          description: "Learn how to build and maintain successful OSS projects",
          speaker: "Michael Chen, Mozilla",
          location: "Room A"
        },
        {
          time: "12:00 PM",
          title: "Hands-on Workshop: First Contribution",
          type: "workshop",
          icon: Code,
          description: "Make your first open source contribution guided by mentors",
          location: "Workshop Room 1"
        },
        {
          time: "01:00 PM",
          title: "Lunch & Networking",
          type: "break",
          icon: Coffee,
          description: "Connect with speakers and attendees",
          location: "Cafeteria"
        },
        {
          time: "02:30 PM",
          title: "Lightning Talks",
          type: "talk",
          icon: Mic,
          description: "Quick 5-minute presentations from community members",
          location: "Main Stage"
        },
        {
          time: "04:00 PM",
          title: "Panel: Open Source in Enterprise",
          type: "panel",
          icon: Users,
          description: "How companies are adopting open source technologies",
          location: "Auditorium"
        }
      ]
    },
    {
      day: "Sunday - Day 2",
      date: "October 06, 2025",
      events: [
        {
          time: "10:00 AM",
          title: "Advanced Git & Collaboration",
          type: "workshop",
          icon: Code,
          description: "Master advanced Git workflows and collaboration techniques",
          speaker: "Emily Rodriguez, GitLab",
          location: "Workshop Room 2"
        },
        {
          time: "11:30 AM",
          title: "Open Source AI & Machine Learning",
          type: "talk",
          icon: Mic,
          description: "Exploring open source tools in AI/ML landscape",
          speaker: "David Park, TensorFlow",
          location: "Room B"
        },
        {
          time: "01:00 PM",
          title: "Community Lunch",
          type: "break",
          icon: Coffee,
          description: "Final networking opportunity",
          location: "Cafeteria"
        },
        {
          time: "02:30 PM",
          title: "Hackathon Presentations",
          type: "presentation",
          icon: Trophy,
          description: "Teams present their weekend projects",
          location: "Main Hall"
        },
        {
          time: "04:00 PM",
          title: "Closing Ceremony & Awards",
          type: "ceremony",
          icon: Trophy,
          description: "Wrap-up, awards, and final thoughts",
          location: "Auditorium"
        }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'keynote': return 'bg-gradient-to-r from-primary to-primary-glow';
      case 'workshop': return 'bg-gradient-to-r from-accent to-blue';
      case 'talk': return 'bg-gradient-to-r from-orange to-primary';
      case 'panel': return 'bg-gradient-to-r from-blue to-accent';
      case 'ceremony': return 'bg-gradient-weekend';
      default: return 'bg-gradient-to-r from-secondary to-muted';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
            <Calendar className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Weekend <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days packed with talks, workshops, networking, and hands-on learning experiences
          </p>
        </div>

        {/* Schedule */}
        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="animate-fade-in-up" style={{ animationDelay: `${dayIndex * 0.2}s` }}>
              {/* Day Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-display font-bold text-gradient mb-2">
                  {day.day}
                </h3>
                <p className="text-muted-foreground">{day.date}</p>
              </div>

              {/* Events */}
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className="card-elegant p-6 group hover:shadow-glow animate-scale-in"
                    style={{ animationDelay: `${(dayIndex * 5 + eventIndex) * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Time */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center space-x-2 text-primary font-semibold">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      {/* Event Icon */}
                      <div className="flex-shrink-0">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${getEventColor(event.type)} shadow-md`}>
                          <event.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1">
                        <h4 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground mb-2">
                          {event.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          {event.speaker && (
                            <div className="flex items-center space-x-1 text-primary">
                              <Users className="h-4 w-4" />
                              <span>{event.speaker}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Event Type Badge */}
                      <div className="flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getEventColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="card-elegant p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Don't Miss Out on This <span className="bg-gradient-weekend bg-clip-text text-transparent">Amazing Weekend</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Secure your spot for the most exciting open source event of the year. 
              Early bird pricing available for a limited time!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Register Now - Early Bird
              </button>
              <button className="btn-weekend">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;