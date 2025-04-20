"use client";

import { Home, ShieldCheck, Percent, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const WhyChooseUs = () => {
  const features = [
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Wide Range Of Properties",
      description: "Discover thousands of properties across all price ranges and locations to find your perfect match.",
    
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Trusted by thousands",
      description: "Join our community of satisfied clients who have found their dream homes through our services.",

    },
    {
      icon: <Percent className="w-8 h-8 text-primary" />,
      title: "Financing made easy",
      description: "Our financial experts will guide you through mortgage options and get you the best rates.",
    
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "We are here near you",
      description: "With offices in major cities nationwide, we're always nearby when you need us.",
  
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide full service at every step to ensure your real estate journey.
        </p>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
   
            
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;