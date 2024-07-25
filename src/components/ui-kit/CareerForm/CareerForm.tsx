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
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { description2, formFields } = data;

  watch((data) => {
    localStorage.setItem('careerForm', JSON.stringify(data));
  });

  useEffect(() => {
    const storageData = localStorage.getItem('careerForm');
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue('username', result.username);
      setValue('email', result.email);
      setValue('position', result.position);
      setValue('phone', result.phone);
      setValue('message', result.message);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.removeItem('careerForm');
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
          />
        ))}
        <FormButton />
      </form>
    </div>
  );
};

export default CareerForm;
