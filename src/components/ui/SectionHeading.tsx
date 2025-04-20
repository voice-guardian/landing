import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading; 