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
    title: "AI/ML Researcher",
    company: "Research Position",
    period: "June 2025 - Present",
    description: "Designed and delivered end-to-end AI/ML projects using datasets, with theoretical explanations and performance evaluations. Developed projects covering data preprocessing, model selection, training, and hyperparameter tuning.",
    technologies: ["Python", "Machine Learning", "Data Science"],
    color: "bg-indigo-600",
    side: 'left'
  },
  {
    id: 2,
    title: "Independent Game Plugin Developer",
    company: "Remote Developer",
    period: "September 2019 - Present",
    description: "Developed and managed plugins for games and content creators, enhancing gameplay and user interfaces. Surpassed 5,000 downloads and installations, receiving endorsements from top content creators.",
    technologies: ["C++", "Unity", "Game Development"],
    color: "bg-emerald-600",
    side: 'right'
  },
  {
    id: 3,
    title: "Youth Teacher",
    company: "ICEB Academy",
    period: "September 2021 - Present",
    description: "Organized a successful fundraiser, raising over $100,000 for educational trips, contributing to the academy's expansion. Led educational initiatives and mentored young students in academic development.",
    technologies: ["Leadership", "Fundraising", "Education"],
    color: "bg-purple-600",
    side: 'left'
  },
  {
    id: 4,
    title: "CS & Finance Student",
    company: "Rutgers University",
    period: "2021 - Present",
    description: "Pursuing double major in Computer Science and Finance at Rutgers University School of Arts & Science & Business School. Maintaining 3.5 GPA with expected graduation in May 2027.",
    technologies: ["3.5 GPA", "Double Major", "Leadership"],
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
