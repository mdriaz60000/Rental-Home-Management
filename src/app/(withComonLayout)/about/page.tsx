// app/about/page.tsx
import { Building2, Globe, Trophy, HeartHandshake,  Leaf } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const stats = [
    { value: "10K+", label: "Happy Residents" },
    { value: "5K+", label: "Properties Listed" },
    { value: "50+", label: "Cities Covered" },
    { value: "24/7", label: "Customer Support" },
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Real estate veteran with 15+ years experience transforming rental markets.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      bio: "Ensures seamless experiences for both landlords and tenants.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Miguel Rodriguez",
      role: "Tech Director",
      bio: "Builds the platforms that make finding homes effortless.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  const values = [
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Trust",
      description: "We build relationships on transparency and honesty.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Accessibility",
      description: "Quality housing options for every budget.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainability",
      description: "Promoting eco-friendly living spaces.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Never settling for mediocre service.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 py-28 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Revolutionizing rental experiences since 2015 with technology and human touch.
          </p>
          <div className="mt-8">
            <Button size="lg">Meet Our Team</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Our office"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">From Humble Beginnings</h2>
            <p className="text-gray-600 mb-4">
              What started as a small team in San Francisco has grown into a national platform 
              connecting thousands of residents with their perfect homes each month.
            </p>
            <p className="text-gray-600 mb-6">
              Founded by former renters frustrated with outdated systems, we have built solutions 
              that make finding, renting, and managing properties effortless for everyone.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Passionate people dedicated to improving your rental experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-40 w-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Principles that guide every decision we make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Ready to find your perfect home?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button variant="secondary" size="lg">
              Browse Listings
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}