import project_thumb_1 from "../assets/images/project_thumb_1.png";
import project_thumb_2 from "../assets/images/project_thumb_2.png";
import project_thumb_3 from "../assets/images/project_thumb_3.png";
import project_thumb_4 from "../assets/images/porfolio_thumb.png";
import myshop_admin_thumb from "../assets/images/myshop11.png";
import myshop_client_thumb from "../assets/images/myshop21.png";
import mymovie_admin_thumb from "../assets/images/mymovie_admin.png";
import mymovie_client_thumb from "../assets/images/mymovie_client.png";
import { projectTypes } from "../types/project";

export const project: projectTypes[] = [
  {
    isClickable: true,
    overview: {
      name: "Ecommerce website",
      thumb: project_thumb_1,
      role: "Personal project",
      short_description: "Ecomerce website using MERN stack",
      tech: [
        "React/Redux/Redux-toolkit/React Router",
        "NodeJs/MongoDB, Socket.io",
        "Sass",
      ],
    },
    responsibility: [
      "Designing database",
      "Building UI/UX of admin page, client page",
      "Coding logic of website",
    ],
    description: {
      admin: {
        thumb: myshop_admin_thumb,
        content: [
          "Authentication",
          "Authorization with 5 different role: admin, mod, shipper, warehouse, user",
          "Customer management",
          "Order management",
          "Category management",
          "Product management",
          "Coupon management",
          "Import/export management",
          "Dark/light mode",
          "Responsive for all device",
        ],
      },
      client: {
        thumb: myshop_client_thumb,
        content: [
          "View product",
          "Search/Filter product",
          "Shopping cart",
          "Order product",
          "Review product",
          "Responsive for all device",
        ],
      },
    },
    demo: [
      {
        title: "Admin page",
        url: "https://www.youtube.com/embed/_h1AHE2p1jo",
      },
      {
        title: "Client page",
        url: "https://www.youtube.com/embed/TLt4iMvGoTQ",
      },
    ],
    link: [
      {
        title: "Admin page demo",
        url: "https://admin.vhreactshop.online",
      },
      {
        title: "Client page demo",
        url: "https://vhreactshop.online",
      },
      {
        title: "Sever repository",
        url: "https://gitlab.com/shadyside1995/myshop_server",
      },
      {
        title: "Admin repository",
        url: "https://gitlab.com/shadyside1995/myshop_admin",
      },
      {
        title: "Client repository",
        url: "https://gitlab.com/shadyside1995/myshop_client",
      },
    ],
    account: [
      {
        username: "admintest",
        password: "123456aA@",
        role: "Admin",
      },
      {
        username: "shipperusertest",
        password: "123456aA@",
        role: "Shipper",
      },
      {
        username: "warehouseusertest",
        password: "123456aA@",
        role: "Warehouse",
      },
      {
        username: "usertest",
        password: "123456aA@",
        role: "User",
      },
    ],
  },
  {
    isClickable: true,
    overview: {
      name: "Movie website",
      thumb: project_thumb_2,
      role: "Personal project",
      short_description: "Movie website using MERN stack",
      tech: [
        "React/Redux/Redux-toolkit/React Router, Typescript",
        "NodeJs/MongoDB",
        "Tailwind",
      ],
    },
    responsibility: [
      "Designing database",
      "Building UI/UX of admin page, client page",
      "Coding logic of website",
    ],
    description: {
      admin: {
        thumb: mymovie_admin_thumb,
        content: [
          "Authentication",
          "View, add, edit movie, pagination",
          "View add, delete episode",
          "User management",
          "Comments management",
        ],
      },
      client: {
        thumb: mymovie_client_thumb,
        content: [
          "View all movie, movie by category",
          "Search/Filter movie",
          "Watch movie",
          "Vier/Add comment",
        ],
      },
    },
    demo: [
      {
        title: "Admin page",
        url: "https://www.youtube.com/embed/iRvQQLCVaDk",
      },
      {
        title: "Client page",
        url: "https://www.youtube.com/embed/5Ys9cYandHg",
      },
    ],
    link: [
      {
        title: "Admin page demo",
        url: "https://admin.vhmovie.online",
      },
      {
        title: "Client page demo",
        url: "https://vhmovie.online",
      },
      {
        title: "Sever repository",
        url: "https://gitlab.com/shadyside1995/myvieon_server",
      },
      {
        title: "Admin repository",
        url: "https://gitlab.com/shadyside1995/myvieon_admin",
      },
      {
        title: "Client repository",
        url: "https://gitlab.com/shadyside1995/myvieon_client",
      },
    ],
    account: [
      {
        username: "admintest",
        password: "12345678",
        role: "Admin",
      },
    ],
  },
  {
    isClickable: true,
    overview: {
      name: "Ecommerce website",
      thumb: project_thumb_3,
      role: "Team's Project - Leader",
      short_description:
        "Ecommerce website using MERN stack with 5 other member",
      tech: [
        "React/Redux/Redux-toolkit/React Router",
        "NodeJs/MongoDB",
        "MUI, Sass, Tailwind",
      ],
    },
    responsibility: [
      "Developing ideas, plans, and directions for the team.",
      "Managing Jira, creating and assigning tasks to team members.",
      "Writing API documentation and other shared documents.",
      "Coding server APIs.",
      "Coding Admin UI.",
    ],
    description: {
      admin: {
        thumb: project_thumb_3,
        content: [
          "Authentication",
          "Authorization with 3 different role: owner, admin, mod",
          "Customer management",
          "Order management",
          "Category management",
          "Product management",
          "Coupon management",
          "Search, filter, pagination",
          "Responsive",
        ],
      },
      client: {
        content: ["Inprogress"],
      },
    },
    demo: [
      {
        title: "Admin page",
        url: "https://www.youtube.com/embed/iRvQQLCVaDk",
      },
    ],
    link: [
      {
        title:
          "This is my team project so i cant public this source code right now",
      },
    ],
    account: [
      {
        username: "ownertest",
        password: "123456aA@",
        role: "Owner",
      },
      {
        username: "admintest",
        password: "123456aA@",
        role: "Admin",
      },
      {
        username: "moderatortest",
        password: "123456aA@",
        role: "moderator",
      },
    ],
  },

  {
    isClickable: false,
    overview: {
      name: "My Porfolio",
      thumb: project_thumb_4,
      role: "Personal project",
      short_description: "My personal porfolio",
      tech: ["React/Tailwind"],
    },
  },
];
