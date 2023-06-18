import { FieldError, UseFormRegister } from 'react-hook-form';

import { Column, Field, Text } from "@/components";

import { DecorationProps, DisplayProps } from "@/interface/styled";

interface TextFieldProps extends DisplayProps, DecorationProps {
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
}

export const TextField = ({ label, placeholder, type, register, name, error, mb}: TextFieldProps) => (
  <Column>
    <Text variant="small" fontWeight="600">{label}</Text>
    <Field type={type} placeholder={placeholder} {...register(name)} mb={mb}/>
    {error && (
      <Text variant="tiny" color="red" mb="s2">
        {error.message}
      </Text>
    )}
  </Column>
);
