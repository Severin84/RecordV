
import React, { useEffect, useRef, useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import { useContextProvider } from '@/Context/Context';

const FaceScreen = () => {
  const {togglefacecam,userCamRecordedURL}=useContextProvider();
  const facecamRef=useRef<HTMLVideoElement>(null);
  const [stream,setStream]=useState<MediaStream|null>(null);

  const displayFaceCam=async()=>{
      try{
         console.log(togglefacecam)
         const faceStream=await navigator.mediaDevices.getUserMedia(
          {video:true}
         )

         if(faceStream){
          setStream(faceStream);
         }
         

         if(facecamRef.current && togglefacecam){
            facecamRef.current.srcObject=faceStream;
         }

      }catch(error){
        console.log("something went wrong while displaying the screen: ", error)
      }
  }

const  closeFaceCam=()=>{
    if(!togglefacecam){
      const videoTrack=stream?.getVideoTracks();
      setTimeout(()=>{
      videoTrack?.forEach((track)=>{
      track.stop();
        })          
      },500)

    
  }
}

  useEffect(()=>{
     if(togglefacecam===true){
       displayFaceCam();
     }else{
       closeFaceCam()
     }
  },[togglefacecam])

  return (
    <div className='h-[12rem] w-[12rem] rounded-[7rem] bg-orange-600 flex justify-center items-center'>
       {togglefacecam===false? <CircleUserRound size={140}/>:<video className='h-[12rem] w-[12rem] rounded-[8rem] ' ref={facecamRef} autoPlay playsInline/>}
    </div>
  )
}

export default FaceScreen