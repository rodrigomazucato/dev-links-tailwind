import { IconeSwitch } from "./IconeSwitch";
import { useState } from "react";

export function Switch() {
  const [temaEscuroAtivo, setTemaEscuroAtivo] = useState<boolean>(false);
  function alternarTema() {
    setTemaEscuroAtivo(!temaEscuroAtivo);
  }
  const tema = temaEscuroAtivo ? "dark" : "light";
  return (
    <div className="flex items-center justify-end w-16">
      <IconeSwitch onClick={alternarTema} temaEscuroAtivo={temaEscuroAtivo} />
      <div
        className={`w-15 h-6 mr-1 rounded-full outline outline-stroke-${tema}  bg-surface-${tema} `}
      />
    </div>
  );
}
