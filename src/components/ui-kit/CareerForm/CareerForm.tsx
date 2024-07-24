'use client';

import Description from '@/components/base/Description/Description';
import FormButton from '@/components/base/FormButton/FormButton';
import FormField, {
  FormData,
  Name,
} from '@/components/base/FormField/FormField';
import data from '@/data/career.json';
import schema from '@/helpers/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMask } from '@react-input/mask';
import { useForm } from 'react-hook-form';

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { description2, formFields } = data;

  const inputRef = useMask({
    mask: '(___) __ __ ___',
    replacement: { _: /\d/ },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Description
        text={description2.text}
        className="w-[179px] ml-auto mb-6 whitespace-pre-line"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field) => (
          <FormField
            key={field.id}
            label={field.label}
            type={field.type}
            id={field.id}
            name={field.name as Name}
            errors={errors}
            register={register}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            inputRef={field.type === 'tel' ? inputRef : null}
          />
        ))}
        <FormButton />
      </form>
    </div>
  );
};

export default CareerForm;
