import type { ReactNode } from "react";
import {
  FaCloudflare,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiOllama,
} from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SkillIconsHtmxLight } from "../components/react/svg/htmx";
import { LogosHono } from "../components/react/svg/hono";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
    {
    company: "Ocado Retail - Hatfield, UK",
    title: "Full Stack Developer",
    description:
      "Devloped and maintained enterpise applications for the world's largest online only supermarket. Primarily using Angular, Nest.js & Postgres",
    imgURL: "/ocado_logo.png",
    date: "May 2026 - Present",
  },
  {
    company: "Chip Financial - London, UK",
    title: "Operations Developer",
    description:
      "Created internal applications to improve operational efficiency and ensure compliance in financial services.",
    imgURL: "/chip_logo.jpg",
    date: "August 2025 - September 2026",
  },
  {
    company: "Henry Schein One - Remote, UK",
    title: "Junior Software Engineer",
    description:
      "Working with a team of developers to develop and maintain a web application for the dental industry. Primarily using Angular, Node, GraphQL.",
    imgURL: "/henry_logo.jpeg",
    date: "June 2024- June 2025",
  },
  {
    company: "Beachshore Design - Watford, UK",
    title: "Web Developer, Front end.",
    description:
      "Working with a variety of clients to develop websites and applications to meet their specific requirements.",
    imgURL: "/beachshore.jpg",
    date: "Oct 2023 - Jan 2024",
  },
  {
    company: "Tevva - Essex, UK",
    title: "Senior Buyer",
    description:
      "The commercial lead for electrified powertrian, ensuring the business has first to market technology leading in performance, cost and sustainability.",
    imgURL: "/tevva.png",
    date: "Jul 2022 - Mar 2023",
  },
  {
    company: "Alstom - Derby, UK",
    title: "Commodity buyer",
    description:
      "The local lead buyer for electrical hardware with targets to improve on contract postiion and new product development.",
    imgURL: "/Alstom_logo.svg",
    date: "Feb 2021 - Jul 2022",
  },
  {
    company: "Jaguar Land Rover - Gaydon, UK",
    title: "Senior Global Strategy Buyer",
    description:
      "Responsible for the development and implementation of the global sourcing strategies across the category.",
    imgURL: "/jaguar.jpg",
    date: "Feb 2019 - Feb 2021",
  },
  {
    company: "Jaguar Land Rover - Gaydon, UK",
    title: "Buyer",
    description:
      "I lead overall operations which comprised contract management supplier performance, improvement activities, and stakeholder management",
    imgURL: "/jaguar.jpg",
    date: "Sept 2017 - Feb 2019",
  },
  {
    company: "Jaguar Land Rover - Gaydon, UK",
    title: "Graduate Trainee",
    description:
      "An introduction into automotive procurement and supply chain management.",
    imgURL: "/jaguar.jpg",
    date: "Sept 2015 - Sept 2017",
  },
] as const;

export const projectsData: {
  index: number;
  title: string;
  description: string;
  features: string[];
  projectLink: string;
  githubLink: string;
  imageUrl: string;
  exampleUsername: string;
  examplePassword: string;
  icons: ReactNode;
}[] = [
  {
    index: 0,
    title: "Soupabase REST API",
    description:
      "Soupabase is a public free to use and fast REST API that returns all data types for use in teaching, testing and prototyping for front end applications.",
    features: [
      "Frontend: Served from the backend with HTML responses making use of HTMX and tailwind",
      "Backend: Hono as the server and Supabase for the database",
      "Hosting: Hosted on a cloudflare worker for fast responses.",
    ],
    projectLink: "http://soupabase.com/",
    githubLink: "https://github.com/ianh8899/soupabase",
    imageUrl: "/soupabase.webp",
    exampleUsername: "",
    examplePassword: "",
    icons: (
      <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
        <SkillIconsHtmxLight color={"#61DBFB"} className="my-2" />
        <LogosHono color={"#FFA500"} className="my-2" />
        <RiSupabaseFill size="40" color={"#37c082"} className="my-2" />
        <FaCloudflare size="40" color={"#F38020"} className="my-2" />
      </div>
    ),
  },
  {
    index: 1,
    title: "Flaude AI App",
    description:
      "A proof of concept Ai application based on Clauda.ai utilising a full stack of technologies to deliver a modern ai saas application.",
    features: [
      "Frontend: The application's client is built in React, TypeScript brings a layer of type safety, ensuring a robust application with fewer runtime errors.",
      "Backend: Hono, running within the Node.js environment, managing server-side operations, routing, and data handling.",
      "Stripe: To take customer payments for the AI service.",
      "Ai Model: Tinyllama model running with the Ollama API for fast and efficient responses.",
    ],
    projectLink: "https://flaude-ai.ianhitchman.co.uk/",
    githubLink: "https://github.com/ianh8899/flaude-ai",
    imageUrl: "/flaudeai.png",
    exampleUsername: "user@example.com",
    examplePassword: "password",
    icons: (
      <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
        <SiTypescript size="40" color={"#3178C6"} className="my-2" />
        <FaReact size="40" color={"#61DBFB"} className="my-2" />
        <LogosHono color={"#FFA500"} className="my-2" />
        <FaStripe size="40" color={"#635BFF"} className="my-2" />
        <SiOllama size="40" color={"#000000"} className="my-2" />
      </div>
    ),
  },
  {
    index: 2,
    title: "Community App",
    description:
      "This project represents a social media platform built using modern tools and technologies. Users can share their thoughts, dive into discussions, and connect with the digital community.",
    features: [
      "Frontend: The application's frontend is crafted with Next.js, optimizing for faster page loads and enhanced SEO. TypeScript brings a layer of type safety, ensuring a robust application with fewer runtime errors.",
      "Backend: Express.js, running within the Node.js environment, managing server-side operations, routing, and data handling.",
      "User Authentication: Is managed with Clerk allowing a simplified yet secure user authentication system",
      "Database: MongoDB is at the core of data management, ensuring efficient storage and retrieval of user content.",
    ],
    projectLink: "https://community-mern.vercel.app/",
    githubLink: "https://github.com/ianh8899/Community-MERN",
    imageUrl: "/community-mern.png",
    exampleUsername: "example",
    examplePassword: "c0mmuun1ty",
    icons: (
      <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
        <SiTypescript size="40" color={"#3178C6"} className="my-2" />
        <SiMongodb size="40" color={"#4DB33D"} className="my-2" />
        <SiExpress size="40" color={"#000000"} className="my-2" />
        <SiNextdotjs size="40" color={"#000000"} className="my-2" />
        <FaNode size="40" color={"#539E43"} className="my-2" />
      </div>
    ),
  },
  {
    index: 3,
    title: "Quotation Manager",
    description:
      "The RFQ MERN Application streamlines the procurement process, enabling interaction between buyers and suppliers in small organizations.",
    features: [
      "3-tier Architecture: Frontend with React.js, Backend with Express.js and Node.js, Database managed by MongoDB.",
      "Next.js Integration for performance and dynamic pages.",
      "Functionalities include secure JWT authentication, RFQ management system, and personalized dashboards.",
    ],
    projectLink: "https://github.com/ianh8899/rfq-app",
    imageUrl: "/rfqApp screenshot.png",
    githubLink: "https://github.com/ianh8899/rfq-app",
    exampleUsername: "",
    examplePassword: "",
    icons: (
      <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
        <SiMongodb size="40" color={"#4DB33D"} className="my-2" />
        <SiExpress size="40" color={"#000000"} className="my-2" />
        <SiNextdotjs size="40" color={"#000000"} className="my-2" />
        <FaNode size="40" color={"#539E43"} className="my-2" />
      </div>
    ),
  },
  {
    index: 4,
    title: "HyperionDev Portfolio",
    description:
      "A comprehensive learning journey through Full Stack Web Development, covering front-end and back-end technologies, security protocols, and API integration.",
    features: [
      "Web Fundamentals: JavaScript, CSS, HTML.",
      "Front-End Mastery: CSS, React, Bootstrap.",
      "Back-End Proficiency: Express and MongoDB.",
      "Security Protocols: User validation and JWT.",
      "API Integration and Frameworks: React, Next.js.",
    ],
    projectLink: "https://www.hyperiondev.com/portfolio/139412/",
    githubLink: "",
    imageUrl: "/Hyperiondev-logo.jpg",
    exampleUsername: "",
    examplePassword: "",
    icons: (
      <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
        <SiJavascript size="40" color={"#f8c41b"} className="my-2" />
        <FaHtml5 size="40" color={"#E34F26"} className="my-2" />
        <FaCss3Alt size="40" color={"#1572B6"} className="my-2" />
        <FaReact size="40" color={"#2E7EEA"} className="my-2" />
      </div>
    ),
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Express",
  "GraphQL",
  "React",
  "Next.js",
] as const;
