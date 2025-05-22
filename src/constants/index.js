import Hubwerkseinheit from "../components/Hubwerkseinheit";
import Tisch from "../components/Tisch";

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
    id:3,
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
    name: 'Porjects', 
    href: '#projects',
  },
  
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
  ,
  
];



export const myProjects = [

  {
    title: 'Design of a Lifting Unit for a Bridge Crane',
    desc: 'This project involved designing a critical lifting unit for a bridge crane, focusing on the development of both brakes and gears according to industry standards. I utilized Solid Edge to create detailed 3D models and technical drawings, ensuring that the design was both efficient and safe for industrial application. The project showcased my ability to adhere to technical specifications while also delivering a functional and innovative solution.',
    subdesc: 'With this design, I aimed to improve the mechanical efficiency of the crane while ensuring safety and reliability in operation. The use of advanced 3D modeling tools was crucial in visualizing and refining the components.',
    href: '/assets/project2.pdf',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    category: "mechanical",
    technologies: ["SolidEdge", "VDI-2221", "KISSsoft", "KISSsys"],
    position: [0, -3,5, 10], // Initial position for the model
    rotation: [0, 0, 0],  // Initial rotation for the model
    scale: 0.015,  
    model: Hubwerkseinheit,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Solid Edge',
        path: '/assets/solidedge.svg',
      },
      {
        id: 2,
        name: 'Mechanical Design',
        path: '/assets/design.svg',
      },
    ],
  },
  {
    title: 'Creation of a Streaming Platform with AI',
    desc: 'In this project, I developed a cutting-edge platform that enabled real-time monitoring of CNC machines through AI-driven data analysis. By gathering information from sensors and cameras, the platform provided live feedback and enhanced anomaly detection. My focus was on improving operational efficiency by leveraging AI models that could process both image and time series data, ultimately enhancing the precision and speed of CNC operations.',
    subdesc: 'The platform not only increased machine productivity but also provided a reliable method for early anomaly detection, minimizing downtime and maintenance costs through proactive monitoring.',
    category: "computer-science",
    technologies: ["Python", "YOLOv8", "KAFKA", "DOCKER", "Postgres"],

    href: 'https://github.com/yassine12-12',

    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'AI',
        path: '/assets/ai.svg',
      },
      {
        id: 2,
        name: 'CNC Machines',
        path: '/assets/cnc.svg',
      },
    ],
  },
  {
    title: 'Design and Construction of a Processing Table for Robot-Assisted Plasma Cutting',
    desc: 'For my Bachelor thesis, I designed and constructed a modern processing table optimized for robot-assisted plasma cutting operations. The project followed VDI 2221 guidelines and involved extensive thermal load investigations and strength verifications. By leveraging advanced simulation software and conducting thermographic analysis using Python and OpenCV, I ensured that the table could withstand the intense thermal loads associated with plasma cutting, while maintaining structural integrity.',
    subdesc: 'This project not only showcased my ability to adhere to engineering standards but also allowed me to optimize industrial processes by using data-driven simulations and analysis.',
    href: '/assets/thesis.pdf',
    texture: '/textures/project/project4.mp4',
    category: "mechanical",
    technologies: ["SolidEdge","Inventor", "NASTRAN ", "VDI-2221", "Python", "OpenCV"],
    position: [25,1, 0.9], // Initial position for the model
    rotation: [-1.1, -0.05, 3],  // Initial rotation for the model
    scale: 0.03,  
    logo: '/assets/project-logo4.png',
    model:Tisch,
    logoStyle: {
      backgroundColor: '#FFD700',
      border: '0.2px solid #FFA500',
      boxShadow: '0px 0px 60px 0px #FFA5004D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'OpenCV',
        path: '/assets/opencv.svg',
      },
    ],
  },
  
  {
    title: 'Personal Portfolio Website',
    desc: 'Designed and developed a responsive personal website to showcase projects and skills. Implemented modern UI with Next.js, Tailwind CSS, and Figma-based design system. Deployed via Vercel with fully responsive layout and dark mode support.',
    subdesc: 'This project highlights my ability to build and deploy modern, user-friendly web applications with a focus on design and accessibility.',
    href: 'https://yassinekraiem.vercel.app',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Figma'],
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
      { id: 2, name: 'Next.js', path: '' },
      { id: 3, name: 'Tailwind CSS', path: '' },
      { id: 4, name: 'Vercel', path: '' },
      { id: 5, name: 'Figma', path: '' },
    ],
  },
  {
    title: 'Pulley-Based Lifting Device',
    desc: 'Developed a compact, safe lifting system using gear design, tolerance analysis, and strength verification. Conducted optimization with Kutzbach plans and gear dimensioning in KISSsoft.',
    subdesc: 'This project focused on mechanical optimization and safety in lifting systems, utilizing advanced gear design and analysis tools.',
    href: '',
    technologies: ['VDI-2221', 'Solid Edge'],
    category: 'mechanical',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#2F4F4F',
      border: '0.2px solid #708090',
      boxShadow: '0px 0px 60px 0px #2F4F4F4D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'VDI-2221', path: '' },
      { id: 2, name: 'Solid Edge', path: '' },
    ],
  },
  {
    title: 'Machine Learning for Aging and Longevity',
    desc: 'Compared Random Forest, XGBoost, and SVM on a health dataset with over 10 features. Applied EDA, bias auditing (age fairness), and SHAP for model explainability.',
    subdesc: 'Focused on model comparison, fairness, and explainability in health data analytics.',
    href: '',
    technologies: ['Python', 'scikit-learn', 'SHAP'],
    category: 'computer-science',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#4B5563',
      border: '0.2px solid #6B7280',
      boxShadow: '0px 0px 60px 0px #4B55634D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'scikit-learn', path: '' },
      { id: 3, name: 'SHAP', path: '' },
    ],
  },
  {
    title: 'Numerical Control and Toolpath Planning',
    desc: 'Generated 2D and 3D trajectories using Bézier curves and cubic splines. Implemented symbolic arc length and curvature calculation for CNC/robot motion paths.',
    subdesc: 'Demonstrated advanced path planning and symbolic computation for CNC and robotics.',
    href: '',
    technologies: ['Python', 'NumPy'],
    category: 'computer-science',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#2563EB',
      border: '0.2px solid #1D4ED8',
      boxShadow: '0px 0px 60px 0px #2563EB4D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'NumPy', path: '' },

    ],
  },
  {
    title: 'Deep Learning Course Projects',
    desc: 'Designed CNNs, LSTMs, and Autoencoders for classification, time series, and anomaly detection. Applied batch norm, early stopping, ROC curve evaluation, and model tuning.',
    subdesc: 'Hands-on experience with deep learning architectures and model evaluation.',
    href: 'https://github.com/yassine12-12/deep-learning-projects',
    technologies: ['Python', 'TensorFlow', 'Keras'],
    category: 'computer-science',
    texture: '',
    logo: '',
    logoStyle: {
      backgroundColor: '#F59E42',
      border: '0.2px solid #F59E42',
      boxShadow: '0px 0px 60px 0px #F59E424D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Python', path: '' },
      { id: 2, name: 'TensorFlow', path: '' },
      { id: 3, name: 'Keras', path: '' },
    ],
  },
  {
    title: 'CNC Machine Programming with C++',
    desc: 'In this team project, I was responsible for programming an XY plotter using C++ and G-Code, which significantly improved the precision and performance of the CNC operations. This project demonstrated my technical abilities in low-level programming and automation, allowing for fine control over CNC machinery. The improved plotting accuracy reduced production errors and increased overall efficiency.',
    subdesc: 'By optimizing the code and machine operations, this project contributed to the successful implementation of CNC programming in real-world applications, demonstrating the benefits of custom G-Code solutions.',
    href: '',
    category: "computer-science",
    technologies: ["C++", "G-Code"],

    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#FF6347',
      border: '0.2px solid #FF4500',
      boxShadow: '0px 0px 60px 0px #FF63474D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/cplusplus.svg',
      },
      {
        id: 2,
        name: 'G-Code',
        path: '/assets/gcode.svg',
      },
    ],
  },
  
  
]
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

export const workExperiences = [
   {
    id: 2,
    name: 'Innomotics',
    pos: 'Working Student ',
    duration: '2023 - Present',
    title: "At Innomotics (Siemens), I developed simulations for cooling electric motors using SimulationX and Modelica, created modules for heat and fluid networks with Modelica.",
    icon: '/assets/innomotics_logo.jpeg',
    animation: 'salute',
  },
  {
    id: 1,
    name: 'AKG Software Consulting ',
    pos: 'Working Student',
    duration: '2020 - 2022',
    title: "At AKG Software Consulting, I developed automated setups, performed tests, and created technical drawings. I also received training in land acquisition and street planning, which refined my technical skills.",
    icon: '/assets/akg_logo.png',
    animation: 'clapping',
  },
 
];
export const studiedata = [
  {
    id: 4,
    name: 'Technical University of Berlin, Computational Engineering Science (M.Sc.)',
    pos: 'Master Student',
    duration: '10.2024 - Present',
    title: 'Currently pursuing a master’s degree, specializing in computational methods and advanced engineering simulations.',
    icon: '/assets/TU-Berlin.png', // Update with your preferred logo
  },
  
  {
    id: 3,
    name: 'Technical University of Berlin, Mechanical Engineering (B.Sc.)',
    pos: 'Bachelor Student',
    duration: '09.2020 - 07.2024',
    title: 'Graduated in July 2024, focusing on technical design, simulations, and mechanical engineering principles.',
    icon: '/assets/TU-Berlin.png', // Update with your preferred logo
  },
  {
    id: 2,
    name: 'f+u Academy of Languages, Berlin',
    pos: 'Language Student',
    duration: '2019 - 2020',
    title: 'Completed an intensive German language course, achieving C1 level proficiency, certified by the TestDaF exam.',
    icon: '/assets/fu_logo.png', // Update with your preferred logo
  },
  {
    id: 1,
    name: 'Elite High School, Tunisia',
    pos: 'High School Student',
    duration: '2015 - 2019',
    title: 'Completed high school diploma with an average grade of 1.6, building a strong foundation for technical and engineering studies.',
    icon: '/assets/tn.png', // Update with your preferred logo
  },
];
