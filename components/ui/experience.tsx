import { motion } from "framer-motion";


export default function Experience(){
    return(
        <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">June 2024 - July 2024</p>
                  <p className="font-medium">Data Analytics Intern</p>
                  <p className="text-blue-600 dark:text-blue-400">OLEO Energy DMCC</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
              Played a key role in optimizing business performance through comprehensive data analytics using Python and Excel. Performed comprehensive data analysis on over 10,000 barrels of oil trade data using Python to extract, manipulate, and analyze large datasets, resulting in a 10% improvement in trade efficiency. 
              Implemented advanced statistical analysis techniques to interpret complex datasets, significantly enhancing the decision-making processes; integrated business intelligence tools like Tableau for visualizing complex data trends. This experience allowed me to develop valuable technical skills and deepen my understanding of data-driven business strategies.
              </p>
            </div>
          </motion.section>
    )
}