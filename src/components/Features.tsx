
import { Calendar, Users, Ticket, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Create Events",
      description: "Set up and customize your event in minutes with our intuitive tools",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Connect with People",
      description: "Build your network and meet people who share your interests",
    },
    {
      icon: <Ticket className="w-8 h-8 text-primary" />,
      title: "Secure Ticketing",
      description: "Easy and secure ticket management for hosts and attendees",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Memorable Experiences",
      description: "Create lasting memories with amazing events and people",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Crowd Connect?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of people who trust Crowd Connect to discover and host amazing events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
