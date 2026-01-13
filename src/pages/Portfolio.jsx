import { Folder, ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Native OpenGL Engine',
        description: 'A native Linux OpenGL 3D rendering engine featuring a first-person fly camera, shader management, and basic geometry rendering.',
        tags: ['C++', 'OpenGL', 'Linux', 'GLSL'],
        links: {
            github: 'https://github.com/tiagolascasas/opengl-scene', // Placeholder link
        }
    },
    {
        id: 2,
        title: 'CPU-FPGA Partitioning Framework',
        description: 'PhD research project focusing on the simultaneous and holistic partitioning and optimization of C/C++ applications in heterogeneous CPU-FPGA systems.',
        tags: ['C++', 'FPGA', 'HLS', 'Research'],
        links: {
            // No link for private research yet
        }
    },
    {
        id: 3,
        title: 'Personal Website',
        description: 'A static, responsive personal portfolio website built with React and Vite, featuring dark mode and a premium design system.',
        tags: ['React', 'Vite', 'CSS', 'GitHub Pages'],
        links: {
            github: 'https://github.com/tiagolascasas/tiagolascasas.github.io'
        }
    }
];

export default function Portfolio() {
    return (
        <div className="portfolio-container fade-in">
            <div className="portfolio-header">
                <h1>Portfolio</h1>
                <p>A collection of my recent work and research projects.</p>
            </div>

            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="card-header">
                            <Folder className="folder-icon" size={40} />
                            <div className="card-links">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                                        <Github size={20} />
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>

                        <div className="project-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
