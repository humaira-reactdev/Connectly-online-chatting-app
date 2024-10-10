import { useSelector } from 'react-redux'
import { TbUserEdit } from "react-icons/tb";
import React, { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { IoIosCloseCircle } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

const HomeComponent = () => {

  // =====================DATA FETCH FROM SLICE===============//
  const currentUserData = useSelector((state) => state.counter.userData);

  // ==============variables====================//
  const [show, setShow]=useState(false)

  // ======firebase variables==========//
  const storage = getStorage();
  

  //========================react cropper variables=============//
  const defaultSrc =    currentUserData?.photoURL

  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  // =================functions==========//

  const handleSave=()=>{
    const storageRef = ref(storage, 'userPhoto/'+currentUserData.uid + '.png');
    const auth=getAuth()
    
    uploadString(storageRef, cropData, 'data_url').then((snapshot) => {
      console.log('Uploaded a data_url string!');
      getDownloadURL(storageRef)
      .then((url)=>{
        onAuthStateChanged(auth, (user) => {
          updateProfile(auth.currentUser, {
            photoURL: url           
          }).then(()=>{
            console.log('done')
            location.reload()
          })

        });
        console.log(url)
      })
    });
  }

  // =================cropper functions===============//
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  console.log(cropData) 

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-100 font-montserrat'>
        <div className='profileCard text-black'>
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Top Half */}
            <div className="bg-[#91DDCF] p-6 relative flex items-center justify-center min-h-[150px]">
              {/* User Edit Icon */}
              <button onClick={()=>setShow(true)}><TbUserEdit className="absolute top-4 right-4 text-xl text-black cursor-pointer" /></button>
              {/* Profile Image */}
              <img
                className="w-24 h-24 object-cover rounded-full border-4 border-white absolute -bottom-12"
                src={currentUserData?.photoURL}
                alt="profile image"
              />
            </div>
            {/* Bottom Half */}
            <div className="px-6 pt-16 pb-6 flex items-center justify-center flex-col min-h-[150px]">
              <h2 className="text-xl font-semibold text-center text-gray-800">
                {currentUserData?.displayName}
              </h2>
              <p className="text-gray-600 text-center mt-2">
                {currentUserData?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cropping Overlay */}
      {
        show &&
        <div className='w-full h-screen bg-[#0000007c] absolute top-0 left-0 flex justify-center items-center'>
        <div className='bg-white p-5 rounded-lg flex flex-col items-center'>
        <div className='icons flex items-center justify-start w-full my-5'>
          <button onClick={()=>setShow(false)}><IoIosCloseCircle className='text-[#B8001F] text-[25px]' /></button>
          <button onClick={handleSave}><FaSave className='text-[25px] text-[#173B45]'/></button>
        </div>
        

          {/* File Input */}
          <div style={{ width: "100%" }}>
            <input type="file" onChange={onChange} className="mb-4" />
            <button className='text-black mb-4'>Use default img</button>
            {/* Cropper */}
            <Cropper
              ref={cropperRef}
              style={{ height: '400px', width: '400px' }}
              zoomTo={0.5}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              guides={true}
            />
          </div>

          {/* Cropped Image */}
          <div className="box mt-6 w-full flex justify-center">
            <h1>
              <span>Crop</span>
              <button
                className="bg-blue-500 text-white py-1 px-4 ml-4 rounded"
                onClick={getCropData}
              >
                Crop Image
              </button>
            </h1>
            <img
              className="mt-4"
              style={{ width: "20%" }}
              src={cropData}
              alt="cropped"
            />
          </div>
        </div>
        </div>
      }
      
    </>
  );
};

export default HomeComponent;
