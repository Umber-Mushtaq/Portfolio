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
      { name: "JavaScript", logo: Javascript },
      { name: "React.js", logo: Reactjs },
      { name: "Next.js", logo: Reactjs }, // Placeholder or your Next.js asset
      { name: "Tailwind CSS", logo: Tailwindcss },
      { name: "Material UI", logo: Materialui },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", logo: dotnet }, // Swap with your asset if available
      { name: "Express.js", logo: dotnet },
      { name: "C#", logo: Csharp },
      { name: ".Net Web Api", logo: dotnet },
      { name: "RESTful API", logo: rest },
    ],
  },
  {
    category: "Databases & ODMs",
    items: [
      { name: "MongoDB", logo: sql },
      { name: "Mongoose / ODM", logo: sql },
      { name: "MS SQL", logo: sql },
      { name: "MS SQL Server", logo: sqlserver },
      { name: "EF Core", logo: efcore },
    ],
  },
  {
    category: "Cloud, AI & DevOps",
    items: [
      { name: "Docker", logo: Github },
      { name: "Azure / ACR", logo: Github },
      { name: "AWS S3", logo: Github },
      { name: "Google GenAI SDK", logo: Github },
      { name: "Socket.IO", logo: rest },
    ],
  },
  {
    category: "Tools & Concepts",
    items: [
      { name: "VS Code", logo: vs },
      { name: "Visual Studio", logo: Vscode },
      { name: "Postman", logo: Postman },
      { name: "Git & GitHub", logo: Git },
      { name: "OOP", logo: oop },
      { name: "SOLID", logo: solid },
    ],
  },
];
