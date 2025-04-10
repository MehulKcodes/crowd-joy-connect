
import { PartyPopper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Multiple layered backgrounds for depth */}
      <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-20 scale-105 transform transition-transform duration-1000" 
        style={{
          filter: "saturate(1.2) contrast(1.1)",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-black/20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 mix-blend-multiply" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-float backdrop-blur-sm">
            <PartyPopper size={20} />
            <span className="text-sm font-medium">Welcome to the Party Hub</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Your Ultimate Party Hub – Find, Host, and Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover incredible house parties, private events, and concerts. Connect with like-minded people and create unforgettable memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105">
              Get Started
              <ArrowRight size={20} />
            </button>
            <Link 
              to="/create-event"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-primary border-2 border-primary rounded-full font-medium transition-all transform hover:scale-105"
            >
              Host an Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
