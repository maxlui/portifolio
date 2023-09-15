import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse items-center gap-10 md:gap-32 py-8 text-lg text-center md:text-left md:flex-nowrap justify-between">
      <div className="p-6 text-white flex-col items-center md:items-start gap-4 w-full xl:w-120">
        <h1 className="text-xl md:text-2xl md:leading-[3rem] pt-4">
          <p> Prazer, Sou </p>
          <strong className="font-bold">Luiz Anthony</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            Sou um Desenvolvedor apaixonado por tecnologias e inovações
          </h2>
          <Link
            href="/contatos"
            className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Converse Comigo!
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center md:grid md:grid-cols-2  gap-2 text-xl">
          <li
            style={{ backgroundColor: "#2F74C0", color: "#FFFFFF" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/typescript.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="border border-black rounded-full"
            />
            typescript
          </li>
          <li
            style={{ backgroundColor: "#6BDDFA", color: "#000000" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/react.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="border border-black rounded-full"
            />
            react
          </li>
          <li
            style={{ backgroundColor: "#EFD81D", color: "#000000" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/javascript.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="border border-black rounded-full"
            />
            javascript
          </li>
          <li
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/next-js.svg"
              width={30}
              height={20}
              alt="Icone Letra"
              className="bg-white border rounded-full"
            />
            next.js
          </li>

          <li
            style={{ backgroundColor: "#FF6347", color: "#FFFFFF" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/git.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="border rounded-full"
            />
            git/gitflow
          </li>

          <li
            style={{ backgroundColor: "#828684", color: "#FFFFFF" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/tailwind.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="rounded-full"
            />
            tailwindcss
          </li>

          <li
            style={{ backgroundColor: "#0d520d", color: "#FFFFFF" }}
            className="flex w-60 p-2 rounded-md"
          >
            <Image
              src="/node.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="border border-white rounded-full"
            />
            node.js
          </li>

          <li
            style={{ backgroundColor: "#2F4F4F", color: "#FFFFFF" }}
            className="flex  w-60 p-2 rounded-md"
          >
            <Image
              src="/fullstack.png"
              width={30}
              height={20}
              alt="Icone Letra"
              className="border  rounded-full"
            />
            fullstack
          </li>
        </ul>
      </div>
      <div className="relative">
        <Image
          src="https://gitlab.com/uploads/-/system/user/avatar/1719949/avatar.png?width=400"
          alt="Foto de Perfil"
          unoptimized
          width={500}
          height={500}
          className="rounded-full"
        />
        <p className="p-5 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute bottom-[-0.75rem] sm:bottom-0">
          <strong className="text-3xl">5+</strong>
          <br /> Anos de experiência
        </p>
      </div>
    </main>
  );
};
