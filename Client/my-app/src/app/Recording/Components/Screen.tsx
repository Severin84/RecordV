"use client"
import React, {  useEffect, useRef} from 'react'
import FaceScreen from './FaceScreen'
import {Columns2, SquareX} from "lucide-react"
import RecordingOption from './RecordingOption'
import { useContextProvider } from '@/Context/Context'


const Screen = () => {
   const {toggleScreen,recordedURL,toggleRecordingButtons,setRecordingButtons,toggleStartrecording,currentStream}=useContextProvider();
    const VideoRef=useRef<HTMLVideoElement|null>(null)

   const handleRecordingToggle=()=>{
      setRecordingButtons(!toggleRecordingButtons);
   }

   const ScreenDisplay=async(value:MediaStream|null)=>{
      try{
          // const stream=await navigator.mediaDevices.getDisplayMedia(
          //   {video:true}
          // )
          if(VideoRef.current && value!=null){
            VideoRef.current.srcObject=value;
          }

      }catch(error){
        console.log("something went wrong while Displaying the screen:",error)
      }
   }

  useEffect(()=>{
    ScreenDisplay(currentStream);
  },[currentStream])

  console.log(recordedURL);
  return (
    <div className='flex'>
      <div>
        <div>
          {
            toggleScreen===false?
            <div className="h-[45rem] w-[85rem] bg-slate-500 rounded m-[1rem]">
                <div>
                </div>
            </div>
            :
            <div className="h-[45rem] w-[85rem] rounded m-[1rem]">
              {
                 recordedURL===null ?  
                  <video className='rounded-md m-[1rem] ml-[3rem] absolute' ref={VideoRef} height={1200} width={1200} autoPlay playsInline />
                 :<video   className='rounded-md m-[1rem] ml-[3rem] absolute' src={recordedURL} height={1200} width={1200} controls />
              }
            </div>
          } 
        </div>
        <div className='mt-[-11rem] ml-[-4rem] absolute'>
            <FaceScreen/>
        </div>
        {toggleRecordingButtons &&
          <div className='mt-[-43rem] ml-[70rem] bg-stone-600 h-[20rem] w-[15rem] rounded flex justify-center items-center absolute'>
              <RecordingOption/> 
          </div>
         }
      </div>
      {   toggleRecordingButtons === true ?
         
           <div className='mt-[1rem] ml-[87rem] cursor-pointer absolute'>
              <SquareX size={40} onClick={()=>handleRecordingToggle()}/>
           </div>
           :
           <div className='mt-[1rem] ml-[87rem] cursor-pointer absolute'>
              <Columns2 size={40} onClick={()=>handleRecordingToggle()}/>
          </div>
      }
  </div>
  )
}

export default Screen