
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
         
        //  .then((stream)=>{
        //     if(facecamRef.current){
        //       facecamRef.current.srcObject=stream
        //     }

        //     const videoTrack=stream.getVideoTracks()[0];

        //     if(togglefacecam===false){
        //       setTimeout(()=>{
        //         videoTrack.stop()
        //       },10000)
        //     }
         
        //  })

         //faceStream.getVideoTracks

         if(facecamRef.current && togglefacecam){
            facecamRef.current.srcObject=faceStream;
         }

        //  if(!togglefacecam){
        //       const videoTrack=faceStream.getVideoTracks();

        //       setTimeout(()=>{
        //           videoTrack.forEach((track)=>{
        //              track.stop();
        //           })
                 
        //       },10000)
        //  }
        
        //  if(togglefacecam===false){
        //      await navigator.mediaDevices.getUserMedia(
        //       {video:false}
        //      )
        //  }

        //  if(togglefacecam===false){
        //    console.log("kk")
        //      await navigator.mediaDevices.
        // }

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