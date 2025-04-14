import React from "react";
import { ExternalLink, GraduationCap, Link as LinkIcon } from "lucide-react";
import { FaReact, FaJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiFigma, SiFirebase, SiMongodb, SiSupabase, SiVercel, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { Globe } from "lucide-react"; // Using Globe as a placeholder for category icon
import './styles.css'; // Import the CSS file

const About = () => {
  // Education data (unchanged)
  const education = [
    {
      institution: "SRKR Engineering College",
      degree: "Bachelors of Technology Computer Science and Design",
      period: "2023-2026",
      location: "Bhimavaram, Andhra Pradesh",
      gpa: "8.21",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpaC8jyHoECdJcXcyvv3vDd7mpUpiX5xXY0QioQMdO-F4JNg-6WH1LDqhBzjQ_l5xbZ_M&usqp=CAU",
      url: "https://www.srkrec.edu.in/"
    },
    {
      institution: "Smt.B.Seeta Polytechnic",
      degree: "Diploma in Computer Science",
      period: "2020 - 2023",
      location: "Bhimavaram, Andhra Pradesh",
      gpa: "78.31%",
      logo: "https://www.pngkey.com/png/detail/244-2445261_shri-vishnu-engineering-college-for-women-vishnu-educational.png",
      url: "https://seethapoly.edu.in/"
    },
  ];

  // Experience data (unchanged but adjusted for consistency)
  const experience = [
    {
      position: "Freelance Web Developer",
      company: "Wonderkids School Website",
      period: "Oct 2024 - Dec 2024",
      description: "Developed and maintained a dynamic web application for students and educators. Utilized HTML, JavaScript, PHP, and SQL for responsive user interfaces and robust backends.",
      tags: ["HTML", "JavaScript", "PHP", "SQL"],
      logo: "/images/school.png",
      url: "https://wonderkids.great-site.net/?i=1",
      codeUrl: "https://github.com/Sujay149/wonderkids"
    },
    {
      position: "Python Full-stack Intern",
      company: "IDDT Blackbucks",
      period: "May 2024 - Jul 2024",
      description: "Developed a full-stack Notes-Taking Web Application using the Django framework. The app enables users to efficiently create, update, and delete personal notes with a focus on simplicity and user experience. Each note is stored with a timestamp.",
      tags: ["Python", "Django"],
      logo: "https://theblackbucks.com/images/logo.png",
      url: "https://theblackbucks.com",
      codeUrl: "https://github.com/Sujay149/notes-taking-app"
    },
    {
      position: "Android Developer Virtual Internship",
      company: "Google",
      period: "Oct 2024 - Dec 2024",
      description: "Gained hands-on experience in Android development using Kotlin and Java. Created a basic app using Android Studio.",
      tags: ["Android", "Kotlin", "Java"],
      logo: "https://tse2.mm.bing.net/th?id=OIP.TO1-Y7v3uO6iVwTznL1SAAHaFX&pid=Api&P=0&h=180",
      url: "https://developers.google.com",
      codeUrl: "https://github.com/Sujay1499/android-app"
    }
  ];

  // Updated Skill Categories
  const programmingLanguages = [
    { icon: <FaPython style={{ color: "#3776AB" }} />, name: "Python" },
    { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
    { icon: <FaJava style={{ color: "#007396" }} />, name: "Java" },
  ];

  const frontendTechnologies = [
    { icon: <FaReact style={{ color: "#61DAFB" }} />, name: "React" },
    { icon: <FaHtml5 style={{ color: "#E34F26" }} />, name: "HTML5" },
    { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, name: "CSS3" },
    { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, name: "Tailwind CSS" },
    { icon: <SiBootstrap style={{ color: "#7952B3" }} />, name: "Bootstrap" },
    { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
  ];

  const backendTechnologies = [
    { icon: <FaNodeJs style={{ color: "#339933" }} />, name: "Node.js" },
    { icon: <FaPhp style={{ color: "#777BB4" }} />, name: "PHP" },
  ];

  const databaseSkills = [
    { icon: <SiMongodb style={{ color: "#47A248" }} />, name: "MongoDB" },
    { icon: <FaDatabase style={{ color: "#003087" }} />, name: "MySQL" },
    { icon: <FaDatabase style={{ color: "#003087" }} />, name: "SQLite" },
    { icon: <SiFirebase style={{ color: "#FFCA28" }} />, name: "Firebase" },
    { icon: <SiSupabase style={{ color: "#3FCF8E" }} />, name: "Supabase" },
  ];

  const cloudHostingSkills = [
    { icon: <SiVercel style={{ color: "#000000" }} />, name: "Vercel" },
    { icon: <SiFirebase style={{ color: "#FFCA28" }} />, name: "Firebase" },
    { icon: <Globe style={{ color: "#CBD5E0" }} />, name: "Render" },
    { icon: <Globe style={{ color: "#CBD5E0" }} />, name: "Railway" },
    { icon: <Globe style={{ color: "#CBD5E0" }} />, name: "Netlify" },
    { icon: <FaGitAlt style={{ color: "#F05032" }} />, name: "GitHub Pages" },
  ];

  // Combine all skill categories for rendering
  const skillCategories = [
    { title: "Programming Languages", skills: programmingLanguages, icon: <Globe style={{ color: "#CBD5E0" }} /> },
    { title: "Frontend Technologies", skills: frontendTechnologies, icon: <Globe style={{ color: "#CBD5E0" }} /> },
    { title: "Backend Technologies", skills: backendTechnologies, icon: <Globe style={{ color: "#CBD5E0" }} /> },
    { title: "Databases", skills: databaseSkills, icon: <Globe style={{ color: "#CBD5E0" }} /> },
    { title: "Cloud & Hosting", skills: cloudHostingSkills, icon: <Globe style={{ color: "#CBD5E0" }} /> },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", width: "100%", position: "relative" }}>
      <main style={{ padding: "64px 32px", width: "100%", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <header style={{ marginBottom: "48px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#000", lineHeight: "1.2" }}>
            I'm Sujay . I'm a Software Developer.
          </h1>
          <p style={{ color: "#666", fontSize: "18px", marginTop: "24px" }}>
            A brief introduction to me, my background, and my interests.
          </p>
        </header>

        {/* Experience Section */}
        <section style={{ marginBottom: "64px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "32px" }}>Experience</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {experience.map((exp, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "8px",
                  transition: "background-color 0.3s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} style={{ width: "40px", height: "40px", marginRight: "8px", objectFit: "contain", borderRadius: "50%" }} />
                  ) : (
                    <div style={{ width: "40px", height: "40px", marginRight: "8px", backgroundColor: "#e5e7eb", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "500", color: "#6b7280" }}>
                      {exp.company.charAt(0)}
                    </div>
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>{exp.company}</div>
                  <div style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>{exp.position}</div>
                  {exp.description && <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>{exp.description}</p>}
                  <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>{exp.period}</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#14b8a6", fontSize: "14px", display: "flex", alignItems: "center" }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      <LinkIcon style={{ width: "16px", height: "16px", marginRight: "4px" }} />
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{exp.url.replace(/^https?:\/\//, '')}</span>
                    </a>
                  )}
                  {exp.codeUrl && (
                    <a
                      href={exp.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#14b8a6", fontSize: "14px", display: "flex", alignItems: "center" }}
                      onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                    >
                      <ExternalLink style={{ width: "16px", height: "16px", marginRight: "4px" }} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section with Animation */}
        <section style={{ marginBottom: "64px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "32px" }}>Skills</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="skill-card" // Added class for animation
                style={{
                  backgroundColor: "#F7FBFC",
                  padding: "24px",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "24px", marginRight: "12px" }}>{category.icon}</span>
                  <h4 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>{category.title}</h4>
                </div>
                <p style={{ fontSize: "14px", color: "black", marginBottom: "16px" }}>
                  {category.skills.map(skill => skill.name).join(", ")}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: "12px" }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                      <span style={{ fontSize: "32px" }}>{skill.icon}</span>
                      <span style={{ fontSize: "12px", color: "black" }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: "64px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "32px" }}>Education</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {education.map((edu, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "24px",
                  borderRadius: "8px",
                  transition: "background-color 0.3s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9fafb")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "16px", color: "#6b7280" }}>
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      style={{ width: "48px", height: "48px", objectFit: "contain", marginRight: "12px", borderRadius: "50%", border: "1px solid #e5e7eb" }}
                    />
                  ) : (
                    <div style={{ width: "48px", height: "48px", backgroundColor: "#f3f4f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "12px" }}>
                      <GraduationCap style={{ width: "24px", height: "24px", color: "#9ca3af" }} />
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "bold" }}>{edu.institution}</div>
                    <div style={{ fontSize: "14px", color: "#6b7280" }}>{edu.location}</div>
                  </div>
                </div>
                <div style={{ flex: 1, marginBottom: "8px" }}>
                  <div style={{ color: "#4b5563" }}>{edu.degree}</div>
                  <div style={{ fontSize: "14px", color: "#6b7280" }}>{edu.period}</div>
                  {edu.gpa && (
                    <div style={{ fontSize: "14px", color: "#6b7280" }}>GPA: {edu.gpa}</div>
                  )}
                </div>
                {edu.url && (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: "auto", color: "#14b8a6", fontSize: "14px", display: "flex", alignItems: "center" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    <LinkIcon style={{ width: "16px", height: "16px", marginRight: "4px" }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{edu.url.replace(/^https?:\/\//, '')}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;