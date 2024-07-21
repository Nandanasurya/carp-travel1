// import { Element } from 'react-scroll';

interface ISectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<ISectionProps> = ({ id, children }) => {
  return (
    <section className={`${id}-bg`}>
      <div id={id} className="container">
        {/* <Element name={name} className="element"> */}
        {children}
        {/* </Element> */}
      </div>
    </section>
  );
};

export default Section;
