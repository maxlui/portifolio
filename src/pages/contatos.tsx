import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";

const Contatos = () => {
  return (
    <>
      <Head>
        <title> Contatos | Luiz </title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-txl font-bold text-center">
          Contatos
        </h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          <li className="md:text-xl">
            <span className="font-bold"> E-mail </span>
            <div className="flex gap1 md:gap-3 items-center">
              <a
                href="mailto:maxlui12@gmail.com"
                className="text-sm md:text-lg text-slate-300 underline truncate"
              >
                maxlui12@gmail.com
              </a>
              <CopyButton textToCopy="maxlui12@gmail.com" />
            </div>
          </li>
          <li>
            <span className="md:text-xl"> Linkdin </span>
            <div className="flex gap1 md:gap-3 items-center">
              <a
                href="https://www.linkedin.com/in/luiz-silva-000125/"
                className="text-sm md:text-lg text-slate-300 underline truncate">
                https://www.linkedin.com/in/luiz-silva-000125/
              </a>
            </div>
          </li>
          <li>
            <span className="md:text-xl"> GitLab | GitLab </span>
            <div className="flex gap1 md:gap-3 items-center">
              <a
                href="https://gitlab.com/maxlui"
                className="text-sm md:text-lg text-slate-300 underline truncate">
                https://gitlab.com/maxlui
              </a>
            </div>
          </li>
          <li>
            <span className="md:text-xl"> YouTube </span>
            <div className="flex gap1 md:gap-3 items-center">
              <a
                href="https://www.youtube.com/channel/UCZksmEki_2Q7nrQxg2-98xw"
                className="text-sm md:text-lg text-slate-300 underline truncate">
                https://www.youtube.com/channel/UCZksmEki_2Q7nrQxg2-98xw
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contatos;