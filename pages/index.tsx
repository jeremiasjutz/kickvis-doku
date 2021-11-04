import Link from 'next/link';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

import { nameToSlug } from '../utils';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { Project } from '../projects';

const getRand = (length: number) => {
  return Math.floor(Math.random() * length);
};

const Home = ({ projects }: { projects: Project[] }) => {
  const [src, setSrc] = useState('');
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.main variants={container} initial="hidden" animate="show">
      <Head>
        <title>Kursdokumentation KICKVIS</title>
      </Head>
      <div className="ml-12 ">
        {projects.map((project) => (
          <div key={project.name} className="overflow-hidden">
            <Link href={nameToSlug(project.name)} passHref>
              <motion.a
                variants={item}
                onMouseEnter={() =>
                  setSrc(project.images[getRand(project.images.length)].url)
                }
                onMouseLeave={() => setSrc('')}
                className="block py-12 pl-24 pr-12 text-5xl text-white transition-all w-[fit-content] duration-700 origin-left cursor-pointer mix-blend-difference md:text-6xl hover:font-bold"
              >
                {project.name}
              </motion.a>
            </Link>
            <div className="relative w-full border-b border-black z-[-2]" />
          </div>
        ))}
      </div>
      <AnimatePresence>
        <div className="z-[-1] fixed inset-y-0 right-0 flex items-center justify-end pointer-events-none">
          {src !== '' ? (
            <motion.img
              key="child"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', duration: 0.7 }}
              src={src}
              className="max-w-lg m-6 border border-black max-h-96"
            />
          ) : null}
        </div>
      </AnimatePresence>
    </motion.main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await (
    await fetch('http://localhost:3000/api/getProjects')
  ).json();

  return {
    props: { projects },
  };
};

export default Home;
