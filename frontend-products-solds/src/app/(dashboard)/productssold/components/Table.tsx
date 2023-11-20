
import React from 'react';

type ProductSold = {
  id: number;
  type: number;
  date: string;
  description: string;
  value: number;
  seller: string;
};

type TableProps = {
  data: ProductSold[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border rounded-md overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Type</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Value</th>
            <th className="py-2 px-4">Seller</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.type}</td>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.description}</td>
              <td className="py-2 px-4">{item.value}</td>
              <td className="py-2 px-4">{item.seller}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

