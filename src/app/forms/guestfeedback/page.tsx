"use client";
import BudgetFormElement from "@/components/normal/BudgetForm";
import FormElement from "@/components/normal/FormElement";
import Table from "@/components/normal/Tabel";
import { Button } from "@/components/ui/button";
import cx from "@/lib/cx";
import { useBudgetStore } from "@/store/BudgetStore";
import { FormEvent, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";



export default function guestFeedBackPage() {
     
 

  
   
  const [ip1 , setIp1]  = useState<string>("");
  const [ip2 , setIp2]  = useState<string>("");
  const [ip3 , setIp3]  = useState<string>("");
  const [ip4 , setIp4]  = useState<string>("");
  const [ip5 , setIp5]  = useState<string>("");

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
              <FormElement label="Organizing Members Involvement" onChangefn={setIp1} />
              <FormElement label="Programme Organisation" onChangefn={setIp2} />
              <FormElement label="Participants’Involvement" onChangefn={setIp3} />
              <FormElement label= "Venue& Arrangements" onChangefn={setIp4} />
              <FormElement label="Hospitality" onChangefn={setIp5} />
            </form>
             
                      
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
                      Resource Person’s Feedback
                      </h1>
                      {/* content */}
                      Name of the Event : “A Five Day Faculty Development
                      Program on “ Secure Coding Techniques “
                      <div className="overflow-x-auto">
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 border">S.No.</th>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Feedback (Out of 5)</th>
          <th className="px-4 py-2 border"> Remarks </th>
        </tr>
      </thead>
      <tbody>
        
         <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Organizing Members Involvement</td>
          <td className="border px-4 py-2">{ip1}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">Programme Organisation</td>
          <td className="border px-4 py-2">{ip2}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Participants’Involvement</td>
          <td className="border px-4 py-2">{ip3}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">Venue& Arrangements</td>
          <td className="border px-4 py-2">{ip4}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
          <tr>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">Hospitality</td>
          <td className="border px-4 py-2">{ip5}</td>
          <td className="border px-4 py-2"></td>
          </tr> 
      </tbody>
    </table>
  </div>
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
