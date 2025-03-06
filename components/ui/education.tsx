import { motion } from "framer-motion";

export default function Education(){
    return (
        <motion.section
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="space-y-8">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2022 - Expected June 2026</p>
                  <p className="font-medium">BSc in Computer Science (Minor in Data Science)</p>
                  <p className="text-blue-600 dark:text-blue-400">University of British Columbia</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">GPA: 4.33/4.33</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dean&apos;s List 2022-2024</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Relevant Coursework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="font-medium">Computer Science</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Computer Programming I (COSC 111)</li>
                      <li>Computer Programming II (COSC 121)</li>
                      <li>Machine Architecture (COSC 211)</li>
                      <li>Discrete Structures (COSC 221)</li>
                      <li>Data Structures (COSC 222)</li>
                      <li>Introduction to Databases (COSC 304)</li>
                      <li>Software Engineering (COSC 310)</li>
                      <li>Analysis of Algorithms (COSC 320)</li>
                      <li>Introduction to Networks (COSC 328)</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Data Science & Statistics</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Making Predictions with Data (DATA 101)</li>
                      <li>Elementary Statistics (STAT 121)</li>
                      <li>Introductory Statistics (STAT 230)</li>
                      <li>Introduction to Data Analytics (DATA 301)</li>
                      <li>Linear Regression Analysis (DATA 310)</li>
                      <li>Machine Learning (DATA 311)</li>
                      <li>Time Series and Forecasting (DATA 315)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </motion.section>
    )
}