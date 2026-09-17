import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    Github,
    ExternalLink,
    Maximize2,
    Keyboard,
    Sparkles
} from 'lucide-react';
import './Asterinix.css';

export default function Asterinix() {
    const iframeRef = useRef(null);

    const handleFullscreen = () => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        // Check if game or parent is already fullscreen
        try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (doc && doc.fullscreenElement) {
                doc.exitFullscreen().catch(() => { });
                return;
            }
        } catch {
            // ignore
        }

        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { });
            return;
        }

        // 1. Direct canvas-wrapper requestFullscreen (same method as double-click / 'F')
        try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (doc) {
                const wrapper = doc.getElementById('canvas-wrapper') || doc.querySelector('.canvas-wrapper') || doc.getElementById('canvas');
                if (wrapper) {
                    const req = wrapper.requestFullscreen || wrapper.webkitRequestFullscreen || wrapper.mozRequestFullScreen || wrapper.msRequestFullscreen;
                    if (req) {
                        req.call(wrapper).catch(() => { });
                        return;
                    }
                }
            }
        } catch {
            // Cross-origin fallback
        }

        // 2. PostMessage to game in case shell implements listener
        try {
            iframe.contentWindow?.postMessage({ type: 'TOGGLE_FULLSCREEN' }, '*');
            iframe.contentWindow?.postMessage('toggleFullscreen', '*');
        } catch {
            // Ignore
        }

        // 3. Fallback to iframe element fullscreen
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen().catch(() => { });
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen().catch(() => { });
        }
    };

    return (
        <div className="asterinix-page-container fade-in">
            {/* BACK TO PROJECTS NAVIGATION */}
            <div className="asterinix-back-nav">
                <Link to="/projects" className="asterinix-back-link">
                    <ArrowLeft size={16} />
                    <span>Back to Projects</span>
                </Link>
            </div>

            {/* HEADER */}
            <div className="asterinix-header">
                <div className="asterinix-header-top">
                    <div className="asterinix-title-group">
                        <h1 className="asterinix-title">Asterinix</h1>
                        <span className="badge badge-academic">Personal Project</span>
                    </div>

                    <div className="asterinix-header-actions">
                        <button
                            onClick={handleFullscreen}
                            className="btn btn-secondary btn-sm"
                            title="Toggle Fullscreen Mode"
                        >
                            <Maximize2 size={14} />
                            <span>Fullscreen</span>
                        </button>
                        <a
                            href="https://tiagolascasas.github.io/asterinix/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-sm"
                            title="Open direct game URL in a new browser tab"
                        >
                            <ExternalLink size={14} />
                            <span>Direct Link</span>
                        </a>
                        <a
                            href="https://github.com/tiagolascasas/asterinix"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                            title="View source code on GitHub"
                        >
                            <Github size={14} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <p className="asterinix-desc">
                    The first videogame I ever made. Originally developed in pure C and assembly for Minix 3,
                    later ported to Linux and compiled to WebAssembly via Emscripten and SDL2 to run right here in your browser.
                </p>

                <div className="asterinix-tags">
                    <span className="tech-tag">C</span>
                    <span className="tech-tag">x86 Assembly</span>
                    <span className="tech-tag">Minix 3</span>
                    <span className="tech-tag">Linux</span>
                    <span className="tech-tag">SDL2</span>
                    <span className="tech-tag">WebAssembly / Emscripten</span>
                </div>
            </div>

            {/* GAME EMBED CONTAINER */}
            <div className="asterinix-game-wrapper">
                <div className="w-full max-w-4xl mx-auto aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black asterinix-embed-box">
                    <iframe
                        ref={iframeRef}
                        src="https://tiagolascasas.github.io/asterinix/"
                        title="Asterinix"
                        className="w-full h-full border-0 asterinix-iframe"
                        allow="fullscreen; autoplay"
                    />
                </div>
            </div>

            {/* INSTRUCTIONS & BACKSTORY CARDS */}
            <div className="asterinix-details-grid">
                {/* HOW TO PLAY & CONTROLS */}
                <div className="asterinix-info-card">
                    <h3 className="asterinix-card-heading">
                        <Keyboard size={18} className="asterinix-card-heading-icon" />
                        <span>Game Controls</span>
                    </h3>

                    <div className="asterinix-controls-list">
                        <div className="asterinix-control-item">
                            <span className="asterinix-action-label">Ship Movement</span>
                            <div className="asterinix-key-group">
                                <span className="kbd-badge">W</span>
                                <span className="kbd-badge">A</span>
                                <span className="kbd-badge">S</span>
                                <span className="kbd-badge">D</span>
                                <span>or</span>
                                <span className="kbd-badge">Arrows</span>
                            </div>
                        </div>

                        <div className="asterinix-control-item">
                            <span className="asterinix-action-label">Aim & Fire</span>
                            <div className="asterinix-key-group">
                                <span className="kbd-badge">Mouse</span>
                                <span>+</span>
                                <span className="kbd-badge">Left Click</span>
                            </div>
                        </div>

                        <div className="asterinix-control-item">
                            <span className="asterinix-action-label">Pause / Menu</span>
                            <div className="asterinix-key-group">
                                <span className="kbd-badge">Esc</span>
                            </div>
                        </div>

                        <div className="asterinix-control-item">
                            <span className="asterinix-action-label">Toggle Fullscreen</span>
                            <div className="asterinix-key-group">
                                <span className="kbd-badge">F</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* THE STORY */}
                <div className="asterinix-info-card">
                    <h3 className="asterinix-card-heading">
                        <Sparkles size={18} className="asterinix-card-heading-icon" />
                        <span>From Minix to WebAssembly</span>
                    </h3>

                    <p className="asterinix-story-text">
                        During my undergraduate studies, I built Asterinix as coursework on low-level
                        systems programming on the Minix 3 microkernel. It interacted directly with legacy
                        PC hardware, requiring me to implement device drivers for the keyboard, mouse, timer, RTC and VGA controller.
                    </p>

                    <p className="asterinix-story-text">
                        As a nostalgic trip into my origins as a programmer, I abstracted the low-level platform code
                        with SDL2 and used Emscripten to compile the original C code into WebAssembly.
                    </p>
                </div>
            </div>
        </div>
    );
}
