"use client";

import { useState, useEffect } from 'react';


interface ProjectModalProps {
  project: {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
    technologies?: string[];
    liveUrl?: string | null;
    sourceUrl?: string | null;
    video?: string | null;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
                    <div className="relative bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with Thumbnail */}
                        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-neutral-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl font-bold mb-2 font-rammetto-one">{project.title}</h2>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                View Live Project ↗
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 font-rammetto-one">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                                            <span
                            key={index}
                            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-xl text-sm font-medium"
                          >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <div className="text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line">
              {project.description}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
              >
                View Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>

          {/* Video */}
          {project.video && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Demo Video</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={project.video}
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                                            className="w-full h-64 rounded-xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 