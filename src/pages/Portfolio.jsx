import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Github,
    FileText,
    Search,
    Cpu,
    Code2,
    Play
} from 'lucide-react';
import { projects } from '../data/projects';
import './Portfolio.css';

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        const matchesSearch =
            searchQuery.trim() === '' ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    const compilersCount = projects.filter(p => p.category === 'compilers').length;
    const personalCount = projects.filter(p => p.category === 'personal').length;

    return (
        <div className="portfolio-container fade-in">
            {/* PAGE HEADER */}
            <div className="portfolio-header">
                <h1 className="portfolio-title">Projects</h1>
                <p className="portfolio-subtitle">
                    A collection of compilers, hardware acceleration tools, and systems experiments
                    from my PhD research and personal GitHub (<a href="https://github.com/tiagolascasas" target="_blank" rel="noopener noreferrer">@tiagolascasas</a>).
                </p>
            </div>

            {/* CONTROLS: CATEGORIES & SEARCH */}
            <div className="portfolio-controls">
                <div className="category-tabs">
                    <button
                        className={`cat-tab ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        <span>All Projects</span>
                        <span className="tab-count">{projects.length}</span>
                    </button>

                    <button
                        className={`cat-tab ${selectedCategory === 'compilers' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('compilers')}
                    >
                        <Cpu size={15} />
                        <span>Compilers & Systems</span>
                        <span className="tab-count">{compilersCount}</span>
                    </button>

                    <button
                        className={`cat-tab ${selectedCategory === 'personal' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('personal')}
                    >
                        <Code2 size={15} />
                        <span>Personal Projects</span>
                        <span className="tab-count">{personalCount}</span>
                    </button>
                </div>

                <div className="search-box">
                    <Search size={16} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Filter by keyword or tech (e.g. C++, LLVM, HLS)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    {searchQuery && (
                        <button
                            className="clear-search"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>
            </div>

            {/* PROJECTS GRID */}
            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-card-header">
                            <span className={`badge ${project.category === 'compilers' ? 'badge-industry' : 'badge-academic'}`}>
                                {project.categoryLabel}
                            </span>

                            <div className="project-header-links">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="header-link-btn"
                                        title="View GitHub Repository"
                                    >
                                        <Github size={18} />
                                    </a>
                                )}
                                {project.links.play && (
                                    <Link
                                        to={project.links.play}
                                        className="header-link-btn"
                                        title="Play Game"
                                    >
                                        <Play size={16} fill="currentColor" />
                                    </Link>
                                )}
                                {project.links.paper && (
                                    <a
                                        href={project.links.paper}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="header-link-btn"
                                        title="Read Related Publication"
                                    >
                                        <FileText size={18} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-desc">{project.description}</p>

                        <div className="project-card-footer">
                            <div className="project-card-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tech-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-card-actions">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-action-btn"
                                    >
                                        <Github size={15} />
                                        <span>View on GitHub</span>
                                    </a>
                                )}
                                {project.links.play && (
                                    <Link
                                        to={project.links.play}
                                        className="project-action-btn play-btn"
                                    >
                                        <Play size={13} fill="currentColor" />
                                        <span>Play Game</span>
                                    </Link>
                                )}
                                {project.links.paper && (
                                    <a
                                        href={project.links.paper}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-action-btn paper-btn"
                                    >
                                        <FileText size={15} />
                                        <span>Paper</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="no-projects-found">
                    <p>No projects match your search criteria "{searchQuery}".</p>
                    <button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} className="btn btn-secondary btn-sm">
                        Reset Filters
                    </button>
                </div>
            )}
        </div>
    );
}
