import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
        "A full-stack, production-ready e-commerce platform with modern technologies, containerized with Docker for " +
        "easy deployment and scaling.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Go", "React", "MongoDB", "Grafana"],
    slug: "e-commerce-platform",
    content: (
        <div>
          <p>
            The backend is built using Go, designed to handle the business logic, including product management,
            ser interactions, and a dynamic discount engine based on user segmentation.
            The frontend is developed in React, providing an intuitive and responsive user interface.
            The entire platform is containerized with Docker, allowing for rapid and consistent
            deployment across different environments.{" "}
          </p>
          <p>
            For data management, the platform utilizes MySQL for handling transactional data, such as orders,
            inventory, and user information, while MongoDB is used for managing user-generated content,
            including product reviews and ratings. Key features include trending and most-liked product sections,
            which are dynamically updated based on user interactions,
            and a comprehensive inventory management system that allows for real-time tracking and updates.
            The discount engine enables the platform to offer personalized discounts to specific user segments,
            optimizing customer engagement and conversion rates.{" "}
          </p>{" "}
          <p>
            The platform’s architecture is designed for scalability and flexibility, making it ready for production deployment.
            With a focus on user experience and efficient data management, it supports crucial e-commerce functionalities like inventory management,
            personalized user recommendations, and review systems. The use of Docker ensures easy scaling and integration
            into any production environment, making it a robust solution for modern e-commerce needs.
          </p>
        </div>
    ),
  },
  {
    href: "medic-ai",
    title: "Medic.AI",
    description:
      "A platform to help patient get the right data in one place",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["NLP", "MongoDB"],
    slug: "medic-ai",
    content: (
      <div>
        <p>
          Developed Full Stack web app which maintains the patient data and reports in one place. It has features like searching for generic medicines
          and nearby labs, and hospitals.{" "}
        </p>
        <p>
          Integration with the Microsoft Azure Health Chat bot was also done to query symptoms from the platform. Diabetic Retinopathy for initial
          review of the patient.
        </p>{" "}
      </div>
    ),
  },

];
