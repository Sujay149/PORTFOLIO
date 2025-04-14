
import React from 'react';
import { Twitter, Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
     <a href="https://www.instagram.com/__sujay.___?igsh=d2Z4aGdmMDh2bjkw" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
  <Instagram size={20} />
</a>

      <a href="https://github.com/Sujay149/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/sujay-babu-thota-4a1273298" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:sujayss149@gmail.com" className="text-gray-700 hover:text-black transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
