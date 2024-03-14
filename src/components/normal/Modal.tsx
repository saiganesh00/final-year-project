import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  const handleDownload = () => {
    const element = document.getElementById('certificate')!;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 222;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('certificate.pdf');
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-[90%] h-[95%] p-8 rounded-lg shadow-lg relative flex flex-col justify-center items-center">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div id="certificate">
          {children}
        </div>
        <button className="mt-1 border-0 outline-none px-4 py-1 mb-0 bg-blue-500 text-white rounded" onClick={handleDownload}>
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Modal;
