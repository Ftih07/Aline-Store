import React from 'react';

interface SectionHeadersProps {
  subHeader: string;
  mainHeader: string;
}

const SectionHeaders: React.FC<SectionHeadersProps> = ({ subHeader, mainHeader }) => {
  return (
    <div className="my-4">
      <h3 className="uppercase text-gray-500 font-semibold tracking-wider">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-3xl italic">{mainHeader}</h2>
    </div>
  );
};

export default SectionHeaders;
