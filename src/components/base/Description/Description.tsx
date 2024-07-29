interface IDescriptionProps {
  text: string;
  bold?: string;
  className?: string;
}

const Description = ({ text, bold, className }: IDescriptionProps) => {
  return (
    <p
      className={`text-sm font-extralight leading-5 ${className} md:text-base md:leading-5 xl:text-lg xl:leading-6`}
    >
      <span className="font-normal">{bold}</span>&#32;{text}
    </p>
  );
};

export default Description;
