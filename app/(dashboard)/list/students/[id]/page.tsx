import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import PerformanceChart from "@/app/components/PerformanceChart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StudentSinglepage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Infor Card */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 gap-4 flex ">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt=""
                width={140}
                height={100}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4 ">
              <h1 className="text-xl font-semibold">Peter</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio enim nemo facilis
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src={"/blood.png"} alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src={"/date.png"} alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src={"/mail.png"} alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2 lg:w-full 2xl:w-1/3">
                  <Image src={"/phone.png"} alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex gap-4 justify-between  flex-wrap">
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleAttendance.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleBranch.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">grade</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleLesson.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">16</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">
        <div className="bg-white p-3.5 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="flex mt-4 gap-3.5 flex-wrap text-xs text-gray-500">
            <Link
              href={"/"}
              className="py-2 px-0.5 rounded-md bg-lamaSkyLight   "
            >
              {" "}
              Students&apos;s Lessons
            </Link>
            <Link
              href={"/"}
              className="py-2 px-1 rounded-md bg-lammaPurpleLight   "
            >
              {" "}
              Students&apos;s Teachers
            </Link>
            <Link
              href={"/"}
              className="py-2 px-1 rounded-md bg-lammaYellowLight   "
            >
              {" "}
              Students&apos;s Results
            </Link>
            <Link href={"/"} className="py-2 px-1 rounded-md bg-pink-50   ">
              {" "}
              Students&apos;s Exams
            </Link>
            <Link
              href={"/"}
              className="py-2 px-1 rounded-md bg-lamaSkyLight   "
            >
              {" "}
              Students&apos;s Assignments
            </Link>
          </div>
        </div>
        <div>
          <PerformanceChart />
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default StudentSinglepage;
