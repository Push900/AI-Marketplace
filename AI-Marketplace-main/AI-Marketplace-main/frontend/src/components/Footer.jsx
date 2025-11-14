import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@aimarketplace.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-900 dark:to-blue-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {currentYear} AI Marketplace. All rights reserved.
            </p>
            <p className="text-xs mt-1 opacity-90 flex items-center justify-center md:justify-start">
              Made with <Heart className="h-3 w-3 mx-1 fill-current" /> for AI enthusiasts
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-blue-800 dark:hover:bg-blue-700 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
