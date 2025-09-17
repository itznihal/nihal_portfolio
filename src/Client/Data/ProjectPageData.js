import Img1 from "../Images/hero-img.png";

// PROJECT - BESTBID
import bb1 from "../Images/Portfolio-Collection/Projects/Best-Bid/Screenshot (967).png";
import bb2 from "../Images/Portfolio-Collection/Projects/Best-Bid/Screenshot (969).png";
import bb3 from "../Images/Portfolio-Collection/Projects/Best-Bid/demo44.png";
import bb4 from "../Images/Portfolio-Collection/Projects/Best-Bid/demo1.png";
import bb5 from "../Images/Portfolio-Collection/Projects/Best-Bid/payment.png";

// PROJECT - PORTFOLIO
import portfolioimg from "../Images/Portfolio-Collection/Projects/Portfolio/portfolio 2.png";
import portfolioimg2 from "../Images/Portfolio-Collection/Projects/Portfolio/Screenshot (288).png";

// PROJECT - COVID
import map from "../Images/Portfolio-Collection/Projects/Corona Virus Case Detector/1.png";
import covidhomepage from "../Images/Portfolio-Collection/Projects/Covid Project/covid-Homepage.png";
import main2 from "../Images/Portfolio-Collection/Projects/Covid Project/2.png";
import main3 from "../Images/Portfolio-Collection/Projects/Covid Project/3.png";
import main4 from "../Images/Portfolio-Collection/Projects/Covid Project/4.png";
import main5 from "../Images/Portfolio-Collection/Projects/Covid Project/5.png";

// PROJECT FITBIT
import fitbit1 from "../Images/FitBit/1.png";
import fitbit2 from "../Images/FitBit/createexercise.png";
import fitbit3 from "../Images/FitBit/logged exercises.png";
import fitbit4 from "../Images/FitBit/features.png";
import fitbit5 from "../Images/FitBit/recommendedexercises.png";
import fitbit6 from "../Images/FitBit/ourvalues.png";

// PROJECT - E COMMERCE UI
import Ecommerce1 from "../Images/Portfolio-Collection/Projects/Ecommerce UI/1.png";
import Ecommerce2 from "../Images/Portfolio-Collection/Projects/Ecommerce UI/2.png";
import Ecommerce3 from "../Images/Portfolio-Collection/Projects/Ecommerce UI/3.png";

// PROJECT - STARTUP
import ssu1 from "../Images/Portfolio-Collection/Projects/Startup Project Template/1.png";
import ssu2 from "../Images/Portfolio-Collection/Projects/Startup Project Template/3.png";

// PROJECT - EXERCISE TRACKER
import ExerciseTracker from "../Images/Portfolio-Collection/Projects/Exercise Tracker/1.png";
import ExerciseTracker2 from "../Images/Portfolio-Collection/Projects/Exercise Tracker/2.png";
import ExerciseTracker3 from "../Images/Portfolio-Collection/Projects/Exercise Tracker/3.png";
import ExerciseTracker4 from "../Images/Portfolio-Collection/Projects/Exercise Tracker/4.png";

// PROJECT - TODO
import TODO from "../Images/Portfolio-Collection/Projects/TO DO APP/1.png";

export const projectPageData = {
  sectionTitleSpan: "Projects",
  sectionTitleHeading: "Projects",
  sectionTitleParagraph: "Here's a preview of a few of my standout projects",
  projectDescription:
    "Hi there! My passion lies in turning ideas into reality through code, particularly when working with Javascript frameworks. My main focus is on building efficient, modular projects that provide practical solutions. Check out some of my top projects to get a sense of my work, or head over to my Github repository for more interesting projects.",
  projectImage: Img1,
  project: [
    {
      projectName: "Best-Bid",
      projectImages: [bb1, bb2, bb3, bb4, bb5],
      techTags: [
        "React",
        "Redux",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "Stripe",
        "Cloudinary",
      ],
      projectDescription:
        "BestBid is an online auction platform that is fully functional and offers a range of features for its users. Once registered or logged in as either a seller or bidder, sellers can list products for auction including the starting price, end date, and time.During the auction period, sellers can update or delete their products. Bidders can search and filter auctions, and place bids on running auctions within set constraints. Once the auction is over, the winner is announced and provided with payment options. Winner and seller contact information is shared. BestBid also offers features like Featured Auction, Edit Profile,Change Password, and Logout.",
    },
    {
      projectName: "Portfolio",
      projectImages: [portfolioimg, portfolioimg2],
      techTags: ["React JS", "Scss", "Swiper", "Aos"],
      projectDescription:
        "I built a portfolio website using React to showcase my work, skills, and experiences in an organized and visually appealing manner.",
    },
    {
      projectName: "Covid Guide",
      projectImages: [covidhomepage, main2, main3, map, main4, main5],
      techTags: ["Angular", "Bootstrap", "Saas", "Java Script"],
      projectDescription:
        "Covi Guide is a web application that provides daily updates on the COVID-19 pandemic in all countries, including counts of cases, tests, hospitalizations, and deaths. Users can easily search for pandemic information by country, making it easy to stay informed about the situation anywhere. The app features reliable and easy-to-understand information sourced from official sources, with a clean and simple design that presents data in a clear format. Overall, Covi Guide is a valuable resource for anyone looking to stay up-to-date on the ongoing pandemic.",
    },
    {
      projectName: "FitBit - Workout Assistant",
      projectImages: [fitbit1, fitbit2, fitbit3, fitbit4, fitbit5, fitbit6],
      techTags: [
        "React",
        "Bootstrap",
        "Saas",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "Aos",
        "Java Script",
      ],
      projectDescription:
        "FitBit is a web application that enables users to register and create schedules for specific dates and times. Users can view their workout schedules, update them, and delete them. FitBit also provides schedule recommendations to users based on their physique.",
    },
    {
      projectName: "E-Commerce UI",
      projectImages: [Ecommerce1, Ecommerce2, Ecommerce3],
      techTags: ["React", "Scss", "Figma", "Aos", "Swiper"],
      projectDescription:
        "The design and basic functionalities of an E-Commerce webapp are created using React with the aim of developing interfaces that users find easy to use and enjoyable",
    },
    {
      projectName: "Blog Website - Venue Perl",
      projectImages: [ssu1, ssu2],
      techTags: ["Html", "Css", "Java Script", "Bootstap", "Aos"],
      projectDescription:
        "Venue Perl - During my internship at Girl-Script, I was tasked with creating a blog website for sharing creative ideas with a wider audience.",
    },
    {
      projectName: "Exercise Tracker",
      projectImages: [
        ExerciseTracker,
        ExerciseTracker2,
        ExerciseTracker3,
        ExerciseTracker4,
      ],
      techTags: [
        "React",
        "Bootstrap",
        "Scss",
        "Node JS",
        "Express JS",
        "Mongo DB",
        "Mongoose",
        "Java Script",
      ],
      projectDescription:
        "This is a web application designed to help users monitor and track their exercise routines. The app provides a platform where users can input and record their exercise activities, including the type of exercise, duration, and intensity. The app also allows users to set specific exercise goals, track their progress over time, and receive notifications to remind them of their workout schedule. Additionally, the app can generate reports and summaries of user activity, enabling them to analyze their performance and adjust their routines as needed.",
    },
    {
      projectName: "To Do App",
      projectImages: [TODO],
      techTags: ["React", "React Hooks", "Bootstrap", "Aos"],
      projectDescription:
        "This is a web application designed to help users manage their tasks more efficiently. It allows users to create to-do lists, organize them, and prioritize tasks based on their importance. Users can add new tasks, mark completed tasks, and edit or delete existing tasks as needed. The application also provides features to sort tasks by priority or due date, set reminders, and categorize tasks under different labels or tags. Overall, the aim of the application is to simplify the process of task management and help users stay organized and productive.",
    },
  ],
};
