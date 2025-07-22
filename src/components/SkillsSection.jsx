import { useState, useEffect } from "react";
import { SiJavascript, SiTypescript, SiReact, SiCss3, SiSass, SiHtml5, SiPython, SiDotnet } from 'react-icons/si';
import { SiAdobephotoshop, SiUnity, SiUnrealengine } from 'react-icons/si';
import { FaAudible } from 'react-icons/fa';
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "JavaScript", level: 100, experience: 5, icon: <SiJavascript size={28} className="text-yellow-500" /> },
  { name: "Typescript", level: 90, experience: 4, icon: <SiTypescript size={28} className="text-blue-500" /> },
  { name: "React", level: 95, experience: 5, icon: <SiReact size={28} className="text-cyan-400" /> },
  { name: "CSS", level: 100, experience: 5, icon: <SiCss3 size={28} className="text-blue-600" /> },
  { name: "SASS/SCSS", level: 90, experience: 4, icon: <SiSass size={28} className="text-pink-600" /> },
  { name: "HTML", level: 100, experience: 5, icon: <SiHtml5 size={28} className="text-orange-500" /> },
  { name: "C#", level: 80, experience: 3, icon: <SiDotnet size={28} className="text-teal-500" /> },
  { name: "Python", level: 60, experience: 2, icon: <SiPython size={28} className="text-yellow-300" /> },
];

const technologies = [
  { name: "Visual Studio", level: 100, experience: 2, icon: <DiVisualstudio size={28} className="text-blue-800" /> },
  { name: "Visual Studio Code", level: 100, experience: 2, icon: <BiLogoVisualStudio size={28} className="text-blue-400" /> },
  { name: "Photoshop", level: 100, experience: 2, icon: <SiAdobephotoshop size={28} className="text-pink-600" /> },
  { name: "Unity", level: 90, experience: 2, icon: <SiUnity size={28} className="text-teal-700" /> },
  { name: "Unreal Engine", level: 50, experience: 2, icon: <SiUnrealengine size={28} className="text-purple-700" /> },
  { name: "Audacity", level: 100, experience: 2, icon: <FaAudible size={28} className="text-green-500" /> },
];


export default function SkillsSection() {
  const [animatedWidths, setAnimatedWidths] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedWidths(skills.map((skill) => skill.level));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500 w-full mb-12">
      <div className="max-w-5xl mx-auto rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="flex items-center gap-4">
              <div>{skill.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-gray-700 dark:text-gray-300 font-semibold">
                  <span>{skill.name}</span>
                  {/* <span>{animatedWidths[idx]}%</span> */}
                </div>
                <div className="flex justify-between mb-2 text-gray-600 dark:text-gray-400 text-sm">
                  <span>{skill.experience} years of experience</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-1000 ease-out"
                    style={{ width: `${animatedWidths[idx]}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Technologies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {technologies.map((technology, idx) => (
            <div key={technology.name} className="flex items-center gap-4">
              <div>{technology.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-gray-700 dark:text-gray-300 font-semibold">
                  <span>{technology.name}</span>
                  {/* <span>{animatedWidths[idx]}%</span> */}
                </div>
                <div className="flex justify-between mb-2 text-gray-600 dark:text-gray-400 text-sm">
                  <span>{technology.experience} years of experience</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-1000 ease-out"
                    style={{ width: `${animatedWidths[idx]}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
