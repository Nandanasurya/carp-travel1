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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const { formFields } = data;

  const onSubmit = (data: FormData) => {
    console.log(data);
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
