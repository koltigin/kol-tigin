"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const projects = [
  {
    title: "Website",
    period: "",
    image: "/Anatolian-Team-Logo-Gif.gif",
    description: "Anatolian Team Website",
    url: "https://anatolianteam.com/",
  },
  {
    title: "Services",
    period: "",
    image: "/anatolian-doc-social-card.jpg",
    description: "Guides, snaptshots, statesyncs and more...",
    url: "https://services.anatolianteam.com/",
  },
];

export function Work() {
  return (
    <motion.section
      id="work"
      className="py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-12"
      >
        🐆 Anatolian Team
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {project.url ? (
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <Card className="border-0 bg-muted/30 hover:shadow-lg transition-shadow">
                  <motion.div
                    className="relative w-full h-64 overflow-hidden rounded-t-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-semibold">
                      {project.title}
                    </CardTitle>
                    {project.period && (
                      <CardDescription className="text-sm">
                        {project.period}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card className="border-0 bg-muted/30">
                <motion.div
                  className="relative w-full h-64 overflow-hidden rounded-t-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold">
                    {project.title}
                  </CardTitle>
                  {project.period && (
                    <CardDescription className="text-sm">
                      {project.period}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
