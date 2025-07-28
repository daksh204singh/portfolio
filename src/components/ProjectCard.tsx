"use client";
import { useState } from "react";



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

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
}

export default function ProjectCard({ project, onProjectClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Pastel color palette
  const pastelColors = [
    '#FFB3BA', // soft light pink/coral
    '#FFD4B3', // muted golden yellow
    '#FFFFFF', // pure white
    '#B3E5FC', // vibrant teal/turquoise
    '#E1BEE7'  // soft muted purple/lavender
  ];
  
  // Better color cycling - use the entire ID for more variety
  let hash = 0;
  for (let i = 0; i < project._id.length; i++) {
    hash = project._id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % pastelColors.length;
  const expandColor = pastelColors[colorIndex];

  const handleClick = () => {
    onProjectClick(project);
  };

  return (
                <div
              className="relative cursor-pointer overflow-hidden shadow-lg transition-transform duration-300 aspect-[3/4] group font-sans text-left hover:-translate-y-2 border-0 rounded-xl flex-shrink-0"
              style={{
                width: 280,
                minHeight: 180,
                borderRadius: "0.75rem",
                background: expandColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: '#000000',
              }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Project Image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-500"
        style={{ pointerEvents: "none" }}
      />
      
      {/* Overlay on hover */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white px-4 text-left font-sans transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{project.title}</h3>
        {project.description && (
          <p className="text-sm line-clamp-3 drop-shadow-lg opacity-90">{project.description}</p>
        )}
      </div>
    </div>
  );
} 