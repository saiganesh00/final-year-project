'use client'
import CertificateGen from '@/components/normal/CertificateGen';
import Modal from '@/components/normal/Modal';
import React, { useState, useReducer } from 'react';

const initialState = {
  name: 'Eswar',
  course: 'Computer Science',
  dateOfConductStart: '2024-03-08',
  dateOfConductEnd: '2023-03-20',
  coOrdSignature: '', 
  coConvSignature: '',
  ConvSignature: '',
  principalSignature: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return { ...state, [action.field]: action.payload }
    default:
      break
  }
}

const Page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, course, dateOfConductStart, dateOfConductEnd, coOrdSignature, coConvSignature, ConvSignature, principalSignature} = formState; // Corrected property name

    if (name && course && dateOfConductStart && dateOfConductEnd && coOrdSignature && coConvSignature && ConvSignature && principalSignature) { // Corrected property name
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
    <div className='flex flex-col h-screen items-center '>
      
      <form onSubmit={handleSubmit} className="h-2/3 w-2/3 flex flex-col mt-0">
        <div className='flex '>
          {/* Left side */}
          <div className="w-1/2 p-4">
            <label className="block mb-2">Name</label>
            <input type="text" name='name' value={formState.name} onChange={handleTextChange} id='user-name' className="border border-gray-400 rounded-md p-2 w-full mb-4" />
            <label className="block mb-2">Course</label>
            <input type="text" name='course' value={formState.course} onChange={handleTextChange} id='course' className="border border-gray-400 rounded-md p-2 w-full mb-4" />
            <label className="block mb-2">Start Date</label>
            <input type="date" value={formState.dateOfConductStart} onChange={handleTextChange} name='dateOfConductStart' id='dateOfConductStart' className="border border-gray-400 rounded-md p-2 w-full mb-4" />
            <label className="block mb-2">End Date</label>
            <input type="date" value={formState.dateOfConductEnd} onChange={handleTextChange} name='dateOfConductEnd' id='dateOfConductEnd' className="border border-gray-400 rounded-md p-2 w-full mb-4" />
          </div>
          {/* Right side */}
          <div className="w-1/2 p-4">

            <label className="block mb-2">Co-Ordinator Signature Upload</label>
            <input type="file" name='coOrdSignature' id='coOrdSignature' onChange={e => {
              const selected = e.target.files[0]
              const objectUrl = URL.createObjectURL(selected)
              dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
            }} className="border border-gray-400 rounded-md p-2 w-full mb-4" />

            <label className="block mb-2">Co-Convenor Signature Upload</label>
            <input type="file" name='coConvSignature' id='coConvSignature' onChange={e => {
              const selected = e.target.files[0]
              const objectUrl = URL.createObjectURL(selected)
              dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
            }} className="border border-gray-400 rounded-md p-2 w-full mb-4" />

            <label className="block mb-2">Convenor Signature Upload</label>
            <input type="file" name='ConvSignature' id='ConvSignature' onChange={e => {
              const selected = e.target.files[0]
              const objectUrl = URL.createObjectURL(selected)
              dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
            }} className="border border-gray-400 rounded-md p-2 w-full mb-4" />

            <label className="block mb-2">Pricipal Signature Upload</label>
            <input type="file" name='principalSignature' id='principalSignature' onChange={e => {
              const selected = e.target.files[0]
              const objectUrl = URL.createObjectURL(selected)
              dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
            }} className="border border-gray-400 rounded-md p-2 w-full mb-4" />


          </div>
        </div>
        <div className="w-full flex justify-center">
          <button type="submit" className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Generate Certificate</button>
        </div>
      </form>
      <Modal isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)} >
        <CertificateGen {...formState}/>
      </Modal>
    </div>
  );
};

export default Page;
