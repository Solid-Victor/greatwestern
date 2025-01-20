import { motion } from "framer-motion";
import Image from "next/image";
import { workExperience } from '@/data';

const WorkExperience = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Work Experience</h2>
        <p className="text-gray-400">Explore our extensive experience across various sectors</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {workExperience.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-effect p-6 rounded-xl flex items-center"
          >
            <div className="w-16 h-16 mr-4">
              <Image
                src={experience.thumbnail}
                alt={experience.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{experience.title}</h4>
              <p className="text-gray-400">{experience.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience; 