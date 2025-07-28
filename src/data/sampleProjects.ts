export const sampleProjects = [
  {
    _id: "project-1",
    title: "MULTI-ROBOT SYSTEM FOR AUTONOMOUS NAVIGATION AND ANOMALY DETECTION",
    slug: { current: "multi-robot-system" },
    thumbnail: "https://media4.giphy.com/avatars/HeyAutoHQ/DgfrJNR8oUyv.gif",
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
    sourceUrl: "https://github.com/yourusername/multi-robot-system",
    video: null,
  },
  {
    _id: "project-2",
    title:
      "POKÉCACHE: CACHE REPLACEMENT POLICY GENERATION WITH LLMs, CHAMPSIM, C++",
    slug: { current: "pokecache" },
    thumbnail: "/images/pokecache.svg",
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
    sourceUrl: "https://github.com/yourusername/pokecache",
    video: null,
  },
  {
    _id: "project-3",
    title: "HIGH-PERFORMANCE SORTING: BITONIC SORT, CUDA, C/C++",
    slug: { current: "bitonic-sort" },
    thumbnail: "/images/bitonic-sort.svg",
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
    sourceUrl: "https://github.com/yourusername/bitonic-sort",
    video: null,
  },
];
