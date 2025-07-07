// app/contact/page.tsx

import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default async function  ContactPage () {
   
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We re here to help.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <ContactCard
            icon={<Mail className="h-6 w-6 " />}
            title="Email"
            description="Drop us a line"
            contact="hello@example.com"
          />
          <ContactCard
            icon={<Phone className="h-6 w-6 " />}
            title="Phone"
            description="Call us directly"
            contact="+1 (555) 123-4567"
          />
          <ContactCard
            icon={<MapPin className="h-6 w-6" />}
            title="Office"
            description="Visit our HQ"
            contact="123 Business Ave, San Francisco"
          />
          <ContactCard
            icon={<Clock className="h-6 w-6" />}
            title="Hours"
            description="When we're available"
            contact="Mon-Fri, 9am-5pm PST"
          />
        </div>

        {/* Contact Form + Map Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Contact Form */}
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3text-white font-medium rounded-md
                  focus:outline-none focus:ring-2  focus:ring-offset-2"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-gray-100 p-8 sm:p-10 flex items-center justify-center">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.665456986449!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="min-h-[400px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactCard({
  icon,
  title,
  description,
  contact,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-100 rounded-full text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
          <p className="text-sm text-gray-700 mt-2 font-medium">{contact}</p>
        </div>
      </div>
    </div>
  );
}