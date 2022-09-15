import LanguageIcon from "@mui/icons-material/Language";
import VideocamIcon from "@mui/icons-material/Videocam";
import GitHubIcon from "@mui/icons-material/GitHub";
export const worksCard = [
  {
    id: 1,
    projectName: "Social Media Clone",
    img: "./assets/images/social.png",
    techs: [
      "MERN",
      "React Js",
      "Node Js",
      "JavaScript",
      "ExpressJs",
      "material-ui",
      "mongodb",
    ],
    links: [
      {
        id: 1,
        Icon: <VideocamIcon sx={{ color: "gray" }} />,
        links: "https://linkedin-clone-67556.web.app/",
      },

      {
        id: 3,
        Icon: <GitHubIcon sx={{ color: "gray" }} />,
        links: "https://github.com/Mahendrasinghmanikandan/linkedIn-Clone",
      },
    ],
  },
  {
    id: 1,
    projectName: "Code Editor Clone",
    img: "./assets/images/code.png",
    techs: [
      "React Js",
      "Node Js",
      "JavaScript",
      "tailwindCSS",
      "material-ui",
      "Firebase",
    ],
    links: [
      {
        id: 1,
        Icon: <LanguageIcon sx={{ color: "gray" }} />,
        links: "https://devmsm-editor.web.app/",
      },
      {
        id: 3,
        Icon: <GitHubIcon sx={{ color: "gray" }} />,
        links: "https://github.com/Mahendrasinghmanikandan/code-editor",
      },
    ],
  },
  {
    id: 1,
    projectName: "LinkedIn Feed Clone",
    img: "./assets/images/linkedin.png",
    techs: [
      "React Js",
      "Node Js",
      "JavaScript",
      "tailwindCSS",
      "material-ui",
      "Firebase",
    ],
    links: [
      {
        id: 1,
        Icon: <LanguageIcon sx={{ color: "gray" }} />,
        links: "https://linkedin-clone-67556.web.app/",
      },

      {
        id: 3,
        Icon: <GitHubIcon sx={{ color: "gray" }} />,
        links: "https://github.com/Mahendrasinghmanikandan/linkedIn-Clone",
      },
    ],
  },
];
