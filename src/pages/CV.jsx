import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, Code, ArrowRight } from 'lucide-react';
import './CV.css';

export default function CV() {
    return (
        <div className="cv-container fade-in">
            <div className="cv-header">
                <h1>Curriculum Vitae</h1>
                <a href="/pdf/cv.pdf" className="download-btn" target="_blank" rel="noopener noreferrer">
                    Download PDF
                </a>
            </div>

            <div className="cv-section">
                <div className="section-title">
                    <Briefcase className="icon" />
                    <h2>Experience</h2>
                </div>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">2022 - Present</div>
                        <div className="timeline-content">
                            <h3>Teaching Assistant</h3>
                            <h4>Faculty of Engineering, University of Porto (FEUP)</h4>
                            <ul className="course-list">
                                <li>Computer Architecture - ARM and RISC-V assembly, CPU architectures, and memory hierarchies</li>
                                <li>Operating Systems - OS organization, file systems, process/thread  management, and IPC</li>
                                <li>Compilers - parsing theory, intermediate representations, register allocation, and code generation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2021-01 - 2021-09</div>
                        <div className="timeline-content">
                            <h3>Researcher</h3>
                            <h4>INESC TEC, Porto, Portugal</h4>
                            <p>Researching methods for offloading program execution traces onto hardware accelerators.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-section">
                <div className="section-title">
                    <GraduationCap className="icon" />
                    <h2>Education</h2>
                </div>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">2021-10 - Present</div>
                        <div className="timeline-content">
                            <h3>PhD in Computer Engineering</h3>
                            <h4>Faculty of Engineering, University of Porto (FEUP), Portugal</h4>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2024-10 - 2024-12</div>
                        <div className="timeline-content">
                            <h3>Visiting Student</h3>
                            <h4>Carnegie Mellon University, Pittsburgh, USA</h4>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">2015 - 2020</div>
                        <div className="timeline-content">
                            <h3>MSc in Computer Engineering</h3>
                            <h4>Faculty of Engineering, University of Porto (FEUP), Portugal</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-section">
                <div className="section-title">
                    <Code className="icon" />
                    <h2>Skills</h2>
                </div>


                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Areas of interesst</h3>
                        <div className="tags">
                            <span>Compilers</span>
                            <span>Source-to-Source</span>
                            <span>Hardware Accelerators</span>
                            <span>FPGAs</span>
                            <span>Embedded Systems</span>
                            <span>High-level Synthesis</span>
                            <span>AI acceleration</span>
                            <span>Computer Vision acceleration</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Programming Languages</h3>
                        <div className="tags">
                            <span>C</span>
                            <span>C++</span>
                            <span>Java</span>
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>TypeScript</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Technologies</h3>
                        <div className="tags">
                            <span>clang</span>
                            <span>LLVM</span>
                            <span>MLIR</span>
                            <span>AMD/Xilinx Vitis</span>
                            <span>XRT</span>
                            <span>OpenCL</span>
                            <span>Git</span>
                            <span>Linux</span>
                            <span>NPM/Node.js</span>
                            <span>Copilots & Agentic AI</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Other skills</h3>
                        <div className="tags">
                            <span>Teaching skills</span>
                            <span>Research skills</span>
                            <span>Technical writing</span>
                            <span>Event organization</span>
                            <span>Multimodal presentation skills</span>
                            <span>Fluency in English & Portuguese</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-section">
                <div className="section-title">
                    <Code className="icon" />
                    <h2>Detailed Work</h2>
                </div>

                <div className="details-grid">
                    <Link to="/research" className="details-card">
                        <h3>Research & Publications</h3>
                        <p>View my academic publications, conference talks, and other projects</p>
                        <div className="link-text">
                            <span>Go to Research</span>
                            <ArrowRight size={16} />
                        </div>
                    </Link>

                    <Link to="/portfolio" className="details-card">
                        <h3>Portfolio</h3>
                        <p>Explore the open-source projects developed during my PhD</p>
                        <div className="link-text">
                            <span>Go to Portfolio</span>
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
