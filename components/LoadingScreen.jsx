import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// ============================================
// LOADING SCREEN COMPONENT
// ============================================
export const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Sparkles className="w-20 h-20 text-purple-400 mx-auto mb-4 animate-pulse" />
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Loading...
        </div>
      </motion.div>
    </div>
  );
};
