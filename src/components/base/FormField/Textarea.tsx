import { IFormFieldProps } from './Input';

const Textarea = ({
  id,
  label,
  name,
  register,
  errors,
  autoComplete,
  className,
}: IFormFieldProps) => {
  return (
    <div className={`h-[221px] flex flex-col relative ${className}`}>
      <label
        htmlFor={id}
        className={`text-xs font-extralight leading-6 tracking-[2.4px] mb-1 ${errors[name] ? 'text-red' : 'text-white'}`}
      >
        {label}
      </label>
      <textarea
        id={id}
        {...register(name)}
        autoComplete={autoComplete}
        className={`bg-inputBg pl-2 text-[13px] font-extralight leading-6 resize-none h-full hover:bg-heroBtn focus:bg-heroBtn focus:outline-white ${errors[name] ? 'text-red' : 'text-white'}`}
      />
      <p
        className={`text-xs text-red font-extralight leading-6 md:leading-none tracking-[2.4px] absolute bottom-0 right-0 ${errors[name] ? 'errors' : ''}`}
      >
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default Textarea;
