import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants/animations';
import { contactConfig } from '../config/contactConfig';

// ============================================
// CONTACT SECTION COMPONENT
// ============================================
export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ADD YOUR FORM SUBMISSION LOGIC HERE (e.g., EmailJS, FormSpree, etc.)
    setStatus('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Let's build something amazing together</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows="5"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 focus:border-purple-500 outline-none text-white placeholder-gray-500 transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              Send Message
            </motion.button>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center"
              >
                {status}
              </motion.p>
            )}
          </motion.form>

          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <Mail className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
              <p className="text-gray-400">{contactConfig.email}</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
