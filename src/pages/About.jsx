import profileImg from '../assets/me.jpeg';
import './About.css';

export default function About() {
    return (
        <div className="about-container fade-in">
            <div className="about-card">
                <div className="about-photo-wrapper">
                    <img
                        src={profileImg}
                        alt="Tiago Lascasas Santos"
                        className="about-photo"
                    />
                </div>

                <div className="about-content">
                    <h1 className="about-title">About Me</h1>

                    <p className="about-paragraph">
                        I'm Tiago, a computer engineer and researcher based in Porto, Portugal.
                        I recently completed my PhD at the University of Porto,
                        focusing on accelerating large C applications on CPU-FPGA systems, and I am currently
                        employed as a researcher at INESC TEC and as a teaching assistant.
                    </p>

                    <p className="about-paragraph">
                        Professionally, I'm drawn to the intersection between hardware and software,
                        and how we can best build tools, such as compilers, to help software developers
                        take the most advantage out of their hardware.
                        I am also passionate about teaching, and how to make complex topics across the spectrum of
                        computer science and engineering accessible to students.
                    </p>

                    <p className="about-paragraph">
                        Outside of tech and research, I enjoy reading, writing and travelling -- often at the same time.
                        My current obsession is writing short fiction, usually centered around science and technology on a variety of historical and future settings.
                        By all means, ask me about it!
                    </p>

                    <div className="about-links">
                        <a href="mailto:tiagolascasas@outlook.com" className="about-link">
                            tiagolascasas@outlook.com
                        </a>
                        <span className="about-sep">•</span>
                        <a href="https://github.com/tiagolascasas" target="_blank" rel="noopener noreferrer" className="about-link">
                            GitHub
                        </a>
                        <span className="about-sep">•</span>
                        <a href="https://linkedin.com/in/tiagolascasas" target="_blank" rel="noopener noreferrer" className="about-link">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
