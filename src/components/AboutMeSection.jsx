import React from 'react';
import "../styles/aboutMe.css";

export default function AboutMeSection() {

    const tech_stack = [
        "Java",
        "SpringBoot",
        "Oracle Cloud Infrastructre",
        "Weblogic, SOA OSB",
        "Shell Script",
        "DevOps",
        "React.js"
      ];

    return (
        <div className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-24 py-8">
                <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">ABOUT ME</h1>
                </div>
                <div>
                <p className="text-gray-400 mb-4 text-left">
                I am currently a <b>Core Java Developer</b> at Intelizign, contributing to backend services and enterprise applications in the digital engineering domain.
                </p>
                <p className="text-gray-400 mb-4 text-left"> 
                Here are some technologies I have been working with:
                </p>
                <ul className="text-left text-gray-300 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                  {tech_stack.map(function (tech_item, i) {
                    return (
                        <li>{tech_item}</li>
                    );
                  })}
                </ul>
                <p className="text-gray-400 text-left">
                  Outside of work, I enjoy hiking and exploring new places, where I gain exposure to diverse cultures and perspectives that shape my worldview. I am also deeply interested in the evolving impact of artificial intelligence and actively seek to understand its potential in shaping the future, with the goal of contributing meaningfully to the transformative changes it brings.
                </p>
                </div>
        </div>
    )
}
