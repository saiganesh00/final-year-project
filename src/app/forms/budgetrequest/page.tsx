

"use client";
import React from 'react'
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
    await delay(1000);
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
                      <div className=" h-[85%]  flex flex-col items-center gap-5 ">
                        <h1 className="text-xl tracking-wide font-bold">
                          {" "}
                          Department of {DepartmentName}
                        </h1>
                        <div className="w-full text-end p-3">Date : 0-0-0</div>
                        {/* <h1 className="text-xl tracking-wide font-bold underline underline-offset-4">
                          Budget Request Letter
                        </h1> */}
                        {/* content */}

                        <div className='self-start'>
                        From <br/>
                        A.Vanathi,<br/>
                        Head of the Department,<br/>
                        Computer Science and Engineering,<br/>
                        Aditya Engineering College(A).<br/>
                        Surampalem.<br/>
                        <br/>
                        To<br/>
                        The Principal,<br/>
                        Aditya Engineering College(A).<br/>

                        </div>


                        <p className="indent-8">
                        The Department of Computer Science and Engineering is proposing to organise a Five Day Faculty Development Program on " Secure Coding Techniques " in Association with Supraja Technologies  from  07-07-2023 to 12-07-2023  for  Faculty of CSE to providing strong theoretical background along with practical experience in the field of Security . Hence, I request you to grant permission to organise the programme for the benefit of the Teaching staff to teach the subject of Secure Coding Techniques effectively to the students .So kindly sanction an amount of Rs 40,000/- for smooth conduction of this  program.
Please find below the budget estimation for the same.
{" "}
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
    </>
  );
}
