import React from "react";

const projects = [
  {
    name: "Camillo",
    description:
      "The Camillo project enhances URL trustworthiness assessment by merging traditional checks with deep learning algorithms.",
    tech: ["Python", "Flask", "HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/", // replace with your repo
  },
  {
    name: "Signify ✍",
    description:
      "A simple Registration & Login system built with React and Firebase. Allows users to register, log in, and access a personalized dashboard.",
    tech: ["React", "Firebase", "CSS"],
    link: "https://github.com/", // replace with your repo
  },
  {
    name: "Taskify 📅",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/", // replace with your repo
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{proj.name}</h3>
              <p className="mt-3 text-gray-600">{proj.description}</p>
              <p className="mt-3 text-sm text-gray-500">Tech: {proj.tech.join(", ")}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/" // replace with your GitHub
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-100"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
