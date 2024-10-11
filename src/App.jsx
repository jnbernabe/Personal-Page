import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Home Page
const Home = () => (
  <div className="flex flex-col items-start justify-center h-screen text-left p-8">
    <h1 className="text-5xl font-bold text-white mb-6">Jamaal Bernabe</h1>
    <h2 className="text-2xl text-blue-500 mb-6">Software Developer</h2>
    <p className="text-gray-400 max-w-xl mb-8">
      Innovating technology through scalable solutions in software development,
      automation, and cloud integration. Expertise in Python, Java, and
      AI-driven platforms.
    </p>
    <div className="space-x-4">
      <Link
        to="/work"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Explore My Work
      </Link>

      {/* Link to Resume */}
      <a
        href="src\assets\Jamaal Bernabe - Resume.pdf" // Replace this with the actual URL to your resume
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
      >
        View My Resume
      </a>
    </div>

    {/* GitHub Link */}
    <div className="mt-8">
      <a
        href="https://github.com/jnbernabe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit My GitHub Profile
      </a>
    </div>
  </div>
);

// About Page, Work Page, Projects Page remain unchanged
const About = () => (
  <div className="flex flex-col items-start justify-center h-screen text-left p-8">
    <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
    <p className="text-gray-400 max-w-xl mb-8">
      I’m Jamaal Bernabe, a passionate software developer with a focus on
      automation testing, backend development, and cloud services. I bring a
      unique perspective to solving complex challenges in software development
      with a background in biochemistry and a strong dedication to technology.
    </p>
    <h2 className="text-3xl text-blue-500 mb-4">Key Skills</h2>
    <ul className="text-gray-400 text-xl list-disc list-inside mb-8">
      <li>Python, Java, JavaScript, C#, Node.js</li>
      <li>Flask, AngularJS, React, Selenium, JUnit</li>
      <li>Azure, AWS, Google Cloud</li>
      <li>CI/CD, Jenkins, Git, Automation Testing</li>
    </ul>
    <h2 className="text-3xl text-blue-500 mb-4">Education</h2>
    <p className="text-gray-400">
      Software Engineering Technology (AI) – Centennial College <br />
      Bachelor’s in Biochemistry & Molecular Biology – University of Toronto
    </p>
    <div className="mt-8">
      <p className="text-gray-400">Email: jnbernabe@gmail.com</p>
      <p className="text-gray-400">Phone: (647) 402-1724</p>
      <p className="text-gray-400">Location: Toronto, Ontario</p>
      <a
        href="https://linkedin.com/in/jamaalbernabe"
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn Profile
      </a>
    </div>
  </div>
);

const Work = () => (
  <div className="flex flex-col items-start justify-center h-screen text-left p-8">
    <h1 className="text-5xl font-bold text-white mb-6">Work Experience</h1>
    <div className="text-gray-400 max-w-xl mb-8">
      <h2 className="text-3xl text-blue-500 mb-4">
        Aficio AI (Feb 2024 – Jul 2024)
      </h2>
      <p className="mb-6">
        <h3 className="text-2xl text-blue-500 mb-4">Software Developer</h3>

        <ul className="text-gray-400 text-xl list-disc  mb-8">
          <li>
            Integrated Azure and AWS platforms, streamlining data processing
            pipelines
          </li>
          <li>
            Optimized Azure infrastructure for restful APIs, boosting system
            scalability by 20%
          </li>
          <li>
            Redesigned core application frameworks, reducing code complexity and
            enhancing performance by 30%
          </li>
          <li>
            Integrated OpenAI and Nylas APIs, improving platform functionality
            by 30%
          </li>
        </ul>
      </p>
    </div>
    <div className="text-gray-400 max-w-xl mb-8">
      <h2 className="text-3xl text-blue-500 mb-4">
        Ministry of Children, Community, and Social Services (Aug 2023 – Aug
        2024)
      </h2>
      <p className="mb-6 ">
        <h3 className="text-2xl text-blue-500 mb-4">
          Junior Software Automation Tester
        </h3>
        <ul className="text-gray-400 text-xl list-disc  mb-8">
          <li>
            Developed automated test scripts with Selenium and JUnit, reducing
            manual testing time by 50%.
          </li>

          <li>
            Migrated testing environments to Java 17, improving system
            reliability by 33%.
          </li>
          <li>
            Implemented CI/CD pipelines for automated testing, reducing manual
            testing time by 50%.
          </li>
          <li>
            Optimized web application performance, increasing user experience by
            50%.
          </li>
        </ul>
      </p>
    </div>
  </div>
);

const Projects = () => (
  <div className="flex flex-col items-start justify-center h-screen text-left p-8">
    <h1 className="text-5xl font-bold text-white mb-6">Projects</h1>
    <div className="text-gray-400 max-w-xl mb-8">
      <h2 className="text-3xl text-blue-500 mb-4">
        Capstone AI Project – Centennial College
      </h2>
      <p className="mb-6">
        Developed AI-powered applications using Python, TensorFlow, and
        Scikit-learn, integrating machine learning models into cloud-based
        platforms (Azure, AWS) for automated data analysis and processing.
      </p>
    </div>
    <div className="text-gray-400 max-w-xl mb-8">
      <h2 className="text-3xl text-blue-500 mb-4">
        Real-Time Data Stream Processing – Aficio AI
      </h2>
      <p>
        Leveraged large language models (LLMs) in the Azure cloud to process and
        summarize real-time streamed data, providing enhanced insights for data
        analysis.
      </p>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex">
        {/* Left-Side Navigation */}
        <nav className="bg-gray-800 w-1/6 min-h-screen flex flex-col justify-center items-start p-4">
          <ul className="space-y-8 text-left text-2xl font-semibold text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:text-white">
                Work
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 flex flex-col items-start justify-center text-left">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 w-full py-4">
        <div className="container mx-auto flex justify-between text-gray-400">
          <p>© 2024 Jamaal Bernabe. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App;
