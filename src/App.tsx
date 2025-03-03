import {
  IoLogoGithub as Github,
  IoLogoInstagram as Instagram,
  IoMdMail as Email,
  IoLogoLinkedin as Linkedin,
} from "react-icons/io";
import { IconeSwitch } from "./components/IconeSwitch";
import { IconeRedeSocial } from "./components/IconeRedeSocial";
import { LinkContainer } from "./components/LinkContainer";
import { useState } from "react";

const usuario = "rodrigomazucato";

export function App() {
  const [ehTemaEscuro, setEhTemaEscuro] = useState(false);

  function alternarTema() {
    setEhTemaEscuro(!ehTemaEscuro);
  }

  return (
    <div
      className={`bg-[image:var(--background)] bg-cover bg-center transition-all duration-300 ${ehTemaEscuro && "dark"}`}
    >
      <div className="mx-auto flex w-4/5 flex-col items-center gap-8 py-16 sm:max-w-[34rem]">
        <div className="flex flex-col items-center space-y-4">
          <img
            className={`border-stroke size-28 rounded-full border-2`}
            src={`https://github.com/${usuario}.png`}
            alt="Imagem de perfil"
          />
          <span className="text-primary font-medium sm:font-normal">
            @{usuario}
          </span>
        </div>
        <button
          onClick={alternarTema}
          className={`focus:outline-stroke relative flex items-center focus:rounded-full ${!ehTemaEscuro && "justify-end"} cursor-pointer`}
        >
          <IconeSwitch ehTemaEscuro={ehTemaEscuro} />
          <div
            className={`outline-stroke bg-surface outline ${ehTemaEscuro ? "ml-1" : "mr-1"} h-6 w-16 rounded-full`}
          />
        </button>
        <div className="flex w-full flex-col gap-5">
          <LinkContainer
            texto="Conheça o projeto IgniteFeed"
            href="https://ignite-feed-rodrigo.vercel.app"
          />
          <LinkContainer
            texto="Divirta-se com o projeto Jogo da Velha"
            href="https://jogo-da-velha-rodrigo.vercel.app"
          />
          <LinkContainer
            texto="Acesse o projeto EduTech"
            href="https://rodrigomazucato.github.io/edu-tech"
          />
          <LinkContainer
            texto="Explore o universo da computação quântica"
            href="https://rodrigomazucato.github.io/computacao-quantica/"
          />
        </div>
        <div className="flex w-4/5 justify-between gap-3 sm:w-auto sm:justify-center">
          <IconeRedeSocial
            Icone={Github}
            href="https://github.com/rodrigomazucato"
          />
          <IconeRedeSocial
            Icone={Linkedin}
            href="https://www.linkedin.com/in/rodrigo-mazucato/"
          />
          <IconeRedeSocial
            Icone={Instagram}
            href="https://www.instagram.com/rodrigolopes.sp/"
          />
          <IconeRedeSocial
            Icone={Email}
            href="mailto:rodrigolopes.sp2005@gmail.com"
          />
        </div>
        <span className="text-primary px-2 text-center text-sm sm:text-base">
          Feito com muita dedicação 🚀 por <u>Rodrigo Mazucato</u>
        </span>
      </div>
    </div>
  );
}
