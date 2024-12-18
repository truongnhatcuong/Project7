import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import EventCalendar from "@/app/components/EventCalendar";
import React from "react";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 xl:flex-row flex-col">
      {/* left */}
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold">Schedule(4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-7">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
