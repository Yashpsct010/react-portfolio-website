import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2021 - Oct 2023",
    role: "Full Stack Developer Intern",
    company: "IPS Academy, Indore",
    link: "https://cms.ipsacademy.net/",
    description: `Contributed as an individual developer in optimizing SQL queries, enhancing website responsiveness, and reducing database costs by 10%. 
    Utilized CodeIgniter, the MVC Framework, and RDBMS to develop and update the university's autonomous system, serving approximately 10,000 students. Developed and optimized the Campus Management System, including a Result Calculation Module that calculated SGPA and CGPA, printed TR and Marksheet, and generated results 50% faster than previous methods.
    Created a Relative Grading System in accordance with the institute's Autonomous Rules and Regulations, reducing 75% of total paperwork.`,
    technologies: ["HTML","CSS","PHP","Javascript", "React.js", "SQL", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Rent Management System",
    image: project1,
    link: "https://github.com/Yashpsct010/rent-management",
    description:
      "Developed a full-featured Rent Management System that streamlines the process of managing rental properties, tenants, and payments. The system allows property owners to track rent payments, generate invoices, manage tenant records, and automate notifications for due payments. Built using PHP, HTML, CSS, JavaScript, and SQL, the platform improves efficiency by reducing manual tracking and paperwork.",
    technologies: ["HTML", "CSS","PHP","Javascript","SQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "https://github.com/Yashpsct010/react-portfolio-website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind","framer-motion"],
  },
  {
    title: "Movix",
    image: project2,
    link: "https://github.com/Yashpsct010/Movix",
    description: "A movie searching app built with vanilla JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Learning Management System",
    image: project4,
    link: "https://github.com/Yashpsct010/learning-management-system",
    description:
      "Developed a comprehensive web-based platform tailored for online learning and course management. The LMS supports various roles, including Admins, Instructors, and Students, and offers features like video lectures, assignments, quizzes, and automated certificate generation. Built using Next.js, Tailwind CSS, Prisma ORM, Node.js, SQL and JWT the system was designed to streamline course delivery and tracking, improving the educational experience. I also managed the entire development process from requirement analysis to deployment, reducing administrative workload and enhancing learning efficiency.",
    technologies: ["Next.js", "Tailwind", "Prisma", "Node.js", "SQL", "JWT"],
  },
];

export const CONTACT = {
  address: "143, Ambika Nagar, Ratlam, Madhya Pradesh",
  phoneNo: "+91 9907319464",
  email: "yashpsct001@gmail.com",
};
