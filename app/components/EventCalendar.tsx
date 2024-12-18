"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const event = [
  {
    id: 1,
    title: "Ngày hội thể thao",
    time: "2024-12-20 08:00",
    description:
      "Ngày hội thể thao sẽ diễn ra với các hoạt động thể dục thể thao sôi động, giúp học sinh tăng cường sức khỏe và tinh thần đồng đội.",
  },
  {
    id: 2,
    title: "Lễ hội văn hóa",
    time: "2024-12-25 09:00",
    description:
      "Lễ hội văn hóa với các tiết mục nghệ thuật đặc sắc, giúp học sinh giao lưu, học hỏi và hiểu thêm về các nền văn hóa khác nhau.",
  },
  {
    id: 3,
    title: "Cuộc thi học sinh giỏi",
    time: "2024-12-30 07:30",
    description:
      "Cuộc thi học sinh giỏi diễn ra nhằm tìm ra những tài năng xuất sắc trong các môn học, khuyến khích học sinh phát huy khả năng và đam mê học tập.",
  },
];
const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setValue(new Date());
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-md ">
      <Calendar onChange={setValue} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-3">Events</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {event.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-b-lammaPurple "
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{item.title}</h1>
              <span className="text-gray-300 text-sm">{item.time}</span>
            </div>
            <p className="mt-1 text-gray-400 text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
