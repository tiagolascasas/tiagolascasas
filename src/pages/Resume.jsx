import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Download,
    Printer,
    Mail,
    MapPin,
    Linkedin,
    Github,
    ArrowRight,
    Check,
    Copy
} from 'lucide-react';
import html2pdf from 'html2pdf.js';
import './Resume.css';

export default function Resume() {
    const resumeRef = useRef(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleDownloadPDF = async () => {
        const element = resumeRef.current;
        if (!element || isGenerating) return;

        setIsGenerating(true);

        // Force light mode and compact PDF layout
        const root = document.documentElement;
        const prevTheme = root.getAttribute('data-theme');
        root.setAttribute('data-theme', 'light');
        element.setAttribute('data-theme', 'light');
        element.classList.add('pdf-mode');

        // Allow micro-render cycle so layout recalculates before capture
        await new Promise(resolve => setTimeout(resolve, 150));

        const opt = {
            margin: [0.35, 0.4, 0.35, 0.4],
            filename: 'Tiago_Lascasas_Santos_Resume.pdf',
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
                avoid: ['.experience-item', '.education-item', '.section-heading', '.skill-row', '.pub-list li', '.project-bullet']
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

    return (
        <div className="resume-page-wrapper fade-in">
            {/* AUDIENCE SWITCH BANNER */}
            <div className="audience-switch-banner no-print" data-html2canvas-ignore>
                <div className="switch-banner-content">
                    <span className="switch-text">
                        Looking for the complete academic curriculum vitae with all publications, talks, and research details?
                    </span>
                    <Link to="/cv" className="switch-link">
                        <span>View Curriculum Vitae</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            {/* ACTION TOOLBAR */}
            <div className="resume-toolbar no-print" data-html2canvas-ignore>
                <div className="toolbar-info">
                    <h1 className="toolbar-title">Résumé</h1>
                    <p className="toolbar-sub">Software, Systems & Compilers Engineering</p>
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

                    <button
                        onClick={handlePrint}
                        className="btn btn-secondary btn-sm"
                        title="Print / Save via browser"
                    >
                        <Printer size={14} />
                        <span>Print</span>
                    </button>

                    <button
                        onClick={handleDownloadPDF}
                        className="btn btn-primary btn-sm"
                        disabled={isGenerating}
                    >
                        <Download size={14} />
                        <span>{isGenerating ? 'Generating PDF...' : 'Download Résumé (PDF)'}</span>
                    </button>
                </div>
            </div>

            {/* PRINTABLE RESUME SHEET */}
            <div className="resume-paper" ref={resumeRef}>
                {/* HEADER */}
                <header className="resume-header">
                    <h1 className="candidate-name">Tiago Lascasas Santos, PhD</h1>
                    <div className="candidate-title">Systems & Compilers Software Engineer</div>

                    <div className="candidate-contact">
                        <span className="contact-item">
                            <MapPin size={13} className="contact-icon" /> Porto, Portugal (Open to Relocation & Remote)
                        </span>
                        <span className="contact-separator">•</span>
                        <a href="mailto:tiagolascasas@outlook.com" className="contact-item">
                            <Mail size={13} className="contact-icon" /> tiagolascasas@outlook.com
                        </a>
                        <span className="contact-separator">•</span>
                        <a href="https://linkedin.com/in/tiagolascasas" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <Linkedin size={13} className="contact-icon" /> linkedin.com/in/tiagolascasas
                        </a>
                        <span className="contact-separator">•</span>
                        <a href="https://github.com/tiagolascasas" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <Github size={13} className="contact-icon" /> github.com/tiagolascasas
                        </a>
                    </div>
                </header>

                {/* SUMMARY */}
                <section className="resume-section">
                    <h2 className="section-heading">Professional Summary</h2>
                    <p className="summary-paragraph">
                        Systems and compiler engineer with a <strong>PhD in Computer Engineering</strong> from the University of Porto (FEUP, defended July 2026)
                        and visiting scholar experience at Carnegie Mellon University (CMU). 5+ years of experience in low-level systems programming,
                        <strong> C++ (17/20)</strong>, <strong>LLVM/Clang compiler passes</strong>, source-to-source program transformations,
                        and <strong>hardware acceleration (FPGAs & High-Level Synthesis)</strong>. Experienced in designing high-throughput task dependency graphs,
                        optimizing dataflow pipelines, minimizing runtime communication latency, and teaching university-level systems courses.
                    </p>
                </section>

                {/* SKILLS */}
                <section className="resume-section">
                    <h2 className="section-heading">Core Competencies & Technical Skills</h2>
                    <div className="skills-table">
                        <div className="skill-row">
                            <span className="skill-label">Programming Languages:</span>
                            <span className="skill-values">C++ (17/20), C, Python, Java, Haskell, Prolog, Assembly (RISC-V, ARM), TypeScript, JavaScript, Bash</span>
                        </div>
                        <div className="skill-row">
                            <span className="skill-label">Compilers & Systems:</span>
                            <span className="skill-values">LLVM, Clang AST, MLIR, Intermediate Representations (IR), GCC, Make, CMake, GDB, Valgrind, Linux Kernel concepts, POSIX IPC</span>
                        </div>
                        <div className="skill-row">
                            <span className="skill-label">Hardware Acceleration:</span>
                            <span className="skill-values">AMD/Xilinx Vitis, XRT, High-Level Synthesis (Vivado HLS), OpenCL, FPGA Architecture, Heterogeneous CPU-FPGA Co-design</span>
                        </div>
                        <div className="skill-row">
                            <span className="skill-label">Tools & Practices:</span>
                            <span className="skill-values">Git, CI/CD, Benchmarking & Profiling, Static Analysis, Technical Documentation, Mentorship</span>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section className="resume-section">
                    <h2 className="section-heading">Experience</h2>

                    <div className="experience-item">
                        <div className="item-header">
                            <div>
                                <h3 className="item-title">Systems & Software Researcher (Doctoral & Post-Doctoral)</h3>
                                <div className="item-company">Faculty of Engineering, University of Porto (FEUP) & INESC TEC</div>
                            </div>
                            <div className="item-meta">2021 – Present | Porto, Portugal</div>
                        </div>
                        <ul className="item-bullets">
                            <li>Architected and implemented automated C/C++ source-to-source transformation and compiler passes in C++ and Clang to holistically partition algorithms between CPUs and FPGA accelerators.</li>
                            <li>Engineered an Extended Task Graph (ETG) dependency analysis tool, generating flexible-granularity task DAGs to maximize parallel execution while respecting memory constraints.</li>
                            <li>Integrated with AMD Vitis and XRT runtimes, minimizing PCIe/memory data transfers and delivering significant speedup over standard multicore CPU execution.</li>
                            <li>Authored 7 peer-reviewed papers and conference presentations at premier venues including IEEE MCSoC, IEEE FCCM, and ACM LCTES.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="item-header">
                            <div>
                                <h3 className="item-title">Visiting Research Scholar</h3>
                                <div className="item-company">Carnegie Mellon University (CMU)</div>
                            </div>
                            <div className="item-meta">Oct 2024 – Dec 2024 | Pittsburgh, PA, USA</div>
                        </div>
                        <ul className="item-bullets">
                            <li>Conducted research under Prof. James C. Hoe on expanding High-Level Synthesis (HLS) compatibility for large, unstructured C/C++ code regions.</li>
                            <li>Formulated an automated software refactoring methodology to offload non-synthesizable C functions back to the host CPU while compiling critical inner regions directly to FPGA hardware.</li>
                            <li>Co-authored peer-reviewed research resulting in accepted publications at IEEE MCSoC 2025 and IEEE FCCM 2025.</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="item-header">
                            <div>
                                <h3 className="item-title">University Teaching Assistant</h3>
                                <div className="item-company">Faculty of Engineering, University of Porto (FEUP)</div>
                            </div>
                            <div className="item-meta">2022 – Present | Porto, Portugal</div>
                        </div>
                        <ul className="item-bullets">
                            <li><strong>Current Courses:</strong> Functional and Logic Programming (Haskell/Prolog paradigms, declarative semantics) and Software Languages Engineering (domain-specific languages, AST analysis, grammars).</li>
                            <li><strong>Past Courses:</strong> Compilers (lexing, LR/LL parsing, intermediate representation, register allocation), Operating Systems (POSIX threads, synchronization locks, IPC in C), and Computer Architecture (ARM/RISC-V assembly, CPU pipelining, cache memory).</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="item-header">
                            <div>
                                <h3 className="item-title">Graduate Researcher</h3>
                                <div className="item-company">INESC TEC</div>
                            </div>
                            <div className="item-meta">Jan 2021 – Sep 2021 | Porto, Portugal</div>
                        </div>
                        <ul className="item-bullets">
                            <li>Researched automated methods for offloading dynamic program execution traces onto coarse-grain loop accelerators (CGRAs).</li>
                            <li>Constructed a C++ scheduling simulator to measure the quantitative trade-offs between loop trace window sizes and scheduling latency.</li>
                        </ul>
                    </div>
                </section>

                {/* EDUCATION */}
                <section className="resume-section">
                    <h2 className="section-heading">Education</h2>

                    <div className="education-item">
                        <div className="item-header">
                            <div>
                                <h3 className="item-title">PhD in Computer Engineering</h3>
                                <div className="item-company">Faculty of Engineering, University of Porto (FEUP)</div>
                            </div>
                            <div className="item-meta">2021 – 2026</div>
                        </div>
                        <p className="education-desc">
                            Dissertation: <em>A Holistic Approach for Partitioning and Optimizing Software Applications on FPGAs</em>
                        </p>
                    </div>

                    <div className="education-item">
                        <div className="item-header">
                            <div>
                                <h3 className="item-title">MSc in Computer Engineering</h3>
                                <div className="item-company">Faculty of Engineering, University of Porto (FEUP)</div>
                            </div>
                            <div className="item-meta">2015 – 2020</div>
                        </div>
                        <p className="education-desc">
                            Dissertation: <em>Acceleration of Applications with FPGA-based Computing Machines: Code Restructuring.</em>
                        </p>
                    </div>
                </section>

                {/* SELECTED PROJECTS */}
                <section className="resume-section">
                    <h2 className="section-heading">Key Engineering Projects</h2>

                    <div className="project-bullet">
                        <strong>Heterogeneous Vitis Apps</strong> (C++, OpenCL, Vitis XRT): Benchmark implementations and acceleration pipelines for CPU-FPGA systems, exploring memory transfer optimizations and asynchronous queue dispatch.
                    </div>
                    <div className="project-bullet">
                        <strong>libc-hls</strong> (C, High-Level Synthesis, FPGAs): Clean reimplementation of C standard library functions customized to circumvent synthesis limitations on FPGA toolchains.
                    </div>
                    <div className="project-bullet">
                        <strong>Extended Task Graph (ETG)</strong> (TypeScript, Compilers, ASTs): Automated compiler tool extracting flexible task dependencies from C source code (ACM LCTES 2024).
                    </div>
                    <div className="project-bullet">
                        <strong>DOOM on Terminal</strong> (C, Linux, ncurses): Native port rendering 3D graphics in a terminal emulator via character buffer manipulation.
                    </div>
                </section>

                {/* SELECTED PUBLICATIONS */}
                <section className="resume-section">
                    <h2 className="section-heading">Selected Publications</h2>
                    <ul className="pub-list">
                        <li>
                            <strong>IEEE MCSoC 2025:</strong> T. Santos, J. Bispo, J. M. P. Cardoso, J. C. Hoe, <em>"HLS to FPGAs: Extending Software Regions Via Transformations and Offloading Functions to the CPU"</em>.
                        </li>
                        <li>
                            <strong>ACM LCTES 2024:</strong> T. Santos, J. Bispo, J. M. P. Cardoso, <em>"A Flexible-Granularity Task Graph Representation and Its Generation from C Applications"</em>.
                        </li>
                        <li>
                            <strong>IEEE FCCM 2025:</strong> T. Santos, J. Bispo, J. M. P. Cardoso, <em>"Holistic Partitioning and Optimization of CPU-FPGA Applications Through Source-to-Source Compilation"</em>.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
