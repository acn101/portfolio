import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500 mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl mx-auto">
        <div className="w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full shadow-lg dark:shadow-black flex-shrink-0">
          <img
            src="./profileimage.jpg"
            alt="portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I'm Alan Ngo. I'm passionate about building clean, functional web interfaces and learning new technologies. 
            I love creating projects that blend creativity with practicality. Whether it's UI/UX design, frontend dev, or game dev, 
            I'm all about making things that are fun and usable.
          </p>
        </div>
      </div>
    </section>
  );
}
