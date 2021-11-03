import Link from 'next/link';
import { RiArrowLeftLine, RiArrowLeftCircleLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import projects, { Project as ProjectType } from '../projects';
import { nameToSlug } from '../utils';

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto py-12"
    >
      <div className="flex items-center mb-12">
        <Link href="/">
          <a className="text-4xl mr-6 group">
            <RiArrowLeftLine className="group-hover:-translate-x-2 transition-transform" />
          </a>
        </Link>
        <h1 className="text-6xl">{project.name}</h1>
      </div>
      <article className="text-2xl tracking-wide leading-normal">
        {project.text}
      </article>
    </motion.main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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
