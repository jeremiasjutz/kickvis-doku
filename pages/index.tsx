import Link from 'next/link';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import projects from '../projects';
import { nameToSlug } from '../utils';

const getRand = (length: number) => {
  return Math.floor(Math.random() * length);
};

const Home = ({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLDivElement>;
}) => {
  const [src, setSrc] = useState('');

  const imageRef = useRef<HTMLImageElement>(null);

  const move = useCallback((e: MouseEvent) => {
    if (imageRef.current && scrollContainerRef.current) {
      imageRef.current.style.top =
        e.pageY + scrollContainerRef.current.scrollTop + 'px';
      imageRef.current.style.left = e.pageX + 'px';
    }
  }, []);

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0 });
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
    <motion.div variants={container} initial="hidden" animate="show">
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
                  setSrc(
                    project.images
                      ? project.images[getRand(project.images.length)].url
                      : ''
                  )
                }
                onMouseLeave={() => setSrc('')}
                className="relative block p-12 text-4xl transition-all w-[fit-content] duration-700 origin-left cursor-pointer  md:text-5xl hover:font-bold"
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
            className="absolute z-10 max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white border border-black pointer-events-none dark:bg-black dark:border-white max-h-96 mix-blend-difference invert dark:invert-0"
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
