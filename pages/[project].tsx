import Link from 'next/link';
import Head from 'next/head';
import { SRLWrapper } from 'simple-react-lightbox';

import { RiArrowLeftLine } from 'react-icons/ri';
import { motion, Variants } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Project as ProjectType } from '../projects';
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
        className="pb-12 pl-24 pr-12"
      >
        <motion.div
          variants={title}
          transition={transition}
          className="flex items-center p-12 -mx-12 border-b border-black "
        >
          <Link href="/">
            <a className="mr-6 text-4xl group">
              <RiArrowLeftLine className="transition-transform group-hover:-translate-x-2" />
            </a>
          </Link>
          <h1 className="text-5xl md:text-6xl">{project.name}</h1>
        </motion.div>
        {project.text ? (
          <motion.article
            variants={title}
            transition={transition}
            className="p-12 -mx-12 prose-lg border-b border-black md:prose-xl"
            dangerouslySetInnerHTML={{ __html: project.text }}
          />
        ) : null}
        <SRLWrapper>
          <div className={`grid gap-12 ${project.cols} pt-12`}>
            {project.images.map(({ url, alt }, i) => (
              <motion.img
                variants={item}
                transition={transition}
                key={url}
                className="border border-black cursor-pointer"
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
  const projects: typeof Project[] = await (
    await fetch('http://localhost:3000/api/getProjects')
  ).json();
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
  const projects: typeof Project[] = await (
    await fetch('http://localhost:3000/api/getProjects')
  ).json();

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
