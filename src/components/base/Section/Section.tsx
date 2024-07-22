interface ISectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = ({ id, children }) => {
  return (
    <section id={id} className={`${id}-bg`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
