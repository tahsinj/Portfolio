import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { 
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiPython,
  DiGit, DiDocker, DiMongodb, DiJava, DiMysql
} from 'react-icons/di';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiTensorflow, SiPytorch, 
  SiKeras, SiOpenai, SiNumpy, SiPandas, SiScikitlearn, SiFigma, 
  SiGithub, SiR, SiOracle
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: DiJava, color: '#007396' },
      { name: 'Python', icon: DiPython, color: '#3776AB' },
      { name: 'SQL', icon: DiMysql, color: '#4479A1' },
      { name: 'R', icon: SiR, color: '#276DC3' },
      { name: 'JavaScript', icon: DiJavascript1, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Data Science & AI',
    skills: [
      { name: 'Python', icon: DiPython, color: '#3776AB' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'Keras', icon: SiKeras, color: '#D00000' },
      { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML5', icon: DiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: DiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: DiJavascript1, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React', icon: DiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', icon: DiNodejs, color: '#339933' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: DiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Docker', icon: DiDocker, color: '#2496ED' },
      { name: 'MongoDB', icon: DiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: DiMysql, color: '#4479A1' },
      { name: 'Oracle', icon: SiOracle, color: '#F80000' },
      { name: 'VS Code', icon: VscCode, color: '#007ACC' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
];

export default function Skills() {
  const [currentCategory, setCurrentCategory] = useState(0);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
  };

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8 relative"
      >
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
          Skills
        </h2>
        
        <div className="relative px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium">{skillCategories[currentCategory].title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillCategories[currentCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <skill.icon 
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevCategory}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <FaArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCategory}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow z-10"
          >
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
} 