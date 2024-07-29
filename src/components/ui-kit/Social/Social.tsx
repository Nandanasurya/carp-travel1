import { dataContact } from '@/data';

const Social = () => {
  const { socialTitle, social } = dataContact;

  return (
    <div className="flex gap-5 mr-4 ml-auto md:m-0 xl:flex-row-reverse xl:ml-[124px] xl:mr-auto">
      <p className="text-xs font-extralight leading-5 pt-[2px]">
        {socialTitle}
      </p>
      <ul>
        {social.map(({ title, link }) => (
          <li key={title} className="xl:text-right">
            <a
              href={link}
              aria-label={`link to ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white md:text-base xl:text-lg xl:leading-6"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
