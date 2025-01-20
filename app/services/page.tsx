"use client";

import { services } from '@/data';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import HeaderText from "@/components/ui/HeaderText";

interface Service {
  title: string;
  description: string;
  icon: string;
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[rgba(10,15,25,1)] pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <HeaderText title="Our" highlight="Services" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive construction and engineering solutions for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service: Service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="object-contain text-yellow-500"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 glass-effect rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Our Services?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us today to discuss your project requirements
          </p>
          <Button onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
} 