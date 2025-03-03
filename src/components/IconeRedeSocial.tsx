import { ComponentProps, ComponentType } from "react";

interface IconeRedeSocialProps extends ComponentProps<"a"> {
  Icone: ComponentType<any>;
}

export function IconeRedeSocial({ Icone, ...props }: IconeRedeSocialProps) {
  return (
    <a
      className="relative flex items-center justify-center cursor-pointer size-14"
      target="_blank"
      {...props}
    >
      <Icone height="24px" width="24px" />
      <div className="absolute inset-0 rounded-full hover:bg-highlight-light"></div>
    </a>
  );
}
