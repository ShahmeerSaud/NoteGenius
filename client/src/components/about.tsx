import { Download, Calendar, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const handleResumeDownload = () => {
    // Create a downloadable resume file
    const resumeContent = `
Alex Johnson - Resume

EDUCATION
State University
Bachelor of Science in Computer Science & Finance
GPA: 3.8/4.0 | Expected Graduation: May 2025

EXPERIENCE
Goldman Sachs - Software Engineering Intern (Summer 2023)
Morgan Stanley - Data Analyst Intern (Summer 2022)
State University - Research Assistant (Spring 2023)

SKILLS
Programming: Python, JavaScript, Java, Solidity, SQL
Web Development: React, Node.js, Express, TypeScript
Data & AI: Pandas, NumPy, TensorFlow, Scikit-learn
Finance: Financial Modeling, Risk Analysis, Options Pricing

PROJECTS
• Algorithmic Trading Bot - Python-based autonomous trading system
• Portfolio Analytics Dashboard - React application with real-time data visualization
• DeFi Lending Platform - Decentralized lending protocol on Ethereum
• Credit Risk Assessment AI - ML model with 94% accuracy in default prediction

CERTIFICATIONS
• AWS Cloud Practitioner
• CFA Level I Candidate
• FinTech Innovation Hackathon Winner 2023

Contact: alex.johnson@university.edu
LinkedIn: linkedin.com/in/alex-johnson
GitHub: github.com/alexjohnson
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex_Johnson_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Passionate about <span className="text-indigo-600">Innovation</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a driven Computer Science and Finance student at <span className="font-semibold text-gray-800">State University</span>, combining analytical thinking with technical expertise to solve complex problems in the financial technology space.
              </p>
              
              <p>
                My academic journey has equipped me with a unique perspective on how technology can revolutionize financial markets. From algorithmic trading systems to blockchain applications, I'm passionate about building solutions that make financial services more accessible and efficient.
              </p>
              
              <p>
                When I'm not coding or analyzing market trends, you'll find me contributing to open-source projects, participating in hackathons, or exploring the latest developments in DeFi and machine learning.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleResumeDownload}
                size="lg"
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <a href="#contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Alex Johnson - Professional headshot" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-float">
                <GraduationCap className="text-indigo-600 h-8 w-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-float-delayed">
                <TrendingUp className="text-emerald-600 h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
