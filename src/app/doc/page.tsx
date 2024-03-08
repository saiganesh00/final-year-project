"use client"

import { Button } from '@/components/ui/button';
import cx from '@/lib/cx';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';



export default function doc(){
   
    const componentRef = useRef<HTMLDivElement>(null);
    const [Dept , setDept] = useState<string>();
    const [hide , setHide] = useState(true);

    const print1 =  useReactToPrint({
        content : ()=>componentRef.current
      })

      
    const handelPrint = ()=>{
         setHide((hide) => !hide)
         setTimeout(()=>{print1()} , 0);
    }
    
     return<> 
             
   <div className='w-screen h-screen  flex'>
         <div className='Form w-1/2'>
                   Dept : <input type="text" className='w-[100px] h-10 bg-white text-black' onChange={(e) => setDept(e.target.value)}/>
         </div>
         <div className='preview w-1/2 '>
                   Preview
         </div>
   </div>
             
  <Button onClick={handelPrint}>download</Button>
     <div className={cx('flex justify-center items-center border-black' )} ref={componentRef}>
     <div className="w-[550pt] h-[842pt] " >   
           <div className="h-3/4">
                  <div className="h-[15%]  flex justify-center " >
                        <div className="w-[80%]  border-b border-gray-500 flex items-center">
                               <div className="w-[15%] h-full flex justify-center items-center ">
                                   Image
                               </div>
                               <div className="w-[85%] h-full  flex justify-center">
                                      <h1 className="text-2xl font-extrabold tracking-widest">ADITYA ENGINEERING COLLEGE</h1>
                               </div>
                         
                        </div>
                  </div>
                  <div className="h-[85%]  flex flex-col items-center gap-5 ">
                        <h1 className="text-xl tracking-wide font-bold" > Department of {Dept}</h1>
                        <div className="w-full text-end p-3">
                                Date : 0-0-0
                        </div>
                        <h1 className="text-xl tracking-wide font-bold underline underline-offset-4">Circular</h1>
                        {/* content */}
                         
                         <p className="indent-8">
                         All the teching staff of CSE are hereby informed that the Department of Computer Science and Engineering is going to organise a Five Day Faculty Development programe on
 "Secure Coding Techniques " From 07-07-2023 to 12-07-2023 . Hence, all the Facuty are
 advised to attend the programme and utilize this opportunity. For further information you can
 contact event coordinator Dr.T.Prabhakara Rao , Associate Professor, Department of CSE.
                         </p>
                  </div>
           </div>
     </div>
 
 </div>
 
  
 </> 
}