export const portfolioData = {
    personal: {
        name: "Daggubati Bapaiah Chowdary",
        role: "Aspiring Software Engineer | AI & Automation Developer | Full-Stack Builder",
        pronouns: "he/him",
        location: "Hyderabad, India",
        email: "babidaggubati13@gmail.com",
        phone: "+91 9885897160",
        linkedin: "https://www.linkedin.com/in/daggubati-bapaiah-chowdary/",
        github: "https://github.com/DaggubatiBapaiah",
        summary: "Hands-on builder, system thinker, startup-oriented learner. Bridging the gap between Computer Science, Electronics, and Applied AI."
    },
    education: [
        {
            institution: "Indian Institute of Technology Madras",
            degree: "BS in Electronic Systems",
            duration: "2025–2029",
            description: "Focus on embedded systems and electronics."
        },
        {
            institution: "BITS Pilani",
            degree: "BS in Computer Science",
            duration: "2025–2028",
            description: "Rigorous CS curriculum."
        },
        {
            institution: "NxtWave Institute of Advanced Technologies (NIAT)",
            degree: "Artificial Intelligence & Machine Learning",
            duration: "2025–2029",
            description: "Specialized AI/ML training."
        }
    ],
    skills: {
        programming: ["Python", "JavaScript", "TypeScript", "C"],
        backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication", "RBAC (Role-Based Access Control)"],
        databases: ["PostgreSQL", "SQLite", "Prisma ORM"],
        frontend: ["React", "Next.js", "Tailwind CSS", "Three.js", "GSAP"],
        "AI / ML": ["OpenCV", "Tesseract OCR", "NLP", "RAG Systems", "LLM Integration"],
        "Tools & DevOps": ["Git & GitHub", "Docker", "Cloudinary", "Vercel", "VS Code"]
    },
    projects: [
        {
            id: -1,
            title: "AI Study Assistant",
            description: "A specialized AI assistant designed to enhance the learning experience through intelligent study planning and resource management.",
            tech: ["Python", "Hugging Face", "LLMs", "RAG"],
            github: "https://github.com/DaggubatiBapaiah/ai-study-assistant",
            demoUrl: "https://huggingface.co/spaces/bapaiahchowdary/my-study-assistant",
            repo: "DaggubatiBapaiah/ai-study-assistant",
            featured: true
        },
        {
            id: 0,
            title: "Student Meet",
            description: "An execution layer for student ideas, providing a platform to connect and build projects together.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/DaggubatiBapaiah/StudentMeet-Execution-Layer-for-Student-Ideas.git",
            demoUrl: "https://studentmeet.onrender.com/",
            repo: "DaggubatiBapaiah/StudentMeet-Execution-Layer-for-Student-Ideas",
            featured: true
        },
        {
            id: 1,
            title: "AI-Powered Applicant Tracking System (ATS)",
            description: "End-to-end hiring automation platform with resume–job matching and AI-generated match scores.",
            tech: ["Python", "FastAPI", "SQLite", "HTML/CSS/JS"],
            github: "https://github.com/DaggubatiBapaiah/AI-Powered-Applicant-Tracking-System-ATS-",
            repo: "DaggubatiBapaiah/AI-Powered-Applicant-Tracking-System-ATS-",
            featured: true
        },
        {
            id: 2,
            title: "Cinematic 3D Portfolio Website",
            description: "Story-driven 3D portfolio experience with interactive navigation and cinematic video intro.",
            tech: ["React", "Three.js", "GSAP", "WebGL"],
            github: "https://github.com/DaggubatiBapaiah/cinematic-3d-portfolio",
            repo: "DaggubatiBapaiah/cinematic-3d-portfolio",
            featured: true
        },
        {
            id: 3,
            title: "Quantum-Inspired Satellite Navigation",
            description: "Classical simulation of quantum algorithms (Grover's, VQE) for route optimization and collision avoidance.",
            tech: ["Python", "Quantum Algorithms", "Simulation"],
            github: "https://github.com/DaggubatiBapaiah/Quantam-s-s-nav",
            repo: "DaggubatiBapaiah/Quantam-s-s-nav",
            featured: false
        },
        {
            id: 4,
            title: "Voice Agent – AI Web Assistant",
            description: "Push-to-talk browser voice assistant with real-time speech recognition and AI intent classification.",
            tech: ["Python", "FastAPI", "Web Speech API"],
            github: "https://github.com/DaggubatiBapaiah/-Voice-Agent-AI-Powered-Web-Voice-Assistant",
            repo: "DaggubatiBapaiah/-Voice-Agent-AI-Powered-Web-Voice-Assistant",
            featured: false
        },
        {
            id: 5,
            title: "AI Job Application Tracker",
            description: "Job tracking dashboard with explainable resume–JD matching and local privacy-first AI logic.",
            tech: ["Python", "Local AI", "Privacy-First"],
            github: "https://github.com/DaggubatiBapaiah/Ai-job-tracker-resume-matcher-",
            repo: "DaggubatiBapaiah/Ai-job-tracker-resume-matcher-",
            featured: false
        },
        {
            id: 6,
            title: "Smart Emergency Ambulance App",
            description: "Emergency healthcare system design for real-time ambulance tracking and hospital bed availability.",
            tech: ["Android (Kotlin)", "Firebase"],
            github: "https://github.com/DaggubatiBapaiah/smart-emergency-healthcare-app",
            repo: "DaggubatiBapaiah/smart-emergency-healthcare-app",
            featured: false
        },
        {
            id: 7,
            title: "Vision-Based Library Automation System",
            description: "End-to-end automated inventory system with computer vision for book identification and tracking. Achieved >90% OCR accuracy and sub-3s processing for AB Tech Ville LLP.",
            tech: ["Python", "OpenCV", "FastAPI", "Tesseract OCR"],
            github: "https://github.com/DaggubatiBapaiah/Library-Automation-System",
            featured: true,
            detailedContent: `
### Overview
Engineered a production-ready Library Automation System for **AB Tech Ville LLP** as a high-stakes technical evaluation. Retained 100% ownership of the project lifecycle, from initial system architecture to final deployment, within a compressed 5-day window.

### Problem
Manual library management processes suffer from high error rates and significant operational overhead. The goal was to eliminate manual data entry by building a high-speed, vision-based automated identification and tracking system capable of handling production-level workloads.

### System Design
Architected a multi-stage system featuring an **Asynchronous Vision Pipeline** for ingestion, a **Hierarchical Inventory Engine** for spatial localization, and a **RESTful Backend** for real-time data synchronization. The system was designed with a modular service-oriented approach to ensure extensibility and rapid iteration.

### Key Engineering Work
*   **System Ownership:** Managed the full stack, including database schema design, API contract definition, and deployment orchestration.
*   **Integrated Vision Pipeline:** Engineered a unified scanning module combining OCR, barcode detection, and image recognition to automate book metadata extraction.
*   **Hierarchical Tracking Logic:** Implemented a granular localization model (Aisle → Rack → Row → Slot) to maintain precise real-time inventory state.
*   **Scalable API Design:** Developed high-throughput RESTful endpoints to handle concurrent data ingestion from multiple vision sensors.
*   **Operational Monitoring:** Built a data-driven analytics dashboard to monitor system health, throughput, and identification accuracy in real-time.

### Performance & Optimization
*   **Latency:** Optimized image processing workflows to achieve a **sub-3-second** end-to-end processing time (scan to database).
*   **Accuracy:** Tuned OCR and image recognition parameters to reach **>90% identification accuracy** across varied lighting and orientations.
*   **Execution Speed:** Delivered a fully functional, production-ready solution within an accelerated **4–5 day development cycle**.

### Tech Stack
*   **Core:** Python
*   **Vision/AI:** OpenCV, Tesseract OCR, Image Processing
*   **Backend:** FastAPI / Flask, REST APIs
*   **Infrastructure:** System Design, Hierarchical Data Modeling

### Outcome
The system successfully passed the technical evaluation, leading to a **Software Developer Intern offer** and the immediate integration of the prototype into the company’s internal workflow as a proof-of-concept for larger-scale automation.`
        },
        {
            id: 8,
            title: "Bunkers Kitchen",
            description: "High-performance food discovery engine featuring real-time state-driven search filtering and component-based architecture. Engineered with optimized DOM reconciliation and sub-ms render latency.",
            tech: ["React", "JavaScript", "DOM Optimization", "State Management"],
            github: "https://github.com/DaggubatiBapaiah/Bunkers-kitchen-",
            demoUrl: "https://www.bunkerskitchen.com/",
            featured: true
        },
        {
            id: 9,
            title: "Gen Z E-Commerce Infrastructure",
            description: "Full-stack commerce engine featuring JWT-secured RBAC and ACID-compliant inventory synchronization across complex order lifecycles. Node.js/PostgreSQL architecture with active expansion into logistics tracking.",
            tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "JWT"],
            github: "https://github.com/DaggubatiBapaiah/Gen-Z-Fashion-E-Commerce-Platform/tree/main",
            featured: true
        },
        {
            id: 10,
            title: "FinTrack Data Engine",
            description: "Transaction-heavy analytical dashboard featuring persistent state management and real-time financial data aggregation. Engineered with RBAC-gated behavioral logic and dynamic Recharts integration.",
            tech: ["React", "Recharts", "LocalStorage", "State Management"],
            github: "https://github.com/DaggubatiBapaiah/finance-dashboard-ui",
            demoUrl: "https://finance-dashboard-ui-seven-sigma.vercel.app/",
            featured: true
        }
    ],
    certifications: [
        "Breaking into IoT Workshop 2.0 – NxtWave",
        "Hack the Human Signal – IoT Workshop – NIAT",
        "Innovators Workshop Series – IoT – NIAT",
        "TATA Crucible Campus Quiz 2025",
        "HP LIFE – Data Science & Analytics",
        "Mastering Multimodal RAG & Embeddings",
        "Deloitte Australia – Cyber Job Simulation",
        "Deloitte Australia – Data Analytics Job Simulation",
        "Siemens Mobility – Commercial Project Manager",
        "Agents in Production Hackathon – Composio"
    ],
    hackathons: [
        {
            name: "I-Summit (Incubation Summit), IIT Madras",
            status: "Final Offline Round",
            project: "Smart Emergency Health Application"
        },
        {
            name: "E-Awards, IIT Madras",
            status: "Final Offline Round",
            project: "Smart Emergency Health Application"
        },
        {
            name: "Startup Bootcamp, E-Cell IIT Madras",
            status: "Selected till Round 2"
        },
        {
            name: "Quantified Dilemma, IIT Madras",
            status: "Final Round Submission"
        },
        {
            name: "Synaptix Frontier AI Hackathon, IIT Madras",
            status: "Qualified PPT & Video Pitch"
        },
        {
            name: "FedEx SMART Hackathon",
            status: "Shaastra 2026 (IIT Madras)"
        },
        {
            name: "ET Gen AI Hackathon (Economic Times)",
            status: "Cleared MCQ; Idea Submission"
        },
        {
            name: "MindSprint 2K25",
            status: "36-Hour National Hackathon (Quantum Focus)"
        },
        {
            name: "BuildWithIndia (Vibe Hack 2.0)",
            status: "Top 5,000 teams out of 25,000+"
        }
    ],
    experience: [
        {
            role: "Software Developer Intern",
            company: "ABTECHVILLE",
            location: "Hyderabad, India",
            duration: "Feb 2026 – Present",
            description: [
                "Engineered a full-stack Library Automation System from the ground up, independently managing system design, development, and deployment without supervision.",
                "Developed an integrated computer vision pipeline combining OCR, barcode scanning, and image recognition, achieving >90% accuracy in automated book identification.",
                "Optimized processing workflows to enable sub-3-second book scanning, significantly improving operational efficiency.",
                "Designed and implemented a hierarchical real-time tracking system (Aisle → Rack → Row → Slot) for precise inventory localization.",
                "Built scalable RESTful APIs to support system communication and modular integration.",
                "Created a data-driven analytics dashboard to monitor system performance, usage patterns, and inventory insights.",
                "Delivered a fully functional, production-ready solution within an accelerated 4–5 day development cycle, demonstrating strong execution under tight deadlines."
            ],
            techStack: ["Python", "OpenCV", "Tesseract OCR", "FastAPI/Flask", "REST APIs", "Computer Vision", "Image Processing"]
        }
    ],
    leadership: [
        "Team Leader for all hackathons (ideation, development, presentations)",
        "Founder & primary idea contributor for startup-oriented projects",
        "Attended TTO & Startup Symposium 2026, IIT Madras (Jan 12, 2026)"
    ]
};
