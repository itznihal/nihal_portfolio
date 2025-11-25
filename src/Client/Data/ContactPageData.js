import { CgMail } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { AiFillMediumSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const contactPageData = {
  sectionTitleSpan: "CONTACT ME",
  sectionTitleHeading: "CONTACT ME",
  sectionTitleParagraph: "Let's Get In Touch",
  socialProfile: "Social Profiles",
  emailMe: "Email Me",
  emailId: "itznihal143@gmail.com",
  callMe: "Call Me",
  phoneNo: "(+91)8980452333",
  sendMessagebtn: "Send Message",
  contactSocialArray: [
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
      link: "https://www.instagram.com/nihalparmar_22?igsh=ZHl1a2dpbTlhMTVs&utm_source=qr",
      logo: <AiFillInstagram className="githubicn" />,
    },
  ],
};
