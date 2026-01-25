import React from 'react';
import { footerConfig } from '../config/footerConfig';

// ============================================
// FOOTER COMPONENT
// ============================================
export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          {footerConfig.text.replace('2025', footerConfig.year)}
        </p>
      </div>
    </footer>
  );
};
