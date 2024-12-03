// // components/Table.js
// import React from "react";

// const Table = ({ columns, data }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//         <TableHeader columns={columns} />
//         <TableBody data={data} columns={columns} />
//       </table>
//     </div>
//   );
// };

// const TableHeader = ({ columns }) => (
//   <thead className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-gray-300">
//     <tr>
//       {columns.map((col) => (
//         <th
//           key={col.key}
//           className="text-left px-6 py-3 text-sm font-semibold text-blue-900 uppercase tracking-wider"
//         >
//           {col.title}
//         </th>
//       ))}
//     </tr>
//   </thead>
// );

// const TableBody = ({ data, columns }) => (
//   <tbody>
//     {data.map((row, rowIndex) => (
//       <TableRow key={rowIndex} row={row} columns={columns} />
//     ))}
//   </tbody>
// );

// const TableRow = ({ row, columns }) => (
//   <tr className="border-b border-gray-200 hover:bg-blue-50">
//     {columns.map((col) => (
//       <td
//         key={col.key}
//         className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
//       >
//         {row[col.key]}
//       </td>
//     ))}
//   </tr>
// );

// export default Table;

















import React from "react";

const Table = ({ columns, data, onDetailsClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} onDetailsClick={onDetailsClick} />
      </table>
    </div>
  );
};

const TableHeader = ({ columns }) => (
  <thead className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-gray-300">
    <tr>
      {columns.map((col) => (
        <th
          key={col.key}
          className="text-left px-6 py-3 text-sm font-semibold text-blue-900 uppercase tracking-wider"
        >
          {col.title}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = ({ data, columns, onDetailsClick }) => (
  <tbody>
    {data.map((row, rowIndex) => (
      <TableRow
        key={rowIndex}
        row={row}
        columns={columns}
        onDetailsClick={onDetailsClick}
      />
    ))}
  </tbody>
);

const TableRow = ({ row, columns, onDetailsClick }) => (
  <tr className="border-b border-gray-200 hover:bg-blue-50">
    {columns.map((col) => (
      <td
        key={col.key}
        className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
      >
        {col.key === "details" ? (
          <button
            onClick={() => onDetailsClick(row)}
            className="text-blue-500 hover:text-blue-700 transition"
          >
            View Details
          </button>
        ) : (
          row[col.key]
        )}
      </td>
    ))}
  </tr>
);

export default Table;
