import {
  LogoGithub,
  LogoInstagram,
  LogoYoutube,
  LogoLinkedin,
} from "react-ionicons";
import { IconeRedeSocial } from "./components/IconeRedeSocial";
import { LinkContainer } from "./components/LinkContainer";
import { Switch } from "./components/Switch";

export function App() {
  const usuario = "rodrigomazucato";
  return (
    <div className="flex flex-col items-center gap-8 w-[540px] mx-auto my-16">
      <div className="flex flex-col items-center space-y-4">
        <img
          className="border rounded-full border-text-light size-28"
          src={`https://github.com/${usuario}.png`}
          alt="Imagem de perfil"
        />
        <span>@{usuario}</span>
      </div>
      <Switch />
      <div className="flex flex-col w-full gap-5">
        <LinkContainer texto="Inscreva-se no NLW" />
        <LinkContainer texto="Baixe meu ebook" />
        <LinkContainer texto="Veja meu portfólio" />
        <LinkContainer texto="Conheça o Explorer" />
      </div>
      <div className="flex justify-between gap-6">
        <IconeRedeSocial Icone={LogoGithub} href="https://github.com" />
        <IconeRedeSocial Icone={LogoInstagram} href="https://instagram.com" />
        <IconeRedeSocial Icone={LogoYoutube} href="https://youtube.com" />
        <IconeRedeSocial Icone={LogoLinkedin} href="https://linkedin.com" />
      </div>
      <span>
        Feito com muita dedicação 🚀 por <u>Rodrigo Mazucato</u>
      </span>
    </div>
  );
}
