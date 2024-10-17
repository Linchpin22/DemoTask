import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
     <h1 className='text-6xl'>Loading</h1>
     <br/>
     <span className="loading loading-infinity loading-lg"></span>

    </div>
  )
}

export default Loading