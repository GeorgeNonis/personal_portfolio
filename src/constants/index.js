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
  colorpicker,
  pwdgenerator,
  movieseeker,
  nextjs,
  reactstitches,
  raskrask,
  carRental,
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next.js",
    icon: nextjs,
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
    name: "React Stitches",
    icon: reactstitches,
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
    company_name: "APK Garage - Nicosia,Cyprus",
    icon: apk,
    iconBg: "#383E56",
    date: "Dec 2019 - Aug 2020",
    points: [
      `Checking computer hardware (HDD, mice, keyboards, etc.) to ensure functionality.`,
      `Installing and configuring appropriate software and functions according to specifications.`,
      `Organizing and scheduling upgrades and maintenance without impeding others' work.`,
      `Performing troubleshooting to diagnose and resolve problems (repair or replace parts, debugging, etc.).`,
    ],
  },
  {
    title: "React Developer",
    company_name: "Nina Global - Nicosia,Cyprus",
    icon: ninaglobal,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Sep 2021",
    points: [
      "Developed the frontend of an application from scratch based on Figma mockups.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
      "Built reusable code for future use.",
      "Stayed up-to-date on emerging technologies.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Raskrask - Aarhus,Denmark",
    icon: raskrask,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
      "Collaborated on all phases of development, from planning and prototyping to design, implementation, and maintenance, utilizing Typescript, React.js, Next.js, and Ionic.",
      "Implemented and maintained responsive designs ensuring cross-browser compatibility.",
      "Developed stories for the company's NPM package.",
      "Kept abreast of emerging technologies.",
      "Tested applications with Cypress and Jest.",
      "Applied Object Oriented Programming (OOP) principles.",
      "Utilized Atomic Design Principles in projects.",
      "Demonstrated proficiency in web development with Reactjs and Nextjs.",
    ],
  },
];
const projects = [
  {
    name: "Note Manager",
    project_link: "https://note-manager.com/",
    description:
      "Introducing a full-stack TypeScript web app designed for efficient note management. Enjoy a range of features including easy reordering, pinning and unpinning notes, as well as convenient account settings. Experience the seamless usability of our mobile-friendly interface, ensuring smooth note management on the go.",
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
    name: "Car Rental",
    project_link: "https://georgenonis.github.io/car-rental---frontend/",
    description:
      "Dive into the dynamic world of vehicle rental with our front-end project, Car Rental. This sleek web application is expertly crafted using the robust trio of React, TypeScript, and Tailwind CSS, ensuring a fully responsive and intuitive user experience. Car Rental showcases the prowess of modern web development with seamless navigation, interactive carousels, and a host of responsive features designed to provide users with a smooth and engaging interface on any device. Whether on desktop or mobile, Car Rental stands out with its elegant design and smooth transitions, all while harnessing the power of cutting-edge React packages to elevate the user journey.",
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
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carRental,
    source_code_link: "https://github.com/GeorgeNonis/car-rental---frontend",
  },
  {
    name: "E-Shop",
    project_link: "https://nonis-eshop.com/",
    description:
      "I created a sleek and minimalist e-shop with user-friendly navigation. To enhance visual appeal, I used Midjourney's AI tools for captivating images. The UI/UX design is my own creation, showcasing intuitive and engaging interfaces. I pushed the boundaries of plain CSS, avoiding CSS libraries for a unique website. It's fully optimized for mobile devices, ensuring a seamless experience across screen sizes.",
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
    source_code_link: "https://github.com/GeorgeNonis/jewelry-e-commerce",
  },
  {
    name: "Nonis - Movie Seeker",
    project_link: "https://georgenonis.github.io/nonis-movie-seeker/",
    description:
      "This project, Unraveling Noni's World, was undertaken to enhance my frontend development skills using Next.js, a popular React framework. The goal was to gain hands-on experience with Next.js and explore its features and capabilities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
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
        name: "react-stitches",
        color: "pink-text-gradient",
      },
    ],
    image: movieseeker,
    source_code_link: "https://github.com/GeorgeNonis/nonis-movie-seeker",
  },
  {
    name: "Color Picker - Chrome Extension",
    project_link:
      "https://chrome.google.com/webstore/detail/color-picker-nonis/mpcmgnbiaijedofjkmphnalpoonggcbl",
    description:
      "Color Picker - Nonis is a powerful tool designed specifically for developers and UI/UX designers. It provides an intuitive interface to generate colors, copy them, and seamlessly add them to your palette. With Color Picker - Nonis, you can effortlessly create harmonious color schemes and have them readily available for your design projects. Simplify your color workflow and elevate your design process with Color Picker - Nonis.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: colorpicker,
    source_code_link: "https://github.com/GeorgeNonis/color-picker-extension",
  },
  {
    name: "Password Generator - Chrome Extension",
    project_link:
      "https://chrome.google.com/webstore/detail/password-generator-nonis/ciplnefaommlkglhkbabmpkckccimajp",
    description:
      "Generate strong and secure passwords with Password Generator - Nonis. Customize password length and choose from options like uppercase letters, lowercase letters, numbers, and special characters. Includes a password strength indicator and history section for easy reference. Keep your accounts secure with ease!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: pwdgenerator,
    source_code_link: "https://github.com/GeorgeNonis/pwd-generator-extension",
  },
];

export { services, technologies, experiences, projects };
