import Link from 'next/link';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import projects from '../projects';
import { nameToSlug } from '../utils';

const getRand = (length: number) => {
  return Math.floor(Math.random() * length);
};

const Home = () => {
  const [src, setSrc] = useState('');

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const move = useCallback((e: MouseEvent) => {
    if (imageRef.current && containerRef.current) {
      imageRef.current.style.top =
        e.pageY + containerRef.current.scrollTop + 'px';
      imageRef.current.style.left = e.pageX + 'px';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

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
      ref={containerRef}
      className="fixed inset-0 m-6 overflow-y-auto bg-white ring-1 ring-black dark:bg-black dark:ring-white"
    >
      <Head>
        <title>Kursdokumentation KICKVIS</title>
      </Head>
      <div className="ml-12 ">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="overflow-hidden bg-white dark:bg-black"
          >
            <Link href={nameToSlug(project.name)} passHref>
              <motion.a
                variants={item}
                onMouseEnter={() =>
                  setSrc(project.images[getRand(project.images.length)].url)
                }
                onMouseLeave={() => setSrc('')}
                className="z-20 relative  block p-12 text-4xl text-white transition-all w-[fit-content] duration-700 origin-left cursor-pointer mix-blend-difference md:text-5xl hover:font-bold"
              >
                {project.name}
              </motion.a>
            </Link>
            {i === projects.length - 1 ? null : (
              <div className="relative z-0 w-full border-b border-black dark:border-white" />
            )}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {src !== '' ? (
          <motion.img
            key="childImage"
            ref={imageRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={src}
            className="absolute z-10 max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white border border-black pointer-events-none dark:bg-black dark:border-white max-h-96"
          />
        ) : null}
      </AnimatePresence>
    </motion.main>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const projects: Project[] = await (
//     await fetch('http://localhost:3000/api/getProjects')
//   ).json();

//   return {
//     props: { projects },
//   };
// };

export default Home;
