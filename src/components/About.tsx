
import { Music, Users2, PartyPopper, Trophy } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users2 className="w-6 h-6" />, value: "50K+", label: "Active Users" },
    { icon: <PartyPopper className="w-6 h-6" />, value: "10K+", label: "Events Hosted" },
    { icon: <Music className="w-6 h-6" />, value: "500+", label: "Live Concerts" },
    { icon: <Trophy className="w-6 h-6" />, value: "98%", label: "Happy Attendees" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-display uppercase tracking-wider text-primary mb-3">About Crowd Connect</h2>
              <h3 className="text-4xl font-display font-bold mb-6">Creating Unforgettable Moments Since 2023</h3>
              <p className="text-gray-600 leading-relaxed">
                Born from a passion for bringing people together, Crowd Connect has revolutionized how we discover, host, and experience events. Our platform isn't just about finding parties—it's about creating connections, fostering communities, and making memories that last a lifetime.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">Community First</h4>
                  <p className="text-gray-600">We believe in the power of genuine connections and shared experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-2">Quality Experience</h4>
                  <p className="text-gray-600">Every event on our platform is curated for an exceptional experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="font-display font-bold text-3xl mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
