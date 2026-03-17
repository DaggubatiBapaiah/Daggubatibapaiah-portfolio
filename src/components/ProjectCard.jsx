import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onOpen }) => {
    return (
        <div className="glass-card project-card">
            <div className="project-content">
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                    {project.title}
                </h3>
                {project.featured && (
                    <span style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        background: 'rgba(0, 242, 234, 0.1)',
                        color: 'var(--accent-primary)',
                        border: '1px solid rgba(0, 242, 234, 0.2)',
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>
                        Featured
                    </span>
                )}
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tech.map((tech, index) => (
                        <span key={index} style={{
                            fontSize: '0.875rem',
                            color: '#fff',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '4px',
                            fontFamily: 'var(--font-mono)'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="project-actions" style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    {project.demoUrl ? (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                            <button style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid var(--accent-primary)',
                                color: 'var(--accent-primary)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                fontSize: '0.875rem',
                                background: 'transparent'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--accent-primary)';
                                    e.currentTarget.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--accent-primary)';
                                }}
                            >
                                Details <ExternalLink size={16} />
                            </button>
                        </a>
                    ) : (
                        <button style={{
                            flex: 1,
                            padding: '0.75rem',
                            border: '1px solid var(--accent-primary)',
                            color: 'var(--accent-primary)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            fontSize: '0.875rem'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--accent-primary)';
                                e.currentTarget.style.color = '#000';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'var(--accent-primary)';
                            }}
                            onClick={() => onOpen(project)}
                        >
                            Details <ExternalLink size={16} />
                        </button>
                    )}

                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                        <button style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            fontSize: '0.875rem'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        >
                            Code <Github size={16} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
