"use client"
import { useSelector,useDispatch } from "react-redux";
import Image from "next/image";
import { stat } from "fs";

import { decrease, increase} from './store/counterSlice/counter'

export default function Home() {
  const selector:any=useSelector((state)=>state);
  console.log(selector);
  
  const dispatch = useDispatch()
  return (
<div className="">

   <div className="flex item-center justify-center pb-7">
   {selector.counterReducer}
   </div>
    <div className="flex item-center justify-center  gap-5">
     
        <button className="border-4 item-center justify-center bg-red-200  flex"
          onClick={() => dispatch(increase(10))}
        >
           increment value
        </button>
       
        <button className="border-4 item-center justify-center bg-red-200  flex"
          onClick={() => dispatch(decrease(10))}
        >
           decreament value
        </button>
        </div>  
     
        
      </div>

 
  );
}
