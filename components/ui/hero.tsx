import { motion } from "framer-motion";
import { Button } from "./button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20 min-h-[calc(100vh-4rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
              Tahsin Jawwad
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
            Third-Year Computer Science Student
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Passionate about developing innovative AI solutions and exploring the frontiers of machine learning. 
          Specializing in deep learning, computer vision, and natural language processing.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="./Resume.pdf" download="Tahsin_Jawwad_Resume.pdf">
            <Button className="rounded-full bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-white transition-transform hover:scale-105">
              Download Resume
            </Button>
          </a>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/tahsinj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-6 h-6"/>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/tahsin-jawwad-291bb1289/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6"/>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-64 h-64 lg:w-96 lg:h-96 mt-8 lg:mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-indigo-500/20 to-sky-500/20 rounded-full blur-3xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-xl">
          <Image
            src="/pp.jpg"
            alt="Tahsin Jawwad"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}