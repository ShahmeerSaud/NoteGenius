import { Code, Globe, Brain, TrendingUp, Award, Medal, Trophy } from "lucide-react";

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  gradient: string;
  skills: SkillItem[] | string[];
}

interface SkillItem {
  name: string;
  level: number; // 1-5
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Programming Languages",
    gradient: "from-blue-50 to-indigo-100",
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "C/C++/C#", "PowerShell"]
  },
  {
    icon: Globe,
    title: "Web & Development",
    gradient: "from-emerald-50 to-green-100",
    skills: ["React", "Flask", "Node.js", "TypeScript", "Full-Stack Development", "REST APIs"]
  },
  {
    icon: Brain,
    title: "Data & AI",
    gradient: "from-purple-50 to-pink-100",
    skills: ["Machine Learning", "TensorFlow", "Pandas", "NumPy", "Data Analysis", "Scikit-learn"]
  },
  {
    icon: TrendingUp,
    title: "Tools & Software",
    gradient: "from-amber-50 to-orange-100",
    skills: ["Unity", "Blender", "AWS", "JIRA", "MongoDB", "Slack", "Adobe Suite", "Microsoft Suite", "Git"]
  }
];

const certifications = [
  {
    icon: Award,
    title: "Fundraising Leadership",
    issuer: "Raised $120,000+ for Organizations",
    color: "text-indigo-600"
  },
  {
    icon: Medal,
    title: "Game Development",
    issuer: "5,000+ Plugin Downloads",
    color: "text-emerald-600"
  },
  {
    icon: Trophy,
    title: "AI/ML Research",
    issuer: "Current Research Position",
    color: "text-amber-600"
  }
];

const SkillDots = ({ level }: { level: number }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((dot) => (
      <div
        key={dot}
        className={`skill-dot rounded-full ${
          dot <= level ? "bg-indigo-500" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern financial applications and solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className={`bg-gradient-to-br ${category.gradient} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="text-indigo-600 text-3xl mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-4">{category.title}</h3>
                  
                  <div className="space-y-3">
                    {(category.skills as string[]).map((skill) => (
                      <span
                        key={skill}
                        className="inline-block bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert) => {
                const IconComponent = cert.icon;
                return (
                  <div key={cert.title} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow duration-300">
                    <IconComponent className={`${cert.color} h-8 w-8 mx-auto mb-3`} />
                    <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
