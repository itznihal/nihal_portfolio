import resumeImage from "../Images/Resume/resumeSectionImg.png";
import { CgMail } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillMediumSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const resumePageData = {
  sectionTitleSpan: "RESUME",
  sectionTitleHeading: "RESUME",
  sectionTitleParagraph: "Would you like to learn more about me?",
  resumeHeading: "Personal details and application.",
  sectionName: "About Me:",
  resumeHeadingOne:
    "Hi, my name is Nihal Parmar and I am currently a sophomore at Dharmsinh Desai University, pursuing B.Tech in Information Technology. I am passionate about software development and have a diverse skill set that ranges from the MEARN stack to a strong understanding of data structures and algorithms. I take pride in my ability to solve real-life problems using my skills and love to turn ideas into reality.",
  resumeHeadingTwo:
    "I am always eager to explore new things and am on the lookout for new opportunities to grow. Whether it is learning a new programming language or discovering new approaches to problem-solving, I am always excited to take on new challenges. I believe that continuous learning is key to personal and professional growth, and I am committed to staying curious and expanding my knowledge in the field of software development.",
  resumeImages: [resumeImage],
  rolesArray: [
    "SDE Intern",
    "Frontend Developer",
    "Backend Developer",
    "Full stack developer",
  ],
  resumeSocialArray: [
    {
      link: "mailto:itznihal143@gmail.com",
      logo: <CgMail className="githubicn" />,
    },
    {
      link: "https://github.com/itznihal",
      logo: <AiOutlineGithub className="githubicn" />,
    },
    {
      link: "https://www.linkedin.com/in/nihal-parmar-2924411b7/",
      logo: <AiFillLinkedin className="githubicn" />,
    },
    {
      link: "https://itznihal.medium.com/",
      logo: <AiFillMediumSquare className="githubicn" />,
    },
    {
      link: "https://leetcode.com/nihalparmar/",
      logo: <SiLeetcode className="githubicn" />,
    },
    {
      link: "https://www.instagram.com/itz_____nihal/",
      logo: <AiFillInstagram className="githubicn" />,
    },
  ],
  resumeButton: "RESUME",
  resumeLink:
    "https://drive.google.com/file/d/1NI5IKbM4AE8hJC1kiBDjWi5-bZYp2Zr9/view?usp=sharing",
};
