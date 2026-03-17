import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Background3D from './components/Background3D';
import ProjectCard from './components/ProjectCard';
import Modal from './components/Modal';
import { portfolioData } from './data/portfolio';

const Section = ({ children, id, title }) => (
  <section id={id} className="section-container">
    {title && (
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title"
        style={{
          marginBottom: '3rem',
          fontFamily: 'var(--font-mono)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #b026ff 0%, #ff0055 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
        }}
      >
        {title} <span style={{ color: 'var(--accent-primary)', WebkitTextStroke: '0px' }}>.</span>
      </motion.h2>
    )}
    {children}
  </section>
);

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
      <Background3D />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Navigation */}
        <nav className="nav-container" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          zIndex: 100
        }}>
          <div style={{ fontWeight: '700', fontSize: '1.5rem', letterSpacing: '-1px' }}>
            DB<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </div>
          <div className="nav-links">
            {['About', 'Experience', 'Projects', 'Skills', 'Connect'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: 0.8,
                  transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.opacity = 1}
                onMouseLeave={(e) => e.target.style.opacity = 0.8}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section" style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{
                color: 'var(--accent-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                letterSpacing: '2px'
              }}>
                HELLO, I AM
              </h2>
              <h1 className="hero-title" style={{
                lineHeight: '1',
                marginBottom: '1.5rem',
                letterSpacing: '-2px'
              }}>
                Daggubati Bapaiah<br />
                Chowdary<span style={{ color: 'var(--accent-secondary)' }}>.</span>
              </h1>
              <p style={{
                fontSize: '1.5rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
                lineHeight: '1.5'
              }}>
                Building the future with <span style={{ color: '#fff' }}>full-stack engineering</span> and <span style={{ color: '#fff' }}>AI automation</span>.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#projects">
                  <button style={{
                    padding: '1rem 2.5rem',
                    background: 'var(--text-primary)',
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '4px',
                    letterSpacing: '0.5px'
                  }}>
                    View My Work
                  </button>
                </a>
                <a href="/resume.pdf" download="Daggubati_Bapaiah_Resume.pdf">
                  <button style={{
                    padding: '1rem 2.5rem',
                    border: '1px solid #ffffff',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '4px',
                    letterSpacing: '0.5px',
                    background: 'transparent'
                  }}>
                    Resume
                  </button>
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <button style={{
                    padding: '1rem 2.5rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '4px',
                    letterSpacing: '0.5px'
                  }}>
                    Contact Me
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="about-grid">
            <div className="glass-card">
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                I am <strong style={{ color: '#fff' }}>{portfolioData.personal.name}</strong>, a hands-on builder and system thinker from {portfolioData.personal.location}.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Currently pursuing a dual education in <strong style={{ color: '#fff' }}>Electronics (IIT Madras)</strong> and <strong style={{ color: '#fff' }}>Computer Science (BITS Pilani)</strong>.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                My mission is to bridge the gap between hardware, software, and artificial intelligence to build scalable, real-world solutions.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Education</h3>
              {portfolioData.education.map((edu, index) => (
                <div key={index} style={{
                  paddingLeft: '1.5rem',
                  borderLeft: '2px solid var(--accent-secondary)'
                }}>
                  <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>{edu.degree}</h4>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        
        {/* Experience Section */}
        <Section id="experience" title="Professional Experience">
          <div style={{ display: 'grid', gap: '2rem' }}>
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{exp.role}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', fontWeight: '600' }}>{exp.company} <span style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1rem' }}>| {exp.location}</span></p>
                  </div>
                  <div style={{ 
                    padding: '0.5rem 1rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--accent-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem'
                  }}>
                    {exp.duration}
                  </div>
                </div>
                
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {exp.description.map((point, i) => (
                    <li key={i} style={{ 
                      color: 'var(--text-secondary)', 
                      marginBottom: '1rem', 
                      lineHeight: '1.7',
                      position: 'relative',
                      paddingLeft: '1.5rem'
                    }}>
                      <span style={{ 
                        position: 'absolute', 
                        left: 0, 
                        color: 'var(--accent-primary)',
                        fontWeight: 'bold'
                      }}>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginRight: '0.5rem', alignSelf: 'center' }}>Tech Stack:</span>
                  {exp.techStack.map((tech, i) => (
                    <span key={i} style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent-secondary)',
                      background: 'rgba(0, 242, 234, 0.05)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(0, 242, 234, 0.1)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Featured Projects">
          <div className="projects-grid">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={handleOpenModal} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Technical Arsenal">
          <div className="skills-grid">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="glass-card">
                <h3 style={{
                  color: 'var(--accent-primary)',
                  textTransform: 'capitalize',
                  marginBottom: '1.5rem',
                  fontSize: '1.2rem'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {skills.map((skill) => (
                    <span key={skill} style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" title="Certifications">
          <div className="cert-grid">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
                <p style={{ color: '#fff', fontSize: '1rem' }}>{cert}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Hackathons & Leadership Section */}
        <Section id="hackathons" title="Hackathons & Leadership">
          <div style={{ display: 'grid', gap: '3rem' }}>
            {/* Hackathons Grid */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>Competitions</h3>
              <div className="cert-grid">
                {portfolioData.hackathons.map((item, index) => (
                  <div key={index} className="glass-card" style={{ padding: '1.5rem', borderLeft: '3px solid var(--accent-primary)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderBottomLeftRadius: '8px' }}>
                      <span style={{ fontSize: '1.2rem' }}>🏆</span>
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.75rem', paddingRight: '1rem', lineHeight: '1.4' }}>{item.name}</h4>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: item.project ? '0.5rem' : '0', fontWeight: '500' }}>{item.status}</p>
                    {item.project && (
                      <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                          <span style={{ color: '#fff', opacity: 0.7 }}>Project:</span> {item.project}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Grid */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>Leadership & Exposure</h3>
              <div className="cert-grid">
                {portfolioData.leadership.map((item, index) => (
                  <div key={index} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'start', gap: '1rem' }}>
                    <div style={{ marginTop: '6px', minWidth: '8px', width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
                    <p style={{ color: '#fff', fontSize: '1rem', lineHeight: '1.6' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Footer/Contact */}
        <footer id="connect" style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(0,0,0,0.5)',
          padding: '4rem 2rem',
          marginTop: '4rem'
        }}>
          <div className="section-container" style={{ padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              Let's Build Something <span style={{ color: 'var(--accent-primary)' }}>Extraordinary</span>.
            </h2>
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: '#fff' }}>
                <Github size={24} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: '#fff' }}>
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: '#fff' }}>
                <Mail size={24} />
              </a>
              <a href="https://wa.me/919885897160" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: '#fff' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                </svg>
              </a>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>
              &copy; {new Date().getFullYear()} Daggubati Bapaiah Chowdary. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
