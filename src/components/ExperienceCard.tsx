
import React from 'react';

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

const ExperienceCard = ({
  logo,
  company,
  role,
  period,
  description
}: ExperienceCardProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
            {logo ? (
              <img src={logo} alt={company} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 bg-emerald-100 rounded-full"></div>
            )}
          </div>
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-semibold">{company}</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
            <p className="text-gray-700 font-medium">{role}</p>
            <p className="text-gray-500 text-sm">{period}</p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
