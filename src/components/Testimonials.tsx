
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Host",
      content: "Crowd Connect made hosting my house party a breeze. The platform's intuitive design and helpful features exceeded my expectations!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Regular Attendee",
      content: "I've discovered so many amazing events through Crowd Connect. The community is vibrant and welcoming - exactly what I was looking for!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Concert Organizer",
      content: "The ticketing system is secure and reliable. My guests love how easy it is to RSVP and get updates about the events.",
      rating: 5,
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who've found their perfect events through Crowd Connect
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
