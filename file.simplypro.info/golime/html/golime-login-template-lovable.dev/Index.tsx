
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#222222] leading-tight">
              Welcome to{" "}
              <span className="text-primary">Golime</span>
            </h1>
            <p className="text-xl text-[#666666] max-w-2xl mx-auto">
              Experience seamless integration and powerful features with our modern platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary border border-primary rounded-full hover:bg-primary/5 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                title: "Seamless Integration",
                description: "Connect and manage your services with ease",
              },
              {
                title: "Secure Platform",
                description: "Your data is protected with enterprise-grade security",
              },
              {
                title: "24/7 Support",
                description: "Get help whenever you need it",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#222222] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666666]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
