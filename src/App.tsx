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
    <div className="bg-[image:var(--bg-light)] bg-center bg-cover">
      <div className=" flex flex-col items-center gap-8 w-[540px] mx-auto py-16">
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
          <LinkContainer texto="Inscreva-se no NLW" href="#" />
          <LinkContainer texto="Baixe meu ebook" href="#" />
          <LinkContainer texto="Veja meu portfólio" href="#" />
          <LinkContainer texto="Conheça o Explorer" href="#" />
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
    </div>
  );
}
