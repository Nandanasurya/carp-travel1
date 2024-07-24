import data from '@/data/contact.json';

const Phone = () => {
  const { phoneTitle, phone } = data;

  return (
    <div className="flex gap-5 ml-auto">
      <div className="flex flex-col">
        <a
          href={`tel:+${phone.number1.replace(/\s|\(|\)/g, '')}`}
          aria-label={`call number ${phone.number1}`}
          className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white"
        >
          {phone.number1}
        </a>
        <a
          href={`tel:+${phone.number1.replace(/\s|\(|\)/g, '')}`}
          aria-label={`call number ${phone.number2}`}
          className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white"
        >
          {phone.number2}
        </a>
      </div>
      <p className="text-xs font-extralight leading-5 pt-[2px]">{phoneTitle}</p>
    </div>
  );
};

export default Phone;
