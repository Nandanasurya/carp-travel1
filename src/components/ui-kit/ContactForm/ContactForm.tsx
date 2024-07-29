'use client';

import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast, { Toaster } from 'react-hot-toast';

import { FormField, FormData, Name } from '@/components/base/FormField';
import { FormButton } from '@/components/base/FormButton';

import { schema } from '@/helpers';

import { dataContact } from '@/data';

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
  const { formFields, textarea } = dataContact;

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
    try {
      console.log(data);
      toast.success('Your data has been successfully sent!');
      localStorage.removeItem('contactForm');
      reset();
    } catch (error) {
      toast.error('Something went wrong, try again.');
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="md:flex md:flex-col">
        <div className="md:flex md:gap-5 md:mb-4 xl:flex-col xl:gap-4 xl:mb-6">
          <div className="md:w-[221px] xl:flex xl:gap-7 xl:w-auto">
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
                className="xl:w-[293px]"
              />
            ))}
          </div>
          <FormField
            key={textarea.id}
            label={textarea.label}
            type={textarea.type}
            id={textarea.id}
            name={textarea.name as Name}
            errors={errors}
            register={register}
            className="md:h-[249px] md:w-[463px] xl:h-[202px] xl:w-auto"
          />
        </div>
        <FormButton />
      </form>
    </>
  );
};

export default ContactForm;
