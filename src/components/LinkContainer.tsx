interface LinkContainerProps {
  texto: string;
}
export function LinkContainer({ texto }: LinkContainerProps) {
  return (
    <a
      href="#"
      className="p-4 text-center border rounded-lg bg-surface-light border-stroke-light hover:border-text-light"
    >
      {texto}
    </a>
  );
}
