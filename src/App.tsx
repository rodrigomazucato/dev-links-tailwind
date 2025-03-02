import {
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
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
      <div className="flex flex-col w-full gap-4">
        <LinkContainer texto="Inscreva-se no NLW" />
        <LinkContainer texto="Baixe meu ebook" />
        <LinkContainer texto="Veja meu portfólio" />
        <LinkContainer texto="Conheça o Explorer" />
      </div>
      <div>
        <IconeRedeSocial Icone={GithubLogo} />
        <IconeRedeSocial Icone={InstagramLogo} />
        <IconeRedeSocial Icone={YoutubeLogo} />
        <IconeRedeSocial Icone={LinkedinLogo} />
      </div>
      <span>Feito com ♥ pela Rocketseat</span>
    </div>
  );
}
