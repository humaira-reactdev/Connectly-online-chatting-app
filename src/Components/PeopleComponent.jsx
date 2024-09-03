import React from 'react'

const PeopleComponent = () => {
  const users = [
    {
      id: 1,
      profilePicture: "https://via.placeholder.com/100",
      name: "John Doe",
    },
    {
      id: 2,
      profilePicture: "https://via.placeholder.com/100",
      name: "Jane Smith",
    },
    {
      id: 3,
      profilePicture: "https://via.placeholder.com/100",
      name: "Sam Johnson",
    },
    // Add more users as needed
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 font-montserrat text-[#363636]">
      <h1 className="text-3xl font-bold text-center mb-[10px] text-[#363636]">Connect with others</h1>
      <h2 className='text-xl font-regular text-center mb-8'>Add new friends and start a conversation</h2>
      <div className="max-w-3xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4"
          >
            <div className="flex items-center">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={user.profilePicture}
                alt={`${user.name}'s profile`}
              />
              <span className="ml-4 text-lg font-semibold text-[#363636]">
                {user.name}
              </span>
            </div>
            <button className="text-white bg-[#8E3E63] hover:bg-[#91DDCF] hover:text-black ease-linear duration-200 font-medium py-1 px-3 rounded">
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default PeopleComponent