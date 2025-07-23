import React from "react";

export default function ResumeSection() {
    return (
        <section id="resume" className="bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-500 mb-12">
            {/* Resume Section */}
            <div className="max-w-5xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Resume</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
                    Click the button below to view or download my resume.
                </p>
            </div>

            <div className="text-center">
                <a
                    href="./resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                >
                    View Resume
                </a>
            </div>
        </section>
    );
}
