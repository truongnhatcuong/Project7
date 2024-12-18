import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="items-center flex justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              17-12-2024
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eum
            sit voluptatem libero est enim at quibusdam veritatis animi illo cum
          </p>
        </div>
        <div className="bg-lammaPurple rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              17-12-2024
            </span>
          </div>
          <p className="text-sm text-gray-600">
            sit voluptatem libero est enim at quibusdam veritatis animi illo cum
            minima, maiores eveniet obcaecati, vitae voluptas illum. Fugit,
            deserunt!
          </p>
        </div>
        <div className="bg-lammaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">
              17-12-2024
            </span>
          </div>
          <p className="text-sm text-gray-600">
            dolor sit amet consectetur adipisicing elit. Optio, eum sit
            voluptatem libero est enim at minima, maiores eveniet obcaecati,
            vitae voluptas illum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
