"use client";

import { useBudgetStore } from "@/store/BudgetStore";

export default function Table() {
  const data = useBudgetStore((state) => state.data);
  return (
    <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border">S.No.</th>
          <th className="px-4 py-2 border">Particulars</th>
          <th className="px-4 py-2 border">Amount in Rs</th>
        </tr>
      </thead>
      <tbody>
        
        {data.map(ele => {
          return  <tr>
          <td className="border px-4 py-2">{ele.index+1}</td>
          <td className="border px-4 py-2">{ele.label}</td>
          <td className="border px-4 py-2"> {ele.budget}</td>
          </tr> 
        })}

       
      </tbody>
    </table>
  </div>
  );
}

