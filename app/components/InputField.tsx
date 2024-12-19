/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
interface IInput {
  lable: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error: FieldError;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}
const InputField = ({
  lable,
  type,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: IInput) => {
  return (
    <div>
      <label htmlFor={lable} className="text-sm text-gray-500">
        {lable}
      </label>
      <input
        type={type}
        id={lable}
        {...register({ name })}
        className="ring-[1.5px] ring-gray-300 text-sm p-2 rounded-md w-full"
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error.message && (
        <p className="text-xs text-red-500">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
