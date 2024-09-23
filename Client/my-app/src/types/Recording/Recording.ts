
export interface RecordingOptionState{
   toggleAudio:boolean,
   setToggleAudio:React.Dispatch<React.SetStateAction<boolean>>,
   toggleScreen:boolean,
   setToggleScreen:React.Dispatch<React.SetStateAction<boolean>>,
   togglefacecam:boolean,
   setTogglefacecam:React.Dispatch<React.SetStateAction<boolean>>,
   toggleStartrecording:boolean,
   settoggleStartrecording:React.Dispatch<React.SetStateAction<boolean>>,
   recordedURL:string,
   setRecordedURL:React.Dispatch<React.SetStateAction<string>>,
   userCamRecordedURL:string|null,
   setUserCamRecordedURL:React.Dispatch<React.SetStateAction<string|null>>
}
