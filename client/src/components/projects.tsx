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
    title: "Algorithmic Trading Bot",
    description: "Built a Python-based bot that executes trades on a simulated market using RSI and MACD technical indicators to mimic real-world trading behavior.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "fintech",
    technologies: ["Python", "RSI", "MACD", "Trading APIs"],
    date: "Dec 2023",
    githubUrl: "https://github.com/ShahmeerSaud",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Course Planner AI",
    description: "Designed a smart course recommendation system that suggests optimal classes based on completed coursework and degree requirements.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "web",
    technologies: ["Python", "Machine Learning", "Flask", "SQLite"],
    date: "Nov 2023",
    githubUrl: "https://github.com/ShahmeerSaud",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Portfolio Analysis Dashboard",
    description: "Developed a React + D3.js dashboard to visualize portfolio performance, asset allocation, and financial risk metrics interactively.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "fintech",
    technologies: ["React", "D3.js", "Node.js", "Financial APIs"],
    date: "Oct 2023",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 4,
    title: "Digit Recognition (MNIST)",
    description: "Trained a convolutional neural network using TensorFlow/Keras to accurately classify handwritten digits from the MNIST dataset.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "web",
    technologies: ["TensorFlow", "Keras", "Python", "CNN"],
    date: "Sep 2023",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 5,
    title: "Decentralized Lending App",
    description: "Created a dApp on Ethereum using Solidity smart contracts and Web3.js to simulate peer-to-peer lending in a decentralized finance ecosystem.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "blockchain",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    date: "Aug 2023",
    githubUrl: "https://github.com/ShahmeerSaud"
  },
  {
    id: 6,
    title: "Game Plugin Development",
    description: "Developed and managed plugins for games and content creators, enhancing gameplay and user interfaces. Achieved 5,000+ Plugin Downloads and 50,000+ interactions with endorsements from leading content creators.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    category: "blockchain",
    technologies: ["C++", "C", "Unity", "Blender", "VS Code"],
    date: "2019-Present",
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
