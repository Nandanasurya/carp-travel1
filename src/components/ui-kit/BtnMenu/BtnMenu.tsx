interface IBtnMenuProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const BtnMenu = ({ onClick, text, className }: IBtnMenuProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="button open mobile menu"
      className={`text-sm uppercase font-normal tracking-[1.4px] hover:underline focus:underline focus:outline-white ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnMenu;
