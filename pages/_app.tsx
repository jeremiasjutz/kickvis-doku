import '../styles/tailwind.css';

import Link from 'next/link';
import SimpleReactLightbox from 'simple-react-lightbox';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, Inertia, Tween } from 'framer-motion';
import type { AppProps } from 'next/app';

import projects, { Project } from '../projects';
import { nameToSlug } from '../utils';
import { ThemeProvider, useTheme } from 'next-themes';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import { RiHomeLine, RiLoader2Line, RiLoaderLine } from 'react-icons/ri';

function MyApp({ Component, pageProps }: AppProps) {
  const springConfig: Tween = {
    type: 'tween',
    duration: 0.7,
  };

  const transition = {
    ...springConfig,
    delayChildren: 0.1,
    staggerChildren: 0.025,
  };
  const container = {
    hidden: { opacity: 0, transition },
    show: {
      opacity: 1,
      transition,
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
      transition: { type: 'spring', duration: 1 },
    },
    show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    cacheImages(projects.flatMap(({ images }) => images.map(({ url }) => url)));
  }, []);

  const cacheImages = async (arr: string[]) => {
    const promises = arr.map((src: string, i) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = (e) => {
          const newProgress = (i + 1) / arr.length;
          newProgress > progress && setProgress(newProgress);
          resolve(e);
        };
        img.onerror = reject;
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SimpleReactLightbox>
        {isLoading ? (
          <div className="fixed inset-0 grid place-items-center">
            <div className="w-full text-center">
              <p className="text-xl font-medium">
                Inhalte laden{' '}
                <span className="tabular-nums">
                  {Math.round(progress * 100)}%
                </span>
              </p>
              <div className="w-1/2 mx-auto mt-4">
                <div
                  className="w-full h-[2px] transition-transform origin-left bg-black dark:bg-white"
                  style={{ transform: `scaleX(${progress})` }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <Link href="/" passHref>
              <a className="fixed z-30 grid w-[calc(3rem-1px)] h-12 text-white border-b border-white cursor-pointer mix-blend-difference place-items-center top-6 left-6">
                <RiHomeLine />
              </a>
            </Link>
            <div className="fixed inset-y-0 left-0 z-20 grid items-center w-12 my-6 ml-6 border-r border-white group mix-blend-difference">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex justify-center text-lg text-white transition-all duration-700 -rotate-90 rounded w-11 group-hover:font-semibold"
              >
                {isMenuOpen ? 'schliessen' : 'menu'}
              </button>
            </div>
            <DarkModeSwitcher />
            <AnimatePresence>
              {isMenuOpen ? (
                <motion.div
                  key="child"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="fixed inset-0 z-10 grid pl-12 m-6 overflow-y-auto text-black bg-white ring-1 ring-black dark:text-white dark:bg-black md:grid-cols-3 dark:ring-white"
                >
                  {projects.map(({ name }: Project, i) => {
                    return (
                      <div
                        key={name}
                        className={`border-black dark:border-white flex items-center ${
                          i === projects.length - 1 ? '' : 'border-b'
                        } ${i % 3 === 2 ? '' : 'md:border-r'}`}
                      >
                        <Link href={nameToSlug(name)} passHref>
                          <motion.a
                            variants={item}
                            onClick={() => setIsMenuOpen(false)}
                            className={`px-12 py-6 text-3xl transition-colors duration-700 origin-left  hover:text-indigo-500`}
                          >
                            {name}
                          </motion.a>
                        </Link>
                      </div>
                    );
                  })}
                </motion.div>
              ) : null}
            </AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        )}
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
export default MyApp;
