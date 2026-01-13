import { useState } from 'react';
import { ExternalLink, Quote, FileText, CheckCircle } from 'lucide-react';
import './Research.css';

const publications = [
    {
        id: 'santos2025ph',
        citation: 'T. Santos, J. Bispo, and J. M. P. Cardoso, "Ph. D. Project: Holistic Partitioning and Optimization of CPU-FPGA Applications Through Source-to-Source Compilation," in 2025 IEEE 33rd Annual International Symposium on Field-Programmable Custom Computing Machines (FCCM), 2025.',
        bibtex: `@inproceedings{santos2025ph,
  title={Ph. D. Project: Holistic Partitioning and Optimization of CPU-FPGA Applications Through Source-to-Source Compilation},
  author={Santos, Tiago and Bispo, Joo and Cardoso, Joo MP},
  booktitle={2025 IEEE 33rd Annual International Symposium on Field-Programmable Custom Computing Machines (FCCM)},
  pages={308--309},
  year={2025},
  organization={IEEE}
}`,
        link: '',
        pdf: '/pdf/FCCM_2025_PhD_Forum_Poster.pdf'
    },
    {
        id: 'santos2025improving',
        citation: 'T. Santos, J. Bispo, J. M. P. Cardoso, and J. C. Hoe, "On improving the HLS compatibility of large C/C++ code regions," in 2025 IEEE 33rd Annual International Symposium on Field-Programmable Custom Computing Machines (FCCM), 2025.',
        bibtex: `@inproceedings{santos2025improving,
  title={On improving the HLS compatibility of large C/C++ code regions},
  author={Santos, Tiago and Bispo, Joo and Cardoso, Joo MP and Hoe, James C},
  booktitle={2025 IEEE 33rd Annual International Symposium on Field-Programmable Custom Computing Machines (FCCM)},
  pages={282--282},
  year={2025},
  organization={IEEE}
}`,
        link: '',
        pdf: '/pdf/FCCM_2025_Abstract_Poster.pdf'
    },
    {
        id: 'santos2024flexible',
        citation: 'T. Santos, J. Bispo, and J. M. P. Cardoso, "A Flexible-Granularity Task Graph Representation and Its Generation from C Applications (WIP)," in Proceedings of the 25th ACM SIGPLAN/SIGBED International Conference on Languages, Compilers, and Tools for Embedded Systems, 2024, pp. 178-182.',
        bibtex: `@inproceedings{santos2024flexible,
  title={A Flexible-Granularity Task Graph Representation and Its Generation from C Applications (WIP)},
  author={Santos, Tiago and Bispo, Joo and Cardoso, Joo MP},
  booktitle={Proceedings of the 25th ACM SIGPLAN/SIGBED International Conference on Languages, Compilers, and Tools for Embedded Systems},
  pages={178--182},
  year={2024}
}`,
        link: '',
        pdf: ''
    },
    {
        id: 'santos2023cpu',
        citation: 'T. Santos, J. Bispo, and J. M. P. Cardoso, "A cpu-fpga holistic source-to-source compilation approach for partitioning and optimizing c/c++ applications," in 2023 32nd International Conference on Parallel Architectures and Compilation Techniques (PACT), 2023, pp. 320-322.',
        bibtex: `@inproceedings{santos2023cpu,
  title={A cpu-fpga holistic source-to-source compilation approach for partitioning and optimizing c/c++ applications},
  author={Santos, Tiago and Bispo, Joo and Cardoso, Joo MP},
  booktitle={2023 32nd International Conference on Parallel Architectures and Compilation Techniques (PACT)},
  pages={320--322},
  year={2023},
  organization={IEEE}
}`,
        link: '',
        pdf: '/pdf/PACT_2023_PhD_Forum_Poster.pdf'
    },
    {
        id: 'santos2021performance',
        citation: 'T. Santos, N. Paulino, J. Bispo, J. M. P. Cardoso, and J. C. Ferreira, "On the Performance Effect of Loop Trace Window Size on Scheduling for Configurable Coarse Grain Loop Accelerators," in 2021 International Conference on Field-Programmable Technology (ICFPT), 2021, pp. 1-4.',
        bibtex: `@inproceedings{santos2021performance,
  title={On the Performance Effect of Loop Trace Window Size on Scheduling for Configurable Coarse Grain Loop Accelerators},
  author={Santos, Tiago and Paulino, Nuno and Bispo, Joo and Cardoso, Joo MP and Ferreira, Joo C},
  booktitle={2021 International Conference on Field-Programmable Technology (ICFPT)},
  pages={1--4},
  year={2021},
  organization={IEEE}
}`,
        link: '',
        pdf: ''
    },
    {
        id: 'santos2020automatic',
        citation: 'T. Santos and J. M. P. Cardoso, "Automatic selection and insertion of hls directives via a source-to-source compiler," in 2020 International Conference on Field-Programmable Technology (ICFPT), 2020, pp. 227-232.',
        bibtex: `@inproceedings{santos2020automatic,
  title={Automatic selection and insertion of hls directives via a source-to-source compiler},
  author={Santos, Tiago and Cardoso, Joo MP},
  booktitle={2020 International Conference on Field-Programmable Technology (ICFPT)},
  pages={227--232},
  year={2020},
  organization={IEEE}
}`,
        link: '',
        pdf: ''
    },
    {
        id: 'dos2020acceleration',
        citation: 'T. L. dos Santos, "Acceleration of applications with fpga-based computing machines: Code restructuring," Master\'s thesis, Universidade do Porto (Portugal), 2020.',
        bibtex: `@mastersthesis{dos2020acceleration,
  title={Acceleration of applications with fpga-based computing machines: Code restructuring},
  author={dos Santos, Tiago Lascasas},
  year={2020},
  school={Universidade do Porto (Portugal)}
}`,
        link: '',
        pdf: ''
    }
];

export default function Research() {
    const [copiedId, setCopiedId] = useState(null);

    const copyBibtex = (id, bibtex) => {
        navigator.clipboard.writeText(bibtex).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    return (
        <div className="research-container fade-in">
            <div className="research-header">
                <h1>Research</h1>
                <p>My academic research, including publications, talks, and other contributions.</p>
            </div>

            <section className="research-section">
                <h2>Publications</h2>
                <div className="publications-list-simple">
                    {publications.map(pub => (
                        <div key={pub.id} className="citation-card">
                            <p className="citation-text">
                                {pub.citation}
                            </p>

                            <div className="citation-actions">
                                <button
                                    className="action-btn"
                                    onClick={() => copyBibtex(pub.id, pub.bibtex)}
                                    title="Copy BibTeX"
                                >
                                    <Quote size={16} />
                                    <span>{copiedId === pub.id ? 'Copied!' : 'BibTeX'}</span>
                                </button>

                                {pub.pdf && (
                                    <a href={pub.pdf} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <FileText size={16} />
                                        <span>PDF</span>
                                    </a>
                                )}

                                {pub.link && (
                                    <a href={pub.link} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} />
                                        <span>Link</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="research-section">
                <h2>Talks</h2>
                <p className="placeholder-text">Coming soon...</p>
                {/* 
                <ul className="simple-list">
                    <li>"My Cool Talk", Conference X, 2025.</li>
                </ul> 
                */}
            </section>

            <section className="research-section">
                <h2>Tutorials</h2>
                <p className="placeholder-text">Coming soon...</p>
            </section>

            <section className="research-section">
                <h2>Organization</h2>
                <p className="placeholder-text">Coming soon...</p>
            </section>
        </div>
    );
}
