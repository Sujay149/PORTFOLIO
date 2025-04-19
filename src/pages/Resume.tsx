import React from 'react';
import { Download, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Resume = () => {
  const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1YLGBUAO-Y3PWxKkwFxJJJfv6YqqU3HH4';

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <h1 className="text-4xl font-bold">My Resume</h1>
          <a
            href={resumeDownloadLink}
            download
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">THOTA. SUJAY BABU</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4 text-gray-600">
              <div className="flex items-center gap-2 justify-center">
                <Phone size={16} />
                <span>+91 9346491221</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail size={16} />
                <span>sujayss149@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin size={16} />
                <span>Bhimavaram, West Godavari, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3">SUMMARY</h3>
            <p className="text-gray-700 mb-3">
              Full-stack Developer | B.Tech in Computer Science and Design (Graduating 2026)
            </p>
            <p className="text-gray-700 mb-3">
              Results-driven Full-stack Developer proficient in React, Django, Node.js, and database management systems
              (MongoDB, SQLite, MySQL). Successfully developed a feature-rich notes-taking app during a Python Full-stack
              internship at IDDT Blackbucks, implementing CRUD operations with Django and full functionality to enhance
              user experience.
            </p>
            <p className="text-gray-700">
              Skilled in development, cloud deployment, and version control with GitHub. Currently pursuing a B.Tech
              degree at SRKR Engineering College (JNTUK) with a CGPA of 8.21. Passionate about creating innovative
              solutions and eager to contribute to impactful full-stack and mobile development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">SRKR Engineering College</span>
                  <span>Sep 2023 - Present</span>
                </div>
                <p className="text-gray-700">B.Tech in Computer Science and Design, Bhimavaram, Andhra Pradesh</p>
                <p className="text-gray-700">CGPA: 8.21</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-4">SKILLS</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-semibold">Programming Languages:</span> Python, JavaScript</li>
                <li><span className="font-semibold">Web Development:</span> React, Node.js, HTML5, CSS3</li>
                <li><span className="font-semibold">Database:</span> MongoDB, SQLite, MySQL</li>
                <li><span className="font-semibold">UI/UX Design:</span> Frontend Design (Figma)</li>
                <li><span className="font-semibold">Cloud & Hosting:</span> Experienced cloud deployment and server management</li>
              </ul>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">WORK EXPERIENCE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Job 1 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Freelance Web Developer</h4>
                  <span className="text-sm text-gray-600">Oct 2024 - Dec 2024</span>
                </div>
                <p className="text-gray-700 mb-2">School Website Development, Bhimavaram, India</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed and maintained a dynamic web application for students and educators using HTML, JavaScript, PHP, and SQL.</li>
                  <li>Built responsive user interfaces and implemented secure backend functionalities.</li>
                  <li>Conducted thorough testing and debugging to ensure optimal performance and system reliability.</li>
                  <li>Deployed the platform to production: <a href="https://wonderkids.great-site.net/?i=1" className="text-blue-600 hover:underline">wonderkids.great-site.net</a></li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Python Full-stack Intern</h4>
                  <span className="text-sm text-gray-600">May 2024 - Jul 2024</span>
                </div>
                <p className="text-gray-700 mb-2">IDDT Blackbucks (Virtual Internship)</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed a full-stack Notes-Taking Web Application using the Django framework.</li>
                  <li>Implemented CRUD operations for personal notes management.</li>
                  <li>Integrated timestamp functionality to automatically record the creation date of each note.</li>
                  <li>Focused on user experience and simplicity, ensuring an intuitive interface.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">PROJECTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {/* Project 1 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">NeuroHUB</h4>
                  <span className="text-sm text-gray-600">Jan 2025 - Apr 2025</span>
                </div>
                <p className="text-gray-700 mb-2">Neurodiversity Inclusion Platform</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed NeuroHUB, a platform promoting neurodiversity by providing resources for individuals with autism, ADHD, and dyslexia.</li>
                  <li>Utilized React, Tailwind CSS, Firebase, and TypeScript to build a responsive, user-friendly interface.</li>
                  <li>Integrated APIs for dynamic content and real-time updates.</li>
                  <li>Promoted inclusivity by highlighting and utilizing the unique strengths of neurodivergent individuals.</li>
                  <li>Deployed to production: <a href="https://signup-1499.web.app" className="text-blue-600 hover:underline">signup-1499.web.app</a></li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">CraveFinder</h4>
                  <span className="text-gray-600 text-sm">Mar 2024 - May 2024</span>
                </div>
                <p className="text-gray-700 mb-2">Recipe Discovery Platform</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed CraveFinder, a web app for exploring recipes from various cuisines using TypeScript, React, and Node.js.</li>
                  <li>Implemented recipe search by category, ingredient, and dietary preferences, with step-by-step guides.</li>
                  <li>Created an interactive platform encouraging culinary experimentation for users of all skill levels.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">ReDestiny</h4>
                  <span className="text-sm text-gray-600">Jul 2024 - Sep 2024</span>
                </div>
                <p className="text-gray-700 mb-2">Smart URL Shortener</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Developed ReDestiny, an intuitive URL shortener with custom domains using React.js, Node.js, and MongoDB.</li>
                  <li>Implemented real-time link management and redirection features with Tailwind CSS, Bootstrap, and Material UI.</li>
                  <li>Enabled users to control and transform their destination links with ease.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Innovation Project - SIH</h4>
                  <span className="text-sm text-gray-600">Nov 2024 - Dec 2024</span>
                </div>
                <p className="text-gray-700 mb-2">Smart India Hackathon</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Participated in the Smart India Hackathon (SIH) to develop an innovative solution addressing real-world problems.</li>
                  <li>Worked collaboratively to design and implement a cutting-edge application focused on solving issues in a specific domain.</li>
                  <li>Leveraged React, Node.js, and MongoDB to create a scalable, efficient, and user-friendly solution.</li>
                  <li>Applied problem-solving, teamwork, and agile development methodologies to deliver the project within tight deadlines.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">CERTIFICATIONS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Java Certification</li>
                <li>Android Developer (GOOGLE)</li>
                <li>C Programming (CISCO Networking Academy)</li>
                <li>SQL-BASIC (HackerRank)</li>
              </ul>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Python (IDDT BLACKBUCKS)</li>
                <li>Analytics Certification</li>
                <li>Google Ads Certification</li>
                <li>C Programming (CISCO Networking Academy)</li>
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">LANGUAGES</h3>
            <p className="text-gray-700">Telugu, English, Hindi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
