import React, { useState } from 'react'


const RecordingOption = () => {
    const [toggleAudio,setToggleAudio]=useState<boolean>(false);
    const [toggleScreen,setToggleScreen]=useState<boolean>(false);
    const [togglefacecam,setTogglefacecam]=useState<boolean>(false);
    const [toggleStartrecording,settoggleStartrecording]=useState<boolean>(false);

    const handleaudiotoggle=()=>{
        setToggleAudio(!toggleAudio);
    }
    const handlescreentoggle=()=>{
        setToggleScreen(!toggleScreen);
    }
    const handlefacecamtoggle=()=>{
        setTogglefacecam(!togglefacecam);
    }
    const handlestartrecordingtogle=()=>{
        settoggleStartrecording(!toggleStartrecording);
    }

  return (
    <div className='h-[19rem] w-[14rem] bg-orange-700'>
        <div>
        <div className='h-[3rem] w-[13.5rem] bg-amber-400 rounded mb-[0.2rem] mt-[0.2rem] ml-[0.25rem] flex'>
            <div className={toggleAudio===true?'h-[3rem] w-[7.5rem] bg-lime-500 rounded-l  flex justify-center items-center cursor-pointer':'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer'} onClick={()=>handleaudiotoggle()}>
             Audio off
            </div>
            <div className={toggleAudio===true?'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer':'h-[3rem] w-[7.5rem] bg-lime-500 rounded-r  flex justify-center items-center cursor-pointer'} onClick={()=>handleaudiotoggle()}>
                Audio on
            </div>
        </div>
        <div className='h-[3rem] w-[13.5rem] bg-lime-700 rounded mb-[0.2rem] mt-[0.2rem] ml-[0.25rem] flex'>
            <div className={toggleScreen===true?'h-[3rem] w-[7.5rem] bg-lime-500 rounded-l  flex justify-center items-center cursor-pointer':'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer'} onClick={()=>handlescreentoggle()}>
                Screen off
            </div>
            <div className={toggleScreen===true?'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer':'h-[3rem] w-[7.5rem] bg-lime-500 rounded-r  flex justify-center items-center cursor-pointer'} onClick={()=>handlescreentoggle()}>
                Screen on
            </div>
        </div>
        <div className='h-[3rem] w-[13.5rem] bg-sky-600 rounded mb-[0.2rem] mt-[0.2rem] ml-[0.25rem] flex'>
             <div className={togglefacecam===true?'h-[3rem] w-[7.5rem] bg-lime-500 rounded-l  flex justify-center items-center cursor-pointer':'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer'} onClick={()=>handlefacecamtoggle()}>
                Facecam off
            </div>
            <div className={togglefacecam===true?'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer':'h-[3rem] w-[7.5rem] bg-lime-500 rounded-r  flex justify-center items-center cursor-pointer'} onClick={()=>handlefacecamtoggle()}>
                Facecam on
            </div>
        </div>
        </div>
        <div className='h-[3rem] w-[13.5rem] bg-sky-500 rounded-[2rem] mb-[0.2rem] mt-[1rem] ml-[0.25rem] flex'>
            <div className={toggleStartrecording===true?'h-[3rem] w-[7.5rem] bg-lime-500 rounded-l text-[0.8rem]  flex justify-center items-center cursor-pointer':'h-[3rem] w-[10rem] bg-slate-100 rounded text-[1rem] flex justify-center items-center cursor-pointer'} onClick={()=>handlestartrecordingtogle()}>
              Start Recoding
            </div>
            <div className={toggleStartrecording===true?'h-[3rem] w-[10rem] bg-slate-100 rounded text-[1rem] flex justify-center items-center cursor-pointer':'h-[3rem] w-[7.5rem] bg-lime-500 rounded-r text-[0.8rem] flex justify-center items-center cursor-pointer'} onClick={()=>handlestartrecordingtogle()}>
              Stop Recording 
            </div>
        </div>
    </div>
  )
}

export default RecordingOption