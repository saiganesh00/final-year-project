"use client";
import BudgetFormElement from "@/components/normal/BudgetForm";
import FormElement from "@/components/normal/FormElement";
import Table from "@/components/normal/Tabel";
import { Button } from "@/components/ui/button";
import cx from "@/lib/cx";
import { useBudgetStore } from "@/store/BudgetStore";
import { FormEvent, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";



export default function page() {
        
    const addNew = useBudgetStore((state) => state.addNew)
    const data = useBudgetStore((state) => state.data);
    
    const [eventName , setEventName] = useState("EventName");
    
    const componentRef = useRef<HTMLDivElement>(null);

    const print = useReactToPrint({
      content: () => componentRef.current,
    });
  
    const handelPrint = async (e: FormEvent) => {
      e.preventDefault();
      await delay(2000);
      print();
    };
  
    function delay(time : number) {
      return new Promise((res) =>  setTimeout(res , time));
    }
  
  return (
    <div className="flex justify-center">
      <div className="w-[1280px] h-[800px] px-[24px] py-[20px]">
        <div className="flex w-full h-full">
          {/* Total Form */}
          <div className="w-1/2">
            {/* Form Element */}
            <form onSubmit={handelPrint}>
              <Button type="submit">Generate Circular</Button>
              <FormElement label="EventName" onChangefn={() => {}} />
              <FormElement label="startDate" onChangefn={() => {}} />
              <FormElement label="endDate" onChangefn={() => {}} />
            </form>
            <div className="w-full flex">
                <Button className="mr-4" onClick={()=>addNew("" , "0")}>+</Button>
              </div>
            {data.map((ele)=>{
                return <BudgetFormElement {...ele}/>
            })}
          </div>

          <div className="w-[973px] ">
            <div className="p-8 border border-black">
              <div
                className={cx("flex justify-center items-center")}
                ref={componentRef}
              >
                <div className="w-[550pt] h-full ">
                  <div className="h-3/4">
                    <div className="h-[15%]  flex justify-center ">
                      <div className="w-[80%]  border-b border-gray-500 flex items-center">
                        <img
                          src="/Header.png"
                          alt="College Header"
                          className="dark:invert w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="h-[85%]  flex flex-col items-center gap-5 ">
                      <h1 className="text-xl tracking-wide font-bold">
                        {" "}
                        Department of {"computer science "}
                      </h1>
                      <div className="w-full text-end p-3">Date : 0-0-0</div>
                      <h1 className="text-xl tracking-wide font-bold underline underline-offset-4">
                        Budget Utilization Report
                      </h1>
                      {/* content */}
                      Name of the Programme: “A Five Day Faculty Development
                      Program on “ Secure Coding Techniques “
                      <h1>
                        Date: 07-07-2023 to 12-07-2023 Number of Registered
                        Participants: 64
                      </h1>
                      <Table />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
