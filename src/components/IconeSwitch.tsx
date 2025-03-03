import { Moon, Sun } from "@phosphor-icons/react";

interface IconeSwitchProps {
  ehTemaEscuro: boolean;
}

export function IconeSwitch({ ehTemaEscuro }: IconeSwitchProps) {
  return (
    <button className="hover:outline-highlight absolute z-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow hover:outline-8">
      {ehTemaEscuro ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
