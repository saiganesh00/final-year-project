import React from 'react';
import moment from 'moment'
import Header from './header';
const CertificateGen = ({ name, course, dateOfConductStart, dateOfConductEnd, coOrdSignature, coConvSignature, ConvSignature, principalSignature }) => {
  return (
    <div className='h-[98%] w-[95%] border-[20px] border-yellow-500 flex flex-col py-2 items-center'>
        <div className='flex gap-3'>
            <div>
                <img src = '\aditya-logo.jpg' alt='aditya-logo' height={150} width={150}/>
            </div>
            <div >
                <h1 className="text-center text-2xl font-bold text-red-600 font-sans" style={{ fontFamily: 'Arial' }}>ADITYA ENGINEERING COLLEGE</h1>
                <p className='font-bold text-sm text-blue-900  font-sans' style={{ fontFamily: 'Arial' }}>Approved By AICTE. Affiliated to JNTUK. Accredited by NAAC with 'A++ Grade'</p>
                <p className='text-center text-sm font-bold  font-sans' style={{ fontFamily: 'Arial' }}>Aditya Nagar, ADB Road, Surampalem - 533437, E.G. District, A.P</p>
                <h1 className="text-center text-md text-xl font-bold text-violet-500 font-sans" style={{ fontFamily: 'Consolas' }}>Department of Computer Science & Engineering</h1>
                <h1 className="text-center text-2xl font-bold text-blue-800 font-sans" style={{ fontFamily: 'Consolas' }}>Certificate of Participation</h1>
            </div>
        </div>
        <div className='w-[95%] py-2 px-5 flex justify-center items-center'>
            <div>
                <p className='leading-relaxed'>This is to certify&nbsp; <span className='border-b border-dotted border-b-2 font-bold'>{ name }</span> &nbsp; from &nbsp; <span className='border-b border-dotted border-b-2 font-bold'>{ course }</span> 
                &nbsp; has participated in a <span className='font-bold'>Five Day</span> <span className='font-bold'>Faculty Development programme</span> on <span className='border-b border-dotted border-b-2 font-bold'>Secure Coding Techniques</span> 
                &nbsp;   organized by deparment of <span className='font-bold'>Computer Science and Engineering</span>, <b>Aditya Engineering College(A)</b> &nbsp; in association with <span className='font-bold'>Supraja Technologies</span>
                <span>{`conducted from ${
            dateOfConductStart ? moment(dateOfConductStart).format('DD-MM-YYYY') : '-'
          } to ${dateOfConductEnd ? moment(dateOfConductEnd).format('DD-MM-YYYY') : '-'}`}</span>
                </p>
            </div>
        </div>

        <div className='w-[95%] py-10 flex justify-center items-center gap-9'>
            <div className=''>
                <img className='' src={coOrdSignature.preview} alt='' height={150} width={150}/>

                <span className='m-2 border-b-2' />

                <span className=''>Co-ordinator</span>
            </div>

            <div className=''>
                <img className='' src={coConvSignature.preview} alt='' height={150} width={150}/>

                <span className='m-2 border-b-2' />

                <span className=''>Co-Convenor</span>
            </div>

            <div className=''>
                <img className='' src={ConvSignature.preview} alt='' height={150} width={150}/>

                <span className='m-2 border-b-2' />

                <span className=''>Convenor</span>
            </div>

            <div className=''>
                <img className='' src={principalSignature.preview} alt='' height={150} width={150}/>

                <span className='m-2 border-b-2' />

                <span className=''>Prinicipal</span>
            </div>
        </div>

    </div>
  );
};

export default CertificateGen;
