import { useState } from 'react';
import { ExternalLink, Quote, FileText, CheckCircle, Youtube } from 'lucide-react';
import './Research.css';

const publications = [{
    id: 'santos2025mcsoc',
    citation: 'T. Santos, J. Bispo, J. M. P. Cardoso and J. C. Hoe, "HLS to FPGAs: Extending Software Regions Via Transformations and Offloading Functions to the CPU," 2025 IEEE 18th International Symposium on Embedded Multicore/Many-core Systems-on-Chip (MCSoC), Singapore, Singapore, 2025, pp. 25-32, doi: 10.1109/MCSoC67473.2025.00015.',
    bibtex: `@INPROCEEDINGS{11310880,
  author={Santos, Tiago and Bispo, João and Cardoso, João M. P. and Hoe, James C.},
  booktitle={2025 IEEE 18th International Symposium on Embedded Multicore/Many-core Systems-on-Chip (MCSoC)}, 
  title={HLS to FPGAs: Extending Software Regions Via Transformations and Offloading Functions to the CPU}, 
  year={2025},
  volume={},
  number={},
  pages={25-32},
  keywords={Codes;Debugging;Static analysis;Benchmark testing;Dynamic scheduling;Libraries;Resource management;Field programmable gate arrays;Standards;Optimization;FPGA;High-level Synthesis;Source-to-source Compilers;Hardware/Software Partitioning},
  doi={10.1109/MCSoC67473.2025.00015}}
`,
    link: 'https://ieeexplore.ieee.org/abstract/document/11008954',
    paper: '',
    poster: '',
    presentation: 'https://www.youtube.com/watch?v=ucckHNUUCTI'
},
{
    id: 'santos2025ph',
    citation: 'T. Santos, J. Bispo and J. M. P. Cardoso, "Ph.D. Project: Holistic Partitioning and Optimization of CPU-FPGA Applications Through Source-to-Source Compilation," 2025 IEEE 33rd Annual International Symposium on Field-Programmable Custom Computing Machines (FCCM), Fayetteville, AR, USA, 2025, pp. 308-309, doi: 10.1109/FCCM62733.2025.00022.',
    bibtex: `@inproceedings{
    santos2025ph,
    title = { Ph.D.Project: Holistic Partitioning and Optimization of CPU- FPGA Applications Through Source - to - Source Compilation
},
author = { Santos, Tiago and Bispo, Joo and Cardoso, Joo MP },
    booktitle = { 2025 IEEE 33rd Annual International Symposium on Field- Programmable Custom Computing Machines(FCCM)},
pages = { 308--309 },
    year = { 2025},
    organization = { IEEE }
}`,
    link: 'https://ieeexplore.ieee.org/abstract/document/11008954',
    paper: '/pdf/FCCM_2025_PhD_Forum_Poster.pdf',
    poster: ''
},
{
    id: 'santos2025improving',
    citation: 'T. Santos, J. Bispo, J. M. P. Cardoso and J. C. Hoe, "On Improving the HLS Compatibility of Large C/C++ Code Regions," 2025 IEEE 33rd Annual International Symposium on Field-Programmable Custom Computing Machines (FCCM), Fayetteville, AR, USA, 2025, pp. 282-282, doi: 10.1109/FCCM62733.2025.00054.',
    bibtex: `@inproceedings{
    santos2025improving,
    title = { On improving the HLS compatibility of large C/ C++ code regions
},
author = { Santos, Tiago and Bispo, Joo and Cardoso, Joo MP and Hoe, James C },
    booktitle = { 2025 IEEE 33rd Annual International Symposium on Field- Programmable Custom Computing Machines(FCCM)},
pages = { 282--282 },
    year = { 2025},
    organization = { IEEE }
}`,
    link: 'https://ieeexplore.ieee.org/abstract/document/11008922',
    poster: '/pdf/FCCM_2025_Abstract_Poster.pdf'
},
{
    id: 'santos2024flexible',
    citation: 'Tiago Santos, João Bispo, and João M. P. Cardoso. 2024. A Flexible-Granularity Task Graph Representation and Its Generation from C Applications (WIP). In Proceedings of the 25th ACM SIGPLAN/SIGBED International Conference on Languages, Compilers, and Tools for Embedded Systems (LCTES 2024). Association for Computing Machinery, New York, NY, USA, 178–182. https://doi.org/10.1145/3652032.3657580',
    bibtex: `@inproceedings{
    santos2024flexible,
    title = { A Flexible-Granularity Task Graph Representation and Its Generation from C Applications(WIP)
},
author = { Santos, Tiago and Bispo, Joo and Cardoso, Joo MP },
    booktitle = { Proceedings of the 25th ACM SIGPLAN/ SIGBED International Conference on Languages, Compilers, and Tools for Embedded Systems},
pages = { 178--182 },
    year = { 2024}
}`,
    link: 'https://dl.acm.org/doi/abs/10.1145/3652032.3657580',
    paper: 'https://dl.acm.org/doi/epdf/10.1145/3652032.3657580'
},
{
    id: 'santos2023cpu',
    citation: 'T. Santos, J. Bispo, and J. M. P. Cardoso, "A cpu-fpga holistic source-to-source compilation approach for partitioning and optimizing c/c++ applications," in 2023 32nd International Conference on Parallel Architectures and Compilation Techniques (PACT), 2023, pp. 320-322.',
    bibtex: `@inproceedings{
    santos2023cpu,
    title = { A cpu- fpga holistic source - to - source compilation approach for partitioning and optimizing c / c++ applications
},
author = { Santos, Tiago and Bispo, Joo and Cardoso, Joo MP },
    booktitle = { 2023 32nd International Conference on Parallel Architectures and Compilation Techniques(PACT) },
    pages = { 320--322 },
    year = { 2023},
    organization = { IEEE }
}`,
    link: '',
    poster: '/pdf/PACT_2023_PhD_Forum_Poster.pdf'
},
{
    id: 'santos2021performance',
    citation: 'T. Santos, N. Paulino, J. Bispo, J. M. P. Cardoso, and J. C. Ferreira, "On the Performance Effect of Loop Trace Window Size on Scheduling for Configurable Coarse Grain Loop Accelerators," in 2021 International Conference on Field-Programmable Technology (ICFPT), 2021, pp. 1-4.',
    bibtex: `@inproceedings{
    santos2021performance,
    title = { On the Performance Effect of Loop Trace Window Size on Scheduling for Configurable Coarse Grain Loop Accelerators },
    author = { Santos, Tiago and Paulino, Nuno and Bispo, Joo and Cardoso, Joo MP and Ferreira, Joo C },
    booktitle = { 2021 International Conference on Field- Programmable Technology(ICFPT)
},
pages = { 1--4 },
    year = { 2021},
    organization = { IEEE }
}`,
    link: '',
    pdf: ''
},
{
    id: 'santos2020automatic',
    citation: 'T. Santos and J. M. P. Cardoso, "Automatic selection and insertion of hls directives via a source-to-source compiler," in 2020 International Conference on Field-Programmable Technology (ICFPT), 2020, pp. 227-232.',
    bibtex: `@inproceedings{
    santos2020automatic,
    title = { Automatic selection and insertion of hls directives via a source- to - source compiler
},
author = { Santos, Tiago and Cardoso, Joo MP },
    booktitle = { 2020 International Conference on Field- Programmable Technology(ICFPT)},
pages = { 227--232 },
    year = { 2020},
    organization = { IEEE }
}`,
    link: '',
    pdf: ''
},
{
    id: 'dos2020acceleration',
    citation: 'T. L. dos Santos, "Acceleration of applications with fpga-based computing machines: Code restructuring," Master\'s thesis, Universidade do Porto (Portugal), 2020.',
    bibtex: `@mastersthesis{
    dos2020acceleration,
    title = { Acceleration of applications with fpga - based computing machines: Code restructuring },
    author = { dos Santos, Tiago Lascasas },
    year = { 2020},
    school = { Universidade do Porto(Portugal) }
} `,
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

                                {pub.poster && (
                                    <a href={pub.poster} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <FileText size={16} />
                                        <span>Poster</span>
                                    </a>
                                )}

                                {pub.paper && (
                                    <a href={pub.paper} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <FileText size={16} />
                                        <span>Paper</span>
                                    </a>
                                )}

                                {pub.presentation && (
                                    <a href={pub.presentation} className="action-btn" target="_blank" rel="noopener noreferrer">
                                        <Youtube size={16} />
                                        <span>Video</span>
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
