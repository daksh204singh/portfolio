"use client";

import { useState } from 'react';

const skillCategories = {
  languages: {
    title: "Languages",
    skills: ["Java", "Python", "C/C++", "CUDA", "SQL", "Ruby", "TypeScript", "PowerShell", "Bash"]
  },
  cloud: {
    title: "Cloud & Developer Tools",
    skills: ["Git", "Docker", "AWS", "Azure", "PyTorch", "Jupyter", "APK", "GDB", "Graylog", "Excel", "Jenkins", "Power BI", "Jira"]
  },
  databases: {
    title: "Databases",
    skills: ["MySQL", "Couchbase", "Microsoft Dataverse"]
  },
  frameworks: {
    title: "Frameworks",
    skills: ["ROS", "Spring", "Hibernate", "Angular", "CUDA", "Node.js", "Kafka", "JUnit", "Keras", "TensorFlow", "Scikit-learn"]
  }
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-left text-neutral-900 dark:text-white font-rammetto-one">Skills</h2>
      
      <div className="flex gap-8">
        {/* Tab Navigation */}
        <div className="flex flex-col gap-1 min-w-32">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`text-left px-2 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === key
                  ? 'text-neutral-900 dark:text-white border-neutral-900 dark:border-white'
                  : 'text-neutral-600 dark:text-neutral-400 border-transparent hover:text-neutral-800 dark:hover:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-3">
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                                    <div
                        key={index}
                        className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-xl text-center hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-200"
                      >
                <span className="text-sm text-neutral-900 dark:text-white whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 