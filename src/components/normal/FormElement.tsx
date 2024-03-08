import React, { Dispatch, SetStateAction } from 'react'

type FormElementPropsType = {
    label : string,
    onChangefn : Dispatch<SetStateAction<string>>
}


const FormElement = ( {label  ,onChangefn} : FormElementPropsType) => {
  return (
    <div className="h-[112px] flex flex-col items-start justify-center gap-3 px-[16px] py-[12px]">
                
    <label className="font-bold text-sm">{label}</label>
    <input
      type="text"
      className="h-[46px] w-full rounded-sm bg-[#F0F2F5] placeholder:text-gray-500 px-5 "
      placeholder= {"enter the " + label} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value === undefined || e.target.value===""){
          onChangefn(label)
        }
        else{
          onChangefn(e.target.value)
        }
      }}
      required
    />

  </div>
  )
}

export default FormElement