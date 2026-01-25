import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../constants/animations';
import { projectsConfig } from '../config/projectsConfig';

// ============================================
// PROJECTS SECTION COMPONENT
// ============================================
export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${projectsConfig.GITHUB_USERNAME}/repos?sort=updated&per_page=${projectsConfig.REPOS_TO_SHOW}`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.slice(0, projectsConfig.REPOS_TO_SHOW).map((repo, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Github className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                  {repo.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  {repo.language && (
                    <span className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>{repo.language}</span>
                    </span>
                  )}
                  <span className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
