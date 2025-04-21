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
                I am currently a <b>Senior Systems Engineer</b> at infosys, working as <b>Senior developer</b> for one of the largest European telecommunication Company.
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
                    Outside of work, I'm interested in taking hikes and explore new places where I get to learn different life changing culture. My interest also lies in discovering and understanding AI impact in the upcoming future so I can contribute to the huge change around the AI world.
                </p>
                </div>
        </div>
    )
}
