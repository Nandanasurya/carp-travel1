import { IFormFieldProps } from './Input';

const Checkbox = ({
  label,
  type,
  name,
  register,
  errors,
  id,
}: IFormFieldProps) => {
  return (
    <div className="flex items-start gap-2 mt-4 md:mt-0 relative">
      <input type={type} id={id} {...register(name)} className="checkbox" />
      <span className="w-4 h-4 absolute top-[3px] left-[3px] bg-white opacity-10"></span>
      <label
        htmlFor={id}
        className="text-xs font-extralight leading-6 md:w-[192px] xl:w-[258px]"
      >
        {label}
      </label>
      <p
        className={`text-xs text-red font-extralight leading-6 md:leading-none tracking-[2.4px] absolute bottom-[-14px] right-0 ${errors[name] && 'errors'}`}
      >
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default Checkbox;
