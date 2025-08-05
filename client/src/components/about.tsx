import { Download, Calendar, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const handleResumeDownload = () => {
    // Create a downloadable resume file
    const resumeContent = `
Shahmeer Saud - Resume

EDUCATION
Rutgers University - School of Arts & Science & Business School
Bachelor of Science in Computer Science & Finance
3.5 GPA | Expected Graduation: May 2027

WORK EXPERIENCE
AI/ML Researcher - Remote/New Brunswick, NJ (June 2025-Present)
• Designed and delivered end-to-end AI/ML projects with theoretical explanations
• Developed projects covering data preprocessing, model selection, training, hyperparameter tuning
• Managed project timelines with weekly mentor reviews

Independent Game Plugin Developer - Remote (September 2019-Present)
• Developed plugins for games and content creators, enhancing gameplay and UIs
• Surpassed 5,000 downloads with endorsements from leading content creators
• Collaborated with global team using C++, C, Unity, Blender, and VS Code

LEADERSHIP EXPERIENCE
ICEB Academy - Youth Teacher (September 2021 - Present)
• Organized successful fundraiser, raising over $100,000 for educational trips
Pakistani Student Association - Fundraising Chair (September 2023 - Present)
• Led fundraising events raising over $5,000 for association initiatives
Future Leaders Of Islam - Fundraising Chair (September 2023 - Present)
• Managed social media and organized events attracting 50+ participants

TECHNICAL SKILLS
Programming: Python, Java, JavaScript, HTML/CSS, C/C++/C#, PowerShell
Tools: Unity, Blender, AWS, JIRA, MongoDB, Slack, Adobe Suite, Microsoft Suite, Git

PROJECTS
• Network Router Simulation - Java-based router using HashMaps and routing tables
• Dictionary Attack Tool - Python cybersecurity tool with MD5 hashing
• Knight's Crust - Full-stack Flask/React application with comprehensive testing

Contact: shahmeersaud.internship@gmail.com | Phone: (732)-447-4340
LinkedIn: linkedin.com/in/ShahmeerSaud | GitHub: github.com/ShahmeerSaud
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
                As a Fundraising Chair for multiple organizations, I've successfully raised over $120,000 for various initiatives. When I'm not coding or leading community events, you'll find me exploring the latest developments in AI, cybersecurity, and fintech innovation.
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
