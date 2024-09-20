"use-client"
import React from 'react'
import FaceScreen from './FaceScreen'

const Screen = () => {
  return (
    <div className='flex'>
      <div>
        <div>
            <div className="h-[45rem] w-[85rem] bg-slate-500 rounded m-[1rem]">
                Screen
            </div>

        </div>
        <div className='mt-[-10rem] ml-[-1rem]'>
            <FaceScreen/>
        </div>
      </div>
      <div>
              Q
      </div>
  </div>
  )
}

export default Screen