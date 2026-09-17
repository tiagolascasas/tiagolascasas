import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Download,
    Printer,
    GraduationCap,
    Briefcase,
    BookOpen,
    FileText,
    Quote,
    ExternalLink,
    Youtube,
    ArrowRight,
    Award,
    Presentation,
    Code,
    MapPin,
    Mail,
    Globe,
    CheckCircle2,
    Check,
    Copy,
    Github
} from 'lucide-react';
import html2pdf from 'html2pdf.js';
import { publications, forumsAndDemos, academicServices } from '../data/publications';
import { projects } from '../data/projects';
import { teachingCourses } from '../data/teaching';
import './CV.css';

export default function CV() {
    const cvRef = useRef(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [copiedId, setCopiedId] = useState(null);

    const handleDownloadPDF = async () => {
        const element = cvRef.current;
        if (!element || isGenerating) return;

        setIsGenerating(true);

        const root = document.documentElement;
        const prevTheme = root.getAttribute('data-theme');
        root.setAttribute('data-theme', 'light');
        element.setAttribute('data-theme', 'light');
        element.classList.add('pdf-mode');

        await new Promise(resolve => setTimeout(resolve, 150));

        const opt = {
            margin: [0.35, 0.4, 0.35, 0.4],
            filename: 'Tiago_Lascasas_Santos_Academic_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                scrollY: 0,
                backgroundColor: '#ffffff'
            },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: {
                mode: ['css', 'legacy'],
                avoid: ['.timeline-item', '.teaching-card', '.cv-pub-card', '.cv-section-title', '.simple-cv-list li', '.skill-cat-item']
            }
        };

        try {
            await html2pdf().set(opt).from(element).save();
        } catch (err) {
            console.error('PDF export fallback:', err);
            window.print();
        } finally {
            element.classList.remove('pdf-mode');
            element.removeAttribute('data-theme');
            if (prevTheme) {
                root.setAttribute('data-theme', prevTheme);
            } else {
                root.removeAttribute('data-theme');
            }
            setIsGenerating(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('tiagolascasas@outlook.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

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
        if (activeFilter === 'all') return true;
        if (activeFilter === 'conference') return pub.type === 'conference';
        if (activeFilter === 'poster') return pub.type === 'poster';
        if (activeFilter === 'thesis') return pub.type === 'thesis';
        return true;
    }).sort((a, b) => b.year - a.year);

    const allPresentations = [
        ...academicServices.talks.map(t => ({
            id: t.id,
            venue: t.venue,
            year: t.year,
            title: t.title,
            label: `${t.type}${t.location ? `, ${t.location}` : ''}`
        })),
        ...forumsAndDemos.filter(d => d.type !== 'demo').map(f => ({
            id: f.id,
            venue: f.venue,
            year: f.year,
            title: f.title,
            label: `${f.typeLabel}${f.location ? `, ${f.location}` : ''}`
        })),
        ...publications.filter(p => p.type !== 'thesis').map(p => ({
            id: p.id,
            venue: p.venue,
            year: p.year,
            title: p.title,
            label: p.typeLabel
        }))
    ].sort((a, b) => b.year - a.year);

    const researchProjects = projects.filter(p => p.category !== 'personal');

    return (
        <div className="cv-page-wrapper fade-in">
            {/* AUDIENCE SWITCH BANNER */}
            <div className="audience-switch-banner no-print" data-html2canvas-ignore>
                <div className="switch-banner-content">
                    <span className="switch-text">
                        Looking for the concise software engineering résumé?
                    </span>
                    <Link to="/resume" className="switch-link">
                        <span>View Résumé</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* ACTION TOOLBAR */}
            <div className="cv-toolbar no-print" data-html2canvas-ignore>
                <div className="toolbar-info">
                    <h1 className="toolbar-title">Curriculum Vitae</h1>
                </div>

                <div className="toolbar-actions">
                    <button
                        onClick={copyEmail}
                        className="btn btn-secondary btn-sm"
                        title="Copy email address"
                    >
                        {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                        <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                    </button>
                    <button onClick={handlePrint} className="btn btn-secondary btn-sm" title="Print document">
                        <Printer size={14} />
                        <span>Print</span>
                    </button>
                    <button
                        onClick={handleDownloadPDF}
                        className="btn btn-primary btn-sm"
                        disabled={isGenerating}
                    >
                        <Download size={14} />
                        <span>{isGenerating ? 'Exporting PDF...' : 'Download CV (PDF)'}</span>
                    </button>
                </div>
            </div>

            {/* IN-PAGE NAVIGATION PILLS */}
            <div className="cv-quicknav no-print" data-html2canvas-ignore>
                <a href="#statement" className="quicknav-pill">Research Statement</a>
                <a href="#education" className="quicknav-pill">Education</a>
                <a href="#appointments" className="quicknav-pill">Appointments</a>
                <a href="#teaching" className="quicknav-pill">Teaching</a>
                <a href="#publications" className="quicknav-pill">Publications ({publications.length})</a>
                <a href="#presentations" className="quicknav-pill">Presentations ({allPresentations.length})</a>
                <a href="#service" className="quicknav-pill">Service & Demos</a>
                <a href="#projects" className="quicknav-pill">Projects ({researchProjects.length})</a>
                <a href="#skills" className="quicknav-pill">Skills</a>
            </div>

            {/* CV DOCUMENT CONTENT */}
            <div className="cv-document" ref={cvRef}>
                {/* CV HEADER */}
                <header className="cv-header">
                    <h1 className="cv-name">Tiago Lascasas Santos, PhD</h1>
                    <div className="cv-affiliation">
                        PhD in Computer Engineering • Researcher & Teaching Assistant
                    </div>
                    <div className="cv-institution">
                        Faculty of Engineering, University of Porto (FEUP) & INESC TEC, Portugal
                    </div>

                    <div className="cv-contact-row">
                        <span className="contact-col"><MapPin size={14} /> Porto, Portugal</span>
                        <span className="contact-separator">•</span>
                        <a href="mailto:tiagolascasas@outlook.com" className="contact-col">
                            <Mail size={14} /> tiagolascasas@outlook.com
                        </a>
                        <span className="contact-separator">•</span>
                        <a href="https://scholar.google.com/citations?user=jh9yL_YAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="contact-col">
                            <FileText size={14} /> Google Scholar
                        </a>
                        <span className="contact-separator">•</span>
                        <a href="https://linkedin.com/in/tiagolascasas" target="_blank" rel="noopener noreferrer" className="contact-col">
                            <Globe size={14} /> LinkedIn
                        </a>
                        <span className="contact-separator">•</span>
                        <a href="https://orcid.org/0000-0002-3673-9400" target="_blank" rel="noopener noreferrer" className="contact-col">
                            <Globe size={14} /> ORCID
                        </a>
                        <span className="contact-separator">•</span>
                        <a href="https://github.com/tiagolascasas" target="_blank" rel="noopener noreferrer" className="contact-col">
                            <Github size={14} /> GitHub
                        </a>
                    </div>
                </header>

                {/* RESEARCH STATEMENT */}
                <section id="statement" className="cv-section">
                    <div className="cv-section-title">
                        <BookOpen className="section-icon" size={20} />
                        <h2>Research Statement & Interests</h2>
                    </div>
                    <p className="cv-body-text">
                        My research focuses on automated compilation techniques and compiler infrastructure for
                        <strong> heterogeneous CPU-FPGA systems</strong>. In particular, I investigate holistic,
                        source-to-source program restructuring methods to dynamically partition C/C++ applications,
                        derive flexible-granularity task dependency graphs, expand High-Level Synthesis (HLS)
                        compatibility for large legacy regions, and orchestrate efficient runtime hardware offloading.
                    </p>
                    <div className="interest-tags">
                        <span className="interest-tag">Compilers & Code Transformations</span>
                        <span className="interest-tag">Hardware/Software Partitioning</span>
                        <span className="interest-tag">High-Level Synthesis (HLS)</span>
                        <span className="interest-tag">FPGA & Heterogeneous Systems</span>
                        <span className="interest-tag">Task Graph Generation</span>
                        <span className="interest-tag">Computer Architecture</span>
                    </div>
                </section>

                {/* EDUCATION */}
                <section id="education" className="cv-section">
                    <div className="cv-section-title">
                        <GraduationCap className="section-icon" size={20} />
                        <h2>Education</h2>
                    </div>

                    <div className="cv-timeline">
                        <div className="timeline-item">
                            <div className="item-date">Oct 2021 – Jul 2026 (Defended July 2026)</div>
                            <div className="item-details">
                                <h3>PhD in Computer Engineering</h3>
                                <h4>Faculty of Engineering, University of Porto (FEUP) & INESC TEC, Portugal</h4>
                                <p><strong>Thesis:</strong> <em>{publications.find(p => p.id === 'santos2026phd')?.title || 'A Holistic Approach for Partitioning and Optimizing Software Applications on FPGAs'}</em></p>
                                <p><strong>Supervisors:</strong> Prof. João Bispo & Prof. João M. P. Cardoso</p>

                                <div className="timeline-subitem">
                                    <div className="subitem-date">Oct 2024 – Dec 2024</div>
                                    <div className="subitem-details">
                                        <h4 className="subitem-title">Visiting Research Scholar</h4>
                                        <div className="subitem-institution">Carnegie Mellon University (CMU), Pittsburgh, PA, USA</div>
                                        <p>Department of Electrical and Computer Engineering (ECE). Collaborative research with <strong>Prof. James C. Hoe</strong> on compiler transformations to improve HLS synthesis of large C/C++ code regions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="item-date">Sep 2015 – Jul 2020</div>
                            <div className="item-details">
                                <h3>Integrated Master’s (BSc + MSc) in Computer Engineering</h3>
                                <h4>Faculty of Engineering, University of Porto (FEUP), Portugal</h4>
                                <p><strong>Dissertation:</strong> <em>{publications.find(p => p.id === 'dos2020acceleration')?.title || 'Acceleration of Applications with FPGA-based Computing Machines: Code Restructuring'}</em></p>

                                <div className="timeline-subitem">
                                    <div className="subitem-date">Sep 2019 – Dec 2019</div>
                                    <div className="subitem-details">
                                        <h4 className="subitem-title">Erasmus+ Exchange Student</h4>
                                        <div className="subitem-institution">Aalto University, Espoo, Finland</div>
                                        <p>Semester of exchange studies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACADEMIC APPOINTMENTS */}
                <section id="appointments" className="cv-section">
                    <div className="cv-section-title">
                        <Briefcase className="section-icon" size={20} />
                        <h2>Academic Appointments & Fellowships</h2>
                    </div>

                    <div className="cv-timeline">
                        <div className="timeline-item">
                            <div className="item-date">2022 – Present</div>
                            <div className="item-details">
                                <h3>Teaching Assistant</h3>
                                <h4>Department of Informatics Engineering, FEUP, University of Porto</h4>
                                <p>Teaching laboratory and practical courses in software languages, functional programming, compilers, operating systems, and computer architecture.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="item-date">2021 – Present</div>
                            <div className="item-details">
                                <h3>Researcher</h3>
                                <h4>INESC TEC (High-Assurance Software Laboratory)</h4>
                                <p>Grant-funded research on heterogeneous computing, compiler infrastructures, and hardware accelerator partitioning.</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="item-date">Jan 2021 – Sep 2021</div>
                            <div className="item-details">
                                <h3>Graduate Research Fellow</h3>
                                <h4>INESC TEC, Porto, Portugal</h4>
                                <p>Research on hardware acceleration of program execution traces and loop scheduler algorithms for coarse-grain accelerators.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIMPLIFIED TEACHING EXPERIENCE (ACTIVE VS. PAST) */}
                <section id="teaching" className="cv-section">
                    <div className="cv-section-title">
                        <Award className="section-icon" size={20} />
                        <h2>Teaching Experience</h2>
                    </div>

                    {/* ACTIVE COURSES */}
                    <div className="teaching-group">
                        <div className="teaching-group-header">
                            <span className="active-dot"></span>
                            <h3>Active Teaching (Current)</h3>
                        </div>

                        <div className="teaching-cards-grid">
                            {teachingCourses.active.map(course => (
                                <div key={course.id} className="teaching-card active-card">
                                    <div className="tcard-top">
                                        <h4 className="tcard-title">{course.name} ({course.acronym})</h4>
                                        <span className="tcard-period">{course.period}</span>
                                    </div>
                                    <div className="tcard-level">{course.level}</div>
                                    <p className="tcard-desc">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PAST COURSES */}
                    <div className="teaching-group">
                        <div className="teaching-group-header">
                            <span className="past-dot"></span>
                            <h3>Past Courses Taught</h3>
                        </div>

                        <div className="teaching-cards-grid">
                            {teachingCourses.past.map(course => (
                                <div key={course.id} className="teaching-card">
                                    <div className="tcard-top">
                                        <h4 className="tcard-title">{course.name} ({course.acronym})</h4>
                                        <span className="tcard-period">{course.period}</span>
                                    </div>
                                    <div className="tcard-level">{course.level}</div>
                                    <p className="tcard-desc">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PUBLICATIONS */}
                <section id="publications" className="cv-section">
                    <div className="cv-section-title">
                        <FileText className="section-icon" size={20} />
                        <h2>Publications & Scholarly Works</h2>
                    </div>

                    {/* FILTER TABS */}
                    <div className="pub-filter-tabs no-print" data-html2canvas-ignore>
                        <button
                            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All Works ({publications.length})
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'conference' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('conference')}
                        >
                            Conference Papers ({confCount})
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'poster' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('poster')}
                        >
                            Posters & WIP ({posterCount})
                        </button>
                        <button
                            className={`filter-tab ${activeFilter === 'thesis' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('thesis')}
                        >
                            Theses ({thesisCount})
                        </button>
                    </div>

                    <div className="publications-stream">
                        {filteredPubs.map((pub, idx) => (
                            <div key={pub.id} className="cv-pub-card">
                                <div className="pub-index-col">
                                    <span className="pub-number">[{idx + 1}]</span>
                                </div>
                                <div className="pub-body-col">
                                    <div className="pub-meta-line">
                                        <span className="pub-venue-chip">{pub.venue}</span>
                                        <span className="pub-year-chip">{pub.year}</span>
                                        <span className="pub-type-badge">{pub.typeLabel}</span>
                                    </div>

                                    <p className="pub-citation-text">{pub.citation}</p>

                                    <div className="pub-actions-row no-print" data-html2canvas-ignore>
                                        <button
                                            className="action-pill"
                                            onClick={() => copyBibtex(pub.id, pub.bibtex)}
                                            title="Copy BibTeX Citation"
                                        >
                                            <Quote size={13} />
                                            <span>{copiedId === pub.id ? 'Copied to Clipboard!' : 'BibTeX'}</span>
                                        </button>

                                        {pub.link && (
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="action-pill">
                                                <ExternalLink size={13} />
                                                <span>Publisher / DOI</span>
                                            </a>
                                        )}

                                        {pub.paper && (
                                            <a href={pub.paper} target="_blank" rel="noopener noreferrer" className="action-pill">
                                                <Download size={13} />
                                                <span>Full Paper PDF</span>
                                            </a>
                                        )}

                                        {pub.slides && (
                                            <a href={pub.slides} target="_blank" rel="noopener noreferrer" className="action-pill">
                                                <Presentation size={13} />
                                                <span>Slides PDF</span>
                                            </a>
                                        )}

                                        {pub.poster && (
                                            <a href={pub.poster} target="_blank" rel="noopener noreferrer" className="action-pill">
                                                <Download size={13} />
                                                <span>Poster PDF</span>
                                            </a>
                                        )}

                                        {pub.presentation && (
                                            <a href={pub.presentation} target="_blank" rel="noopener noreferrer" className="action-pill">
                                                <Youtube size={13} />
                                                <span>Talk Video</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PRESENTATIONS & TALKS */}
                <section id="presentations" className="cv-section">
                    <div className="cv-section-title">
                        <Presentation className="section-icon" size={20} />
                        <h2>Conferences, Talks & Presentations</h2>
                    </div>

                    <ul className="simple-cv-list">
                        {allPresentations.map(item => {
                            const venueLabel = item.venue.includes(String(item.year))
                                ? item.venue
                                : `${item.venue} (${item.year})`;
                            return (
                                <li key={item.id}>
                                    <strong>{venueLabel}:</strong> <em>"{item.title}"</em> — {item.label}.
                                </li>
                            );
                        })}
                    </ul>
                </section>

                {/* DEMONSTRATIONS & SERVICE */}
                <section id="service" className="cv-section">
                    <div className="cv-section-title">
                        <Award className="section-icon" size={20} />
                        <h2>Academic Service & Demonstrations</h2>
                    </div>

                    <ul className="simple-cv-list">
                        {forumsAndDemos.filter(d => d.type === 'demo').map(demo => {
                            const venueLabel = demo.venue.includes(String(demo.year))
                                ? demo.venue
                                : `${demo.venue} (${demo.year})`;
                            return (
                                <li key={demo.id}>
                                    <strong>{venueLabel}:</strong> {demo.typeLabel} — <em>"{demo.title}"</em>{demo.location ? ` (${demo.location})` : ''}.
                                </li>
                            );
                        })}
                        {academicServices.reviews.map(rev => {
                            const venueLabel = rev.venue.includes(String(rev.period))
                                ? rev.venue
                                : `${rev.venue} (${rev.period})`;
                            return (
                                <li key={rev.id}>
                                    <strong>{venueLabel}:</strong> {rev.role}.
                                </li>
                            );
                        })}
                        {academicServices.organization.map(org => {
                            const venueLabel = org.venue.includes(String(org.period))
                                ? org.venue
                                : `${org.venue} (${org.period})`;
                            return (
                                <li key={org.id}>
                                    <strong>{venueLabel}:</strong> {org.role}.
                                </li>
                            );
                        })}
                    </ul>
                </section>

                {/* RESEARCH & ENGINEERING PROJECTS */}
                <section id="projects" className="cv-section">
                    <div className="cv-section-title">
                        <Code className="section-icon" size={20} />
                        <h2>Research & Engineering Projects</h2>
                    </div>

                    <ul className="simple-cv-list">
                        {researchProjects.map(proj => (
                            <li key={proj.id}>
                                <strong>{proj.title}</strong> ({proj.tags.slice(0, 3).join(', ')}): {proj.description}
                                {proj.links.github && (
                                    <span className="no-print" data-html2canvas-ignore>
                                        {' '}— <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="cv-inline-link">GitHub</a>
                                    </span>
                                )}
                                {proj.links.paper && (
                                    <span className="no-print" data-html2canvas-ignore>
                                        {' '}— <a href={proj.links.paper} target="_blank" rel="noopener noreferrer" className="cv-inline-link">Paper</a>
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* TECHNICAL SKILLS */}
                <section id="skills" className="cv-section">
                    <div className="cv-section-title">
                        <Code className="section-icon" size={20} />
                        <h2>Technical & Linguistic Competencies</h2>
                    </div>

                    <div className="skills-category-block">
                        <div className="skill-cat-item">
                            <span className="cat-title">Programming Languages:</span>
                            <span className="cat-desc">C, C++, Java, Python, Haskell, Prolog, Assembly (RISC-V, ARM), TypeScript, JavaScript, Bash</span>
                        </div>
                        <div className="skill-cat-item">
                            <span className="cat-title">Compiler Toolchains:</span>
                            <span className="cat-desc">LLVM, Clang AST, MLIR, Clava, GCC, CMake, Make, GDB, Valgrind</span>
                        </div>
                        <div className="skill-cat-item">
                            <span className="cat-title">Hardware & EDA Tools:</span>
                            <span className="cat-desc">AMD/Xilinx Vitis, Vivado HLS, XRT, OpenCL, Modelsim/Questasim</span>
                        </div>
                        <div className="skill-cat-item">
                            <span className="cat-title">Languages:</span>
                            <span className="cat-desc">Portuguese (Native), English (Fluent / Full Professional Proficiency)</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
