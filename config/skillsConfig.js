// ============================================
// SKILLS SECTION CONFIG
// ============================================
import { Code, Database, Brain, Terminal } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI/ML',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'LangChain'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tools & Platforms',
    icon: Terminal,
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD'],
    color: 'from-orange-500 to-red-500'
  }
];
