"use client";

import cx from "@/lib/cx";
import FormElement from "@/components/normal/FormElement";

import { Button } from "@/components/ui/button";
import { FormEvent, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Table from "@/components/normal/Tabel";


export default function TestPage() {
  const [college, setCollege] = useState<string>("College Name");
  const [DepartmentName, setDepartMent] = useState<string>("Department Name");
  const [eventName, setEventName] = useState<string>("Event Name");
  const [startDate, setStartDate] = useState<string>("Start Date");
  const [endDate, setEndDate] = useState<string>("End Date");

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
    <>
      <div className="flex justify-center">
        <div className="w-[1280px] h-[800px] px-[24px] py-[20px]">
          <div className="flex w-full h-full">
            {/* Total Form */}
            <div className="w-1/2 ">
              {/* Form Element */}
              <form onSubmit={handelPrint}>
                <Button type="submit">Generate Circular</Button>
                <FormElement label="College Name" onChangefn={setCollege} />
                <FormElement label="DepartmentName" onChangefn={setDepartMent}/>
                <FormElement label="EventName" onChangefn={setEventName} />
                <FormElement label="StartDate" onChangefn={setStartDate} />
                <FormElement label="EndDate" onChangefn={setEndDate} />
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
                          Department of {DepartmentName}
                        </h1>
                        <div className="w-full text-end p-3">Date : 0-0-0</div>
                        <h1 className="text-xl tracking-wide font-bold underline underline-offset-4">
                          Circular
                        </h1>
                        {/* content */}

                        <p className="indent-8">
                          All the teching staff of CSE are hereby informed that
                          the Department of{" "}
                          <span className="font-bold">
                            {" " + DepartmentName + " "}
                          </span>
                          is going to organise a
                          <span className="font-bold">
                            {" " + eventName + " "}
                          </span>
                          programe on "Secure Coding Techniques " From
                          <span className="font-bold">
                            {" " + startDate + " "}
                          </span>{" "}
                          to{" "}
                          <span className="font-bold">
                            {" " + endDate + " "}
                          </span>{" "}
                          . Hence, all the Facuty are advised to attend the
                          programme and utilize this opportunity. For further
                          information you can contact event coordinator
                          Dr.T.Prabhakara Rao , Associate Professor, Department
                          of CSE.
                        </p>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
