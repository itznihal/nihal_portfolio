import React, { useMemo } from "react";
import "./sidebar.scss";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineMedium } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";

const socialLinks = [
  {
    id: "github",
    href: "https://github.com/itznihal",
    icon: AiFillGithub,
    label: "Visit GitHub profile",
  },
  {
    id: "leetcode",
    href: "https://leetcode.com/nihalparmar/",
    icon: BiCodeAlt,
    label: "Visit LeetCode profile",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/nihal-parmar-2924411b7/",
    icon: GrLinkedin,
    label: "Visit LinkedIn profile",
  },
  {
    id: "medium",
    href: "https://itznihal.medium.com/",
    icon: AiOutlineMedium,
    label: "Visit Medium profile",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/itz_____nihal/",
    icon: BsInstagram,
    label: "Visit Instagram profile",
  },
];

const Sidebar = React.memo(() => {
  const links = useMemo(() => socialLinks, []);

  return (
    <aside className="icon-bar" aria-label="Social media links">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.id}
            href={link.href}
            className={`${link.id} cmnicncls`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <IconComponent aria-hidden="true" />
          </a>
        );
      })}
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
