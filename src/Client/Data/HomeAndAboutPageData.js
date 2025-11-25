import { FiChevronRight } from "react-icons/fi";
import { BsAward } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

export const homePagedata = {
  name: "Nihal Parmar",
  description: "Modern Engineering. Scalable Systems. Real Impact",
};

export const aboutPageData = {
  sectionTitleSpan: "About Me",
  sectionTitleHeading: "About Me",
  sectionTitleParagraph:
    "I'm someone who loves technology and is always eager to learn and create. Building things is my passion",
  aboutPageName: "Nihal Parmar",
  aboutPageHeading: "Information Technology Student",
  aboutPagePraragraphOne: {
    paragraphData:
      " Hi myself Nihal Parmar, and I am working as a Software Engineer at Crest Data System located in Ahmedabad. My passion lies in exploring and learning new technologies and frameworks that can be utilized to solve real-world problems. Over time, I have gained experience in a variety of technologies such as React, Angular, Express JS, Node JS, Next JS, and React Native app development. I am always eager to take on new challenges, meet new people, and expand my knowledge.",
    paragraphcon: <FiChevronRight className="icncls" />,
  },
  aboutPageParagraphSecond: {
    paragraphData:
      " Aside from technology, I enjoy playing musical instruments, sketching, and painting. I also like to challenge myself and take on new opportunities that come my way.",
    paragraphcon: <FiChevronRight className="icncls" />,
  },

  rewardSection: [
    {
      rating: "8+ ",
      heading: "Projects:",
      icon: <FaLaptopCode className="bi bi-code-slash abtglogo" />,
      description: "Personal and group projects I have worked on.",
    },
    {
      rating: "12+",
      heading: "Awards & Certificates:",
      icon: <BsAward className="bi bi-code-slash abtglogo" />,
      description:
        "Certificate or Award achived in projects, competetion, Quizes and Events",
    },
    {
      rating: "2",
      heading: "Trainee/Internships:",
      icon: <MdWorkOutline className="bi bi-code-slash abtglogo" />,
      description: "Good hands on experince in Web technologies.",
    },
    {
      rating: "1544",
      heading: "@CodeChef",
      icon: <BsCodeSlash className="bi bi-code-slash abtglogo" />,
      description: "Secure Decent Rating",
    },
  ],
};
