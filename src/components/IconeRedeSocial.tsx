import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

interface IconeRedeSocialProps {
  Icone: ComponentType<IconProps>;
}

export function IconeRedeSocial({ Icone }: IconeRedeSocialProps) {
  return <Icone className="text-center" />;
}
