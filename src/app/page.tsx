"use client";

import { useState } from 'react';
import ProjectCard from "@/components/ProjectCard";
import WorkCard from "@/components/WorkCard";
import SkillsSection from "@/components/SkillsSection";
import ProjectModal from "@/components/ProjectModal";
import WorkModal from "@/components/WorkModal";
import { sampleProjects } from "@/data/sampleProjects";
import ScrollableContainer from "@/components/ScrollableContainer";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail: string;
  description: string;
  technologies: string[];
  liveUrl?: string | null;
  sourceUrl?: string | null;
  video?: string | null;
}

interface Work {
  _id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  
  const projects = sampleProjects;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsWorkModalOpen(true);
  };

  const handleCloseWorkModal = () => {
    setIsWorkModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className="font-sans min-h-screen pb-20 transition-colors duration-300 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white" suppressHydrationWarning={true}>

      <main className="max-w-5xl mx-auto w-full px-4 pt-10">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2 text-left font-rammetto-one text-neutral-900 dark:text-white">Daksh Pratap Singh</h1>
                                <p className="text-lg mb-4 max-w-2xl text-left text-neutral-600 dark:text-neutral-300">
                        I love making software faster, whether it&apos;s tuning cloud systems for sub-70ms speed or using AI to find new ways to improve performance.
                      </p>
                                <div className="flex gap-4 mb-4">
                        <a href="https://www.linkedin.com/in/dakshpratapsingh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-700 dark:text-neutral-300 hover:opacity-80 transition-opacity">
                          <svg width="24" height="24" fill="currentColor"><path d="M4.98 3.5C3.33 3.5 2 4.82 2 6.4c0 1.56 1.3 2.9 2.94 2.9h.03c1.65 0 2.98-1.34 2.98-2.9C7.95 4.82 6.63 3.5 4.98 3.5zM2.4 21.5h5.16V9H2.4v12.5zM9.34 9h4.94v1.71h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.2 3.45 6.2 7.94V21.5h-5.16v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.68-2.49 3.42v6.62H9.34V9z"/></svg>
                        </a>
                        <a href="https://github.com/daksh204singh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-700 dark:text-neutral-300 hover:opacity-80 transition-opacity">
                          <svg width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
                        </a>
                        <a href="mailto:singh.daksh.pratap204@gmail.com" aria-label="Email" className="text-neutral-700 dark:text-neutral-300 hover:opacity-80 transition-opacity">
                          <svg width="24" height="24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </a>
                      </div>
        </header>
        <section>
          <h2 className="text-2xl font-bold mb-6 text-left font-rammetto-one text-neutral-900 dark:text-white">Experience</h2>
          <ScrollableContainer>
            {/* Work experience entries */}
            <WorkCard 
              work={{
                _id: "work-1",
                company: "Project REMA",
                role: "SOFTWARE ENGINEER",
                location: "Remote",
                duration: "May 2025 – Present",
                description: "Led the end-to-end design and implementation of a scalable messaging bot, architecting the complete serverless AWS stack and designing database schemas to achieve 99.9% message processing success for thousands of users.",
                achievements: [
                  "Led end-to-end design of scalable messaging bot with serverless AWS stack (Lambda, API Gateway, SQS with DLQs) achieving 99.9% message processing success",
                  "Optimized AWS Lambda functions and database queries, reducing warm invocation latency to <70ms and P95 cold start times to <1 second",
                  "Deployed custom ClamAV Lambda Layer for S3 virus scanning, blocking 100% of detected malware in testing",
                  "Built dynamic campaign engine enabling non-technical users to manage conversational logic via JSON, reducing update cycles from days to minutes",
                  "Architected CI/CD pipeline with GitHub Actions and LocalStack, cutting release times to <5 minutes and eliminating cloud spend for testing"
                ],
                technologies: ["AWS Lambda", "TypeScript", "Node.js", "DynamoDB", "MongoDB", "SQS", "S3", "API Gateway", "GitHub Actions", "ClamAV"]
              }}
              onWorkClick={handleWorkClick}
            />

            <WorkCard 
              work={{
                _id: "work-2",
                company: "Eli Lilly & Company",
                role: "SOFTWARE ENGINEER",
                location: "Noida, India",
                duration: "August 2021 – July 2024",
                description: "Architected a scalable, high-availability system automating 78% of order fulfillment tasks using event-driven workflows, custom APIs, and AI; achieved a 6x increase in processing speed.",
                achievements: [
                  "Architected scalable, high-availability (99.9%) system automating 78% of order fulfillment tasks, achieving 6x processing speed increase",
                  "Revamped application performance with query delegation patterns, decreasing client load times by 65% and boosting user satisfaction from 2.7 to 4.9/5",
                  "Authored PowerShell scripts for large-scale data migration, reducing manual processing time by 70% while ensuring data integrity",
                  "Spearheaded development of 40+ applications and 100+ data pipelines with real-time analytics, accelerating decision-making by 20%"
                ],
                technologies: ["Power Automate", "PowerApps", "Power BI", "PowerShell", "AI/ML", "Event-Driven Architecture", "REST APIs"]
              }}
              onWorkClick={handleWorkClick}
            />

            <WorkCard 
              work={{
                _id: "work-3",
                company: "Rakuten",
                role: "SOFTWARE DEVELOPMENT ENGINEER INTERN",
                location: "Bangalore, India",
                duration: "January 2021 – June 2021",
                description: "Constructed multithreaded Java & Spring Boot batch jobs and optimized core engine throughput by 25% through Hibernate query optimization.",
                achievements: [
                  "Constructed multithreaded Java & Spring Boot batch job tracking 1M+ daily product updates, deployed via Jenkins CI/CD pipeline",
                  "Boosted core engine throughput by 25% through Hibernate (JPA) query optimization and microservice bottleneck resolution",
                  "Implemented Redis caching layer reducing dashboard load times by 99% (15s to <150ms) and eliminating 100% of database read load",
                  "Reduced data processing failures by 15% by resolving Kafka stream race conditions and fixing critical validation bugs"
                ],
                technologies: ["Java", "Spring Boot", "Hibernate", "Kafka", "Jenkins", "Redis", "JPA", "Microservices"]
              }}
              onWorkClick={handleWorkClick}
            />

                                    <WorkCard 
                          work={{
                            _id: "work-4",
                            company: "IBM",
                            role: "INTERN - SOFTWARE ENGINEER",
                            location: "Remote",
                            duration: "May 2020 – July 2020",
                            description: "Developed asynchronous REST APIs and implemented efficient file upload systems using modern web technologies.",
                            achievements: [
                              "Developed asynchronous REST APIs using Spring WebFlux, improving response times by 40% through non-blocking I/O",
                              "Implemented APIs for efficient large file uploads to AWS S3 and managed website content using MongoDB"
                            ],
                            technologies: ["Spring WebFlux", "AWS S3", "MongoDB", "REST APIs", "Asynchronous Programming"]
                          }}
                          onWorkClick={handleWorkClick}
                        />
          </ScrollableContainer>
        </section>
        <SkillsSection />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-left font-rammetto-one text-neutral-900 dark:text-white">Work</h2>
          <ScrollableContainer>
            {projects.map((project: Project) => (
              <ProjectCard key={project._id} project={project} onProjectClick={handleProjectClick} />
            ))}
          </ScrollableContainer>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-left font-rammetto-one text-neutral-900 dark:text-white">Education</h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-lg text-neutral-900 dark:text-white">NORTH CAROLINA STATE UNIVERSITY</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">Raleigh, NC</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                <span className="text-base text-neutral-900 dark:text-white">Master of Computer Science</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">August 2024 - May 2026</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                <span className="text-sm text-neutral-600 dark:text-neutral-300">Relevant Coursework: Generative AI; Parallel Systems; Software for Robotics; Algorithms; OOPs</span>
                <span className="text-sm font-semibold text-neutral-900 dark:text-white">GPA: 4.0</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-lg text-neutral-900 dark:text-white">UNIVERSITY OF PETROLEUM AND ENERGY STUDIES</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">Dehradun, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1">
                <span className="text-base text-neutral-900 dark:text-white">Bachelor of Technology in Computer Science and Engineering (Major: Cloud Computing)</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-300">July 2017 - June 2021</span>
              </div>
                              <div className="text-sm mt-1 text-neutral-600 dark:text-neutral-300">Relevant Coursework: Operating Systems, Databases, Computer Networks, Storage Technology, Cloud Deployment Models</div>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isProjectModalOpen}
          onClose={handleCloseProjectModal}
        />
      )}

      {/* Work Modal */}
      {selectedWork && (
        <WorkModal
          work={selectedWork}
          isOpen={isWorkModalOpen}
          onClose={handleCloseWorkModal}
        />
      )}
    </div>
  );
}
