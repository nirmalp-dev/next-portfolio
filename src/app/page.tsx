import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import {FlipWords} from "@/components/ui/flip-words";

export default function Home() {
    const words = ["Full-Stack Developer", "Backend Developer", "Android Developer", ];

    return (
    <Container>
      <span className="text-xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Nirmal Patel</Heading>
      <Paragraph className="mt-4">
        I&apos;m a <FlipWords words={words} /> who loves{" "}
        <Highlight>building products</Highlight> and <Highlight>apps</Highlight> that can impact millions of lives
      </Paragraph>
      <Paragraph className="mt-4">
        I&apos;m a software engineer with{" "}
        <Highlight>4+ years of experience</Highlight> building scalable microservices and apps
        that are performance optimized and good looking.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
