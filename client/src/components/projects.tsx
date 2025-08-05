import { useState } from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectCategory = "all" | "fintech" | "web" | "blockchain";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  date: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Network Router Simulation",
    description: "Implemented dynamic routing tables to simulate real-world network behavior with accurate packet forwarding and resource utilization. Built using Java with HashMaps for efficient data routing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    category: "fintech",
    technologies: ["Java", "HashMaps", "Routing Tables", "IP Allocation"],
    date: "Recent",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 2,
    title: "Dictionary Attack Tool",
    description: "Created a Python cybersecurity tool with MD5 hashing to test password strength. Used HashMaps for fast comparison against common password databases, promoting cybersecurity awareness.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    category: "web",
    technologies: ["Python", "MD5 Hashing", "HashMaps", "Cybersecurity"],
    date: "Recent",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 3,
    title: "Knight's Crust",
    description: "Developed a full-stack web application using Flask as REST API with React frontend. Employed Java Unit Tests and Interface-based design patterns with comprehensive Black Box Testing.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    category: "web",
    technologies: ["JavaFX", "Flask", "React", "Unit Testing"],
    date: "Recent",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 4,
    title: "Game Plugin Development",
    description: "Developed and managed plugins for games and content creators, enhancing gameplay and user interfaces. Achieved 5,000+ downloads with endorsements from leading content creators.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    category: "blockchain",
    technologies: ["C++", "C", "Unity", "Blender", "VS Code"],
    date: "2019-Present",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 5,
    title: "AI/ML Research Projects",
    description: "Designed and delivered end-to-end AI/ML projects covering data preprocessing, model selection, training, hyperparameter tuning, and performance evaluation with metrics like accuracy and AUC.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    category: "fintech",
    technologies: ["Python", "Machine Learning", "Data Science", "Model Evaluation"],
    date: "2025-Present",
    githubUrl: "https://github.com/ShahmeerSaud"
  }
];

const filterButtons = [
  { value: "all" as ProjectCategory, label: "All" },
  { value: "fintech" as ProjectCategory, label: "FinTech" },
  { value: "web" as ProjectCategory, label: "Web Development" },
  { value: "blockchain" as ProjectCategory, label: "Blockchain" }
];

export default function Projects() {

  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in software development and financial analysis.
          </p>
        </div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group animate-fade-in-up"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                  <a 
                    href={project.liveUrl || project.githubUrl}
                    className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
