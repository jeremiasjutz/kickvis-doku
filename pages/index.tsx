import Link from 'next/link';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import projects from '../projects';
import { nameToSlug } from '../utils';

const getRand = (length: number) => {
  return Math.floor(Math.random() * length);
};

const Home = ({
  scrollContainerRef,
  scrollPersist,
  setScrollPersist,
}: {
  scrollContainerRef: RefObject<HTMLDivElement>;
  scrollPersist: number;
  setScrollPersist: Dispatch<SetStateAction<number>>;
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
    scrollContainerRef.current?.scrollTo({
      top: scrollPersist ?? 0,
    });
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
        staggerChildren: scrollPersist > 0 ? 0 : 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: scrollPersist > 0 ? 1 : 0,
      y: scrollPersist > 0 ? 0 : 100,
    },
    show: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Head>
        <title>Kursdokumentation KICKVIS</title>
      </Head>
      <div className="ml-12 ">
        {projects.map((project, i) => (
          <div key={project.name} className="bg-white dark:bg-black">
            <div className="w-full mx-auto overflow-hidden border-black dark:border-white max-w-7xl">
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
                  onClick={() => {
                    setScrollPersist(
                      scrollContainerRef.current?.scrollTop ?? 0
                    );
                  }}
                  className="relative block p-12 my-[0.3px] text-3xl sm:text-4xl transition-all w-[fit-content] duration-700 origin-left cursor-pointer md:text-5xl hover:font-bold"
                >
                  {project.name}
                </motion.a>
              </Link>
            </div>
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
            className="absolute z-10 max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white border border-black pointer-events-none left-1/2 top-1/2 dark:bg-black dark:border-white max-h-96 mix-blend-difference invert dark:invert-0"
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
