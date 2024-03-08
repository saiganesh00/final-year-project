"use client";

import { useBudgetStore } from "@/store/BudgetStore";
import { Button } from "../ui/button";

type BudgetFormElementPropType = {
   index : number,
   label : string,
   budget : string
}

export default function BudgetFormElement({index , label , budget} : BudgetFormElementPropType) {

  const updateLabel = useBudgetStore((state) => state.updateLabel);
  const updateBudget = useBudgetStore((state) => state.updateBudget);


  return (
    <div className="h-fit flex  items-center justify-center gap-3 px-[16px] py-[12px]">
      <input
        type="text"
        className="h- 1/2 w-1/2 rounded-sm bg-[#F0F2F5] placeholder:text-gray-500 placeholder:text-xs  px-2 "
        placeholder="Enter The Reason"
        onChange={(e)=> {updateLabel(e.target.value , index)}}
      />
      <input
        type="text"
        className="h- 1/2 w-1/2 rounded-sm bg-[#F0F2F5] placeholder:text-gray-500 placeholder:text-xs  px-2 "
        placeholder="Enter The Cost"
        onChange={(e)=> {updateBudget(e.target.value , index)}}
      />
      <button>x</button>
    </div>
  );
}
