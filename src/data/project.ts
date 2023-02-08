import project_thumb_1 from "../assets/images/project_thumb_1.png";
import project_thumb_2 from "../assets/images/project_thumb_2.png";
import project_thumb_3 from "../assets/images/project_thumb_3.png";
import myshop_admin_thumb from "../assets/images/myshop1.png";
import myshop_client_thumb from "../assets/images/myshop2.png";

export const project = [
  {
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
        ],
      },
      client: {
        thumb: myshop_client_thumb,
        content: [
          "View product",
          "Search product",
          "Shopping cart",
          "Order product",
          "Review product",
        ],
      },
    },
    demo: {
      url: "https://www.youtube.com/embed/GnG3JckVxYs",
    },
    link: {
      admin: "admin link",
      client: "client link",
      github: "github link",
    },
  },
  {
    overview: {
      name: "Movie website",
      thumb: project_thumb_2,
      role: "Personal project",
      short_description: "Vieon movie website clone using MERN stack",
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
    description: {},
  },
  {
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
      "Design database",
      "Building UI/UX of admin page, client page",
      "Coding logic of website",
    ],
    description: {},
  },
];
