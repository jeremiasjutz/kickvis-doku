import Link from 'next/link';
import Head from 'next/head';
import { SRLWrapper } from 'simple-react-lightbox';

import { RiArrowLeftLine } from 'react-icons/ri';
import { motion, Variants } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import projects, { Project as ProjectType } from '../projects';
import { nameToSlug } from '../utils';

const Project = ({ project }: { project: ProjectType }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
    },
  };

  const title: Variants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    type: 'spring',
    duration: 1,
  };
  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="fixed inset-0 pb-6 pl-24 pr-12 m-6 overflow-y-auto ring-1 ring-black md:pb-12 dark:ring-white"
      >
        <motion.div
          variants={title}
          transition={transition}
          className="flex items-center p-6 -mx-12 border-b border-black md:p-12 dark:border-white"
        >
          <Link href="/">
            <a className="mr-3 text-3xl md:mr-6 sm:text-4xl md:text-5xl group">
              <RiArrowLeftLine className="transition-transform dark:text-white group-hover:-translate-x-2" />
            </a>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl dark:text-white">
            {project.name}
          </h1>
        </motion.div>
        {project.text ? (
          <motion.article
            variants={title}
            transition={transition}
            className="p-6 -mx-12 prose-lg border-b border-black md:p-12 dark:text-white dark:border-white md:prose-xl"
            dangerouslySetInnerHTML={{ __html: project.text }}
          />
        ) : null}
        <SRLWrapper>
          <div
            className={`-mx-12 px-6 md:px-12 grid gap-6 md:gap-12 ${project.cols} pt-6 md:pt-12`}
          >
            {project.images.map(({ url, alt }, i) => (
              <motion.img
                variants={item}
                transition={transition}
                key={url}
                className="border border-black cursor-pointer dark:border-white"
                src={url}
                alt={alt}
              />
            ))}
          </div>
        </SRLWrapper>
      </motion.main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const projects: typeof Project[] = await (
  //   await fetch('http://localhost:3000/api/getProjects')
  // ).json();
  return {
    paths: projects.map(({ name }) => {
      const slug = nameToSlug(name);
      return {
        params: {
          project: slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const projects: typeof Project[] = await (
  //   await fetch('http://localhost:3000/api/getProjects')
  // ).json();

  const projectSlug = context.params?.project;
  const props = {
    project: projects.find(
      (project) => nameToSlug(project.name) === projectSlug
    ),
  };
  return {
    props,
  };
};

export default Project;
