import React, { useRef, useState } from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { useGlobalContext } from "../context/CryptoContext";
import { TbLogout } from "react-icons/tb";

const PerPage = () => {
  const inputRef = useRef(null);
  const { setPerPage } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };
  return (
    <form
      className="relative flex items-center font-nunito mr-12"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="perPage"
        className="relative flex justify-center items-center mr-2 font-bold"
      >
        per page:
      </label>
      <input
        type="number"
        min={1}
        max={250}
        name="perPage"
        ref={inputRef}
        placeholder="20"
        className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
      />
      <button type="submit" className="ml-1 cursor-pointer">
        <TbLogout className="w-full h-auto text-cyan" />
      </button>
    </form>
  );
};

const Pagination = () => {
  const { page, setPage, totalPages, perPage,CryptoData } = useGlobalContext();
  const totalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === totalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };
  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= totalNumber) {
      setPage(totalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };
  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(totalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };

 if(CryptoData && CryptoData.length >= perPage){
 return (
   <div className="flex items-center">
     <PerPage />
     <ul className="flex items-center justify-end text-sm">
       <li className="flex gap-2 items-center justify-center">
         <button
           className="border-2 border-cyan w-8 h-8 flex justify-center items-center rounded-[50%]"
           onClick={prev}
         >
           <MdOutlineArrowForward className="text-cyan rotate-180 text-[1.2rem]" />
         </button>
       </li>
       {page + 1 === totalNumber || page === totalNumber ? (
         <li className="flex items-center justify-center outline-0 hover:text-cyan rounded-full w-8 h-8  text-lg">
           <button onClick={multiStepPrev}> ...</button>
         </li>
       ) : null}

       {page - 1 !== 0 ? (
         <li>
           <button
             className="flex items-center justify-center outline-0 hover:text-cyan rounded-full w-8 h-8 bg-gray-200 mx-1.5
         "
             onClick={prev}
           >
             {page - 1}
           </button>
         </li>
       ) : null}

       <li>
         <button
           className="flex items-center justify-center outline-0 rounded-full w-8 h-8 bg-cyan text-gray-300 mx-1.5
         "
           disabled
         >
           {page}
         </button>
       </li>
       {page + 1 !== totalNumber && page !== totalNumber ? (
         <li>
           <button
             className="flex items-center justify-center outline-0 hover:text-cyan rounded-full w-8 h-8 bg-gray-200 mx-1.5
        
          "
             onClick={next}
           >
             {page + 1}
           </button>
         </li>
       ) : null}

       {page + 1 !== totalNumber && page !== totalNumber ? (
         <li className="flex items-center justify-center outline-0 hover:text-cyan rounded-full w-8 h-8  text-lg">
           <button onClick={multiStepNext}> ...</button>
         </li>
       ) : null}

       {page !== totalNumber ? (
         <li>
           <button
             className="flex items-center justify-center outline-0 hover:text-cyan rounded-full w-8 h-8 bg-gray-200 mx-1.5 
        
          "
             onClick={() => setPage(totalNumber)}
           >
             {totalNumber}
           </button>
         </li>
       ) : null}

       <li>
         <button
           className="border-2 border-cyan w-8 h-8 flex justify-center items-center rounded-[50%]"
           onClick={next}
         >
           <MdOutlineArrowForward className="text-cyan text-[1.2rem]" />
         </button>
       </li>
     </ul>
   </div>
 );
 }else{
  return null
 }
};

export default Pagination;
