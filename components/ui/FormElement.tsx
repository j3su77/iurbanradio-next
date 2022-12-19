import { FC } from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: boolean
  errorMessage?: string
  validate?: boolean 
};
export const InputField: FC<InputProps>=  ({ label, register, required , error, errorMessage}) => {

  return (
    <>
    <label>{label}</label>
    <input {...register(label, { required })} />
    {
      error && (
        <span>{errorMessage}</span>
      )
    }
  </>
  );
}
