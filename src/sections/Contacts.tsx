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
      <div className="flex flex-col mt-9 mb-3 gap-6">
        <Phone />
        <Email />
        <Social />
      </div>
      <ContactForm />
    </Section>
  );
};

export default Contacts;
