"use client";

import { Phone, Mail, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const RealEstateAgents = () => {
  const agents = [
    {
      name: "Alexandra Chen",
      role: "Senior Property Specialist",
      experience: "8+ years",
      specialties: ["Luxury Homes", "Investment Properties"],
      phone: "(555) 123-4567",
      email: "alexandra@example.com",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      listings: 142,
      rating: 4.9
    },
    {
      name: "James Rodriguez",
      role: "Urban Living Expert",
      experience: "5+ years",
      specialties: ["Downtown Condos", "First-Time Buyers"],
      phone: "(555) 987-6543",
      email: "james@example.com",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      listings: 87,
      rating: 4.8
    },
    {
      name: "Sarah Johnson",
      role: "Family Home Consultant",
      experience: "6+ years",
      specialties: ["Suburban Homes", "School Districts"],
      phone: "(555) 456-7890",
      email: "sarah@example.com",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      listings: 113,
      rating: 5.0
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Meet Our Agents</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our experienced professionals will guide you through every step of your real estate journey
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all">
            <div className="relative h-64">
              <Image
                src={agent.avatar}
                alt={agent.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                <p className="text-primary">{agent.role}</p>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium">{agent.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Listings</p>
                  <p className="font-medium">{agent.listings}+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="font-medium">{agent.rating}/5</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Specialties</p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((specialty, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  {agent.phone}
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
                <Button className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Contact Agent
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RealEstateAgents;