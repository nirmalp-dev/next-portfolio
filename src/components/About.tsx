"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import fetch from "public/images/fetch.jpeg";
import me from "public/images/me-in-mountain.jpeg";
import chicago from "public/images/chicago.jpeg";
import me_in_nc from "public/images/me-in-nc.jpeg";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    fetch,
    me,
    chicago,
    me_in_nc,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I'm Nirmal Patel - a dedicated software engineer and an avid explorer of the great outdoors.
          Welcome to my digital space!
        </Paragraph>
        <Paragraph className=" mt-4">
          From the bustling cityscapes of Chicago to the serene heights of 14,000 feet in snowfall,
          my journey is a blend of technology and adventure.
          With a Master's degree in Computer Science from the Illinois Institute of Technology,
          I am passionate about crafting innovative solutions that enhance user experiences.
          My professional path has led me through exciting roles, from engineering scalable Android applications
          at Fetch Rewards to optimizing AI-driven processes at Tata Consultancy Services.
        </Paragraph>

        <Paragraph className=" mt-4">
          Beyond the code, I find solace in nature.
          Trekking through national parks fuels my spirit and inspires my work.
          This balance between technology and nature drives my commitment to creating software that is
          both functional and beautiful.
        </Paragraph>
        {/*<Paragraph className=" mt-4">*/}
        {/*  What sets me apart is my unwavering appreciation for design. I believe*/}
        {/*  that aesthetics and usability go hand in hand. My eye for awesome*/}
        {/*  design ensures that every project I undertake not only works*/}
        {/*  flawlessly under the hood but also looks stunning on the surface.*/}
        {/*</Paragraph>*/}
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering appreciation for design. I believe
          that aesthetics and usability go hand in hand. My eye for awesome
          design ensures that every project I undertake not only works
          flawlessly under the hood but also looks stunning on the surface.
          here for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for joining me on this exciting path of discovery and creativity!
        </Paragraph>
      </div>
    </div>
  );
}
