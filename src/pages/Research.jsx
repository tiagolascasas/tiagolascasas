import { useState } from 'react';
import { 
    ExternalLink, 
    Quote, 
    FileText, 
    Youtube, 
    Download, 
    Search, 
    Presentation, 
    Award 
} from 'lucide-react';
import { publications } from '../data/publications';
import './Research.css';

export default function Research() {
    const [copiedId, setCopiedId] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const copyBibtex = (id, bibtex) => {
        navigator.clipboard.writeText(bibtex).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    const filteredPubs = publications.filter(pub => {
        const matchesFilter = 
            activeFilter === 'all' || 
            (activeFilter === 'conference' && pub.type === 'conference') ||
            (activeFilter === 'poster' && pub.type === 'poster') ||
            (activeFilter === 'thesis' && pub.type === 'thesis');

        const matchesSearch = 
            searchQuery.trim() === '' ||
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.citation.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <div className="research-container fade-in">
            {/* HEADER */}
            <div className="research-header">
                <h1 className="research-title">Publications & Research</h1>
                <p className="research-subtitle">
                    Academic publications, conference talks, and software demonstrations developed during 
                    my PhD at FEUP/INESC TEC and research collaboration at Carnegie Mellon University.
                </p>
            </div>

            {/* CONTROLS */}
            <div className="research-controls">
                <div className="filter-tabs">
                    <button 
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Publications ({publications.length})
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'conference' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('conference')}
                    >
                        Conference Papers
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'poster' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('poster')}
                    >
                        Posters & Short Papers
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'thesis' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('thesis')}
                    >
                        Theses
                    </button>
                </div>

                <div className="search-box">
                    <Search size={16} className="search-icon" />
                    <input 
                        type="text" 
                        placeholder="Search publications by keyword, venue, or title..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            {/* PUBLICATIONS STREAM */}
            <section className="research-section">
                <div className="publications-list">
                    {filteredPubs.map((pub, index) => (
                        <div key={pub.id} className="citation-card">
                            <div className="citation-header-row">
                                <div className="pub-tags-row">
                                    <span className="venue-tag">{pub.venue}</span>
                                    <span className="year-tag">{pub.year}</span>
                                    <span className="type-tag">{pub.typeLabel}</span>
                                </div>
                                <span className="citation-index">#{index + 1}</span>
                            </div>

                            <h3 className="citation-title">{pub.title}</h3>
                            <p className="citation-text">{pub.citation}</p>

                            <div className="citation-actions">
                                <button
                                    className="action-btn bibtex-btn"
                                    onClick={() => copyBibtex(pub.id, pub.bibtex)}
                                    title="Copy BibTeX citation"
                                >
                                    <Quote size={14} />
                                    <span>{copiedId === pub.id ? 'Copied BibTeX!' : 'Copy BibTeX'}</span>
                                </button>

                                {pub.link && (
                                    <a href={pub.link} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={14} />
                                        <span>Publisher DOI</span>
                                    </a>
                                )}

                                {pub.paper && (
                                    <a href={pub.paper} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <Download size={14} />
                                        <span>Paper PDF</span>
                                    </a>
                                )}

                                {pub.poster && (
                                    <a href={pub.poster} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <FileText size={14} />
                                        <span>Poster PDF</span>
                                    </a>
                                )}

                                {pub.presentation && (
                                    <a href={pub.presentation} className="action-btn video-btn" target="_blank" rel="noopener noreferrer">
                                        <Youtube size={14} />
                                        <span>Presentation Video</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredPubs.length === 0 && (
                    <div className="no-pubs-found">
                        <p>No publications match your filter criteria "{searchQuery}".</p>
                    </div>
                )}
            </section>

            {/* TALKS & PRESENTATIONS */}
            <section className="research-section">
                <div className="section-title-row">
                    <Presentation size={22} className="section-row-icon" />
                    <h2>Conferences & Invited Presentations</h2>
                </div>

                <div className="talks-grid">
                    <div className="talk-card">
                        <div className="talk-date">2025</div>
                        <h3>IEEE MCSoC 2025 (Singapore)</h3>
                        <p>Oral presentation on automated HLS transformations and function offloading to CPUs in CPU-FPGA systems.</p>
                    </div>
                    <div className="talk-card">
                        <div className="talk-date">2025</div>
                        <h3>IEEE FCCM 2025 (Fayetteville, AR, USA)</h3>
                        <p>PhD Forum poster on holistic CPU-FPGA partitioning, and presentation on improving HLS code region compatibility.</p>
                    </div>
                    <div className="talk-card">
                        <div className="talk-date">2024</div>
                        <h3>Carnegie Mellon University (CALCM / Systems)</h3>
                        <p>Presented ongoing research on compiler transformations for hardware/software partitioning during research visit.</p>
                    </div>
                    <div className="talk-card">
                        <div className="talk-date">2024</div>
                        <h3>ACM LCTES 2024</h3>
                        <p>Work-in-progress presentation on flexible-granularity task graph generation from C applications.</p>
                    </div>
                    <div className="talk-card">
                        <div className="talk-date">2023</div>
                        <h3>IEEE PACT 2023 (Vienna, Austria)</h3>
                        <p>PhD Forum poster presentation on source-to-source CPU-FPGA partitioning approaches.</p>
                    </div>
                </div>
            </section>

            {/* DEMONSTRATIONS & ACADEMIC SERVICE */}
            <section className="research-section">
                <div className="section-title-row">
                    <Award size={22} className="section-row-icon" />
                    <h2>Demonstrations & Service</h2>
                </div>

                <div className="service-card">
                    <h3>Design Automation Conference (DAC 2025) — University Demonstration</h3>
                    <p>
                        Selected for the DAC University Demonstration session in San Francisco, CA, demonstrating the 
                        holistic source-to-source partitioning and compiler pipeline for CPU-FPGA heterogeneous targets.
                    </p>
                </div>
            </section>
        </div>
    );
}
