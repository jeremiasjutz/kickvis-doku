import Link from 'next/link';
import { motion } from 'framer-motion';

import projects from '../projects';
import { nameToSlug } from '../utils';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="py-12"
    >
      <div className="mx-auto max-w-7xl">
        {projects.map((project) => (
          <div key={project.name} className="overflow-hidden">
            <Link href={nameToSlug(project.name)} passHref>
              <motion.a
                variants={item}
                className="group cursor-pointer py-10 block w-[fit-content] origin-left text-6xl font-light hover:font-medium transition-all duration-700"
              >
                {project.name}
                {/* <div className="w-full h-1 mt-4 transition duration-700 origin-left scale-x-0 bg-black group-hover:scale-x-100" /> */}
              </motion.a>
            </Link>
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default Home;
