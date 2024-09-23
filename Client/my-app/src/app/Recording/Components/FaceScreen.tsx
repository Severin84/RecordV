
import React from 'react';
import { CircleUserRound } from 'lucide-react';
import { useContextProvider } from '@/Context/Context';

const FaceScreen = () => {
  const {togglefacecam,userCamRecordedURL}=useContextProvider();
  return (
    <div className='h-[10rem] w-[10rem] rounded-[5rem] bg-orange-600 flex justify-center items-center'>
       {togglefacecam===false? userCamRecordedURL===null?<CircleUserRound size={100}/>:<video src={userCamRecordedURL} controls/>:<CircleUserRound size={100}/>}
    </div>
  )
}

export default FaceScreen