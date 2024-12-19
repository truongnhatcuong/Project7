/* eslint-disable @typescript-eslint/no-explicit-any */

import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(5, { message: "username  nhập ít nhất 5 kí tự" })
    .max(20, { message: "username  nhập ít hơn 20 kí tự" }),
  email: z.string().email({ message: "địa chỉ email không hợp lệ" }),
  password: z.string().min(8, { message: "mật khẩu  nhập ít nhất 8 kí tự" }),
  firstName: z.string().min(1, { message: "firtname bắt buộc!" }),
  lastName: z.string().min(1, { message: "lastname bắt buộc!" }),
  phone: z.string().min(1, { message: "phone bắt buộc!" }),
  address: z.string().min(1, { message: " address bắt buộc!" }),
  bloodType: z.string().min(1, { message: " address bắt buộc!" }),
  birthday: z.string().min(1, { message: "bloodType bắt buộc!" }),
  sex: z.enum(["male", "female"], { message: "sex bắt buộc!" }),
  img: z.instanceof(File, { message: "Image bắt buộc!" }),
});
type StutentValues = z.infer<typeof schema>;
const LessonForm = ({
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
  } = useForm<StutentValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Lesson</h1>
      <span className="text-sm text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between  ">
        {/* username */}
        <InputField
          lable="Username"
          name="username"
          type="text"
          placeholder="username ..."
          defaultValue={data?.username}
          register={register}
          error={errors?.username || null}
        />
        {/* email */}
        <InputField
          lable="Email"
          name="email"
          type="text"
          placeholder="email ..."
          defaultValue={data?.email}
          register={register}
          error={errors?.email || null}
        />
        {/* password */}
        <InputField
          lable="Password"
          name="password"
          type="password"
          placeholder="password ..."
          defaultValue={data?.password}
          register={register}
          error={errors?.password || null}
        />
      </div>
      <span className="text-sm text-gray-400 font-medium">
        personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          lable="First name"
          name="firstName"
          type="text"
          placeholder="frist name ..."
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName || null}
        />
        <InputField
          lable="Last Name"
          name="lastName"
          type="text"
          placeholder="lastName ..."
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName || null}
        />
        <InputField
          lable="Phone"
          name="phone"
          type="text"
          placeholder="phone ..."
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone || null}
        />
        <InputField
          lable="address"
          name="address"
          type="text"
          placeholder="address ..."
          defaultValue={data?.address}
          register={register}
          error={errors?.address || null}
        />
        <InputField
          lable="bloodType"
          name="bloodType"
          type="text"
          placeholder="bloodType ..."
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType || null}
        />
        <InputField
          lable="birthday"
          name="birthday"
          type="date"
          placeholder="birthday ..."
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday || null}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4 ">
          <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer">
            Sex
          </label>
          <select
            className={`ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full }`}
            {...register("sex")}
          >
            <option value="male">Male</option>
            <option value="male">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-500">
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label htmlFor="image" className="text-xs text-gray-500">
            <Image src={"/upload.png"} alt="" width={28} height={28} />
            <span>upload file</span>
          </label>
          <input
            type="file"
            {...register("img")}
            className="hidden"
            id="image"
          />
          {errors.img?.message && (
            <p className="text-xs text-red-500">
              {errors.img?.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default LessonForm;
