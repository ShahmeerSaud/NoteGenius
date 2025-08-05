import { Linkedin, Github, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/shahmeersaud",
    label: "LinkedIn"
  },
  {
    icon: Github,
    href: "https://github.com/ShahmeerSaud",
    label: "GitHub"
  },
  {
    icon: Mail,
    href: "mailto:ShahmeerSaud.internship@gmail.com",
    label: "Email"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/shahmeersaud",
    label: "Twitter"
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Shahmeer Saud</h3>
            <p className="text-gray-400">Computer Science & Finance Student</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                  aria-label={link.label}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Shahmeer Saud. All rights reserved. Built with passion and code.</p>
        </div>
      </div>
    </footer>
  );
}
