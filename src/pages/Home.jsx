import { Link } from 'react-router-dom';
import {
    Github,
    Linkedin,
    Mail,
    FileText,
    GraduationCap,
    ArrowRight,
    MapPin,
    Cpu,
    Code,
} from 'lucide-react';
import profileImg from '../assets/me.jpeg';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container fade-in">
            {/* HERO SECTION */}
            <section className="hero-card">
                <div className="hero-main">
                    <div className="img-container">
                        <img src={profileImg} alt="Tiago Lascasas Santos, PhD" className="profile-img" />
                    </div>

                    <div className="hero-info">
                        <div className="hero-eyebrow">
                            <span className="eyebrow-text">Systems & Compilers Engineer</span>
                            <span className="eyebrow-sub">• PhD in Computer Engineering</span>
                        </div>

                        <h1 className="hero-name">Tiago Lascasas Santos</h1>
                        <p className="hero-headline">
                            Building high-performance software at the intersection of <strong>compilers</strong>,
                            <strong> systems programming</strong>, and <strong>hardware acceleration</strong>.
                        </p>

                        {/* AT-A-GLANCE OVERVIEW CHIPS */}
                        <div className="recruiter-chips">
                            <div className="chip">
                                <MapPin size={14} className="chip-icon" />
                                <span>Porto, Portugal (open to relocation & remote)</span>
                            </div>
                            <div className="chip">
                                <GraduationCap size={14} className="chip-icon" />
                                <span>PhD in Computer Engineering (University of Porto, Portugal)</span>
                            </div>
                            <div className="chip">
                                <Cpu size={14} className="chip-icon" />
                                <span>Visiting Scholar Alum @ Carnegie Mellon University (CMU)</span>
                            </div>
                            <div className="chip">
                                <Code size={14} className="chip-icon" />
                                <span>C++, C, LLVM, MLIR, Linux, FPGA/Vitis, High-Level Synthesis</span>
                            </div>
                        </div>

                        {/* SOCIAL & SCHOLAR LINKS */}
                        <div className="hero-social-links">
                            <a href="https://github.com/tiagolascasas" className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github size={16} />
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/tiagolascasas" className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://scholar.google.com/citations?user=jh9yL_YAAAAJ&hl=en" className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                                <FileText size={16} />
                                <span>Google Scholar</span>
                            </a>
                            <a href="https://orcid.org/0000-0002-3673-9400" className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
                                <FileText size={16} />
                                <span>ORCID</span>
                            </a>
                            <a href="mailto:tiagolascasas@outlook.com" className="social-pill" aria-label="Email">
                                <Mail size={16} />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* PATHWAY CARDS */}
            <section className="section-container">
                <div className="pathway-grid">
                    {/* RÉSUMÉ CARD */}
                    <div className="pathway-card">
                        <div className="pathway-card-header">
                            <div className="pathway-icon-wrapper industry-icon">
                                <Cpu size={22} />
                            </div>
                            <span className="badge badge-industry">Engineering Focus</span>
                        </div>
                        <h3 className="pathway-title">Résumé</h3>
                        <p className="pathway-desc">
                            Focused overview of systems software engineering, compiler passes, and performance engineering work.
                        </p>

                        <div className="pathway-actions">
                            <Link to="/resume" className="btn btn-primary pathway-btn">
                                <span>Open Résumé</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* CV CARD */}
                    <div className="pathway-card">
                        <div className="pathway-card-header">
                            <div className="pathway-icon-wrapper academic-icon">
                                <GraduationCap size={22} />
                            </div>
                            <span className="badge badge-academic">Academic Focus</span>
                        </div>
                        <h3 className="pathway-title">Curriculum Vitae</h3>
                        <p className="pathway-desc">
                            Comprehensive record of academic appointments, university teaching, research publications, and presentations.
                        </p>

                        <div className="pathway-actions">
                            <Link to="/cv" className="btn btn-secondary pathway-btn">
                                <span>Open Curriculum Vitae</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
