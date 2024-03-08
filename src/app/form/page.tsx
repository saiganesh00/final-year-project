"use client";

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export default function Page(){
     return <>
       
       <button onClick={()=>console.log("sug")}>DownLoad</button>
     </>
}