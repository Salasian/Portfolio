import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaDatabase, FaNodeJs } from "react-icons/fa";
import jobster from "/jobster.svg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-blue-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <FaDatabase className="h-16 w-16 text-blue-500" />,
    text: "High proficiency in MongoDB, making optimized and useful queries, schemas,CRUD operations on collections, aggregations operations.",
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: <FaNodeJs className="h-16 w-16 text-blue-500" />,
    text: "Optimized performance on the connection and data processing of front-end and backend technologies using, REST API, client-server model, module creation, middleware implementation and event creation.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: jobster,
    url: "https://salasian.github.io/Jobster",
    github: "https://github.com/Salasian/Jobster",
    title: "Jobster",
    text: "Jobster is a Web Page that candidates can use to follow-up and get detailed feedback about all the previous and current Job Offers they register.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://comfy-store-salasian.netlify.app/",
    github: "https://github.com/Salasian/Comfy-Store",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
