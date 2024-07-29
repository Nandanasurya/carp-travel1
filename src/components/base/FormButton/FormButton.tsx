import { dataCommon } from '@/data';

const FormButton = () => {
  const { formButton } = dataCommon;

  return (
    <button
      type="submit"
      className="flex mt-4 ml-auto text-3xl font-medium leading-none hover:underline focus:underline focus:outline-white md:mt-0 xl:text-[32px] xl:leading-none"
    >
      {formButton}
    </button>
  );
};

export default FormButton;
