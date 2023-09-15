import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import Head from "next/head";


const Home = () => {

  const projects = [
    {
      slug: "projeto 1",
      name: "Gestão escolar",
      image: {
        url: "/cmei.jpg",
        alt: "Gestão escolar",
      },
    },
    {
      slug: "projeto 2",
      name: "Controle de caixa e estoque",
      image: {
        url: "/estoque.png",
        alt: "text da imagem",
      },
    },
    {
      slug: "projeto 3",
      name: "Escolinha de futebol",
      image: {
        url: "/escolinha.jpg",
        alt: "text da imagem",
      },
    },
    {
      slug: "projeto 4",
      name: "Loja E-comerce",
      image: {
        url: "/ecomerce.jpg",
        alt: "text da imagem",
      },
    },
  ];

  return (
    <>
      <Head>
        <title> Sobre Min | Luiz </title>
        <meta
          name="description"
          content="descrição - bla, bla bla,"
        />
      </Head>
      <div className="">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  );
}

export default Home;


