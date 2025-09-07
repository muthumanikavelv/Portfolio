import React from "react";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-100 to-indigo-200">
      <h2 className="text-xl md:text-2xl">Hello, I'm</h2>
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mt-2">
        Muthumanikavel V
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700">
        Passionate About Cybersecurity | Aspiring Full Stack Developer
      </p>
      <p className="mt-4 max-w-xl text-gray-600">
        Aspiring Full Stack Developer with a cybersecurity mindset, crafting clean
        code and reliable applications that prioritize both performance and protection.
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="#projects" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          View My Work
        </a>
        <a href="#contact" className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-100">
          Get In Touch
        </a>
      </div>
    </div>
  );
}
