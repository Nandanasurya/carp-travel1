import data from '@/data/common.json';

const FormButton = () => {
  const { formButton } = data;

  return (
    <button
      type="submit"
      className="flex mt-4 ml-auto hover:underline focus:underline focus:outline-white"
    >
      {formButton}
    </button>
  );
};

export default FormButton;
