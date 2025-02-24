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
              Hey, it&apos;s Kol Tigin!
            </h2>
            <p className="text-xl text-muted-foreground">
              I&apos;m a biologist with a PhD in zoology, based in Türkiye, and I have published numerous articles in the academic community. 
              However, in the Blockchain community, I prefer to remain anonymous, using my pseudonym.
            </p>
            <p className="text-xl text-muted-foreground">
              My interest in technology began in the 1990s when I acquired my first desktop computer. 
              I have always been curious and analytical, driven by a passion for research. 
              I still remember the joy and satisfaction of creating my first HTML website, followed by a deeply satisfying night&apos;s sleep. 
              Later, I discovered PHP Fusion, where I developed plugins and themes. 
              Professionally, I use Adobe Illustrator for drawings, but I also enjoy using it as a hobby for personal design projects.
            </p>
            <p className="text-xl text-muted-foreground">
              Unfortunately, I was introduced to blockchain a bit later due to my postgraduate studies. 
              However, I adapted quickly, learned a lot, and continue to expand my knowledge. 
              I strongly believe in blockchain and its future. I value decentralization, the permaweb, and privacy. 
              Rather than focusing on competition, I find great fulfillment in achieving goals through collaboration. 
              I am committed to the ethical development of the blockchain community, and together with my team, we will contribute in every way we can.
            </p>
            {/* <p className="text-xl font-medium italic">
              &quot;Think out of the box&quot;
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-video"
          >
            <Image
              src="/out-of-the-box.jpg"
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
