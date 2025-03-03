import { ComponentProps } from "react";
import { IconType } from "react-icons";

interface IconeRedeSocialProps extends ComponentProps<"a"> {
  Icone: IconType;
}

export function IconeRedeSocial({ Icone, ...props }: IconeRedeSocialProps) {
  return (
    <a
      className="focus:bg-highlight relative flex size-14 cursor-pointer items-center justify-center focus:rounded-full focus:outline-none"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icone className="text-primary size-7" />
      <div className="hover:bg-highlight absolute inset-0 rounded-full"></div>
    </a>
  );
}
