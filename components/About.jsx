import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../constants/animations';
import { aboutConfig } from '../config/aboutConfig';

// ============================================
// ABOUT SECTION COMPONENT
// ============================================
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            {aboutConfig.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
            {aboutConfig.highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-sm text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
