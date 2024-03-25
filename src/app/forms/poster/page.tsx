'use client'
import PosterGen from '@/components/normal/PosterGen';
import PosterModal from '@/components/normal/PosterModal';
import React from 'react'
import { useState, useReducer } from 'react';

const initialState = {
    resourcePersonName1: 'Eswar',
    resourcePersonPhoto1: '',
    resourcePersonDesignation1: 'cse',
    resourcePersonName2: 'Surya',
    resourcePersonPhoto2: '',
    resourcePersonDesignation2: 'cse',
    resourcePersonName3: 'Srinu Naik',
    resourcePersonPhoto3: '',
    resourcePersonDesignation3: 'cse',
  }

const reducer = (state, action) => {
    switch (action.type) {
      case 'TEXT_CHANGE':
        return { ...state, [action.field]: action.payload }
      default:
        break
    }
}
const page = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [formState, dispatch] = useReducer(reducer, initialState);


    const handleSubmit = (event) => {
        event.preventDefault();
        const 
        { 
        resourcePersonName1,
        resourcePersonPhoto1,
        resourcePersonDesignation1,
        resourcePersonName2,
        resourcePersonPhoto2,
        resourcePersonDesignation2,
        resourcePersonName3,
        resourcePersonPhoto3,
        resourcePersonDesignation3 } = formState; // Corrected property name
    
        if (resourcePersonName1 && resourcePersonPhoto1 && resourcePersonDesignation1 && resourcePersonName2 && resourcePersonPhoto2 && resourcePersonDesignation2 && resourcePersonName3 && resourcePersonPhoto3 && resourcePersonDesignation3) { // Corrected property name
          console.log(`Form submitted!!!: `, formState);
          setIsOpenModal(true);
        } else {
          alert('Please fill all details');
        }
      };
    
    const handleTextChange = (e) => {
        dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: e.target.value });
    }
    

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
        <h1>Fill the details</h1>
        <form onSubmit={handleSubmit} className="h-[90%]  md:flex-row gap-4 py-10">
            <div className='flex flex-col '>
                {/* First Row */}
                <div className="md:w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-name" className="block mb-2">Resource Person Name</label>
                    <input type="text" id="resource-person-name" name="resourcePersonName1" onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-photo" className="block mb-2">Resource Person Photo</label>
                    <input type="file" id="resource-person-photo" name="resourcePersonPhoto1" onChange={e => {
                const selected = e.target.files[0]
                const objectUrl = URL.createObjectURL(selected)
                dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
                }} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-designation" className="block mb-2">Resource Person Designation</label>
                    <input type="text" id="resource-person-designation" name="resourcePersonDesignation1" onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                </div>
            
                {/* Second Row */}
                <div className="md:w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-name" className="block mb-2">Resource Person Name</label>
                    <input type="text" id="resource-person-name" name="resourcePersonName2" onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-photo" className="block mb-2">Resource Person Photo</label>
                    <input type="file" id="resource-person-photo" name="resourcePersonPhoto2" onChange={e => {
                const selected = e.target.files[0]
                const objectUrl = URL.createObjectURL(selected)
                dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
                }} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-designation" className="block mb-2">Resource Person Designation</label>
                    <input type="text" id="resource-person-designation" name="resourcePersonDesignation2" onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                </div>
            
                {/* Third Row */}
                <div className="md:w-full flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-name" className="block mb-2">Resource Person Name</label>
                    <input type="text" id="resource-person-name" name="resourcePersonName3" onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-photo" className="block mb-2">Resource Person Photo</label>
                    <input type="file" id="resource-person-photo" name="resourcePersonPhoto3" onChange={e => {
                const selected = e.target.files[0]
                const objectUrl = URL.createObjectURL(selected)
                dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
                }} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                    <div className="md:w-1/3">
                    <label htmlFor="resource-person-designation" className="block mb-2">Resource Person Designation</label>
                    <input type="text" id="resource-person-designation" name="resourcePersonDesignation3" onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 w-full" />
                    </div>
                </div>
            </div>
            
            <div className="w-full flex justify-center">
            <button type="submit" className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Generate Poster</button>
            </div>
        </form>
        <PosterModal isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)} >
            <PosterGen {...formState}/>
        </PosterModal>

  </div>
  
  )
}

export default page
