import { Code, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Available for Internships
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bridging{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Technology
            </span>
            {" "}& Finance
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Computer Science & Finance student passionate about creating innovative solutions at the intersection of technology and financial markets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <a href="#projects">
                <Code className="mr-2 h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/shahmeersaud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 text-2xl transition-colors duration-300"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/ShahmeerSaud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 text-2xl transition-colors duration-300"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="mailto:shahmeersaud.internship@gmail.com"
              className="text-gray-600 hover:text-indigo-600 text-2xl transition-colors duration-300"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
