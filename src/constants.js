// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import hackquestLogo from './assets/company_logo/hackquest_logo.png';

// Education Section Logo's
// Using existing logos as placeholders for MSIT and Govt School
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import msitLogo from './assets/education_logo/msit_logo.png';

// Project Section Logo's
import koraScreenshot from './assets/work_logo/kora_screenshot.png';
import autonomyScreenshot from './assets/work_logo/autonomy_screenshot.png';
import orbitScreenshot from './assets/work_logo/orbit_screenshot.png';
import loomScreenshot from './assets/work_logo/loom_screenshot.png';
import phoenixScreenshot from './assets/work_logo/phoenix_screenshot.png';
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'REST APIs', logo: nodejsLogo },
      { name: 'JWT Auth', logo: nodejsLogo },
      { name: 'Prisma ORM', logo: postgreLogo },
      { name: 'Bun', logo: nodejsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Solidity', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools & DB',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Appwrite', logo: firebaseLogo },
    ],
  },
];

export const Bio = {
  name: "Dipti Pathak",
  roles: ["Fullstack Developer", "Web3 Enthusiast", "C++ Programmer", "Problem Solver"],
  description: "I am a passionate software developer and B.Tech Information Technology student at MSIT. With a strong foundation in MERN stack, Next.js, and emerging Web3 technologies, I love building scalable applications and solving complex algorithmic challenges. I've solved 400+ problems on LeetCode and GFG, and I'm always eager to learn and contribute to the developer ecosystem.",
  github: "https://github.com/Diptipathak2007",
  linkedin: "https://www.linkedin.com/in/dipti-pathak-569381326/",
  leetcode: "https://leetcode.com/u/Diptipathak_2007/",
  gfg: "https://www.geeksforgeeks.org/user/diptipate94r/",
  twitter: "https://x.com/0xdiptipathak",
  resume: "https://drive.google.com/drive/u/0/folders/1rhwgfaVsEkp4NHSfAFv-a1F8rKti3vtW",
};

  export const experiences = [
    {
      id: 0,
      img: hackquestLogo,
      role: "HackQuest Advocate",
      company: "HackQuest",
      date: "Nov 2025 – Present",
      desc: "Selected as a HackQuest Advocate, contributing to community growth, learning initiatives, and ecosystem engagement within the Web3 and developer education space.",
      skills: [
        "Community Growth",
        "Web3",
        "Developer Education",
        "Ecosystem Engagement",
      ],
      hackquest: "https://www.hackquest.io/user/101634",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: msitLogo,
      school: "Maharaja Surajmal Institute of Technology",
      date: "Aug 2024 - Jun 2028",
      grade: "9.74 CGPA",
      desc: "Currently pursuing Bachelor of Technology in Information Technology. Affiliated to Guru Gobind Singh Indraprastha University, Delhi.",
      degree: "Bachelor of Technology - B.Tech (IT)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Govt. girls Sr. Secondary School(Baprola)",
      date: "Jun 2022 - May 2024",
      grade: "92%",
      desc: "Completed Intermediate education with a strong academic record.",
      degree: "Intermediate",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Kora — AI Therapist Agent",
      description:
        "AI-powered mental health assistant delivering personalized therapy conversations, mood tracking, and wellness activities using Google Gemini AI. Implemented secure authentication, session persistence, and an interactive, responsive UI with Tailwind CSS and Framer Motion.",
      image: koraScreenshot, 
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB", "Google Gemini AI"],
      github: "https://github.com/Diptipathak2007/ai-therapist-agent", 
      webapp: "https://ai-therapist-agent-lilac.vercel.app/",
    },
    {
      id: 1,
      title: "Autonomy Finance",
      description:
        "Decentralized lending and borrowing protocol enabling Story Protocol IP assets as collateral with royalty-driven automatic loan repayment. Integrated DeFi lending, Uniswap-based token conversion, and smart contracts to support multi-asset borrowing and protocol workflows.",
      image: autonomyScreenshot,
      tags: ["React (Vite)", "Node.js", "Solidity"],
      github: "https://github.com/ItachiOnChain/autonomy-finance",
      webapp: "https://autonomy-finance.vercel.app/",
    },
    {
      id: 2,
      title: "Loom",
      description:
        "Full-stack social media platform supporting short-form content creation, user profiles, comments, and content discovery. Built scalable APIs and a responsive interface to enable personalized feeds and seamless user interactions.",
      image: loomScreenshot,
      tags: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Diptipathak2007/loom",
      webapp: "https://loom-2ri3.vercel.app/",
    },
    {
      id: 3,
      title: "Orbit Finance",
      description:
        "Hybrid self-repaying lending protocol combining DeFi collateral with tokenized real-world assets for sustainable borrowing. Developed a React-based multi-chain frontend with Web3 integration to enable automatic debt reduction through yield generation.",
      image: orbitScreenshot,
      tags: ["React (Vite)", "Solidity", "Web3"],
      github: "https://github.com/ItachiOnChain/orbitfinance",
      webapp: "https://orbitfinance-jet.vercel.app/",
    },
    {
      id: 4,
      title: "Phoenix",
      description:
        "Phoenix is a modern AI-powered chat application designed to supercharge your ideas and productivity. Built for seamless user authentication, real-time conversations, and intuitive UI, Phoenix leverages Google Gemini AI and Appwrite for secure backend operations.",
      image: phoenixScreenshot,
      tags: ["Next.js", "Appwrite", "Google Gemini AI", "Tailwind CSS"],
      github: "https://github.com/Diptipathak2007/Phoenix",
      webapp: "https://phoenix-hixg.onrender.com/",
    },
  ];

export const achievements = [
  {
    id: 0,
    title: "CTRL+ALT+VIBE Hackathon",
    description: "Full-Stack Development Winner — 1st Position. Secured 1st position by building a high-impact full-stack solution under strict time constraints.",
    icon: "Award",
  },
  {
    id: 1,
    title: "HackQuest CoLearning Camp",
    description: "Blockchain & Web3 Winner — 1st Position. Achieved 1st position in consecutive HackQuest CoLearning Camps (Monad and Mantle editions).",
    icon: "Globe",
  },
  {
    id: 2,
    title: "StoryWorld Assets Build-a-thon",
    description: "Web3 & DeFi Finalist. Selected among the top 10 finalists for Story Protocol and received a $30 community reward.",
    icon: "Cpu",
  },
  {
    id: 3,
    title: "400+ Problems Solved",
    description: "Successfully solved 400+ algorithmic challenges on LeetCode and GeeksforGeeks, demonstrating strong problem-solving skills in C++ and Data Structures.",
    icon: "Code",
  },
];