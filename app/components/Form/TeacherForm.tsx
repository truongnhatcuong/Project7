/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  username: z
    .string()
    .min(5, { message: "usernname vui lòng nhập ít nhất 5 kí tự" })
    .max(20, { message: "usernname vui lòng nhập ít hơn 20 kí tự" }),
  email: z.string().email({ message: "địa chỉ email không hợp lệ" }),
  password: z.string().min(8, { message: "mật khẩu  nhập ít nhất 8 kí tự" }),
  firstName: z.string().min(1, { message: "firtname bắt buộc!" }),
  lastName: z.string().min(1, { message: "lastname bắt buộc!" }),
  phone: z.string().min(1, { message: "phone bắt buộc!" }),
  address: z.string().min(1, { message: " address bắt buộc!" }),
  birthday: z.string().min(1, { message: "birthday bắt buộc!" }),
  sex: z.enum(["male", "female"], { message: "sex bắt buộc!" }),
  img: z.instanceof(File, { message: "Image bắt buộc!" }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-sm text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-col w-full md:w-1/4 gap-2">
        {/* username */}
        <label htmlFor="username" className="text-sm text-gray-500">
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username")}
          className="ring-[1.5px] ring-gray-300 text-sm p-2 rounded-md w-full"
        />
      </div>
      {errors.username?.message && (
        <p className="text-xs text-red-500">
          {errors.username?.message.toString()}
        </p>
      )}
      <span className="text-sm text-gray-400 font-medium">
        personal Information
      </span>
      <button className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
