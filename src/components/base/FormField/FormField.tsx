import { FieldErrors, UseFormRegister } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface IFormFieldProps {
  id?: string;
  label: string;
  type: string;
  name: Name;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  placeholder?: string;
  component?: React.ReactNode;
  autoComplete?: string;
  className?: string;
}

export type Name =
  | 'username'
  | 'email'
  | 'position'
  | 'phone'
  | 'message'
  | 'checked';

export type FormData = {
  username: string;
  email: string;
  position?: string;
  phone?: string;
  message?: string;
  checked?: boolean;
};

const FormField = ({
  label,
  type,
  name,
  register,
  errors,
  placeholder,
  autoComplete,
  id,
  className,
}: IFormFieldProps) => {
  return (
    <>
      {type === 'checkbox' ? (
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
      ) : type === 'textarea' ? (
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
      ) : (
        <div className={`h-[76px] flex flex-col relative ${className}`}>
          <label
            htmlFor={id}
            className={`text-xs font-extralight leading-6 tracking-[2.4px] mb-1 ${errors[name] ? 'text-red' : 'text-white'}`}
          >
            {label}
          </label>
          {type === 'tel' ? (
            <>
              <InputMask
                mask={'(999) 99 99 999'}
                alwaysShowMask={false}
                type={type}
                id={name}
                {...register(name)}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className={`bg-inputBg ${type === 'tel' ? 'pl-10 xl:pl-[52px]' : 'pl-2'} text-[13px] font-extralight leading-6 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 placeholder:opacity-20 xl:placeholder:text-xl xl:placeholder:leading-6 xl:h-7 xl:text-xl xl:leading-6 hover:bg-heroBtn focus:bg-heroBtn focus:outline-white ${errors[name] ? 'text-red' : 'text-white'}`}
              />
              {type === 'tel' && (
                <span className="absolute left-2 top-[53%] md:top-[59%] transform -translate-y-1/2 text-[13px] font-extralight leading-6 xl:text-xl xl:leading-6 xl:top-[52%]">
                  +38
                </span>
              )}
            </>
          ) : (
            <input
              type={type}
              id={name}
              {...register(name)}
              placeholder={placeholder}
              autoComplete={autoComplete}
              className={`bg-inputBg ${type === 'tel' ? 'pl-10' : 'pl-2'} text-[13px] font-extralight leading-6 placeholder:text-[13px] placeholder:font-extralight placeholder:leading-6 placeholder:opacity-20 xl:placeholder:text-xl xl:placeholder:leading-6 xl:h-7 xl:text-xl xl:leading-6 hover:bg-heroBtn focus:bg-heroBtn focus:outline-white ${errors[name] ? 'text-red' : 'text-white'}`}
            />
          )}

          <p
            className={`text-xs text-red font-extralight leading-6 md:leading-none tracking-[2.4px] absolute bottom-0 right-0 ${errors[name] ? 'errors' : ''}`}
          >
            {errors[name]?.message}
          </p>
        </div>
      )}
    </>
  );
};

export default FormField;
