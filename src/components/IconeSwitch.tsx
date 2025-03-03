import { Moon, Sun } from "@phosphor-icons/react";
import { ComponentProps } from "react";

interface IconeSwitchProps extends ComponentProps<"button"> {
  temaEscuroAtivo: boolean;
}

export function IconeSwitch({ temaEscuroAtivo, ...props }: IconeSwitchProps) {
  return (
    <button
      className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer z-1 focus:outline-8 focus:outline-highlight-light drop-shadow hover:outline-8 hover:outline-highlight-light"
      {...props}
    >
      {temaEscuroAtivo ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </button>
  );
}
