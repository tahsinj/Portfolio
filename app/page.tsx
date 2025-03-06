"use client"

import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import Experience from "@/components/ui/experience";
import Education from "@/components/ui/education";
import Projects from "@/components/ui/projects";
import Skills from "@/components/ui/skills";
import Awards from "@/components/ui/awards";
import Footer from "@/components/ui/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-black dark:text-white transition-colors duration-300">
        <Header />
        <main className="pt-20 md:pt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16 md:space-y-20"
            >
              <section id="hero" className="min-h-screen flex items-center">
                <Hero />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="education">
                <Education />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="awards">
                <Awards />
              </section>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

