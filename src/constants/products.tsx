import domoThumbnail from "public/images/domo-image.webp";
import medicThumbnail from "public/images/medic-ai-image.webp";

export const products = [
  {
    href: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
        "A full-stack, production-ready e-commerce platform with modern technologies, containerized with Docker for " +
        "easy deployment and scaling.",
    thumbnail: domoThumbnail,
    images: [domoThumbnail],
    stack: ["Python", "Go", "MySql", "React", "MongoDB", "Grafana"],
    slug: "e-commerce-platform",
    content: (
        <div>
            <p>
                The backend is built using <strong>Python</strong> & <strong>Go</strong>, designed to efficiently handle
                business logic, including product management, user interactions, and a dynamic discount engine tailored
                to specific user segments. The frontend is developed with <strong>React.js</strong>, offering an intuitive,
                responsive, and seamless user interface that enhances customer experience.
                The entire platform is containerized using <strong>Docker</strong>, enabling rapid and consistent
                deployment across diverse environments while ensuring scalability and reliability.
            </p>
            <p>
                For data management, the platform leverages <strong>MySQL</strong> for transactional data such as
                orders, inventory, and user information. <strong>MongoDB</strong> is utilized for managing user-generated
                content like product reviews and ratings. Key features include dynamically updated sections for trending
                and most-liked products based on user interactions, as well as a comprehensive inventory management system
                that supports real-time tracking and updates. The discount engine empowers the platform to deliver
                personalized offers to specific user segments, boosting customer engagement and optimizing conversion rates.
            </p>
            <p>
                The platform's architecture is designed for scalability, flexibility, and production
                readiness. With a strong emphasis on user experience and efficient data management, it supports essential
                e-commerce functionalities such as inventory management, personalized recommendations, and review
                systems. The use of <strong>Docker</strong> ensures seamless scaling and integration into any production
                environment, making it a robust solution tailored to modern e-commerce demands.
            </p>
        </div>
    ),
  },
    {
        href: "medic-ai",
        title: "Medic.AI",
        description:
            "A platform to help patient get the right data in one place",
        thumbnail: medicThumbnail,
        images: [medicThumbnail],
        stack: ["MySQL", "NodeJS", "NLP", "MongoDB"],
        slug: "medic-ai",
        content: (
            <div>
                <p>
                    Developed a <strong>Full Stack web
                    application</strong> using <strong>React.js</strong>, <strong>Node.js</strong>,
                    and <strong>MongoDB</strong> to maintain patient data and reports in one place.
                    The application includes features like searching for generic medicines, nearby labs, and hospitals,
                    ensuring a seamless user experience.
                </p>
                <p>
                    Integrated <strong>Microsoft Azure Health Chatbot</strong> with the platform to enable symptom
                    querying
                    and provide AI-driven responses. Leveraged <strong>Natural Language Processing
                    (NLP)</strong> and <strong>REST APIs</strong> for efficient
                    communication between the chatbot and the application.
                </p>
                <p>
                    Designed and implemented a module for <strong>Diabetic Retinopathy detection</strong> using <strong>Machine
                    Learning models</strong>, enabling initial patient reviews with high accuracy.
                </p>
            </div>

        ),
    },

];
