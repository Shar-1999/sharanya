import '../styles/intro.css';

const IntroSection = () => {
    return (
            <div className='container'>
            <div className="md:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">Hello, Sharanya here!</h1>
                <span className="text-gray-400">Software Engineer | Backend Developer | Open Source Enthusiast | Lifelong Learner </span>
                <p className="text-gray-500 mt-2 max-w-[90vw] md:max-w-xl lg:max-w-2xl mx-auto px-4">
                    “I believe in continual learning, regularly update my skillset, and welcome feedback that pushes me to improve. My portfolio highlights growth through diverse projects using modern frameworks and technologies.”
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="src/assets/Robo3.jpg"
                    alt="Profile"
                    className="rounded-xl w-64 h-auto object-cover"
                />
            </div>
        </div>    
        );
};

export default IntroSection;