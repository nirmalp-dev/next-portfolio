import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import azure_logo from "public/images/logos/azure.svg.png"
import go_logo from "public/images/logos/go.png"
import java_logo from "public/images/logos/java.webp"
import android_logo from "public/images/logos/android.webp"
import kotlin_logo from "public/images/logos/kotlin.png"

export const TechStack = () => {
  const stack = [
    {
      title: "GoLang",
      src: go_logo,

      className: "h-10 w-14",
    },
    {
      title: "Azure",
      src: azure_logo,

      className: "h-10 w-10",
    },
    {
      title: "Java",
      src: java_logo,

      className: "h-10 w-8",
    },
    {
      title: "Android",
      src: android_logo,

      className: "h-10 w-10",
    },
    {
      title: "Kotlin",
      src: kotlin_logo,

      className: "h-10 w-12",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.title}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
