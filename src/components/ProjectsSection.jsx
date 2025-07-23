import { useState, useEffect } from "react";

const projectsData = [
    {
        title: "NeverEnding",
        description: "A content creation platform for visual storytelling of TTRPG experiences.",
        exposition: ["NeverEnding is when my career choices began to align. I've always enjoyed programming and building apps from the ground up. It started with simple challenges like learning the intricacies of a large code base to developing small components of the app. Before I knew it, I was building an app from the ground up. This meant taking on challenges like designing the layout, the functionality, architecting which libraries to use, how to manage state, and even integrate an AI library to detect expressions for facial animations.",
            "I was also thrown into the world of CI/CD through Vercel where I had to deal with fun issues like CORS errors and failed builds due to conflicting libraries that had no issues running on my local machine. On top of that, I was allowed to develop code for the backend api using Python and Django which opened my eyes to how RESTful apis are created. As primarily a frontend developer, learning how our backend code worked made it a lot easier to communicated with the backend team since I knew what could and couldn't be done. As for my backend work, I was able to learn how to integrate payment systems into the app through PayPal and Shopify. Whether it was a subscription system, coupons, or creating accounts to use our app's marketplace, I learned a lot about the data sent between different companies and how to handle the successes (and the errors)."],
        images: ["./ne1.png", "./ne2.png", "./ne3.png", "./ne5.png", "./ne6.png", "./ne7.png"],
        url: "https://beneverending.com/",
        posterImage: "./ne1.png",
    },
    {
        title: "Digital Future Lab",
        description: "A casual puzzle game created in Unity with multiplayer and 60 unique levels.",
        images: ["./dfl1.png", "dfl2.jpg", "dfl3.jpg", "dfl4.jpg"],
        exposition: ["The Digital Future Lab is where I got my feet wet in a larger team of coders, designers, artists, musicians, and the user base. I was brought on as a designer for another project that was a work in progress to design levels that would challenge our player's minds. I learned a lot about human centered design, creating fun and engaging user experiences, and how UI/UX design could be used to guide our players in certain directions wtihout outright telling them. It was fun to play with the tools the developers created, but I wanted to be the one creating those tools myself.",
            "As a coder myself, I was eventually transitioned onto the development team for our flagship game, Ghostlight Manor. I learned source control tools, agile development, and got to use my insight a designer to create easy to use tools for the design team I was once on. My time as a developer was short, but I was able to create a computer controlled bot that would simulate player behavior. This was a feature we wanted to add as our multiplayer feature was just released to create a challenging player versus player experience even if you were playing alone. The bot itself started out dumb, zapping random spots on the board, but eventually improved with each iteration. It went from doing random inputs, to reading the map seed to better play agaiinst the player(s), and finally having different difficulties. As a developer, I loved the challenge of thinking outside the box and working on a large codebase that often caused merge conflicts."
        ],
        url: "https://store.steampowered.com/app/559250/Ghostlight_Manor/",
        posterImage: "./dfl1.png",
    },
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
        <section id="projects" className="bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500 mb-12">
            <div
                className={`transition-all duration-500 ease-in-out ${showList
                    ? "opacity-100 h-auto max-h-full pointer-events-auto"
                    : "opacity-0 h-0 max-h-0 pointer-events-none"
                    } overflow-hidden max-w-5xl mx-auto`}
                style={{ height: showList ? 'auto' : 0 }}
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
                    className={`transition-all duration-500 ease-in-out overflow-auto p-8 bg-gray-50 dark:bg-gray-900 rounded-lg max-w-5xl mx-auto ${showExpanded
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
                                onClick={() => handleImageClick(src)}
                            />
                        ))}
                    </div>

                    {expandedProject.exposition.map(expo => (
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
                    className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500 ease-out ${isModalOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={closeModal}
                >
                    <div
                        className={`relative p-4 bg-white dark:bg-gray-800 rounded-lg transform transition-all duration-500 ${isModalOpen ? "scale-100" : "scale-95"
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
