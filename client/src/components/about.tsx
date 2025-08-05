import { Download, Calendar, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const handleResumeDownload = () => {
    // Create a downloadable resume file
    const resumeContent = `
Shahmeer Saud - Resume

EDUCATION
Rutgers University
Bachelor of Science in Computer Science & Finance
Double Major | Expected Graduation: May 2026

LEADERSHIP EXPERIENCE
ICEB Academy - Youth Teacher (September 2021 - Present)
• Organized successful fundraiser, raising over $100,000 for educational trips
• Contributed to academy's expansion through strategic planning

Pakistani Student Association - Fundraising Chair (September 2023 - Present)
• Led multiple successful fundraising events, raising over $5,000
• Managed organization budget and financial planning

Future Leaders Of Islam - Fundraising Chair (September 2023 - Present)
• Managed social media presence and organizational budget
• Organized community events consistently attracting 50+ participants

TECHNICAL SKILLS
Programming: Python, Java, JavaScript, HTML/CSS, C/C++/C#, PowerShell, Swift
Tools & Software: Unity, Blender, AWS, JIRA, MongoDB, Git, Adobe Suite, Microsoft Suite
Specializations: Machine Learning, Data Analysis, Cybersecurity, Full-Stack Development

PROJECTS
• Algorithmic Trading Bot - Python-based bot using RSI and MACD indicators
• Course Planner AI - Smart recommendation system for academic planning
• Portfolio Analysis Dashboard - React + D3.js financial visualization tool
• Digit Recognition (MNIST) - CNN model using TensorFlow/Keras
• Decentralized Lending App - Ethereum dApp with Solidity smart contracts

Contact: ShahmeerSaud.internship@gmail.com
LinkedIn: linkedin.com/in/shahmeersaud
GitHub: github.com/ShahmeerSaud
Location: New Brunswick, NJ
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Shahmeer_Saud_Resume.txt';
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
                I'm a driven Computer Science and Finance student at <span className="font-semibold text-gray-800">Rutgers University</span>, combining analytical thinking with technical expertise to solve complex problems in the financial technology space.
              </p>
              
              <p>
                My academic journey and leadership experience in various organizations have equipped me with a unique perspective on how technology can revolutionize financial markets. From algorithmic trading systems to machine learning applications, I'm passionate about building solutions that make financial services more accessible and efficient.
              </p>
              
              <p>
                As a Fundraising Chair for multiple organizations, I've successfully raised over $105,000 for various initiatives. When I'm not coding or leading community events, you'll find me exploring the latest developments in AI, cybersecurity, and fintech innovation.
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
                alt="Shahmeer Saud - Professional headshot" 
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
