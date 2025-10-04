import { useState } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="card-glow max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl bg-gradient-to-br from-black-200/90 to-gray-900/90 border border-cyan-400/50 backdrop-blur-md">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-black-200/95 to-gray-900/95 backdrop-blur-md p-6 border-b border-cyan-400/30">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-neon_gradient mb-2">{project.title}</h2>
              <p className="text-cyan-400 font-semibold">{project.category}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold transition-colors duration-300 hover:bg-red-500/20 w-10 h-10 rounded-full flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.desc}</p>
            {project.subdesc && (
              <p className="text-gray-400 mt-2 italic">{project.subdesc}</p>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-cyan-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results/Impact */}
          {project.results && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Results & Impact</h3>
              <p className="text-gray-300 leading-relaxed">{project.results}</p>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>🔗</span> View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>💻</span> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>🚀</span> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;