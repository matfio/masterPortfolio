/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {};

//SEO Related settings
const seo = {
  title: "Mattia Fiorio's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mattia Fiorio's Portfolio",
    type: "website",
    url: "matfio.github.io",
  },
};

//Home Page
const greeting = {
  title: "Mattia Fiorio",
  logo_name: "Mattia Fiorio",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  portfolio_repository: "https://github.com/matfio/masterPortfolio",
  githubProfile: "https://github.com/matfio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/matfio",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mttfiorio//",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mtt.fiorio.jobs@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Game Developer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "IT-Universitetet i København",
      subtitle: "MSc Video Games Technology",
      logo_path: "itu.png",
      alt_name: "",
      duration: "2012 - 2014",
      descriptions: [
        "Coursework of data mining, design, game engines, game development.",
        "Successfully developed various games in different roles: designer, programmer and project manager.",
        "Participated as a programmer in The National Academy of Digital and Interactive Entertainment (DADIU). Developed and released a full game on Google Play Store.",
      ],
      website_link: "https://en.itu.dk/",
    },
    {
      title: "Politecnico di Milano",
      subtitle: " BSc in IT Engineering",
      logo_path: "PolitecnicoDiMilano.png",
      alt_name: "",
      duration: "2008 - 2011",
      descriptions: [
        "Coursework of software engineering, databases and web, computer architectures, robotics, communication science and knowledgeengineering.",
      ],
      website_link: "https://www.polimi.it/en",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page

const experience = {
  title: "Experience",
  subtitle: "Here is my journey",
  description:
    "I have worked with many technologies in both gaming and e-learning. My tasks have span through a wide variety of disciplines all the way from programming videogames features to ETL pipelines. I love optimize development for my fellow programmers, this is why I also took some of scrum master and PO responsibilities.",
  header_image_path: "experience.svg",
  experience: [
    {
      title: "Web developer",
      subtitle: "Clio",
      logo_path: "clio-logo_black_512.png",
      alt_name: "",
      duration: "2020 - Present",
      descriptions: [
        "Promoting agile methodology by acting as facilitator during agile rituals and by introducing story points estimations.",
        "Bolstering communication and ownership by delegating implementation details to coworkers.",
        "Pruning and prioritizing the product backlog involving stakeholders and the rest of the development teams to optimize deliveries.",
        "Creating and updating the newest version of Clio's SaaS e-learning platform through the usage of React components.",
        "Implementing tests of said components through jest and E2E tests using Selenium.",
        "Extending and refactoring GitHub actions to leverage reusable workflows.",
      ],
      video_url: "https://vimeo.com/656633848/b5f7ae097a",
    },
    {
      title: "Software Engineer",
      subtitle: "MovieStarPlanet",
      logo_path: "msp.png",
      alt_name: "",
      duration: "2013 - 2020",
      descriptions: [
        "Developed in-game features for a massively multiplayer game with more than 100 million users split between web browsers, android and iOS devices. Followed design documents while introducing several UI and usability improvements to the user experience. Coded back-end robust and optimized C# .NET functionalities to retrieve and save data to support said features with particular attention to possible security breaches.",
        "Streamlined the creation of games by developing a company-wide framework based on Unity3D that provided plug and play elements to game teams.",
        "Worked within an agile scrum team implementing multiple features such as, player-to-player communication through a NodeJS server, in-game shops with dynamic scrollable lists etc.",
        "Boosted productivity by drastically reducing time spent on marketing and support tasks by introducing tools for batch management of data and unification of publishing functionalities across all different game domains. The tools were made using ASP.NET with iterative development customer-oriented approach.",
        "Conducted research about analytics best practices/technologies and developed the analytics pipeline of the company. The pipeline handled 50+ million events per day which were archived into the Snowflake warehouse and processed through PySpark procedures. Presented and taught architecture to other engineers.",
        "Applied agile methodologies proactively focusing on improving and solving problems related to the development process. Held the rule of scrum master while also acting as facilitator in several meetings.",
      ],
      website_link: "https://corporate.moviestarplanet.com/",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I work on these in my free time in order to update my skills and learn how to solve problems in a more efficient manner.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
