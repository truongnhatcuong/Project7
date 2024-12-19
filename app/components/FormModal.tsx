"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React, { useState } from "react";
import TeacherForm from "./Form/TeacherForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attencement"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "h-8 w-8" : "h-7 w-7";
  const bgColer =
    type === "create"
      ? "bg-lammaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lammaPurple";
  const [open, setOpen] = useState<boolean>(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost . are you sure you want delete this ${table}
        </span>
        <button className="bg-red-600 text-white py-2 px-4 rounded-md border-none w-max self-center">
          DELETE
        </button>
      </form>
    ) : (
      <TeacherForm type="create" />
    );
  };
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColer}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" height={16} width={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-md w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%]  2xl:w-[60%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src={"/close.png"} alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
