import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";
import Aos from "aos";
import "aos/dist/aos.css";

import { AboutMe } from "../components/sections/AboutMe";
import { HomeHero } from "../components/sections/Home";
import { Projects } from "../components/sections/Projects";
import { getPrismicClient } from "../services/prismic";
import { Knowledges } from "../components/sections/Knowledges";
import { Contact } from "../components/sections/Contact";

interface HomeProps {
  about: {
    id: number;
    content: {
      text: string;
    }[];
  };
  projects: {
    uid: string;
    title: string;
    thumbnail: {
      url: string;
    };
  }[];
}

export default function Home({ about, projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Início - Dev Guilherme</title>
        <meta
          name="description"
          content="Sou desenvolvedor front-end e esse é meu portfólio onde voçê pode conhecer mais de mim, ver os projetos que ja desenvolvi e caso tenha interesse em meus serviços é só entrar em contato."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou desenvolvedor front-end e esse é meu portfólio onde voçê pode conhecer mais de mim, ver os projetos que ja desenvolvi e caso tenha interesse em meus serviços é só entrar em contato."
        />
      </Head>
      <main>
        <HomeHero />
        <AboutMe about={about} />
        <Projects projects={projects} />
        <Knowledges />
        <Contact />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const aboutResponse = await prismic.getSingle("sobre", {});
  const about = {
    id: aboutResponse.id,
    content: [...aboutResponse.data.content],
  };

  const projectsResponse = await prismic.query(
    [Prismic.Predicates.at("document.type", "projeto")],
    { pageSize: 4 }
  );
  const projects = projectsResponse.results.map((project) => ({
    uid: project.uid,
    title: project.data.title,
    thumbnail: project.data.thumbnail,
  }));

  return {
    props: {
      about,
      projects,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};

