import { Briefcase, GraduationCap, Code } from 'lucide-react';
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
                        <div className="timeline-date">Present</div>
                        <div className="timeline-content">
                            <h3>Teaching Assistant</h3>
                            <h4>Faculty of Engineering, University of Porto (FEUP)</h4>
                            <p>Assisting in courses related to Computer Engineering and Embedded Systems.</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-date">Present</div>
                        <div className="timeline-content">
                            <h3>Researcher</h3>
                            <h4>INESC-TEC</h4>
                            <p>Researching simultaneous and holistic partitioning and optimization of C/C++ applications in CPU-FPGA systems.</p>
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
                        <div className="timeline-date">Present</div>
                        <div className="timeline-content">
                            <h3>PhD in Electrical and Computer Engineering</h3>
                            <h4>Faculty of Engineering, University of Porto (FEUP)</h4>
                        </div>
                    </div>
                    {/* Placeholder for previous education */}
                    <div className="timeline-item">
                        <div className="timeline-date">2020</div>
                        <div className="timeline-content">
                            <h3>MSc in Electrical and Computer Engineering</h3>
                            <h4>Faculty of Engineering, University of Porto (FEUP)</h4>
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
                        <h3>Languages</h3>
                        <div className="tags">
                            <span>C/C++</span>
                            <span>Python</span>
                            <span>JavaScript/TypeScript</span>
                            <span>VHDL/Verilog</span>
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>technologies</h3>
                        <div className="tags">
                            <span>FPGA</span>
                            <span>Embedded Systems</span>
                            <span>Git</span>
                            <span>Linux</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
