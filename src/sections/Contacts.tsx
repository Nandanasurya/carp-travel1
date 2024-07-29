import Section from '@/components/base/Section/Section';
import Title from '@/components/base/Title/Title';
import ContactForm from '@/components/ui-kit/ContactForm/ContactForm';
import Email from '@/components/ui-kit/Email/Email';
import Phone from '@/components/ui-kit/Phone/Phone';
import Social from '@/components/ui-kit/Social/Social';
import data from '@/data/contact.json';

const Contacts = () => {
  const { title1, title2 } = data;

  return (
    <Section id="contacts">
      <Title title1={title1} title2={title2} />
      <div className="xl:flex xl:mt-[71px]">
        <div className="flex flex-col mt-9 mb-3 gap-6 md:justify-between md:flex-row md:mb-16 md:ml-[34px] md:w-[525px] xl:flex-col xl:mt-0 xl:ml-[83px] xl:mb-0">
          <div className="md:flex md:flex-col md:gap-6 xl:gap-16 xl:mb-[124px]">
            <Phone />
            <Email />
          </div>
          <Social />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contacts;
