/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Table = ({
  columns,
  rederRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  rederRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col, index) => (
            <th key={index} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => rederRow(item))}</tbody>
    </table>
  );
};

export default Table;
