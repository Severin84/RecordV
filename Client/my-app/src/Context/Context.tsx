"use client"
import { RecordingOptionState } from "@/types/Recording/Recording";
import React,{createContext,ReactNode,useContext,useState} from "react";

const Context=createContext<RecordingOptionState|null>(null);

export const ContextProvider=({children}:{children:ReactNode})=>{
    const [toggleAudio,setToggleAudio]=useState<boolean>(false);
    const [toggleScreen,setToggleScreen]=useState<boolean>(false);
    const [togglefacecam,setTogglefacecam]=useState<boolean>(false);
    const [toggleStartrecording,settoggleStartrecording]=useState<boolean>(false);
    const [recordedURL,setRecordedURL]=useState<string|null>(null);
    const [userCamRecordedURL,setUserCamRecordedURL]=useState<string|null>(null);
    const [toggleRecordingButtons,setRecordingButtons]=useState<boolean>(true);
    const [currentStream,setCurrentStream]=useState<MediaStream|null>(null);
    const [audioRecordedBlob,setAudioRecordedBlob]=useState<Blob|null>(null);
    return(
        <Context.Provider 
          value={{
            toggleAudio,
            setToggleAudio,
            toggleScreen,
            setToggleScreen,
            togglefacecam,
            setTogglefacecam,
            toggleStartrecording,
            settoggleStartrecording,
            recordedURL,
            setRecordedURL,
            userCamRecordedURL,
            setUserCamRecordedURL,
            toggleRecordingButtons,
            setRecordingButtons,
            currentStream,
            setCurrentStream,
            audioRecordedBlob,
            setAudioRecordedBlob
          }}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider=():RecordingOptionState=>{
    const context=useContext(Context);

    if(!context){
        throw new Error("Something is wrong with useContext");
    }

    return context;
}