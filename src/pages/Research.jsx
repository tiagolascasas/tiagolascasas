import { useState } from 'react';
import {
    ExternalLink,
    Quote,
    FileText,
    Youtube,
    Download,
    Search,
    Award,
    Github,
    BookOpen,
    Sparkles,
    CheckCircle2,
    Users,
    Mic,
    MapPin,
    Presentation
} from 'lucide-react';
import { publications, forumsAndDemos, academicServices } from '../data/publications';
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

    const confCount = publications.filter(p => p.type === 'conference').length;
    const posterCount = publications.filter(p => p.type === 'poster').length;
    const thesisCount = publications.filter(p => p.type === 'thesis').length;

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
    }).sort((a, b) => b.year - a.year);

    return (
        <div className="research-container fade-in">
            {/* PAGE HEADER */}
            <div className="research-header">
                <h1 className="research-title">Publications & Research Activities</h1>
            </div>

            {/* SECTION 1: PUBLISHED PAPERS & THESES IN PROCEEDINGS */}
            <section className="research-section" id="proceedings-publications">
                <div className="section-title-row">
                    <BookOpen size={20} className="section-row-icon" />
                    <div className="section-heading-text">
                        <h2>Published Papers & Theses</h2>
                    </div>
                </div>

                {/* CONTROLS */}
                <div className="research-controls">
                    <div className="filter-tabs">
                        <button
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All ({publications.length})
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'conference' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('conference')}
                        >
                            Conference Papers ({confCount})
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'poster' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('poster')}
                        >
                            Posters & Short Papers ({posterCount})
                        </button>
                        <button
                            className={`filter-btn ${activeFilter === 'thesis' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('thesis')}
                        >
                            Theses ({thesisCount})
                        </button>
                    </div>

                    <div className="search-box">
                        <Search size={16} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search papers by keyword, venue, or title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                {/* PUBLICATIONS STREAM */}
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

                                {pub.slides && (
                                    <a href={pub.slides} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <Presentation size={14} />
                                        <span>Slides PDF</span>
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

            {/* SECTION 2: PHD FORUMS & DEMONSTRATIONS (NOT IN PROCEEDINGS) */}
            <section className="research-section" id="forums-and-demos">
                <div className="section-title-row">
                    <Sparkles size={20} className="section-row-icon" />
                    <div className="section-heading-text">
                        <h2>PhD Forums & Demonstrations</h2>
                    </div>
                </div>

                <div className="demos-grid">
                    {forumsAndDemos.map((item) => (
                        <div key={item.id} className="demo-card">
                            <div className="demo-card-header">
                                <div className="pub-tags-row">
                                    <span className="venue-tag">{item.venue}</span>
                                    <span className="year-tag">{item.year}</span>
                                    <span className="type-tag">{item.typeLabel}</span>
                                    {item.location && (
                                        <span className="location-tag">
                                            <MapPin size={11} /> {item.location}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <h3 className="demo-card-title">{item.title}</h3>
                            <div className="demo-event-name">{item.event}</div>
                            {item.description && <p className="demo-card-desc">{item.description}</p>}

                            <div className="citation-actions">
                                {item.code && (
                                    <a href={item.code} className="action-btn code-btn" target="_blank" rel="noopener noreferrer">
                                        <Github size={14} />
                                        <span>Demo Code (GitHub)</span>
                                    </a>
                                )}
                                {item.paper && (
                                    <a href={item.paper} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <Download size={14} />
                                        <span>Paper PDF</span>
                                    </a>
                                )}
                                {item.slides && (
                                    <a href={item.slides} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <Presentation size={14} />
                                        <span>Slides PDF</span>
                                    </a>
                                )}
                                {item.poster && (
                                    <a href={item.poster} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <FileText size={14} />
                                        <span>Poster PDF</span>
                                    </a>
                                )}
                                {item.link && (
                                    <a href={item.link} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={14} />
                                        <span>Event / Details</span>
                                    </a>
                                )}
                                {!item.code && !item.paper && !item.poster && !item.slides && (
                                    <span className="pending-badge">
                                        Links & Materials Updating Soon
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: ACADEMIC SERVICE & NON-PAPER ACTIVITIES (COMPACT) */}
            <section className="research-section" id="academic-services">
                <div className="section-title-row">
                    <Award size={20} className="section-row-icon" />
                    <div className="section-heading-text">
                        <h2>Academic Service & Non-Paper Talks</h2>
                    </div>
                </div>

                <div className="compact-services-grid">
                    {/* Talks Column */}
                    <div className="compact-service-panel">
                        <div className="service-panel-header">
                            <Mic size={16} className="panel-header-icon" />
                            <h3>Invited & Seminar Talks</h3>
                        </div>
                        <div className="service-items-list">
                            {academicServices.talks.map(talk => (
                                <div key={talk.id} className="compact-service-item">
                                    <div className="item-meta-top">
                                        <span className="item-year-badge">{talk.year}</span>
                                        <span className="item-type-badge">{talk.type}</span>
                                    </div>
                                    <div className="item-content">
                                        <h4 className="item-title">{talk.title}</h4>
                                        <div className="item-venue">
                                            {talk.venue}
                                            {talk.location ? ` · ${talk.location}` : ''}
                                        </div>
                                        {talk.description && <p className="item-desc">{talk.description}</p>}
                                    </div>

                                    {(talk.slides || talk.paper || talk.poster || talk.code || talk.link) && (
                                        <div className="compact-item-actions">
                                            {talk.slides && (
                                                <a href={talk.slides} className="action-btn action-btn-xs" target="_blank" rel="noopener noreferrer">
                                                    <Presentation size={13} />
                                                    <span>Slides PDF</span>
                                                </a>
                                            )}
                                            {talk.paper && (
                                                <a href={talk.paper} className="action-btn action-btn-xs" target="_blank" rel="noopener noreferrer">
                                                    <Download size={13} />
                                                    <span>Paper PDF</span>
                                                </a>
                                            )}
                                            {talk.poster && (
                                                <a href={talk.poster} className="action-btn action-btn-xs" target="_blank" rel="noopener noreferrer">
                                                    <FileText size={13} />
                                                    <span>Poster PDF</span>
                                                </a>
                                            )}
                                            {talk.code && (
                                                <a href={talk.code} className="action-btn code-btn action-btn-xs" target="_blank" rel="noopener noreferrer">
                                                    <Github size={13} />
                                                    <span>Code</span>
                                                </a>
                                            )}
                                            {talk.link && (
                                                <a href={talk.link} className="action-btn action-btn-xs" target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink size={13} />
                                                    <span>Details</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Community & Reviews Combined Column */}
                    <div className="compact-service-panel">
                        {/* Community & Organization */}
                        <div className="service-group">
                            <div className="service-panel-header">
                                <Users size={16} className="panel-header-icon" />
                                <h3>Community & Organization</h3>
                            </div>
                            <div className="service-items-list">
                                {academicServices.organization.map(org => (
                                    <div key={org.id} className="compact-service-item">
                                        <div className="item-meta-top">
                                            <span className="item-year-badge">{org.period}</span>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">{org.role}</h4>
                                            <div className="item-venue">{org.venue}</div>
                                            {org.description && <p className="item-desc">{org.description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="service-group-divider" />

                        {/* Artifact Reviews & Peer Reviewing */}
                        <div className="service-group">
                            <div className="service-panel-header">
                                <CheckCircle2 size={16} className="panel-header-icon" />
                                <h3>Artifact Reviews & Peer Reviewing</h3>
                            </div>
                            <div className="service-items-list">
                                {academicServices.reviews.map(rev => (
                                    <div key={rev.id} className="compact-service-item">
                                        <div className="item-meta-top">
                                            <span className="item-year-badge">{rev.period}</span>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">{rev.role}</h4>
                                            <div className="item-venue">{rev.venue}</div>
                                            {rev.description && <p className="item-desc">{rev.description}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
