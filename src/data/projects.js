export const projects = [
  // --- Compilers & Systems Acceleration Work ---
  {
    id: 'hoopa',
    category: 'compilers',
    categoryLabel: 'Compilers & Systems',
    title: 'Hoopa (Holistic Partitioning and Optimization Algorithms)',
    description:
      'Automatic, single-pass algorithms to partition and optimize C/C++ applications for heterogeneous CPU-FPGA systems.',
    tags: ['C', 'C++', 'TypeScript', 'Compilers', 'Task Graphs', 'AST', 'Source-to-Source', 'HEART 2026'],
    featured: true,
    links: {
      github: 'https://github.com/specs-feup/hoopa',
      paper: 'https://dl.acm.org/doi/full/10.1145/3814576.3814597'
    }
  },
  {
    id: 'extended-task-graph',
    category: 'compilers',
    categoryLabel: 'Compilers & Systems',
    title: 'Extended Task Graph (ETG)',
    description:
      'An Extended Task Graph representation and automated extraction pipeline for the Clava C/C++ source-to-source compiler.',
    tags: ['C', 'C++', 'TypeScript', 'Compilers', 'Hardware/Software Partitioning', 'Task Graphs', 'AST', 'Source-to-Source', 'LCTES 2024'],
    featured: true,
    links: {
      github: 'https://github.com/specs-feup/extended-task-graph',
      paper: 'https://dl.acm.org/doi/abs/10.1145/3652032.3657580'
    }
  },
  {
    id: 'clava-code-transforms',
    category: 'compilers',
    categoryLabel: 'Compilers & Systems',
    title: 'Clava Code Transforms',
    description:
      'A set of advanced C/C++ source-to-source code transformations for Clava, including struct and array flattening, function inlining/outlining/voidification, and malloc() hoisting.',
    tags: ['C', 'C++', 'TypeScript', 'Compilers', 'Code Transformations', 'AST', 'Source-to-Source', 'MCSoC 2025'],
    featured: true,
    links: {
      github: 'https://github.com/specs-feup/clava-transforms',
      paper: 'https://ieeexplore.ieee.org/abstract/document/11310880'
    }
  },
  {
    id: 'libc-hls',
    category: 'compilers',
    categoryLabel: 'Compilers & Systems',
    title: 'libc-hls',
    description:
      'A partial reimplementation of the C standard library specifically tailored for High-Level Synthesis (HLS), overcoming native standard library synthesis barriers on FPGAs.',
    tags: ['C', 'HLS', 'FPGA', 'High-Level Synthesis', 'Embedded Systems', 'Compilers', 'MCSoC 2025'],
    featured: true,
    links: {
      github: 'https://github.com/tiagolascasas/libc-hls',
      paper: 'https://ieeexplore.ieee.org/abstract/document/11310880'
    }
  },
  {
    id: 'clava-vitis-integration',
    category: 'compilers',
    categoryLabel: 'Compilers & Systems',
    title: 'Clava Vitis Integration',
    description:
      'A Clava toolchain extension for seamless integration with the AMD Vitis unified software platform for FPGA acceleration.',
    tags: ['C', 'HLS', 'FPGA', 'Vitis', 'High-Level Synthesis', 'Embedded Systems', 'Compilers'],
    featured: true,
    links: {
      github: 'https://github.com/specs-feup/clava-vitis-integration',
    }
  },
  {
    id: 'clava',
    category: 'compilers',
    categoryLabel: 'Compilers & Systems',
    title: 'Clava',
    description:
      'A C/C++ source-to-source compiler, and the basis for many of the compiler plug-ins I\'ve developed.',
    tags: ['C', 'C++', 'TypeScript', 'Compilers', 'Code Transformations', 'AST', 'Source-to-Source'],
    featured: true,
    links: {
      github: 'https://github.com/specs-feup/clava',
      paper: 'https://www.sciencedirect.com/science/article/pii/S2352711019302122'
    }
  },
  // --- Personal & Engineering Projects ---
  {
    id: 'doom-ncurses',
    category: 'personal',
    categoryLabel: 'Personal Projects',
    title: 'DOOM on Terminal (ncurses)',
    description:
      'A port of the iconic DOOM game engine engineered to render and run interactively inside a Linux terminal via ncurses, translating 3D framebuffer coordinates into ANSI terminal characters in real time.',
    tags: ['C', 'Linux', 'ncurses', 'Systems Programming', 'Retro Gaming'],
    featured: true,
    links: {
      github: 'https://github.com/tiagolascasas/doom-ncurses',
    }
  },
  {
    id: 'asterinix',
    category: 'personal',
    categoryLabel: 'Personal Projects',
    title: 'Asterinix',
    description:
      'The first video game I ever made, originally developed in pure C and x86 assembly for Minix 3, and later ported to Linux, SDL2, and WebAssembly.',
    tags: ['C', 'x86 Assembly', 'Minix 3', 'Linux', 'SDL2', 'WebAssembly / Emscripten'],
    featured: true,
    links: {
      github: 'https://github.com/tiagolascasas/asterinix',
      play: '/projects/asterinix',
      web: 'https://tiagolascasas.github.io/asterinix/'
    }
  }
];
