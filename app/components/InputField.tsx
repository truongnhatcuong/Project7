/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
interface IInput {
  lable: string;
  type?: string;
  register: any;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  error: FieldError | null;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
  lable,
  type = "text",
  register,
  name,
  placeholder,
  defaultValue,
  error,
  inputProps,
}: IInput) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 gap-2">
      <label htmlFor={lable} className="text-xs text-gray-500">
        {lable}
      </label>
      <input
        type={type}
        id={lable}
        placeholder={placeholder}
        {...register(name)}
        className={`ring-[1.5px] ring-gray-300 text-sm p-2 rounded-md w-full ${
          error ? "ring-red-400" : ""
        }`}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="text-xs text-red-500">{error?.message?.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
