import Hero_person from "./assets/images/Hero/dev-image.png";
import html from "./assets/images/Skills/HTML5.png";
import redux from "./assets/images/Skills/redux.png";
import js from "./assets/images/Skills/jslogo.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import next from "./assets/images/Skills/next.png";
import bi from "./assets/images/Skills/bi.png";
import mui from "./assets/images/Skills/muilogo.png";
import git from "./assets/images/Skills/git-logo.png";
import typescript from "./assets/images/Skills/typescript-logo.png";
import auth from "./assets/images/Skills/auth-logo.png";
import express from "./assets/images/Skills/express-js.jpg";
import socketio from "./assets/images/Skills/Socket-io.svg";
import nhsLogo from "./assets/images/Skills/National_Health_Service_(England)_logo.svg.webp";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/webapp.png";
import services_logo3 from "./assets/images/Services/medtech.png";

import project1 from "./assets/images/Projects/caresync.png";
import project2 from "./assets/images/Projects/bookly.png";
import project3 from "./assets/images/Projects/pharmytics.png";
import project4 from "./assets/images/Projects/caremetrix.png";
import project5 from "./assets/images/Projects/copilot.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall, MdWorkOutline } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
	nav: [
		{
			link: "#home",
			icon: TbSmartHome
		},
		{
			link: "#skills",
			icon: BiUser
		},
		{
			link: "#experience",
			icon: MdWorkOutline
		},
		{
			link: "#services",
			icon: RiServiceLine
		},
		{
			link: "#projects",
			icon: RiProjectorLine
		},
		{
			link: "#contact",
			icon: MdOutlinePermContactCalendar
		}
	],
	hero: {
		title: "Senior Frontend Developer",
		firstName: "Muhammad",
		LastName: "Ahmed",
		btnText: "LinkedIn Profile",
		image: Hero_person,
		hero_content: [
			{
				count: "3+",
				text: "Years of Experience in Web Development"
			},
			{
				count: "12+",
				text: "Production Applications Built & Delivered"
			}
		]
	},
	skills: {
		title: "Skills",
		subtitle: "MY TOP SKILLS",
		categories: [
			{
				name: "Frontend",
				skills: [
					{ name: "React.js", logo: reactjs },
					{ name: "Next.js", logo: next },
					{ name: "TypeScript", logo: typescript },
					{ name: "JavaScript (ES6+)", logo: js },
					{ name: "Redux Toolkit", logo: redux },
					{ name: "Tailwind CSS", logo: tailwind },
					{ name: "Material UI", logo: mui },
					{ name: "Ant Design", logo: html },
					{ name: "Vue.js", logo: reactjs },
					{ name: "Pinia", logo: redux },
					{ name: "HTML5 / CSS3", logo: html }
				]
			},
			{
				name: "Backend & Tools",
				skills: [
					{ name: "Node.js", logo: nodejs },
					{ name: "Express.js", logo: express },
					{ name: "Socket.io", logo: socketio },
					{ name: "REST APIs", logo: js },
					{ name: "Git Versioning", logo: git }
				]
			},
			{
				name: "Other Expertise",
				skills: [
					{ name: "Power BI", logo: bi },
					{ name: "Auth0 & SSO", logo: auth },
					{ name: "RBAC (Access Control)", logo: auth },
					{ name: "NHS & HIPAA Compliance", logo: nhsLogo },
					{ name: "Recharts Visualization", logo: bi }
				]
			}
		],
		icon: MdArrowForward
	},
	experience: {
		title: "Experience",
		subtitle: "MY PROFESSIONAL TIMELINE",
		work: [
			{
				role: "Senior Frontend Developer",
				company: "31Green Ltd",
				location: "Islamabad, Pakistan",
				duration: "July 2023 - Present",
				points: [
					"Contributed to the development of a company-owned BI analytics product, optimizing data rendering and state transitions.",
					"Worked on enterprise Medical Applications, focusing on accessibility, user satisfaction, and clinical workflows.",
					"Collaborated closely with designers and senior product management to prototype and implement premium user interfaces.",
					"Developed NHS-compliant EHR (Electronic Health Records) and CMS platforms using Next.js, TypeScript, and MUI.",
					"Implemented secure authentication, role-based access control (RBAC), and patient data streams conforming to HIPAA and NHS guidelines."
				]
			},
			{
				role: "Frontend Developer (Internship)",
				company: "Shifa International Hospital",
				location: "Islamabad, Pakistan",
				duration: "July 2022 - Sept 2022",
				points: [
					"Supported core software development teams with API integrations, interface styling, and feature enhancements.",
					"Collaborated with cross-functional hospital teams to align digital initiatives with patient safety and hospital compliance.",
					"Created wireframes and implemented modular dashboard widgets using React.js, Ant Design, and Redux."
				]
			}
		],
		education: [
			{
				degree: "Bachelors of Science in Computer Science",
				institution: "COMSATS University Islamabad (Attock Campus)",
				duration: "2019 - 2023",
				details:
					"Completed with CGPA: 3.01. Strong foundations in data structures, design patterns, and web application architectures."
			}
		]
	},
	services: {
		title: "Services",
		subtitle: "WHAT I OFFER",
		service_content: [
			{
				title: "Website Development",
				para: "Creating visually stunning, fluid, and responsive websites tailored to your branding. Focused on modern layout standards, speed, SEO optimization, and pixel-perfect transitions.",
				logo: services_logo1
			},
			{
				title: "Web Application Development",
				para: "Building robust, interactive, and highly scalable SaaS products. Specializing in advanced state management, secure token flows, real-time syncs, and comprehensive API integrations.",
				logo: services_logo2
			},
			{
				title: "MedTech & Health Platforms",
				para: "Designing secure, HIPAA/NHS compliant health platforms, medical data portals, custom EHR systems, and interactive clinic dashboards with complex data security rules.",
				logo: services_logo3
			}
		]
	},
	Projects: {
		title: "Projects",
		subtitle: "MY DEVELOPED PRODUCTS",
		project_content: [
			{
				title: "NHS EHR & CMS Platform",
				category: "Healthcare",
				image: project4,
				link: "https://crm.dev.aqlios.31g.co.uk/auth/login",
				descriptions:
					"Enterprise-grade health records (EHR) and clinical management platform built with Next.js, TypeScript, Redux Toolkit, and MUI. Features RBAC, secure patient workflows, and practice onboarding meeting strict NHS compliance standards.",
				tags: ["Next.js", "TypeScript", "MUI", "Redux", "NHS/HIPAA"]
			},
			{
				title: "Auth31 Authentication Service",
				category: "Tools / NPM",
				image: project5,
				link: "https://www.npmjs.com/package/@auth31/auth-service",
				descriptions:
					"Reusable custom authentication NPM package facilitating login, recovery, session/token management, and custom branding configs. Built to standardize secure user flows across hospital apps.",
				tags: ["React", "TypeScript", "MUI", "NPM Package"]
			},
			{
				title: "Xanamedtec Diagnostic Portal",
				category: "Healthcare",
				image: project3,
				link: "https://www.xanamedtec.com/",
				descriptions:
					"Designed and built a client-facing web application to store, display, and securely parse diagnostic medical reports for clinicians and patients. Emphasized rapid loading and data privacy.",
				tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST API"]
			},
			{
				title: "Accrepro Compliance System",
				category: "Healthcare",
				image: project1,
				link: "https://accrepro.com/",
				descriptions:
					"Led the frontend team in developing a compliance, accreditation, and risk management system for healthcare networks. Designed audits trackers, action plans, and hospital standards directories.",
				tags: ["React.js", "Redux Toolkit", "Ant Design", "Team Lead"]
			},
			{
				title: "Pharmlytics BI System",
				category: "Healthcare",
				image: project3,
				link: "https://pharmlytics.co.uk/",
				descriptions:
					"A Business Intelligence analytics platform tailored to UK pharmacy chains. Integrated rich Power BI dashboards with React layouts, featuring secure role-based dashboard views.",
				tags: ["React.js", "Power BI", "Redux", "RBAC"]
			},
			{
				title: "CareSync NHS Integration",
				category: "Healthcare",
				image: project1,
				link: "https://dev-caresync.31g.co.uk/",
				descriptions:
					"A patient portal application integrating with the UK's NHS databases to retrieve and show personal health records securely. Features responsive tables and strict accessibility design.",
				tags: ["React.js", "Redux", "Tailwind CSS", "NHS Integration"]
			},
			{
				title: "CareCognitics BI Analytics",
				category: "Healthcare",
				image: project4,
				link: "",
				descriptions:
					"A dedicated analytics BI platform built for healthcare stakeholders. Transformed raw patient records into visual, exportable charts and dashboards via React.js and Power BI embed services.",
				tags: ["React.js", "Power BI", "Data Visuals"]
			},
			{
				title: "Caremetrix EMIS Platform",
				category: "Healthcare",
				image: project4,
				link: "https://app.dev.caremetrix.31g.co.uk/",
				descriptions:
					"Clinical data dashboard supporting practice registration and medical reports. Integrated Robotic Process Automation (RPA) workflows to sync patient notes with EMIS systems.",
				tags: ["Next.js", "TypeScript", "RPA", "EMIS Integration"]
			},
			{
				title: "Bookly FinTech Application",
				category: "SaaS / FinTech",
				image: project2,
				link: "https://dev-bookly.31g.co.uk/",
				descriptions:
					"Automated finance records tracker that reads scanned PDFs, parses transaction entries, and visualizes statements in highly responsive grid tables with verification statuses.",
				tags: ["React.js", "Redux", "Document Parsing", "Tailwind CSS"]
			},
			{
				title: "Summatim AI Search",
				category: "SaaS / FinTech",
				image: project5,
				link: "",
				descriptions:
					"An organizational internal intelligence search engine. Integrates OpenAI API to query documents, extract summaries, and display contextual answers based on enterprise files.",
				tags: ["React.js", "Node.js", "OpenAI API", "Vector Search"]
			},
			{
				title: "B2B SaaS Nail Salon Portal",
				category: "SaaS / FinTech",
				image: project2,
				link: "",
				descriptions:
					"An appointment booking and billing platform with role-based dashboard control, payment gateways (Stripe), inventory management, and multi-language localization features.",
				tags: ["React.js", "Redux", "Stripe API", "Multi-Language"]
			},
			{
				title: "MonAi Dental Platform",
				category: "SaaS / FinTech",
				image: project2,
				link: "",
				descriptions:
					"Dental practice management application. Supports custom scheduling modules, Stripe subscription structures, role management, and graphical user growth metrics using Recharts.",
				tags: ["React.js", "Redux", "Stripe API", "Recharts"]
			}
		]
	},
	Testimonials: {
		title: "Testimonials",
		subtitle: "MY CLIENT REVIEWS",
		testimonials_content: [
			{
				review:
					"“Working with Muhammad Ahmed was a game-changer for our business. He optimized our healthcare web apps, making them extremely fast, secure, and user-friendly. His technical expertise in Next.js and Redux is outstanding!”",
				img: avatar1,
				name: "Logan James"
			},
			{
				review:
					"“Our analytics dashboards were struggling with performance, but Muhammad Ahmed optimized our React and Power BI integrations. Now, pages load instantly, and stakeholder engagement is up by 40%!”",
				img: avatar2,
				name: "Salman Mehdi"
			},
			{
				review:
					"“Our MedTech compliance platform required complex integrations, and Muhammad Ahmed delivered beyond expectations. He built a fast, highly secure, and accessible platform. Highly recommend!”",
				img: avatar3,
				name: "Pyramid Pharmacy"
			},
			{
				review:
					"“We needed a clean, scalable RBAC module for our B2B SaaS product, and Muhammad's reusable auth packages solved it immediately. A top-tier, reliable frontend engineer.”",
				img: avatar4,
				name: "Strategic Innovative Engineering"
			}
		]
	},
	Hireme: {
		title: "Hire Me",
		subtitle: "FOR YOUR PROJECTS",
		image1: Hireme_person,
		image2: Hireme_person2,
		para: "With robust expertise in React.js, Next.js, Redux Toolkit, and Power BI, I specialize in building enterprise SaaS platforms, healthcare systems, and custom BI solutions. My experience includes delivering high-performance applications that conform to strict standards like HIPAA and UK NHS requirements. Having worked with 31Green Ltd. and Shifa International Hospital, I excel at creating clean code architectures, secure RBAC structures, and fluid user experiences. I bring technical leadership, a problem-solving mindset, and a dedication to pixel-perfect design to every project.",
		btnText: "Get in Touch"
	},
	Contact: {
		title: "Contact Me",
		subtitle: "GET IN TOUCH",
		social_media: [
			{
				text: "muhammadahmad742@gmail.com",
				icon: GrMail,
				link: "mailto:muhammadahmad742@gmail.com"
			},
			{
				text: "+92 311 5548133",
				icon: MdCall,
				link: "https://wa.me/923115548133"
			},
			{
				text: "LinkedIn",
				icon: BsLinkedin,
				link: "https://www.linkedin.com/in/muhammad-ahmad-492517170/"
			},
			{
				text: "GitHub",
				icon: BsGithub,
				link: "https://github.com/Drdragon313"
			}
		]
	},
	Footer: {
		text: "All © Copy Right Reserved 2026"
	}
};
