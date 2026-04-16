import Hubwerkseinheit from "../components/Hubwerkseinheit";
import TischNew from "../components/TischNew";
import Flaschenzug from "../components/Flaschenzug";

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Studies',
    href: '#studies',
  },
  {
    id: 6,
    name: 'Projects', 
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const workExperiences = [
  {
    id: 2,
    name: 'Innomotics (Siemens)',
    pos: 'Working Student',
    duration: 'Aug 2023 - Present',
    title: "Developed a thermal-fluid library for electric motor applications and validated results through testing. Developed simulation models for motor cooling using SimulationX and Modelica.",
    icon: '/assets/innomotics_logo.jpeg',
    animation: 'salute',
  },
  {
    id: 1,
    name: 'AKG Software Consulting',
    pos: 'Working Student',
    duration: 'Oct 2022 - Jul 2023',
    title: "Automated setup processes and created functional/non-functional test cases. Executed tests, documented results, and reported issues.",
    icon: '/assets/akg_logo.png',
    animation: 'clapping',
  },
];

export const studiedata = [
  {
    id: 4,
    name: 'Technical University of Berlin, Computational Engineering Science (M.Sc.)',
    pos: 'Master Student',
    duration: 'Oct 2024 - Present',
    title: 'Currently pursuing a master degree with specialization in Artificial Intelligence and Data Science, focusing on advanced computational methods and machine learning applications.',
    icon: '/assets/TU-Berlin.png',
  },
  {
    id: 3,
    name: 'Technical University of Berlin, Mechanical Engineering (B.Sc.)',
    pos: 'Bachelor Graduate', 
    duration: 'Sep 2020 - Jul 2024',
    title: 'Graduated with Bachelor of Science in Mechanical Engineering, focusing on technical design, simulations, and engineering principles.',
    icon: '/assets/TU-Berlin.png',
  },
  {
    id: 2,
    name: 'f+u Academy of Languages, Berlin',
    pos: 'Language Student',
    duration: '2019 - 2020',
    title: 'Completed intensive German language program, achieving C1 level proficiency and TestDaF certification.',
    icon: '/assets/fu_logo.png',
  },
  {
    id: 1,
    name: 'Elite High School, Tunisia',
    pos: 'High School Graduate',
    duration: '2015 - 2019',
    title: 'Completed high school diploma (Abitur equivalent) with strong performance in mathematics and sciences.',
    icon: '/assets/tn.png',
  },
];

export const myProjects = [
  {
    title: 'AI-Powered Assembly Work Instruction Generator',
    desc: 'Automatically generates structured, bilingual (DE/EN) assembly work instructions (PDF) from a raw assembly video. Uses CLIP-based video segmentation, OpenCV part extraction, and Google Gemini for SOP generation.',
    subdesc: 'Reduces manual work instruction authoring effort by up to 90% for structured assembly processes, validated on multiple assembly types.',
    href: 'https://github.com/yassine12-12/AI-Powered-System-for-Automatic-Work-Instruction-Generation',
    github: 'https://github.com/yassine12-12/AI-Powered-System-for-Automatic-Work-Instruction-Generation',
    category: 'computer-science',
    technologies: ['Python', 'FastAPI', 'React', 'Google Gemini', 'LLM', 'CLIP', 'OpenCV', 'ReportLab', 'Pydantic'],
    features: [
      'CV pipeline (8-step: grayscale → blur → threshold → contour detection) to isolate individual parts from the first video frame',
      'CLIP frame embeddings enriched with temporal encoding, clustered via k-Means to build a visual storyboard',
      'Gemini-powered part verification filters out noise and background artefacts before SOP generation',
      'Structured bilingual SOP (DE/EN) with bill of materials, illustrated steps, and quality checks — generated via 6-iteration prompt refinement',
      'ReportLab PDF export and multi-page React editor for review and download',
      'Four processing presets (Default, High Quality, Balanced, Custom) configurable from the web UI'
    ],
    results: 'Validated on two assembly processes: LEGO simple (7 parts) scored 0.97, ballpoint pen assembly scored 0.80 (mean, n=10). Both rated Eigenständig (≥90% effort reduction). Manual baseline: 90–120 min per document.',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#0D1B2A',
      border: '0.2px solid #1E3A5F',
      boxShadow: '0px 0px 60px 0px #1E3A5F4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'Google Gemini', path: '' },
      { id: 3, name: 'FastAPI', path: '' },
      { id: 4, name: 'CLIP', path: '' },
      { id: 5, name: 'OpenCV', path: '' },
    ],
  },
  {
    title: 'AI-Based Cycle Time Monitoring – Human-Robot Collaboration',
    desc: 'Automated assembly cycle-time measurement using YOLOv8, MediaPipe, and OpenCV to detect assembly steps. Collected data and developed a vision pipeline, including training and optimizing YOLOv8 models.',
    subdesc: 'Advanced computer vision techniques applied to industrial automation.',
    href: 'https://github.com/yassine12-12/AI-Based-Cycle-Time-Monitoring-for-Human-Assembly-Processes-in-Human-Robot-Collaboration',
    category: 'computer-science',
    technologies: ['Python', 'YOLOv8', 'MediaPipe', 'OpenCV', 'Computer Vision'],
    features: [
      'Real-time object detection with YOLOv8 for assembly components',
      'Human pose estimation using MediaPipe for worker movement tracking',
      'Automated cycle time calculation with 95% accuracy',
      'Integration with existing industrial automation systems',
      'Custom dataset collection and annotation pipeline'
    ],
    results: 'Successfully reduced manual time measurement workload by 80% and improved production efficiency monitoring. The system now provides real-time insights into assembly line performance.',
    github: 'https://github.com/yassine12-12/AI-Based-Cycle-Time-Monitoring-for-Human-Assembly-Processes-in-Human-Robot-Collaboration',
    pdfUrl: '/assets/project2.pdf',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#0F172A',
      border: '0.2px solid #334155',
      boxShadow: '0px 0px 60px 0px #0F172A4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'YOLOv8', path: '' },
      { id: 2, name: 'OpenCV', path: '' },
      { id: 3, name: 'Python', path: '' },
    ],
  },
  {
    title: 'AI-Based CNC Monitoring Platform',
    desc: 'Built real-time monitoring with cameras, sensors, YOLOv8 and LSTM. Integrated OPC UA, Apache Kafka for advanced industrial IoT project combining computer vision and time series analysis.',
    subdesc: 'Advanced industrial IoT project combining computer vision and time series analysis.',
    category: "computer-science",
    technologies: ["Python", "YOLOv8", "LSTM", "Apache Kafka", "Docker", "PostgreSQL", "OPC UA"],
    features: [
      'Real-time CNC machine monitoring using computer vision',
      'Predictive maintenance with LSTM time series analysis',
      'Industrial IoT integration with OPC UA protocol',
      'Scalable microservices architecture with Docker',
      'Event streaming with Apache Kafka for real-time data processing'
    ],
    results: 'Achieved 92% accuracy in predicting machine failures 24 hours in advance, reducing unexpected downtime by 60% and saving approximately €50,000 in maintenance costs annually.',
    href: 'https://github.com/yassine12-12/Data-streaming-infrastructure-for-CNC-machine',
    github: 'https://github.com/yassine12-12/Data-streaming-infrastructure-for-CNC-machine',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'AI', path: '/assets/ai.svg' },
      { id: 2, name: 'CNC Machines', path: '/assets/cnc.svg' },
    ],
  },
  {
    title: 'Automotive Manufacturing Data Analytics',
    desc: 'Cleaned and merged multi-source production data; applied ML to predict delays and find bottlenecks. Built interactive dashboards with pandas, Plotly, and Dash for analysis and reporting.',
    subdesc: 'Demonstrated expertise in data engineering and visualization for industrial applications.',
    href: 'https://github.com/yassine12-12/Automotive-Production-Lead-Time-Analysis',
    category: 'computer-science',
    technologies: ['Python', 'pandas', 'Plotly', 'Dash', 'Machine Learning', 'Data Engineering'],
    features: [
      'ETL pipeline for multi-source manufacturing data integration',
      'Machine learning models for production delay prediction',
      'Interactive dashboards with real-time KPI monitoring',
      'Bottleneck identification and root cause analysis',
      'Automated reporting system for management insights'
    ],
    results: 'Identified key production bottlenecks that were causing 15% efficiency loss. Implemented solutions that improved overall equipment effectiveness (OEE) by 12%.',
    github: 'https://github.com/yassine12-12/Automotive-Production-Lead-Time-Analysis',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#1E40AF',
      border: '0.2px solid #3B82F6',
      boxShadow: '0px 0px 60px 0px #1E40AF4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'Plotly', path: '' },
      { id: 3, name: 'Dash', path: '' },
    ],
  },
  {
    title: 'ML Pipeline for Cardiovascular Risk Prediction – Framingham Study',
    desc: 'Built an ML pipeline with EDA, imputation, winsorization, RobustScaler, stratified split, and SMOTEENN. Tuned Logistic Regression, SVM, and XGBoost using GridSearchCV.',
    subdesc: 'Comprehensive machine learning project focusing on healthcare applications and fairness in AI.',
    href: 'https://github.com/yassine12-12/framingham-heart-disease-prediction',
    category: 'computer-science',
    technologies: ['Python', 'scikit-learn', 'XGBoost', 'GridSearchCV', 'Healthcare AI'],
    features: [
      'Comprehensive EDA with statistical analysis and visualization',
      'Advanced data preprocessing with missing value imputation',
      'Feature engineering and outlier treatment using winsorization',
      'Model comparison: Logistic Regression, SVM, and XGBoost',
      'Hyperparameter tuning with cross-validation and GridSearchCV'
    ],
    results: 'Achieved 89% accuracy in cardiovascular risk prediction with XGBoost model. The model demonstrated excellent performance across different demographic groups, ensuring fairness in AI healthcare applications.',
    github: 'https://github.com/yassine12-12/framingham-heart-disease-prediction',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#DC2626',
      border: '0.2px solid #EF4444',
      boxShadow: '0px 0px 60px 0px #DC26264D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'scikit-learn', path: '' },
      { id: 3, name: 'XGBoost', path: '' },
    ],
  },
  {
    title: 'Deep Learning Course Projects',
    desc: 'Built CNNs, LSTMs, and Autoencoders for classification, anomaly detection, and time series forecasting. Used batch normalization, early stopping, and ROC curves for model evaluation.',
    subdesc: 'Hands-on experience with deep learning architectures and model evaluation techniques.',
    href: 'https://github.com/yassine12-12',
    category: 'computer-science',
    technologies: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Deep Learning'],
    features: [
      'Convolutional Neural Networks for image classification',
      'LSTM networks for time series forecasting and NLP tasks',
      'Autoencoders for dimensionality reduction and anomaly detection',
      'Advanced regularization techniques (dropout, batch normalization)',
      'Comprehensive model evaluation with ROC curves and confusion matrices'
    ],
    results: 'Successfully implemented and compared multiple deep learning architectures, achieving state-of-the-art results on academic datasets with 94% accuracy on image classification tasks.',
    github: 'https://github.com/yassine12-12',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#F59E42',
      border: '0.2px solid #F59E42',
      boxShadow: '0px 0px 60px 0px #F59E424D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'TensorFlow', path: '' },
      { id: 3, name: 'PyTorch', path: '' },
    ],
  },
  {
    title: 'Applied Machine Learning in Engineering',
    desc: 'Implemented ML techniques: regression, kNN, SVM, trees, ensembles (bagging/boosting). Applied clustering (K-means, DBSCAN), encoding/normalization, validation (k-fold), and evaluation (F1, ROC/PR).',
    subdesc: 'Comprehensive exploration of machine learning algorithms and their applications in engineering contexts.',
    href: 'https://github.com/yassine12-12',
    category: 'computer-science',
    technologies: ['Python', 'scikit-learn', 'Machine Learning'],
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#059669',
      border: '0.2px solid #10B981',
      boxShadow: '0px 0px 60px 0px #0596694D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'scikit-learn', path: '' },
      { id: 3, name: 'Machine Learning', path: '' },
    ],
  },
  {
    title: 'Personal Portfolio Website',
    desc: 'Designed and developed a responsive personal website to showcase projects and skills. Implemented modern UI with React, Three.js, and Tailwind CSS.',
    subdesc: 'Modern web development project with 3D graphics and responsive design.',
    href: 'https://github.com/yassine12-12/yassinekraiem',
    github: 'https://github.com/yassine12-12/yassinekraiem',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Vercel'],
    category: 'computer-science',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#111827',
      border: '0.2px solid #374151',
      boxShadow: '0px 0px 60px 0px #1118274D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React', path: '' },
      { id: 2, name: 'Three.js', path: '' },
      { id: 3, name: 'Tailwind CSS', path: '' },
    ],
  },
  {
    title: 'Design of a Lifting Unit for a Bridge Crane',
    desc: 'This project involved designing a critical lifting unit for a bridge crane, focusing on the development of both brakes and gears according to industry standards. I utilized Solid Edge to create detailed 3D models and technical drawings.',
    subdesc: 'Mechanical engineering project showcasing design optimization and safety considerations.',
    href: '/assets/project2.pdf',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    category: "mechanical",
    technologies: ["SolidEdge", "VDI-2221", "KISSsoft", "KISSsys"],
    position: [0, -3, 5, 10],
    rotation: [0, 0, 0],
    scale: 0.02,  
    

    model: Hubwerkseinheit,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Solid Edge', path: '/assets/solidedge.svg' },
      { id: 2, name: 'Mechanical Design', path: '/assets/design.svg' },
    ],
  },
  {
    title: 'Design and Construction of a Processing Table for Robot-Assisted Plasma Cutting',
    desc: 'Bachelor thesis project: Designed and constructed a modern processing table optimized for robot-assisted plasma cutting operations following VDI 2221 guidelines. Conducted thermal load investigations and strength verifications.',
    subdesc: 'Engineering thesis demonstrating advanced simulation and thermographic analysis.',
    href: '/assets/thesis.pdf',
    texture: '/textures/project/project4.mp4',
    category: "mechanical",
    technologies: ["SolidEdge", "Inventor", "NASTRAN", "VDI-2221", "Python", "OpenCV"],
    position: [0, 1, 0],  // Centered in Blender
    rotation: [Math.PI/1.8, Math.PI , 0 ],  // Reset rotation
    scale: 0.016,  // Adjusted scale
    logo: '/assets/project-logo4.png',
    model: TischNew,
    logoStyle: {
      backgroundColor: '#FFD700',
      border: '0.2px solid #FFA500',
      boxShadow: '0px 0px 60px 0px #FFA5004D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.svg' },
      { id: 2, name: 'OpenCV', path: '/assets/opencv.svg' },
    ],
  },
  {
    title: 'Pulley-Based Lifting Device',
    desc: 'Developed a compact, safe lifting system using gear design, tolerance analysis, and strength verification. Conducted optimization with Kutzbach plans and gear dimensioning in KISSsoft.',
    subdesc: 'This project focused on mechanical optimization and safety in lifting systems, utilizing advanced gear design and analysis tools.',
    href: '/assets/pulley-project.pdf',
    texture: '/textures/project/project5.mp4',
    category: "mechanical",
    technologies: ["VDI-2221", "SolidEdge", "KISSsoft", "Gear Design", "Safety Analysis"],
    position: [0, 0, 0],
    rotation: [Math.PI / 2, Math.PI , Math.PI / 2],
    scale: 0.04,
    logo: '/assets/project-logo5.png',
    model: Flaschenzug,
    logoStyle: {
      backgroundColor: '#8B5A2B',
      border: '0.2px solid #D2691E',
      boxShadow: '0px 0px 60px 0px #8B5A2B4D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'SolidEdge', path: '/assets/solidedge.svg' },
      { id: 2, name: 'Gear Design', path: '/assets/gear.svg' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
