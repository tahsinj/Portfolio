import { motion } from 'framer-motion';
import Image from 'next/image';

type Award = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  description?: string;
};

const certifications: Award[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI, Coursera, Stanford',
    date: '2024',
    image: '/coursera.jpg',
    link: 'https://www.coursera.org/account/accomplishments/specialization/44GVUE82J3MG',
  },
  {
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI, Coursera, Stanford',
    date: '2024',
    image: '/coursera.jpg',
    link: 'https://www.coursera.org/account/accomplishments/records/7F4V2FD66NH8',
  },
  {
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI, Coursera, Stanford',
    date: '2024',
    image: '/coursera.jpg',
    link: 'https://www.coursera.org/account/accomplishments/records/GDPDTMH4B27C',
  },
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI, Coursera, Stanford',
    date: '2024',
    image: '/coursera.jpg',
    link: 'https://www.coursera.org/account/accomplishments/verify/RLJ4CG4XQQX8',
  },
];

const awards: Award[] = [
  {
    title: 'Dean\'s List',
    issuer: 'University of British Columbia',
    date: '2022-2024',
    image: '/ubc.png',
    link: '#',
    description: 'Maintained academic excellence with a  perfect 4.33/4.33 GPA while pursuing a challenging  BSc in Computer Science curriculum.',
  },
  {
    title: 'International Major Entrance Scholarship',
    issuer: 'University of British Columbia',
    date: '2022',
    image: '/ubc.png',
    link: '#',
    description: 'Awarded to exceptional international students entering undergraduate programs at UBC',
  },
  {
    title: 'Outstanding International Student',
    issuer: 'University of British Columbia',
    date: '2022',
    image: '/ubc.png',
    link: '#',
    description: 'Merit-based entrance scholarship awarded to students showing strength academically and displaying involvement outside of the classroom.',
  },
  {
    title: 'Outstanding Cambridge Learner Awards',
    issuer: 'Cambridge Assessment International Education',
    date: '2022',
    image: '/caie.jpg',
    link: '#',
    description: 'Best across three Cambridge International A Levels in the UAE (Computer Science, Mathematics, and Chemistry) - June 2022',
  },
  {
    title: 'Gold Medalist - Mathematics',
    issuer: 'International Olympiad Foundation',
    date: '2019',
    image: '/iof.png',
    link: '#',
    description: 'Obtained the gold medal in the Mathematics Olympiad held in the UAE',
  },
  {
    title: 'Senior Team Representative',
    issuer: 'Hanoi Open Mathematics Competition',
    date: '2019',
    image: '/homc.png',
    link: '#',
    description: 'Represented the UAE Senior Team in the Hanoi Open Mathematics Competition - Hanoi, Vietnam',
  },
];

const AwardCard = ({ award, index }: { award: Award, index: number }) => (
  <motion.a
    key={award.title}
    href={award.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    <div className="p-6 space-y-3">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 relative">
          <Image
            src={award.image}
            alt={award.issuer}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
            {award.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{award.issuer}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-500">{award.date}</p>
      {award.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
          {award.description}
        </p>
      )}
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-rose-600/0 via-rose-600/0 to-rose-600/0 group-hover:from-rose-600/5 group-hover:via-rose-600/5 group-hover:to-rose-600/5 transition-all duration-300" />
  </motion.a>
);

export default function Awards() {
  return (
    <section id="awards" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        {/* Certifications Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <AwardCard key={cert.title} award={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
            Awards & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <AwardCard key={award.title} award={award} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 