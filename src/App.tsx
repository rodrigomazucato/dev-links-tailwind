import {
  IoLogoGithub as Github,
  IoLogoInstagram as Instagram,
  IoLogoYoutube as Youtube,
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
      <div className="mx-auto flex w-[540px] flex-col items-center gap-8 py-16">
        <div className="flex flex-col items-center space-y-4">
          <img
            className={`border-stroke size-28 rounded-full border-2`}
            src={`https://github.com/${usuario}.png`}
            alt="Imagem de perfil"
          />
          <span className="text-primary">@{usuario}</span>
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
          <LinkContainer texto="Inscreva-se no NLW" href="#" />
          <LinkContainer texto="Baixe meu ebook" href="#" />
          <LinkContainer texto="Veja meu portfólio" href="#" />
          <LinkContainer texto="Conheça o Explorer" href="#" />
        </div>
        <div className="flex justify-between gap-6">
          <IconeRedeSocial Icone={Github} href="https://github.com" />
          <IconeRedeSocial Icone={Instagram} href="https://instagram.com" />
          <IconeRedeSocial Icone={Youtube} href="https://youtube.com" />
          <IconeRedeSocial Icone={Linkedin} href="https://linkedin.com" />
        </div>
        <span className="text-primary text-sm">
          Feito com muita dedicação 🚀 por <u>Rodrigo Mazucato</u>
        </span>
      </div>
    </div>
  );
}
