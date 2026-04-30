import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Modal = ({ isOpen, onClose, project }) => {
    const [readmeContent, setReadmeContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            if (project?.detailedContent) {
                setReadmeContent(project.detailedContent);
                setLoading(false);
                setError(null);
            } else if (project?.repo) {
                setLoading(true);
                setError(null);
                // Try main first, fallback to master if needed
                fetch(`https://raw.githubusercontent.com/${project.repo}/main/README.md`)
                    .then(async (res) => {
                        if (!res.ok) {
                            return fetch(`https://raw.githubusercontent.com/${project.repo}/master/README.md`);
                        }
                        return res;
                    })
                    .then(async (res) => {
                        if (!res.ok) throw new Error('README not found');
                        return res.text();
                    })
                    .then(text => setReadmeContent(text))
                    .catch(err => {
                        console.error(err);
                        setError('Could not load README. Please check the repository link.');
                    })
                    .finally(() => setLoading(false));
            } else {
                setReadmeContent('');
                setLoading(false);
            }
        } else {
            setReadmeContent('');
        }
    }, [isOpen, project]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card"
                            style={{
                                width: '100%',
                                maxWidth: '900px',
                                height: '85vh',
                                overflowY: 'auto',
                                position: 'relative',
                                background: '#0a0a0a',
                                border: '1px solid var(--accent-primary)',
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{
                                padding: '2rem',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                                background: 'rgba(0,0,0,0.5)',
                                position: 'sticky',
                                top: 0,
                                zIndex: 10
                            }}>
                                <div>
                                    <h2 style={{
                                        fontSize: '2rem',
                                        marginBottom: '0.5rem',
                                        color: 'var(--accent-primary)',
                                        lineHeight: 1.1
                                    }}>
                                        {project.title}
                                    </h2>
                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} style={{
                                                padding: '0.25rem 0.5rem',
                                                background: 'rgba(255,255,255,0.1)',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem',
                                                color: '#fff',
                                                fontFamily: 'var(--font-mono)'
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    style={{
                                        color: '#fff',
                                        padding: '0.5rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '50%'
                                    }}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                        {project.description}
                                    </p>
                                </div>

                                <div className="markdown-content" style={{
                                    color: '#e0e0e0',
                                    fontSize: '1rem',
                                    lineHeight: '1.7',
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    minHeight: '200px'
                                }}>
                                    {loading ? (
                                        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', color: 'var(--accent-primary)' }}>
                                            <Loader2 className="animate-spin" size={32} />
                                        </div>
                                    ) : error ? (
                                        <div style={{ textAlign: 'center', padding: '2rem', color: '#ff4444' }}>
                                            <p>{error}</p>
                                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#888' }}>
                                                Make sure the repository exists and is public.
                                            </p>
                                        </div>
                                    ) : (
                                        <ReactMarkdown>{readmeContent}</ReactMarkdown>
                                    )}
                                </div>
                            </div>

                            <div style={{
                                padding: '1.5rem 2rem',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(0,0,0,0.5)',
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <button style={{
                                        padding: '0.75rem 1.5rem',
                                        background: 'var(--accent-primary)',
                                        color: '#000',
                                        fontWeight: '600',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        View Repository <Github size={18} />
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
