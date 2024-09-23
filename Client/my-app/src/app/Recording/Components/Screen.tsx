"use client"
import React, {  useState } from 'react'
import FaceScreen from './FaceScreen'
import {Columns2, SquareX} from "lucide-react"
import RecordingOption from './RecordingOption'
 //import { useReactMediaRecorder ,ReactMediaRecorder} from 'react-media-recorder'
 import { useContextProvider } from '@/Context/Context'


const Screen = () => {
  const [toggleState,setToggleState]=useState<boolean>(true);
  // const {mediaBlobUrl,status} = useReactMediaRecorder({screen:true,audio:false,video:false});
   const {toggleScreen,recordedURL}=useContextProvider();

  const handleRecordingToggle=()=>{
     setToggleState(!toggleState);
  }

  // const VideoPreview=({stream}:{stream:MediaStream})=>{
  //    const videoRef=useRef<HTMLVideoElement>();

     
     
  //    useEffect(()=>{
  //     if(videoRef.current && stream){
  //       videoRef.current.srcObject=stream;
  //     }
  //     console.log(stream);
  //     console.log(videoRef.current?.srcObject);
  //    },[stream])
      
  //    if(!stream){
  //       //console.log("got null")
  //       return  null;
  //    }
  //    console.log("notnull")
  //    return <video ref={videoRef} width={500} height={500} autoPlay controls/>
  // }
 

  return (
    <div className='flex'>
      <div>
        <div>
          {
            toggleScreen===false?
            <div className="h-[45rem] w-[85rem] bg-slate-500 rounded m-[1rem]">
                <div>
                </div>
            </div>:
            <div>
              <video controls width={500} height={500} src={recordedURL}/>
            </div>
          } 
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