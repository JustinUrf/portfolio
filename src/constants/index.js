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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cledge, 
  cledge_landing,
  dw_landing,
  threejs,
  eyecuelab,
  cascadia,
  satellite,
  oregon_landing,
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
    title: "Broadcaster",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Cledge",
    icon: cledge,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Updated and produced front end UI/UX components that help win Dempsey 2023 Startup Competiton.",
      "Implemented blog post tool that allows for front-end display of various web articles and back-end functionality for creating new posts.",
      "Refactored parts of the code base to newer technologies such as React, Next.js, Typescript and Azure Cosmos DB",
      "Designed and developed RESTful APIs to provide efficient communication between client applications and server systems..",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "EyeCue Lab",
    icon: eyecuelab,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug 2023",
    points: [
      "Worked with Open AI and Trello to convert commits to release notes automatically. This was done to save time for project managers in updating clients with progress.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Designed and devloped RESTful APIs to provide efficient communication with Next.js front-end and application servers.",
      "Created a hook that updates the database automatically after a certain threshhold is reached to reduce manual labor.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Cascadia Web Designs",
    icon: cascadia,
    iconBg: "#383E56",
    date: "Feb 2023 - June 2023",
    points: [
      "Developed mobile-focused websites for clients using HTML, CSS, and JavaScript.",
      "Utilized Eleventy.js and Netilfy to create efficient and high-performing websites without a high upkeep.",
      "Collaborated closely with clients to ensure their vision was realized and their needs for the tools were met.",
      "Created a CSM system that allowed client to update inventory manually, receive inquiries about products and track user flow.",
    ],
  },
  {
    title: "Event Orginizor/Broadcast Producer",
    company_name: "Free Lance",
    icon: satellite,
    iconBg: "#E6DEDD",
    date: "Apr 2020 - Jan 2023",
    points: [
      "Ran events under strict timelines to ensure that events are consistant across multiple iterations.",
      "Troubleshooted equipment issues in real time situation which poses risk to a live broadcast of upwards of 20,000-25,000 people.",
      "Casted in real time coordinating with other people to narrate and communicate what happened during these events."
    ],
  },
];

const testimonials = [

];

const projects = [
  {
    name: "Cledge",
    description:
      "Web-based platform that allows students to track their education, seek counseling and insights while understanding how to reach their dream school. ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "azurecosmodb",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: cledge_landing,
    source_code_link: "https://cledge.org/",
  },
  {
    name: "Ecommerce CMS Website",
    description:
      "Web application that enables users to search and find inventory. Additionally has a CMS system that allows owners to update inventory.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: dw_landing,
    source_code_link: "https://www.devilswerk.com/",
  },
  {
    name: "Oregon Event Calender",
    description:
      "A comprehensive place to check out current gaming events for Oregon. Connects with the start.gg API to collect event data for fighting game tournements.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "wip",
        color: "pink-text-gradient",
      },
    ],
    image: oregon_landing,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
