"use client"
import Image from "next/image";
import Footer from "../components/Footer";
import exampleSuperResolution from '/public/example-super-resolution.png';
import exampleStylization from '/public/images-stylization.png';
import uploadEqlipseIlustration from '/public/eqlipse-ilus.svg';
import Link from "next/link";
import { useState,useRef,useContext } from "react";
import BASE_URL from "@/constants";
import Cookies from "js-cookie";
import { UserId } from "@/contexts/UserIdContext";
import { ShowSignIn } from "@/contexts/ShowSignInContext";
import { LogedIn } from "@/contexts/LogedInContext";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const {userId,setUserId} = useContext(UserId);
  const {showSignIn,setShowSignIn} = useContext(ShowSignIn);
  const {isLogedIn,setIsLogedIn} = useContext(LogedIn);
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    if(!isLogedIn){
      setShowSignIn(true);
    }
    console.log(isLogedIn)
    // Trigger a click on the hidden file input element to open the file picker dialog.
    if (isLogedIn && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    if (file) {
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('imagePath', file);
    formData.append('user',String(userId));
    try {
      // Send the formData to your endpoint using fetch or a library like axios.
      const response = await fetch(`${BASE_URL}/api/image`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `${Cookies.get('jwt')}`,
        },
      });

      // Handle the response as needed.
      if (response.ok) {
        console.log("image uploaded successfaull");
      } else {
        console.log("error acuured",error);
      }
    } catch (error) {
      // Handle network errors.
    }
  };
  return (
    <main >
      <section key="section-1" className="section-1 relative">
        <p className="text-4xl font-semibold pt-11">Image Stylization & Image enhancer. Improve your photos</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <Image 
        src={uploadEqlipseIlustration} 
        alt="upload-eqlipse-ilustration"
        onClick={handleImageClick}
        className="absolute right-0 top-0 h-3/4"/>
        <ul className="list-disc flex flex-col text-sm text-third pb-5 pt-32 pl-3">
          <li className="py-1">Increase image resolution, improve quality, and add clarity</li>
          <li className="py-1">Make your photos look their best in one click</li>
          <li className="py-1">Transform Your Photos into Art: Explore the Magic of Neural Style Transfer!</li>
        </ul>
        <Link href="/solutions" className="bg-purple rounded-full py-2 px-3 hover:bg-secondry ml-20">Start free</Link>
        <p className="absolute right-80">Drag and drop anywhere <span className="text-purple">to upload </span></p>
      </section>
      <section key="section-2" className="section-2">
        <p className="text-lg">Sharper, Crisper, and More Vibrant: AI Super Resolutions Redefine Visual Quality</p>
        <Image 
        src={exampleSuperResolution} 
        alt="example-super-resolution"
        className="w-2/3 py-9 pl-64"/>
        <ul className="list-disc text-sm flex flex-row justify-between px-12">
          <li>Upscale pics with AI</li>
          <li>Fix pixelation and blur</li>
          <li>Correct colors and lighting</li>
        </ul>
      </section>
      <section key="section-3" className="section-3">
        <p className="flex items-center w-3/4 text-lg">Transform Your Photos into Artwork: Explore the Magic of Image Stylization!</p>
        <Image 
        src={exampleStylization} 
        alt="example-stylization"
        className="w-1/2 flex items-center justify-center"/>
      </section>
      <Footer/>
    </main>
  )
}
