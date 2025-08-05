interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  color: string;
  side: 'left' | 'right';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Goldman Sachs",
    period: "Summer 2023",
    description: "Developed automated trading algorithms and risk management tools for the Electronic Trading division. Collaborated with senior engineers to optimize high-frequency trading systems, reducing latency by 15%.",
    technologies: ["Python", "C++", "Docker"],
    color: "bg-indigo-600",
    side: 'left'
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "State University - Finance Dept.",
    period: "Spring 2023",
    description: "Conducted research on cryptocurrency market efficiency under Prof. Dr. Smith. Analyzed blockchain transaction data and developed machine learning models to predict price volatility with 87% accuracy.",
    technologies: ["R", "MATLAB", "TensorFlow"],
    color: "bg-emerald-600",
    side: 'right'
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "Morgan Stanley",
    period: "Summer 2022",
    description: "Supported the Wealth Management team by analyzing client portfolios and market trends. Created automated reporting dashboards that improved efficiency by 30% and provided insights for investment strategies.",
    technologies: ["Excel VBA", "Tableau", "SQL"],
    color: "bg-purple-600",
    side: 'left'
  },
  {
    id: 4,
    title: "CS & Finance Student",
    company: "State University",
    period: "2021 - Present",
    description: "Pursuing dual major in Computer Science and Finance. GPA: 3.8/4.0. Dean's List for 4 consecutive semesters. Active member of the Investment Club and Programming Society.",
    technologies: ["Dean's List", "3.8 GPA", "Investment Club"],
    color: "bg-amber-600",
    side: 'right'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional experience and academic achievements in the intersection of technology and finance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-200 to-purple-200"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-center justify-between mb-16 last:mb-0">
                {experience.side === 'left' ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-sm text-indigo-600 font-semibold mb-2">{experience.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                        <p className="text-indigo-600 font-medium mb-3">{experience.company}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 justify-end">
                          {experience.technologies.map((tech) => (
                            <span key={tech} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${experience.color} rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${experience.color} rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="w-5/12 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-sm text-emerald-600 font-semibold mb-2">{experience.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                        <p className="text-emerald-600 font-medium mb-3">{experience.company}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.technologies.map((tech) => (
                            <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
