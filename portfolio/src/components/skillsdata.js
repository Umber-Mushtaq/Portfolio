import Reactjs from "../assets/reactjs.png";
import Tailwindcss from "../assets/tailwindcss.png";
import Vscode from "../assets/vscode.png";
import Postman from "../assets/postman.png";
import Materialui from "../assets/materialui.png";
import Javascript from "../assets/javascript.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Csharp from "../assets/csharp.png";
import Git from "../assets/git.png";
import Github from "../assets/github.png";
import gof from "../assets/gof.png";
import vs from "../assets/vs.png";
import sqlserver from "../assets/sqlserver.png";
import sql from "../assets/sql.png";
import solid from "../assets/solid.png";
import oop from "../assets/oop.png";
import dotnet from "../assets/dotnet.png";
import efcore from "../assets/efcore.png";
import rest from "../assets/rest.png";

export const SkillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", logo: Html },
      { name: "CSS3", logo: Css },
      { name: "Material UI", logo: Materialui },
      { name: "Tailwind CSS", logo: Tailwindcss },
      { name: "React.js", logo: Reactjs },
      { name: "JavaScript", logo: Javascript },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", logo: vs },
      { name: "Visual Studio", logo: Vscode },
      { name: "Postman", logo: Postman },
      { name: "Git", logo: Git },
      { name: "MS SQL Server", logo: sqlserver },
      { name: "GitHub", logo: Github },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "OOP", logo: oop },
      { name: "SOLID", logo: solid },
      { name: "GOF Design Patterns", logo: gof },
      { name: "EF Core", logo: efcore },
      { name: "RESTful API", logo: rest },
    ],
  },
  {
    category: "Backend and Database",
    items: [
      { name: "C#", logo: Csharp },
      { name: ".Net Web Api", logo: dotnet },
      { name: "MS SQL", logo: sql },
    ],
  },
];
