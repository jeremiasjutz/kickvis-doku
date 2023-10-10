import Link from "next/link";
import Head from "next/head";
import { RefObject, useEffect, useMemo, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { RiArrowLeftLine } from "react-icons/ri";
import { motion, Variants } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";

import projects from "../projects";
import { nameToSlug } from "../utils";
import Block from "../components/Block";
import { Project } from "../getProjects";

const Project = ({
  project,
  scrollContainerRef,
}: {
  project: Project;
  scrollContainerRef: RefObject<HTMLDivElement>;
}) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.075,
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
    type: "spring",
    duration: 1,
  };

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{project.name}</title>
      </Head>
      <motion.div variants={container} initial="hidden" animate="show">
        <Block noBorder>
          <motion.div
            variants={title}
            transition={transition}
            className="flex items-center p-6 md:p-12"
          >
            <Link href="/" className="mr-3 text-3xl md:mr-6 sm:text-4xl group">
              <RiArrowLeftLine className="transition-transform dark:text-white md:group-hover:-translate-x-2" />
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl dark:text-white">
              {project.name}
            </h1>
          </motion.div>
        </Block>
        {project.text ? (
          <Block>
            <motion.article
              variants={title}
              transition={transition}
              className="max-w-full p-6 prose prose-lg md:p-12 dark:text-white md:prose-xl"
              dangerouslySetInnerHTML={{ __html: project.text }}
            />
          </Block>
        ) : null}
        {project.images ? (
          <Block>
            <SRLWrapper
              options={{
                buttons: {
                  showAutoplayButton: false,
                  showDownloadButton: false,
                  showThumbnailsButton: false,
                  showFullscreenButton: false,
                },
              }}
            >
              <div
                className={`p-6 md:p-12 grid gap-6 lg:gap-12 ${project.cols} pt-6 md:pt-12`}
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
          </Block>
        ) : null}
      </motion.div>
    </>
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
