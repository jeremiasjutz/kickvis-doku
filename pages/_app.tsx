import '../styles/tailwind.css';

import Link from 'next/link';
import SimpleReactLightbox from 'simple-react-lightbox';
import { useState } from 'react';
import { AnimatePresence, motion, Inertia, Tween } from 'framer-motion';
import type { AppProps } from 'next/app';

import projects, { Project } from '../projects';
import { nameToSlug } from '../utils';
import { ThemeProvider, useTheme } from 'next-themes';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import { RiHomeLine } from 'react-icons/ri';

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
  const { theme, setTheme } = useTheme();
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <SimpleReactLightbox>
        <AnimatePresence exitBeforeEnter>
          <Link href="/" passHref>
            <a className="fixed z-30 grid w-12 h-12 text-white border-b border-white cursor-pointer mix-blend-difference place-items-center top-6 left-6">
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
                      className={`border-black flex items-center ${
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
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
export default MyApp;
