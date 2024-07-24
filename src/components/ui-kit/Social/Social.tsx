import data from '@/data/contact.json';

const Social = () => {
  const { socialTitle, social } = data;

  return (
    <div className="flex gap-5 mr-4 ml-auto">
      <p className="text-xs font-extralight leading-5 pt-[2px]">
        {socialTitle}
      </p>
      <ul>
        {social.map(({ title, link }) => (
          <li key={title}>
            <a
              href={link}
              aria-label={`link to ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal leading-6 hover:underline focus:underline focus:outline-white"
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
