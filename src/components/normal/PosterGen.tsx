import React from 'react'

const PosterGen = ( { resourcePersonName1, resourcePersonPhoto1, resourcePersonDesignation1, resourcePersonName2, resourcePersonPhoto2, resourcePersonDesignation2, resourcePersonName3, resourcePersonPhoto3, resourcePersonDesignation3 }) => {
  return (
    <div className='h-[98%] w-[95%] border-t-[18px] border-orange-500 flex flex-col py-2 justify-between items-center'>
        <div className='h-[18%] w-full flex  justify-between'>
            <img src="\aditya-logo.jpg" alt="aditya-logo" height={120} width={120}/>
            <div className='h-[70%] w-[30%] bg-orange-500 flex justify-center  rounded-tl-xl rounded-br-xl'>
                <h1 className='font-bold text-2xl text-white font-sans' style={{ fontFamily: 'Arial' }}>Hearty Welcome</h1>
            </div>
            <img src="\aditya-logo.jpg" alt="aditya-logo" height={120} width={120}/>
        </div>
        <div className='h-[50%] w-full flex justify-center items-center gap-11 py-6'>
            <div className='flex flex-col items-center'>
                <img className='rounded-tl-xl rounded-br-xl' src={resourcePersonPhoto1.preview} alt='' height={150} width={150} />
                <span className='text-bold text-2xl font-sans'>{resourcePersonName1}</span>
                <span className='text-bold text-lg font-sans'>{resourcePersonDesignation1}</span>
            </div>            
            <div className='flex flex-col items-center'>
                <img className='rounded-tl-xl rounded-br-xl' src={resourcePersonPhoto2.preview} alt='' height={150} width={150} />
                <span className='text-bold text-2xl font-sans'>{resourcePersonName2}</span>
                <span className='text-bold text-lg font-sans'>{resourcePersonDesignation2}</span>
            </div>     
            <div className='flex flex-col items-center'>
                <img className='rounded-tl-xl rounded-br-xl' src={resourcePersonPhoto3.preview} alt='' height={150} width={150} />
                <span className='text-bold text-2xl font-sans'>{resourcePersonName3}</span>
                <span className='text-bold text-lg font-sans'>{resourcePersonDesignation3}</span>
            </div>             
        </div>
        <div className='h-[14%] flex justify-center items-center'>
        <   h1 className='text-2xl text-black font-sans font-bold '>Department of CSE</h1>
        </div>
        <div className='h-[18%] w-full flex justify-center  bg-orange-500'>
            <h1 className='text-4xl text-white font-sans font-bold '>ADITYA ENGINEERING COLLEGE(A)</h1>
        </div>
    </div>

  )
}

export default PosterGen;
