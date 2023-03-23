import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ninaglobal,
  apk,
  notemanager,
  eshop,
  threejs,
  sass,
  github,
  linkedin,
  email,
  location,
  jest,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];
export const links = [
  { link: "https://github.com/GeorgeNonis", name: "Github", icon: github },
  {
    link: "https://www.linkedin.com/in/george-nonis-697430234/",
    name: "Linkedin",
    icon: linkedin,
  },
  { link: "mailto:georgenonis@gmail.com", name: "Email", icon: email },
  {
    link: "https://www.google.com/maps/d/viewer?mid=1MPGjcBLA0Zbr7RSbhGAGOcUF4HI&hl=en_US&ll=56.1525971913764%2C10.203772499999983&z=15",
    name: "Location",
    icon: location,
  },
];
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "IT Technician",
    company_name: "APK Garage",
    icon: apk,
    iconBg: "#383E56",
    date: "Dec 2019 - Aug 2020",
    points: [
      `Checking computer hardware (HDD, mouses, keyboards etc.) to ensure functionality.`,
      `Installing and configuring appropriate software and functions according to specifications.`,
      `Organize and schedule upgrades and maintenance without deterring others from completing their work.`,
      `Perform troubleshooting to diagnose and resolve problems (repair or replace parts, debugging etc.)`,
    ],
  },
  {
    title: "React Developer",
    company_name: "Nina Global",
    icon: ninaglobal,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Sep 2021",
    points: [
      "Developed from scratch the Frontend of the application according to Figma mockup's",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Building reusable code for future use.",
      "Stay up-to-date on emerging technologies",
    ],
  },
];
const projects = [
  {
    name: "Note Manager",
    project_link: "https://note-manager.com/",
    description:
      "A web app which helps you manage your notes with many features e.g re-ordering your notes - pin & unpin them as well setting labels and much more.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: notemanager,
    source_code_link: "https://github.com/GeorgeNonis/Note-Manager",
  },
  {
    name: "E-Shop",
    project_link: "https://nonis-eshop.com/",
    description:
      "Simple minimalistic e-shop with a very easy navigation structure.Using https://fakestoreapi.com/. UI/UX was developed by me. No Css librarys were used as I want to push my limit's on plain CSS.Site is not mobile friendly yet!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: eshop,
    source_code_link: "https://github.com/GeorgeNonis/Shopify",
  },
];

export { services, technologies, experiences, projects };
