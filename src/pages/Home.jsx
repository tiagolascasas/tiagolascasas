import { Github, Linkedin, Mail, FileText, Monitor } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container fade-in">
            <div className="profile-section">
                <div className="img-container">
                    <img src={profileImg} alt="Tiago Lascasas Santos" className="profile-img" />
                </div>

                <div className="profile-info">
                    <h1 className="name">Tiago Lascasas Santos</h1>
                    <h2 className="title">Software Developer & PhD Student</h2>

                    <p className="bio">
                        I am a PhD student and TA at the University of Porto, Faculty of Engineering (<a href="https://sigarra.up.pt/feup/en/web_page.Inicial" target="_blank" rel="noopener noreferrer">FEUP</a>) and <a href="https://www.inesctec.pt/en" target="_blank" rel="noopener noreferrer">INESC-TEC</a>.
                    </p>

                    <p className="bio-detail">
                        My PhD thesis focuses on the simultaneous and holistic partitioning and optimization of C/C++ applications in CPU-FPGA systems.
                    </p>

                    <div className="social-links">
                        <a href="mailto:tiagolascasas@outlook.com" className="social-item" aria-label="Email">
                            <Mail size={24} />
                            <span>Email</span>
                        </a>
                        <a href="https://github.com/tiagolascasas" className="social-item" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/tiagolascasas" className="social-item" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://scholar.google.com/citations?user=jh9yL_YAAAAJ&hl=en" className="social-item" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                            <FileText size={24} />
                            <span>Scholar</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
