"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { JSX, useState } from "react";
import dynamic from "next/dynamic";
import ClassForm from "./Form/ClassForm";
import SubjectForm from "./Form/SubjectForm";
import LessonForm from "./Form/LessonForm";
import ExamForm from "./Form/ExamForm";
import AssignmentForm from "./Form/AssignmentForm";
import ResultForm from "./Form/ResultForm";
import AttendanceForm from "./Form/AttendanceForm";
import EventForm from "./Form/EventForm";
import AnnouncementForm from "./Form/Announcement";

const TeacherForm = dynamic(() => import("./Form/TeacherForm"), {
  loading: () => <h1>Loading....</h1>,
});
const StutentForm = dynamic(() => import("./Form/TeacherForm"), {
  loading: () => <h1>Loading....</h1>,
});
const ParentForm = dynamic(() => import("./Form/ParentForm"));
const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StutentForm type={type} data={data} />,
  parent: (type, data) => <ParentForm type={type} data={data} />,
  class: (type, data) => <ClassForm type={type} data={data} />,
  subject: (type, data) => <SubjectForm type={type} data={data} />,
  lesson: (type, data) => <LessonForm type={type} data={data} />,
  exam: (type, data) => <ExamForm type={type} data={data} />,
  assignment: (type, data) => <AssignmentForm type={type} data={data} />,
  result: (type, data) => <ResultForm type={type} data={data} />,
  attendance: (type, data) => <AttendanceForm type={type} data={data} />,
  event: (type, data) => <EventForm type={type} data={data} />,
  announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
};
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
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "form not found"
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
