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
    id: 3,
    name: 'Porjects', 
    href: '#projects',
  },

  {
    id:4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Studies',
    href: '#studies',
  },
  {
    id: 6,
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
  {
    title: 'Python Programming Projects',
    desc: 'In 2021, I worked on various Python projects that focused on data processing, physical modeling, and visualization. Through these projects, I gained experience in creating simulations and processing large datasets, which I then visualized to provide meaningful insights. These projects allowed me to build a strong foundation in Python programming, particularly in data analysis and problem-solving applications.',
    subdesc: 'The key takeaway from these projects was the ability to handle complex datasets and create intuitive visualizations that improved decision-making and analysis processes.',
    href: '',
    technologies: ["Python"],

    category: "computer-science",
    texture: '/textures/project/project6.mp4',
    logo: '/assets/project-logo6.png',
    logoStyle: {
      backgroundColor: '#4682B4',
      border: '0.2px solid #4169E1',
      boxShadow: '0px 0px 60px 0px #4682B44D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Data Visualization',
        path: '/assets/datavis.svg',
      },
    ],
  }
  
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
    id: 1,
    name: 'AKG Software Consulting ',
    pos: 'Working Student',
    duration: '2020 - 2022',
    title: "At AKG Software Consulting, I developed automated setups, performed tests, and created technical drawings. I also received training in land acquisition and street planning, which refined my technical skills.",
    icon: '/assets/akg_logo.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Innomotics',
    pos: 'Working Student ',
    duration: '2023 - 2024',
    title: "At Innomotics (Siemens), I developed simulations for cooling electric motors using SimulationX and OpenModelica, created modules for heat and fluid networks with Modelica, and worked on both frontend and backend software development.",
    icon: '/assets/innomotics_logo.jpeg',
    animation: 'salute',
  },
];
export const studiedata = [
  {
    id: 1,
    name: 'Elite High School, Tunisia',
    pos: 'High School Student',
    duration: '2015 - 2019',
    title: 'Completed high school diploma with an average grade of 1.6, building a strong foundation for technical and engineering studies.',
    icon: '/assets/tn.png', // Update with your preferred logo
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
    id: 3,
    name: 'Technical University of Berlin, Mechanical Engineering (B.Sc.)',
    pos: 'Bachelor Student',
    duration: '09.2020 - 07.2024',
    title: 'Graduated in July 2024, focusing on technical design, simulations, and mechanical engineering principles.',
    icon: '/assets/TU-Berlin.png', // Update with your preferred logo
  },
  {
    id: 4,
    name: 'Technical University of Berlin, Computational Engineering Science (M.Sc.)',
    pos: 'Master Student',
    duration: '10.2022 - Present',
    title: 'Currently pursuing a master’s degree, specializing in computational methods and advanced engineering simulations.',
    icon: '/assets/TU-Berlin.png', // Update with your preferred logo
  },
];
