import { ComponentProps } from "react";

interface LinkContainerProps extends ComponentProps<"a"> {
  texto: string;
}
export function LinkContainer({ texto, ...props }: LinkContainerProps) {
  return (
    <a
      className="p-4 font-medium text-center border rounded-2xl bg-surface-light border-stroke-light hover:bg-surface-hover-light hover:border-text-light"
      target="_blank"
      {...props}
    >
      {texto}
    </a>
  );
}
