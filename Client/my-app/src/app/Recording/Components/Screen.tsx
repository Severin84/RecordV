"use client"
import React, { useState } from 'react'
import FaceScreen from './FaceScreen'
import {Columns2, SquareX} from "lucide-react"
import RecordingOption from './RecordingOption'
// import {RecordingOptionState } from '@/types/Recording/Recording'
const Screen = () => {

  const [toggleState,setToggleState]=useState<boolean>(true);

  const handleRecordingToggle=()=>{
     setToggleState(!toggleState);
  }

  return (
    <div className='flex'>
      <div>
        <div>
            <div className="h-[45rem] w-[85rem] bg-slate-500 rounded m-[1rem]">
                Screen
            </div>
        </div>
        <div className='mt-[-10rem] ml-[-1rem]'>
            <FaceScreen/>
        </div>
        { toggleState &&
          <div className='mt-[-43rem] ml-[70rem] bg-stone-600 h-[20rem] w-[15rem] rounded flex justify-center items-center'>
              <RecordingOption/> 
          </div>
         }
      </div>
      {   toggleState === true ?
           <div className='mt-[1rem] cursor-pointer'>
              <SquareX size={40} onClick={()=>handleRecordingToggle()}/>
           </div>
           :
           <div className='mt-[1rem] cursor-pointer'>
              <Columns2 size={40} onClick={()=>handleRecordingToggle()}/>
          </div>
      }
  </div>
  )
}

export default Screen