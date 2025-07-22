import { useState, useEffect } from "react";

// Updated sample project data with a poster image for each project
const projectsData = [
    {
        title: "NeverEnding",
        description: "",
        images: ["./ne1.png", "./ne2.png", "./ne3.png", "./ne4.png", "./ne5.png", "./ne6.png", "./ne7.png"],
        url: "https://beneverending.com/",
        posterImage: "./ne1.png",  // Poster image for the project
    },
    {
        title: "Digital Future Lab",
        description: "Small game prototype made with Unreal Engine Blueprints.",
        images: ["./dfl1.png", "dfl2.jpg", "dfl3.jpg", "dfl4.jpg"],
        url: "https://store.steampowered.com/app/559250/Ghostlight_Manor/",
        posterImage: "./dfl1.png",  // Poster image for the project
    },
];

export default function ProjectsSection() {
    const [expandedProject, setExpandedProject] = useState(null);
    const [showExpanded, setShowExpanded] = useState(false);
    const [showList, setShowList] = useState(true);
    const [modalImage, setModalImage] = useState(null); // Modal state for the selected image
    const [isModalOpen, setIsModalOpen] = useState(false); // To track if the modal is open

    // Open modal
    const handleImageClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true); // Set modal as open
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setTimeout(() => {
            setModalImage(null); // Clear the image after animation
        }, 300); // Wait for the animation to finish before clearing
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
        <section className="bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500 mb-12">
            {/* Projects List */}
            <div
                className={`transition-all duration-300 ease-in-out ${showList
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                    } max-w-5xl mx-auto`}
            >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <button
                            key={project.title}
                            onClick={() => setExpandedProject(project)}
                            className="text-left p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 text-gray-900 dark:text-gray-100 w-full"
                        >
                            {/* Poster Image above the project title */}
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

            {/* Expanded Project */}
            {expandedProject && (
                <div
                    className={`transition-all duration-300 ease-in-out overflow-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-lg max-w-5xl mx-auto ${showExpanded
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
                    <p className="text-gray-700 dark:text-gray-300 mb-6">{expandedProject.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        {expandedProject.images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`${expandedProject.title} screenshot ${i + 1}`}
                                className="rounded-lg object-cover w-full h-64 sm:h-80 cursor-pointer transition-transform duration-500 hover:scale-105"
                                onClick={() => handleImageClick(src)} // Open modal on image click
                            />
                        ))}
                    </div>

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

            {/* Modal for Images */}
            {modalImage && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ease-out ${
                        isModalOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeModal} // Close the modal when clicking outside the image
                >
                    <div
                        className={`relative p-4 bg-white dark:bg-gray-800 rounded-lg transform transition-all duration-500 ${
                            isModalOpen ? "scale-100" : "scale-95"
                        }`}
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 px-3 py-2 bg-red-600 text-white rounded-full hover:bg-red-700"
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
