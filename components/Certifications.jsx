import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants/animations';
import { certifications } from '../config/certificationsConfig';

// ============================================
// CERTIFICATIONS SECTION COMPONENT
// ============================================
export const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.organization}</p>
                  <p className="text-gray-500 text-sm">{cert.year}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
