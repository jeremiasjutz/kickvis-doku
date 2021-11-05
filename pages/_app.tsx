import '../styles/tailwind.css';

import Link from 'next/link';
import SimpleReactLightbox from 'simple-react-lightbox';
import { RiHomeLine } from 'react-icons/ri';
import { ThemeProvider } from 'next-themes';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, Tween } from 'framer-motion';

import type { AppProps } from 'next/app';

import projects, { Project } from '../projects';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import { nameToSlug } from '../utils';

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

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    cacheImages(
      projects.flatMap(({ images }) => images?.map(({ url }) => url) ?? [])
    );
  }, []);

  const cacheImages = useCallback(
    async (arr: string[]) => {
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
    },
    [progress, setProgress]
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SimpleReactLightbox>
        <main
          ref={scrollContainerRef}
          className="fixed inset-0 overflow-y-auto bg-white md:inset-6 ring-1 ring-black dark:bg-black dark:ring-white"
        >
          <AnimatePresence exitBeforeEnter>
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed grid text-black inset-6 place-items-center dark:text-white"
              >
                <div className="flex flex-col">
                  <div className="mb-12 border border-black dark:border-white">
                    <h1 className="w-full max-w-md p-6 text-2xl font-medium leading-normal border-b border-black sm:text-4xl dark:border-white">
                      Kursdokumentation Kickstart Visual Design
                    </h1>

                    <div className="relative w-full bg-white">
                      <p className="z-10 px-6 py-3 text-sm font-medium text-black ">
                        Inhalte laden{' '}
                        <span className="tabular-nums">
                          {Math.round(progress * 100)}%
                        </span>
                      </p>
                      <div
                        className="absolute inset-0 w-full transition-transform origin-left bg-white mix-blend-difference"
                        style={{ transform: `scaleX(${progress})` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <>
                <nav className="fixed inset-0 left-0 flex flex-col justify-between w-12 bg-white border-r border-black dark:border-white dark:bg-black md:inset-y-6 md:left-6 ">
                  <Link href="/" passHref>
                    <a className="grid w-full h-12 border-b border-black cursor-pointer dark:border-white place-items-center">
                      <RiHomeLine />
                    </a>
                  </Link>
                  <div className="grid w-12 place-items-center group ">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex justify-center text-lg transition-all duration-700 -rotate-90 rounded w-11 group-hover:font-semibold"
                    >
                      {isMenuOpen ? 'schliessen' : 'menu'}
                    </button>
                  </div>
                  <DarkModeSwitcher />
                </nav>
                <AnimatePresence>
                  {isMenuOpen ? (
                    <motion.div
                      key="child"
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="fixed inset-0 z-30 grid ml-12 overflow-y-auto text-black bg-white md:inset-6 ring-1 ring-black dark:text-white dark:bg-black md:grid-cols-2 lg:grid-cols-3 dark:ring-white"
                    >
                      {projects.map(({ name }: Project, i) => {
                        return (
                          <div
                            key={name}
                            className={`border-black dark:border-white flex items-center ${
                              i === projects.length - 1
                                ? 'md:border-r md:translate-x-[1px] lg:translate-x-0'
                                : 'border-b'
                            } ${
                              i % 2 === 0 ? '' : 'md:border-l lg:border-l-0'
                            } ${i % 3 === 2 ? '' : 'lg:border-r'}`}
                          >
                            <Link href={nameToSlug(name)} passHref>
                              <motion.a
                                variants={item}
                                onClick={() => setIsMenuOpen(false)}
                                className={`hyphens px-12 py-6 text-2xl md:text-3xl transition-colors duration-700 origin-left  hover:text-indigo-500`}
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
                <Component
                  {...pageProps}
                  scrollContainerRef={scrollContainerRef}
                />
              </>
            )}
          </AnimatePresence>
        </main>
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
export default MyApp;
