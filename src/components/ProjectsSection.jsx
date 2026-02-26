import { useState, useEffect } from "react";

const projectsData = [
  {
    title: "Climate Convos",
    description:
      "An ios app meant to give people agency through conversations and knowledge about climate change.",
    images: ["./cc.png"],
    exposition: [
      "This is where it all began. I started my official journey down development through my capstone project during my final years of college by creating an ios app to spark conversation and interest around climate change. It taught me the importance of iteration, wireframes, agile methodology, and how to focus on user experience.",
      "Throughout the project, my team spoke to stakeholders, conducted usability testing, and learned the tools we needed to make our vision a reality. It all started with a wireframe. From there, I was able to reorganize how the app would flow. Then I moved it to figma where I could see how the app would flow and fix it before spending too much time coding. Finally, I started coding the app and even introduced our mascot, Geo, half way through to add more engagement.",
      "I ran into a lot of issues as a new developer, especially one who had never coded apps for the ios before. There were a lot of limitations when it came to app development that forced me to think outside the box to solve. If I were to create this app again, I would make it a website so it could be more widely accessible to our target audience, and I wouldn't run through the headaches of being restricted to Apple's development restrictions.",
    ],
    url: "https://github.com/acn101/climate-convos",
    posterImage: "./cc.png",
  },
  // {
  //   title: "TBD",
  //   description:
  //     "A third person rogue-like shooter with randomized stages, items, and boss fights solo developed in Unreal Engine. A work in progress so check back soon!",
  //   images: ["./comingsoon.png"],
  //   exposition: [],
  //   url: "",
  //   posterImage: "./comingsoon.png",
  // },
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showExpanded, setShowExpanded] = useState(false);
  const [showList, setShowList] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalImage(null);
    }, 300);
  };

  useEffect(() => {
    if (expandedProject) {
      setShowList(false);
      const timeout = setTimeout(() => setShowExpanded(true), 150);
      return () => clearTimeout(timeout);
    } else {
      setShowExpanded(false);
      const timeout = setTimeout(() => setShowList(true), 150);
      return () => clearTimeout(timeout);
    }
  }, [expandedProject]);

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500 mb-12"
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          showList
            ? "opacity-100 h-auto max-h-full pointer-events-auto"
            : "opacity-0 h-0 max-h-0 pointer-events-none"
        } overflow-hidden max-w-5xl mx-auto`}
        style={{ height: showList ? "auto" : 0 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <button
              key={project.title}
              onClick={() => setExpandedProject(project)}
              className="text-left p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 text-gray-900 dark:text-gray-100 w-full cursor-pointer"
            >
              <div className="relative mb-4">
                <img
                  src={project.posterImage}
                  alt={`${project.title} poster`}
                  className="rounded-lg object-cover w-full h-56 sm:h-64"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </button>
          ))}
        </div>
      </div>

      {expandedProject && (
        <div
          className={`transition-all duration-500 ease-in-out overflow-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-lg max-w-5xl mx-auto ${
            showExpanded
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          key={expandedProject.title}
        >
          <button
            onClick={() => setExpandedProject(null)}
            className="mb-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            ← Back to Projects
          </button>

          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {expandedProject.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {expandedProject.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {expandedProject.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${expandedProject.title} screenshot ${i + 1}`}
                className="rounded-lg object-cover w-full h-64 sm:h-80 cursor-pointer transition-transform duration-500 hover:scale-105"
                onClick={() => handleImageClick(src)}
              />
            ))}
          </div>

          {expandedProject.exposition.map((expo) => (
            <p className="text-gray-700 dark:text-gray-300 mb-6">{expo}</p>
          ))}

          {expandedProject.url && (
            <a
              href={expandedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
            >
              Visit Project
            </a>
          )}
        </div>
      )}

      {modalImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ease-out ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative p-4 bg-white dark:bg-gray-800 rounded-lg transform transition-all duration-500 ${
              isModalOpen ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 px-3 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 z-40"
            >
              ×
            </button>

            <img
              src={modalImage}
              alt="Modal Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg transition-transform duration-500 transform scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
}
