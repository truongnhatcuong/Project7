import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import React from "react";

const ParentPage = () => {
  return (
    <div className="p-4 flex gap-4 xl:flex-row flex-col flex-1">
      {/* left */}
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md ">
          <h1 className="font-semibold text-xl">Schedule(Cuong)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
