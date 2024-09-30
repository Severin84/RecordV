"use client"
import React from 'react'
import { useContextProvider } from '../../Context/Context';
import {HfInference} from "@huggingface/inference"
// import { readFileSync } from 'fs';


const VideoReview = () => {
  const {recordedURL}=useContextProvider();
  const hf=new HfInference();
  
  // const AudioToText=async()=>{
  //   const result=await hf.automaticSpeechRecognition({
  //     model:'facebook/wav2vec2-large-960h-lv60-self',
  //     data:readFileSync('')
  //   })
  // }
  
  return (
    <div className='flex h-[48.9rem] w-[96rem] bg-amber-600'>
        <div className='h-[48.9rem] w-[96rem] bg-amber-300 '>
            <div className='h-[24rem] w-[50rem] bg-emerald-500 m-auto absolute top-2 right-30 bottom-50 left-20'>
                {
                   recordedURL!==null ?<video className='rounded-md  ml-[3.5rem] absolute' src={recordedURL}  height={680} width={680} autoPlay controls />:null
                }
            </div>
            <div className='h-[24rem] w-[50rem] bg-sky-500 m-auto absolute top-50 right-30 bottom-0 left-20'>Timestamp</div>
        </div>
        <div className='h-[48.9rem] w-[46rem] bg-lime-500'>
            <div className='h-[20rem] w-[25rem] bg-violet-700 m-auto absolute top-30 right-10 bottom-10 left-30'>Title</div>
            <div className='h-[20rem] w-[25rem] bg-fuchsia-600 m-auto absolute top-10 right-10 bottom-30 left-30'>description</div>
        </div>
    </div>
  )
}

export default VideoReview