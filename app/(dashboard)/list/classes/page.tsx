import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";

import React from "react";

interface IClasses {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}

const columns = [
  {
    header: "Class Name",
    accessor: "classname",
  },
  {
    header: "Capacity",
    accessor: "Capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Super Visor",
    accessor: "supervisor",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];
const ClassesListPage = () => {
  const rederRow = (item: IClasses) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-xs hover:bg-lamaSkyLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col ">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold hidden md:block">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button
              className="w-8 h-8 flex items-center justify-center
             rounded-full bg-lammaYellow"
            >
              <Image src={"/filter.png"} alt=" " height={14} width={14} />
            </button>
            <button
              className="w-8 h-8 flex items-center justify-center
             rounded-full bg-lammaYellow"
            >
              <Image src={"/sort.png"} alt=" " height={14} width={14} />
            </button>
            <FormModal table="class" type="create" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <div>
        <Table columns={columns} rederRow={rederRow} data={classesData} />
      </div>
      {/* PAGINATION */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ClassesListPage;
