
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedGradient from "@/components/ui/AnimatedGradient";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <AnimatedGradient className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Have a project in mind? Let's discuss how we can help bring your ideas to life.
              </p>
            </div>
          </div>
        </AnimatedGradient>

        {/* Contact Info (centered) */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Find Us</h2>
            <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.584435096247!2d72.5298091756955!3d23.073763013558602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83417ead915b%3A0xfdcfc6cf89f1dab0!2sSolaris!5e0!3m2!1sen!2sin!4v1714680280323!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
