'use client';

import FormField, {
  FormData,
  Name,
} from '@/components/base/FormField/FormField';
import FormButton from '@/components/base/FormButton/FormButton';
import data from '@/data/contact.json';
import schema from '@/helpers/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });
  const { formFields } = data;

  watch((data) => {
    localStorage.setItem('contactForm', JSON.stringify(data));
  });

  useEffect(() => {
    const storageData = localStorage.getItem('contactForm');
    if (storageData !== null) {
      const result = JSON.parse(storageData);
      setValue('username', result.username);
      setValue('email', result.email);
      setValue('message', result.message);
    }
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    localStorage.removeItem('contactForm');
    reset();
  };

  return (
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
  );
};

export default ContactForm;
