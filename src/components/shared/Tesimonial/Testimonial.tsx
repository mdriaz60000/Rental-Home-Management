

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Young Professional",
      rating: 5,
      content: "Found my perfect downtown apartment in just two weeks! The team understood exactly what I needed and negotiated a great deal for me.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      location: "Los Angeles, CA"
    },
    {
      name: "Michael Chen",
      role: "Growing Family",
      rating: 5,
      content: "After months of searching, we found a spacious home with great schools nearby. The financing assistance made the process stress-free.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      location: "Austin, TX"
    },
    {
      name: "The Rodriguez Family",
      role: "Relocating",
      rating: 4,
      content: "The relocation specialists helped us find a wonderful neighborhood that fit our budget and lifestyle. Couldn't be happier!",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      location: "Miami, FL"
    }
  ];

  const rentalTips = [
    {
      title: "Start Early",
      content: "Begin your search 60-90 days before your move date for the best selection."
    },
    {
      title: "Know Your Budget",
      content: "Remember to factor in utilities, parking, and other potential fees."
    },
    {
      title: "Visit at Different Times",
      content: "See the property at various hours to check noise levels and neighborhood activity."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Success Stories & Rental Tips</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from happy renters and discover expert advice for your search
        </p>
    
      </div>

      {/* Testimonials Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold mb-8 text-center">Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-3 italic">{testimonial.content}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Rental Tips Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">Rental Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rentalTips.map((tip, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-2">
              <h4 className="font-bold text-lg mb-2">{tip.title}</h4>
              <p className="text-gray-600">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;