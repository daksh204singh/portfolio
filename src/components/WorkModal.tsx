"use client";

import { useState, useEffect } from 'react';


interface WorkModalProps {
  work: {
    _id: string;
    company: string;
    role: string;
    location: string;
    duration: string;
    description: string;
    achievements: string[];
    technologies?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkModal({ work, isOpen, onClose }: WorkModalProps) {
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

        {/* Header */}
        <div className="p-6 border-b border-neutral-300 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 font-rammetto-one">{work.role}</h2>
              <h3 className="text-xl text-neutral-600 dark:text-neutral-300 mb-1">{work.company}</h3>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-1">{work.location}</p>
              <p className="text-lg text-neutral-500 dark:text-neutral-400">{work.duration}</p>
            </div>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">{work.description}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Technologies */}
          {work.technologies && work.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 font-rammetto-one">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech, index) => (
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

          {/* Key Achievements */}
          {work.achievements && work.achievements.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 font-rammetto-one">Key Achievements</h3>
              <div className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {work.achievements.map((achievement, index) => (
                  <p key={index}>• {achievement}</p>
                ))}
              </div>
            </div>
          )}

          {/* Additional Details */}
                            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-3 font-rammetto-one">Technical Highlights</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div>
                                  <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Architecture</h4>
                <ul className="space-y-1">
                  <li>• Serverless microservices</li>
                  <li>• Event-driven architecture</li>
                  <li>• Multi-database design</li>
                  <li>• Real-time processing</li>
                </ul>
              </div>
              <div>
                                  <h4 className="font-medium text-neutral-900 dark:text-white mb-2">Performance</h4>
                <ul className="space-y-1">
                  <li>• &lt;70ms warm invocation</li>
                  <li>• &lt;1s cold start times</li>
                  <li>• 50 msg/60 min rate limiting</li>
                  <li>• High availability design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 