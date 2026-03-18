export const sampleProjects = [
  {
    _id: "project-0",
    title: "DISTRIBUTED BANKING CI/CD PIPELINE",
    slug: { current: "distributed-banking-cicd-pipeline" },
    thumbnail:
      process.env.NODE_ENV === "production"
        ? "/portfolio/images/devops_pipeline.gif"
        : "/images/devops_pipeline.gif",
    description: `Built an event-driven CI/CD pipeline for a distributed microservices system, automating testing, deployment, and rollback.

- Built an event-driven CI/CD pipeline for a distributed microservices system, automating testing, deployment, and rollback.
- Designed GitHub Actions workflows with linting, unit and integration tests, load testing, and security scans to enforce strict PR gating.
- Implemented canary deployments using NGINX and Ansible, enabling progressive traffic shifting and automatic rollback on failure.
- Developed webhook-driven auto-scaling services to dynamically adjust container replicas based on system load, with automatic NGINX service discovery and load balancing.
- Built an observability stack using Prometheus, Grafana, and Loki with real-time metrics, logs, and alerting.
- Containerized services using Docker and FastAPI, enabling reproducible builds and consistent deployments.`,
    technologies: [
      "Docker",
      "GitHub Actions",
      "Ansible",
      "FastAPI",
      "NGINX",
      "Prometheus",
      "Grafana",
      "Loki",
      "Python",
      "Locust",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/daksh204singh/distributed-banking-ops",
    video: null,
  },
  {
    _id: "project-1",
    title: "MULTI-ROBOT SYSTEM FOR AUTONOMOUS NAVIGATION AND ANOMALY DETECTION",
    slug: { current: "multi-robot-system" },
    thumbnail: process.env.NODE_ENV === 'production' ? '/portfolio/images/robot-system.gif' : '/images/robot-system.gif',
    description: `Designed and deployed a multi-robot simulation framework in ROS/Gazebo for distributed anomaly detection, integrating SLAM (slam_toolbox), autonomous navigation (NAV2), and a custom OpenCV perception pipeline on a fleet of three Clearpath Jackal UGVs.

Engineered solutions for critical simulation-to-reality gap challenges, including debugging use_sim_time synchronization across the entire robotics stack (Gazebo, SLAM, NAV2) to stabilize map generation and enable reliable navigation.

Analyzed ROS1 vs. ROS2 trade-offs for multi-agent deployment, strategically porting the system to ROS1 to overcome namespacing and resource-constraint challenges in ROS2 Foxy, ensuring successful project completion.

Contributed to the end-to-end system setup, including foundational environment configuration, sensor integration using URDF, and SLAM pipeline configuration to process Lidar data for mapping.`,
    technologies: [
      "ROS",
      "Gazebo",
      "SLAM",
      "NAV2",
      "OpenCV",
      "Python",
      "C++",
      "Lidar",
      "URDF",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/daksh204singh/jackal-path-finder",
    video: null,
  },
  {
    _id: "project-2",
    title:
      "POKÉCACHE: CACHE REPLACEMENT POLICY GENERATION WITH LLMs, CHAMPSIM, C++",
    slug: { current: "pokecache" },
    thumbnail: process.env.NODE_ENV === 'production' ? '/portfolio/images/pokecache.gif' : '/images/pokecache.gif',
    description: `Developed an automated framework that generates high-performance cache replacement policies using large language models (LLMs) and evolutionary search. Integrated with the ChampSim simulator to iteratively evolve and evaluate C++ implementations, outperforming traditional heuristics like LRU.

The system leverages LLMs to generate and optimize cache replacement algorithms, then uses evolutionary search to refine and improve the generated policies. This approach demonstrates the potential of AI-assisted hardware optimization.`,
    technologies: [
      "C++",
      "LLMs",
      "ChampSim",
      "Evolutionary Search",
      "Cache Optimization",
      "Machine Learning",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/daksh204singh/PokeCache.git",
    video: null,
  },
  {
    _id: "project-3",
    title: "HIGH-PERFORMANCE SORTING: BITONIC SORT, CUDA, C/C++",
    slug: { current: "bitonic-sort" },
    thumbnail: process.env.NODE_ENV === 'production' ? '/portfolio/images/bitonic-sort.gif' : '/images/bitonic-sort.gif',
    description: `Developed a high-performance parallel sorting solution using the Bitonic Sort algorithm, with implementations in OpenMP, CUDA (global and shared memory), and MPI. Analyzed scalability, identified limitations, and proposed future hybrid MPI + CUDA/OpenMP enhancements for improved distributed and multi-core performance.

The project explores different parallel computing paradigms and their effectiveness for sorting algorithms, providing insights into performance optimization for large-scale data processing.`,
    technologies: [
      "CUDA",
      "C++",
      "OpenMP",
      "MPI",
      "Parallel Computing",
      "Bitonic Sort",
      "GPU Computing",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/daksh204singh/parallel-bitonic-sort",
    video: null,
  },
  {
    _id: "project-4",
    title: "OPERATING SYSTEM KERNEL SYNCHRONIZATION & CONCURRENCY",
    slug: { current: "os-kernel-synchronization" },
    thumbnail: process.env.NODE_ENV === 'production' ? '/portfolio/images/os-kernel.gif' : '/images/os-kernel.gif',
    description: `Engineered core synchronization primitives (locks, condition variables) in C, ensuring thread safety on multiprocessor systems by implementing atomicity with low-level MIPS assembly (LL/SC) and validating with GDB for kernel debugging.

Designed an efficient reader-writer lock by analyzing the classic problem of writer starvation, delivering a balanced solution that optimized for concurrent reads while ensuring fair resource access.

The project demonstrates deep understanding of operating system internals, concurrent programming challenges, and low-level system programming techniques essential for building robust, thread-safe kernel components.`,
    technologies: [
      "C",
      "MIPS Assembly",
      "GDB",
      "OS/161",
      "System/161 Simulator",
      "Synchronization",
      "Concurrent Programming",
      "Kernel Development",
    ],
    liveUrl: null,
    sourceUrl: "https://github.com/daksh204singh/os161",
    video: null,
  },
];
