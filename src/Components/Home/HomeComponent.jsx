import React from 'react'
import { useSelector } from 'react-redux'

const HomeComponent = () => {
      // =====================DATA FETCH FROM SLICE===============//
      const currentUserData = useSelector((state)=>state.counter.value)


  return (
    <>
    <div className='flex justify-center items-center min-h-screen'>
      <div className='profileCard text-black'>   
              <div className="max-w-sm mx-auto bg-[#8E3E63] shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center px-6 py-4">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src={currentUserData?.photoURL}
                alt='profile image'
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">{currentUserData?.displayName}</h2>
                <p className="text-gray-200">{currentUserData?.description}</p>
                <p className="text-gray-200 mt-2">{currentUserData?.email}</p>
              </div>
            </div>
          </div>      
          </div> 
    </div>

        
       
    </>
  )
}

export default HomeComponent