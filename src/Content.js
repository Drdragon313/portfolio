// import images
import Hero_person from "./assets/images/Hero/new crop person.png";

import html from "./assets/images/Skills/HTML5.png";
import redux from "./assets/images/Skills/redux.png";
import js from "./assets/images/Skills/jslogo.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import next from "./assets/images/Skills/next.png";
import bi from "./assets/images/Skills/bi.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/webapp.png";
import services_logo3 from "./assets/images/Services/medtech.png";

import project1 from "./assets/images/Projects/caresync.png";
import project2 from "./assets/images/Projects/bookly.png";
import project3 from "./assets/images/Projects/pharmytics.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
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
		title: "Web Developer",
		firstName: "Muhammad",
		LastName: "Ahmed",
		btnText: "Hire Me",
		image: Hero_person,
		hero_content: [
			{
				count: "2+",
				text: "Years of Experience in Web development"
			},
			{
				count: "20+",
				text: "Projects Worked in my career"
			}
		]
	},
	skills: {
		title: "Skills",
		subtitle: "MY TOP SKILLS",
		skills_content: [
			{
				name: "React js",
				// para: "To build dynamic and responsive user interfaces",
				logo: reactjs
			},
			{
				name: "HTML",
				// para: "To structure and style web applications.",
				logo: html
			},
			{
				name: "Node js",
				// para: "Lorem ipsum text  dummy",
				logo: nodejs
			},
			{
				name: "Javascript",
				// para: "To build scalable applications with robust logic and strong type safety.",
				logo: js
			},

			{
				name: "Redux",
				// para: "To manage state efficiently, enabling seamless data handling and storage.",
				logo: redux
			},
			{
				name: "Tailwind CSS",
				// para: "To speed up UI development and maintain a clean, modern aesthetic.",
				logo: tailwind
			},
			{
				name: "Next js",
				// para: "Lorem ipsum text  dummy",
				logo: next
			},
			{
				name: "Power BI",
				// para: "Lorem ipsum text  dummy",
				logo: bi
			}
		],
		icon: MdArrowForward
	},
	services: {
		title: "Services",
		subtitle: "WHAT I OFFER",
		service_content: [
			{
				title: "Website Development",
				para: "Creating visually appealing and responsive websites tailored to businesses and individuals. Focuses on user experience, performance, and SEO optimization to ensure an engaging online presence.",
				logo: services_logo1
			},
			{
				title: "Web Application Development",
				para: "Building interactive and scalable web applications with advanced functionalities. Ensures seamless user interactions, robust backend services, and efficient data management for various industries.",
				logo: services_logo2
			},
			{
				title: "Medtech Web Application",
				para: "Developing healthcare-focused web applications that streamline medical workflows, enhance patient care, and ensure compliance with industry standards. Integrates features like medical data visualization, secure report storage, and interoperability with healthcare systems.",
				logo: services_logo3
			}
		]
	},
	Projects: {
		title: "Projects",
		subtitle: "MY CREATION",
		project_content: [
			{
				title: "CareSync",
				image: project1,
				link: "https://dev-caresync.31g.co.uk/"
			},
			{
				title: "Bookly",
				image: project2,
				link: "https://dev-bookly.31g.co.uk/"
			},
			{
				title: "Pharmlytics",
				image: project3,
				link: "https://pharmlytics.co.uk/"
			}
		]
	},
	Testimonials: {
		title: "Testimonials",
		subtitle: "MY CLIENT REVIEWS",
		testimonials_content: [
			{
				review:
					"“Working with Muhammad Ahmed was a game-changer for our business. They built our web app using Next.js, making it super fast and SEO-friendly. The user experience is smooth, and our customers love it!”",
				img: avatar1,
				name: "Logan James"
			},
			{
				review:
					"“Our online store was struggling with performance issues, but Muhammad AHmed optimized everything with React and Next.js. Now, our site loads instantly, and conversions have increased by 40%! Truly a top-tier developer”",
				img: avatar2,
				name: "Salman Mehdi"
			},
			{
				review:
					"“Our medtech platform required a complex web app, and Muhammad Ahmed nailed it. They built a fast, secure, and user-friendly solution with Next.js. Their problem-solving skills and professionalism were impressive!”",
				img: avatar3,
				name: "Pyramid Pharmacy"
			},
			{
				review:
					"“We needed a scalable dashboard for our SaaS product, and Muhammad Ahmed delivered beyond expectations. The React-based UI is sleek, responsive, and easy to use. Highly recommend their expertise!”",
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
		para: "With expertise in React.js, Redux, and Power BI, I specialize in building scalable web applications and MedTech solutions. My experience includes developing healthcare platforms, BI tools, and FinTech applications, ensuring seamless user experiences and efficient data visualization. Having worked with 31Green Ltd. and Shifa International Hospital, I excel at creating user-centric, high-performance applications that integrate with complex systems like the UK’s NHS. As a team leader and problem-solver, I bring technical proficiency, adaptability, and a results-driven approach, making me the ideal choice for businesses seeking innovative, high-quality web solutions.",
		btnText: "Hire Me"
	},
	Contact: {
		title: "Contact Me",
		subtitle: "GET IN TOUCH",
		social_media: [
			{
				text: "muhammadahmad742@gmail.com",
				icon: GrMail,
				link: "mailto:codeaprogram@gmail.com"
			},
			{
				text: "+92 3115548 133",
				icon: MdCall,
				link: "https://wa.me/1234567890"
			},
			{
				text: "Muhammad Ahmed",
				icon: BsLinkedin,
				link: "https://www.linkedin.com/in/muhammad-ahmad-492517170/"
			}
		]
	},
	Footer: {
		text: "All © Copy Right Reserved 2022"
	}
};
