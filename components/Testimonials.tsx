import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from '@/data';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
        <p className="text-gray-400">Hear from some of our satisfied clients</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-effect p-6 rounded-xl text-center"
          >
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{testimonial.name}</h4>
            <p className="text-gray-400 mb-2">{testimonial.role}, {testimonial.company}</p>
            <p className="text-gray-400 italic">&quot;{testimonial.quote}&quot;</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 