import React, { useEffect, useRef } from 'react';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ id, className = '', children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } 
        });
      },
      {
        threshold: 0.5,
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen sticky top-0 transform transition-opacity duration-1000 opacity-0 ${className}`}
    >
      <div className="content-wrapper">
        {children}
      </div>
    </section>
  );
};

export default ScrollSection;
