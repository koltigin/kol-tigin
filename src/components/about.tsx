"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 md:px-8 bg-muted/30 rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12 items-center"
        >
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Hey, it&apos;s Rohit!
            </h2>
            <p className="text-xl text-muted-foreground">
              I&apos;m a Developer Relations Engineer based in India,
              specializing in creating educational content and tools that
              simplify technical concepts. I&apos;m passionate about the Arweave
              ecosystem, where I believe in collaboration over competition.
            </p>
            <p className="text-xl text-muted-foreground">
              My journey in the web3 space has been focused on building bridges
              between complex technology and developers. Through my work at
              Arweave India, Community Labs, and Developer DAO, I&apos;ve
              consistently worked to make technology more accessible and
              enjoyable to learn.
            </p>
            <p className="text-xl text-muted-foreground">
              The following philosophy guides my work, as I always say 👇
            </p>
            {/* <p className="text-xl font-medium italic">
              &quot;Come for the tech, stay for the vibes.&quot;
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-video"
          >
            <Image
              src="/vibes.png"
              alt="About Image"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
