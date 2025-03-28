import { dataContact } from '@/data';

const Phone = () => {
  const { phoneTitle, phone } = dataContact;

  return (
    <div className="flex gap-5 w-fit ml-auto md:ml-[30px]">
      <div className="flex flex-col">
        <a
          href={`tel:+${phone.number1.replace(/\s|\(|\)/g, '')}`}
          aria-label={`call number ${phone.number1}`}
          className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white md:text-base xl:text-lg xl:leading-6"
        >
          {phone.number1}
        </a>
        <a
          href={`tel:+${phone.number1.replace(/\s|\(|\)/g, '')}`}
          aria-label={`call number ${phone.number2}`}
          className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white md:text-base xl:text-lg xl:leading-6"
        >
          {phone.number2}
        </a>
      </div>
      <p className="text-xs font-extralight leading-5 pt-[2px]">{phoneTitle}</p>
    </div>
  );
};

export default Phone;
