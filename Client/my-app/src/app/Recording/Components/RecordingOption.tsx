import { useContextProvider } from '@/Context/Context';
import React, { useRef} from 'react';


const RecordingOption = () => {
    const {toggleAudio,setToggleAudio,setToggleScreen,toggleScreen,setTogglefacecam,settoggleStartrecording,togglefacecam,toggleStartrecording,setRecordedURL,setUserCamRecordedURL}=useContextProvider();
    
    const mediaStream=useRef<MediaStream|null>(null);
    const mediaRecording=useRef<MediaRecorder|null>(null);
    const chuncks=useRef<Array<Blob>>([]);
    const UserVideoStream=useRef<MediaStream|null>(null);
    const UserVideoStreamRecording=useRef<MediaRecorder|null>(null);
    const userCamChunks=useRef<Array<Blob>>([]);
    // const [userCamRecordedURL,setUserCamRecordedURL]=useState<string>("");
    const handleaudiotoggle=()=>{
        setToggleAudio(!toggleAudio);
    }
   
    const startFaceCam=async()=>{
        try{
             setTogglefacecam(true);
             const stream=await navigator.mediaDevices.getUserMedia({
                video:true
             });
             UserVideoStream.current=stream;
             UserVideoStreamRecording.current=new MediaRecorder(stream);
             UserVideoStreamRecording.current.ondataavailable=(e)=>{
                if(e.data.size>0){
                    userCamChunks.current.push(e?.data);
                }
             }

             UserVideoStreamRecording.current.onstop=()=>{
                const UsercamRecordedBlob=new Blob(userCamChunks.current,{type:'video/web'});
                const url=URL.createObjectURL(UsercamRecordedBlob);
                setUserCamRecordedURL(url);
                userCamChunks.current=[];
             }
             UserVideoStreamRecording.current.start();
        }catch(error){
            console.log("Something went wrong while facecam record",error)
            setTogglefacecam(false);
        }
    }

    const stopFaceCam=()=>{
        setTogglefacecam(false);
        if(UserVideoStreamRecording.current && UserVideoStreamRecording.current.state==="recording"){
            UserVideoStreamRecording.current.stop();
        }
        if(UserVideoStream.current){
            UserVideoStream.current.getVideoTracks().forEach((UVtrack)=>{
                UVtrack.stop();
            })
        }
    }

    const startRecording =async()=>{
        setToggleScreen(true);
        try{
            const stream=await navigator.mediaDevices.getDisplayMedia({
                video:true
            });
            mediaStream.current=stream;
            mediaRecording.current=new MediaRecorder(stream);

            mediaRecording.current.ondataavailable=(e)=>{
                if(e.data.size>0){
                   chuncks.current.push(e?.data); 
                }
            };

            mediaRecording.current.onstop=()=>{
                const recordedBlob=new Blob(chuncks.current,{type:'video/webm'});
                const url=URL.createObjectURL(recordedBlob);
                setRecordedURL(url);
                chuncks.current=[];
            };
             mediaRecording.current.start();
        }catch(error){
            setToggleScreen(false)
            console.log("Error in screenRecord:",error);
        }
    }

    const stopRecording=()=>{
        setToggleScreen(false);
        if(mediaRecording.current && mediaRecording.current.state==='recording'){
            mediaRecording.current.stop();
        }
        if(mediaStream.current){
          mediaStream.current.getVideoTracks().forEach((Vtrack)=>{
            Vtrack.stop();
          })
        }
    }
    // const handlefacecamtoggle=()=>{
    //     setTogglefacecam(!togglefacecam);
    // }

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
            <div className={toggleScreen===true?'h-[3rem] w-[7.5rem] bg-lime-500 rounded-l  flex justify-center items-center cursor-pointer':'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer'} onClick={()=>stopRecording()}>
                Screen off
            </div>
            <div className={toggleScreen===true?'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer':'h-[3rem] w-[7.5rem] bg-lime-500 rounded-r  flex justify-center items-center cursor-pointer'} onClick={()=>startRecording()}>
                Screen on
            </div>
        </div>
        <div className='h-[3rem] w-[13.5rem] bg-sky-600 rounded mb-[0.2rem] mt-[0.2rem] ml-[0.25rem] flex'>
             <div className={togglefacecam===true?'h-[3rem] w-[7.5rem] bg-lime-500 rounded-l  flex justify-center items-center cursor-pointer':'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer'} onClick={()=>stopFaceCam()}>
                Facecam off
            </div>
            <div className={togglefacecam===true?'h-[3rem] w-[6rem] bg-slate-100 rounded text-[1.1rem] flex justify-center items-center cursor-pointer':'h-[3rem] w-[7.5rem] bg-lime-500 rounded-r  flex justify-center items-center cursor-pointer'} onClick={()=>startFaceCam()}>
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