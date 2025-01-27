"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import HeaderText from "@/components/ui/HeaderText";
import { aboutData } from '@/data';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[rgba(10,15,25,1)] pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <HeaderText title="About" highlight="Us" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building excellence through innovation and dedication since 1995
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[aboutData.vision, aboutData.mission].map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-effect p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="stats-card"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="text-4xl font-bold text-yellow-500"
              >
                {stat.number}
              </motion.span>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <div className="mb-20">
          <HeaderText title="Our" highlight="Leadership" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center glass-effect rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s work together to bring your construction vision to life. Our team of experts
            is ready to help you achieve your goals.
          </p>
          <Button onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
