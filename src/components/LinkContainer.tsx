import { ComponentProps } from "react";

interface LinkContainerProps extends ComponentProps<"a"> {
  texto: string;
}
export function LinkContainer({ texto, ...props }: LinkContainerProps) {
  return (
    <a
      className="bg-surface border-stroke hover:bg-surface-hover hover:border-primary text-primary rounded-2xl border p-4 text-center text-sm font-medium"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {texto}
    </a>
  );
}
