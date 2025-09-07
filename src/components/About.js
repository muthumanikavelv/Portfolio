import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">About Me</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        I'm a passionate developer with a love for creating digital experiences
        that make a difference. I enjoy creating applications that are not only
        visually appealing but also secure, efficient, and user-friendly.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        With experience in web technologies like HTML, CSS, JavaScript, and React,
        along with a passion for cyber defense and secure coding, I aim to build
        digital solutions that balance functionality, performance, and protection.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        Beyond code, I’m curious, detail-oriented, and always eager to learn new
        technologies. My goal is to turn ideas into impactful digital experiences
        that solve real-world problems.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Strengths</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cyber Security: Securing applications and networks</li>
            <li>Full-Stack Development: Robust frontend & backend solutions</li>
            <li>Performance: Optimized, accessible applications</li>
            <li>Collaboration: Clear and effective communication</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills & Technologies</h3>
          <p className="text-gray-700">
            VAPT, Ethical Hacking, Metasploit, Linux, JavaScript, React, Node.js,
            Express.js, HTML/CSS, Tailwind CSS, MongoDB, Git & GitHub
          </p>
        </div>
      </div>
    </div>
  );
}
