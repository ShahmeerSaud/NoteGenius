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
    description: "Python-based autonomous trading system using machine learning algorithms to analyze market patterns and execute trades based on technical indicators like RSI, MACD, and Bollinger Bands.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "fintech",
    technologies: ["Python", "Pandas", "Scikit-learn", "APIs"],
    date: "Dec 2023",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Analytics Dashboard",
    description: "Interactive React application with real-time data visualization for portfolio performance tracking, risk analysis, and asset allocation optimization using D3.js and Chart.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "web",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    date: "Nov 2023",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "DeFi Lending Platform",
    description: "Decentralized lending protocol built on Ethereum with Solidity smart contracts, featuring automated liquidation, yield farming, and a React-based Web3 frontend interface.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "blockchain",
    technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat"],
    date: "Oct 2023",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Credit Risk Assessment AI",
    description: "Machine learning model for credit risk assessment using ensemble methods, achieving 94% accuracy in default prediction with explainable AI features for regulatory compliance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "fintech",
    technologies: ["TensorFlow", "XGBoost", "Python", "SHAP"],
    date: "Sep 2023",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    description: "Full-stack web application for personal finance management with budget tracking, expense categorization, and investment portfolio monitoring using modern web technologies.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "web",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    date: "Aug 2023",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "NFT Marketplace",
    description: "Decentralized NFT marketplace with minting, trading, and auction features. Built with smart contracts and IPFS for metadata storage, featuring low gas optimization.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    category: "blockchain",
    technologies: ["Solidity", "React", "IPFS", "OpenZeppelin"],
    date: "Jul 2023",
    githubUrl: "#"
  }
];

const filterButtons = [
  { value: "all" as ProjectCategory, label: "All" },
  { value: "fintech" as ProjectCategory, label: "FinTech" },
  { value: "web" as ProjectCategory, label: "Web Development" },
  { value: "blockchain" as ProjectCategory, label: "Blockchain" }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

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

        {/* Project Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
