import brey from "../assets/company/brey.png";
import acural from "../assets/company/acural.jpg";
import cmpdi from "../assets/company/cmpdi.png";
import sail from "../assets/company/sail.png";
import Training_manager from "../assets/Training_manager.png";
import pos from "../assets/pos.png";
import kotlin from "../assets/kotlin.png";
import next from "../assets/next.png";
import inventory from "../assets/inventory.png";
import Expense from "../assets/Expense.jpeg"; 
import todo from "../assets/todo.jpeg";
import news from "../assets/news.png";
import nptel from "../assets/nptel.jpg";
import coursera from "../assets/coursera.png";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  git,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  
  
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: creator,
  },
  
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "kotlin", icon: kotlin },
  {name : "Next.js", icon: next},
  {name : "GitHub" , icon : git},
  {name : "Figma" , icon : figma }
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Brey Digital LLP",
    icon: brey,
    iconBg: "#E6DEDD",
    date: "Feb 2025",
    points: [
      "Developed responsive web applications using HTML, CSS (Tailwind), and JavaScript, ensuring cross-browser compatibility and mobile-friendly designs.",
      "Built dynamic and interactive UIs with React and Next.js, implementing features like API integration, pagination, search, filtering, and sorting.",
      "Deployed and maintained projects on GitHub, Vercel, and Netlify, using Git/GitHub for version control and collaboration.",
    ],
  },
  {
    title: "Android Development Intern",
    company_name: "Copious Infotech",
    icon: acural,
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      "Developed and optimized Android applications using Java/Kotlin, focusing on performance, UI responsiveness, and seamless user experience.",
      "Integrated RESTful APIs and Firebase for real-time data synchronization, authentication, and cloud storage.",
      "Implemented MVVM architecture and Jetpack components to improve app maintainability and efficiency.",
    ],
  },
  {
    title: "Web Development Trainee",
    company_name: "CMPDI Ranchi",
    icon: cmpdi,
    iconBg: "#E6DEDD",
    date: "June 2024",
    points: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript for internal tools.",
      "Collaborated with technical teams to digitize and modernize legacy forms and data systems.",
      "Built interactive UI components and dashboards to enhance data visualization and usability for end users.",
    ],
  },
  {
    title: "Trainee (Machine Learning)",
    company_name: "RDCIS, SAIL, Ranchi",
    icon: sail,
    iconBg: "#383E56",
    date: "July 2023",
    points: [
      "Worked with machine learning and AI models, exploring architectures for NLP and computer vision tasks.",
      "Developed and fine-tuned models using Hugging Face for text-to-image and image-to-text applications.",
      "Gained hands-on experience with deep learning frameworks, optimizing model performance and deployment strategies.",
    ],
  },
];

const projects = [
  {
    name: "Training task Manager",
    description:
      "A web app for managing and tracking trainee tasks with real-time updates and role-based access for managers and trainees.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Training_manager,
    source_code_link: "https://github.com/aastha002/Training-task-manager",
  },
  {
    name: "Pos Food Ecommerce Website ",
    description:
      "A POS-enabled food ordering website for managing menus, orders, and payments efficiently in restaurants or cafes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/aastha002/mern-foodweb-client",
    source_code_link2:"https://github.com/aastha002/mern-foodweb-server"
  },
  {
    name: "Inventory Management System",
    description:
      "A web application for managing inventory, allowing users to add, edit, and delete items with real-time updates and role-based access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: inventory ,
    source_code_link: "https://github.com/aastha002/inventory_frontend",
    source_code_link2:"https://github.com/aastha002/inventory_backend",
  },
  {
    name: "NewsLive",
    description:
      "A news application that provides real-time updates and articles from various sources, allowing users to stay informed on current events.",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/aastha002/NewsLive",
  },
  {
    name: "ToDo List",
    description:
      "A simple and intuitive web application for managing tasks, allowing users to add, edit, and delete tasks with ease.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      
    ],
    image: todo ,
    source_code_link: "https://github.com/aastha002/todoList",
  },
  {
    name: "Expense Tracker",
    description:
      "A web application for tracking expenses, allowing users to add, edit, and delete transactions with real-time updates and visualizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: Expense ,
    source_code_link: "https://github.com/aastha002/expense_tracker_client",
    source_code_link2:"https://github.com/aastha002/expense_tracker_server",
  },
];


export const certifications = [
  {
    name: "Cyber Security and Privacy",
    description: "Completed a course on cyber security fundamentals.",
    tags: [
      { name: "NPTEL", color: "blue-text-gradient" },
      { name: "Cyber Security", color: "green-text-gradient" },
    ],
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs121/Course/NPTEL24CS121S105090103803888870.pdf",
    orgIcon: nptel,
  },
  {
    name: "Intro to Machine Learning",
    description: "Machine learning fundamentals and applications by IIT Madras.",
    tags: [
      { name: "NPTEL", color: "pink-text-gradient" },
      { name: "Machine Learning", color: "blue-text-gradient" },
    ],
    link: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS98S73650002620069286",
    orgIcon: nptel,
  },
  {
    name: "Intro to Backend",
    description: "Learned backend development fundamentals through Meta's program.",
    tags: [
      { name: "Meta", color: "green-text-gradient" },
      { name: "Backend", color: "orange-text-gradient" },
    ],
    link: "https://www.coursera.org/account/accomplishments/certificate/2BG3HBVUTPZX",
    orgIcon: coursera,
  },
  {
    name: "Intro to Databases ",
    description: "Learned database fundamentals through Meta's program.",
    tags: [
      { name: "Meta", color: "green-text-gradient" },
      { name: "DBMS", color: "orange-text-gradient" },
    ],
    link: "https://www.coursera.org/account/accomplishments/certificate/C7R9ZA93SN2J",
    orgIcon: coursera,
  },
  {
    name: "Intro to Frontend ",
    description: "Learned frontend development fundamentals through Meta's program.",
    tags: [
      { name: "Meta", color: "green-text-gradient" },
      { name: "Frontend", color: "orange-text-gradient" },
    ],
    link: "https://www.coursera.org/account/accomplishments/certificate/58ZPYC9NW8KL",
    orgIcon: coursera,
  },
];

export { services, technologies, experiences,  projects };
