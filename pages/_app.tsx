import '../styles/tailwind.css';

import Link from 'next/link';
import SimpleReactLightbox from 'simple-react-lightbox';
import { useState } from 'react';
import { AnimatePresence, motion, Inertia, Tween } from 'framer-motion';
import type { AppProps } from 'next/app';

import projects, { Project } from '../projects';
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
    hidden: { x: '-100%', transition },
    show: {
      x: 0,
      transition,
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -200,
      transition: { type: 'spring', duration: 1 },
    },
    show: { opacity: 1, x: 0, transition: { type: 'spring', duration: 1 } },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <SimpleReactLightbox>
      <AnimatePresence exitBeforeEnter>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed inset-y-0 left-0 z-20 grid items-center w-12 h-full border-r border-white group mix-blend-difference"
        >
          <span className="flex justify-center w-12 text-lg text-white transition-all duration-700 -rotate-90 rounded group-hover:font-bold">
            {isMenuOpen ? 'schliessen' : 'menu'}
          </span>
        </button>
        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="fixed inset-0 z-10 grid gap-12 py-12 pl-24 pr-12 overflow-y-auto text-white bg-black md:grid-cols-3"
            >
              {projects.map(({ name }: Project) => {
                return (
                  <Link key={name} href={nameToSlug(name)} passHref>
                    <motion.a
                      variants={item}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-3xl transition-colors duration-700 origin-left hover:text-indigo-500"
                    >
                      {name}
                    </motion.a>
                  </Link>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </SimpleReactLightbox>
  );
}
export default MyApp;
