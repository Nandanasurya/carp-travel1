import data from '@/data/contact.json';

const Email = () => {
  const { emailTitle, email } = data;

  return (
    <div className="flex gap-5 ml-4 items-center md:ml-0">
      <a
        href={`mailto:${email}`}
        aria-label={`send email${email}`}
        className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white md:text-base xl:text-lg xl:leading-6"
      >
        {email}
      </a>
      <p className="text-xs font-extralight leading-5 pt-[2px]">{emailTitle}</p>
    </div>
  );
};

export default Email;
