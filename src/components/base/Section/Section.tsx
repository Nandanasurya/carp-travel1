interface ISectionProps {
  id: string;
  children: React.ReactNode;
  classNames?: string;
}

const Section = ({ id, children, classNames }: ISectionProps) => {
  return (
    <section id={id} className={`${id}-bg ${classNames}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
