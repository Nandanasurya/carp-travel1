interface IButtonSlideProps {
  text: string;
  onClick: () => void;
}

const ButtonSlide = ({ onClick, text }: IButtonSlideProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[33px] font-thin leading-normal uppercase xl:leading-none hover:underline focus:underline focus:outline-white"
    >
      {text}
    </button>
  );
};

export default ButtonSlide;
