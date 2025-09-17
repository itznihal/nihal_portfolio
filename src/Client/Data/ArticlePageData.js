import usereducer from "../Images/Articles/useReducer.jpeg";
import github from "../Images/Articles/github.jpeg";
import mearn from "../Images/Articles/mearn.png";
import article from "../Images/Articles/articles.png";

export const articlePageData = {
  sectionTitleSpan: "Articles",
  sectionTitleHeading: "Articles",
  sectionTitleParagraph: "My recently published Articles",
  articleDescription:
    "I enjoy exploring new technologies and building innovative projects. Additionally, I love to share my learning and research by creating easy-to-understand blog posts that can help others learn. Writing blog posts also improves my understanding and proficiency in the field of tech.",
  articleSection: {
    sectionTitleHeading: " Have a look at all my articles? ",
    sectionLink: "https://itznihal.medium.com/",
    Read: "Read",
    sectionImg: article,
  },
  articles: [
    {
      articleName: "An Easy Way to Understanding React useReducer Hook",
      articleImg: [usereducer],
      articleDescription:
        "Here's an article about React Hooks, specifically focusing on the useReducer Hook. It's a concise and informative explanation of this important topic.",
      articleTags: ["React", "Redux", "UserReducer", "MERN"],
      articleLink:
        "https://itznihal.medium.com/an-easy-way-to-understanding-react-usereducer-hook-5f34f990c247",
    },
    {
      articleName: "Beautify Your GitHub Profile like a Pro",
      articleImg: [github],
      articleDescription:
        "This article will assist you in creating an impressive-looking GitHub profile if you have ever used GitHub and thought, Wow, I want  my profile to look like that.",
      articleTags: ["Github", "Profile Readme"],
      articleLink:
        "https://itznihal.medium.com/beautify-your-github-profile-like-a-pro-93f2a3dacaf5",
    },
    {
      articleName: "MEAN vs MERN Stack Development",
      articleImg: [mearn],
      articleDescription:
        "Read on for a clear understanding of MEAN and MERN stacks, as this article briefly discusses how the popularity of Angular versus React affects the popularity of the respective stacks. While Angular has been a popular framework for a while now, React is gaining ground in recent years.",
      articleTags: ["MEAN", "MERN", "Web Development"],
      articleLink:
        "https://itznihal.medium.com/mean-vs-mern-stack-development-be7ed079ce3a",
    },
  ],
};
