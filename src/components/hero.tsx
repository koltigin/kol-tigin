"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaBluesky, FaArchway, FaLinkedin, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { handleEmailClick } from "@/lib/utils";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Kol Tigin
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl text-muted-foreground font-bold tracking-tight"
        >
          Learn · Innovate · Collaborate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-muted-foreground max-w-[600px]"
        >
          Hey I'm Kol Tigin! My real profession is Biologist (PhD in Zoology) but I've been involved with technology since the 90s and I'm a blockchain enthusiast. 
          I'm constantly learning and improving myself by wondering about the development and future of blockchain technology. 
          I believe in decentralization, permaweb and privacy. I prepare content and guides on these topics. 
          As the Anatolian Team, we contribute to decentralization with our validator and other services.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-semibold italic"
        >
          &quot;Think out of the box.&quot;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" className="mt-4" asChild>
            <a href="#" onClick={handleEmailClick}>
              Get in touch
            </a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 pt-4"
        >
          <a
            href="https://bsky.app/profile/koltigin.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaBluesky size={24} />
          </a>
          <a
            href="https://warpcast.com/koltigin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaArchway size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/koltigin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/koltigin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaGithub size={24} />
          <a
            href="https://x.com/mkoltigin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/@mehmetkoltigin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70"
          >
            <FaYouTube size={24} />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full md:w-5/12 aspect-square md:aspect-auto md:h-[600px]"
      >
        <Image
          src="/pfp_new.png"
          alt="Profile Image"
          width={600}
          height={600}
          className="object-fit rounded-full"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
