import { ComponentProps } from "react";
import { IconType } from "react-icons";

interface IconeRedeSocialProps extends ComponentProps<"a"> {
  Icone: IconType;
}

export function IconeRedeSocial({ Icone, ...props }: IconeRedeSocialProps) {
  return (
    <a
      className="focus:bg-highlight relative flex cursor-pointer items-center justify-center p-3 focus:rounded-full focus:outline-none sm:p-4"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <Icone className="text-primary size-7 sm:size-8" />
      <div className="hover:bg-highlight absolute inset-0 rounded-full"></div>
    </a>
  );
}
