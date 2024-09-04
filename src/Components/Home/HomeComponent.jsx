import React from 'react'
import { useSelector } from 'react-redux'

const HomeComponent = () => {
  // =====================DATA FETCH FROM SLICE===============//
  const currentUserData = useSelector((state) => state.counter.value)

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100 font-montserrat'>
        <div className='profileCard text-black'>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Top Half */}
            <div className="bg-[#91DDCF] p-6 relative flex items-center justify-center min-h-[150px]">
              {/* Profile Image */}
              <img
                className="w-24 h-24 object-cover rounded-full border-4 border-white absolute -bottom-12"
                src={currentUserData?.photoURL}
                alt='profile image'
              />
            </div>
            {/* Bottom Half */}
            <div className="px-6 pt-16 pb-6 flex items-center justify-center flex-col min-h-[150px]">
              <h2 className="text-xl font-semibold text-center text-gray-800">
                {currentUserData?.displayName}
              </h2>
              <p className="text-gray-600 text-center mt-2">{currentUserData?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponent
