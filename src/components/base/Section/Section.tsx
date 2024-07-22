interface ISectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: ISectionProps) => {
  return (
    <section id={id} className={`${id}-bg`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
