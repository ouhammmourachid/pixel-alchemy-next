"use client"
import Solution from "@/components/Solution";
import eqlipseIlusion from '/public/eqlipse-ilus.svg';
import Image from "next/image";
import { useEffect, useState, useContext, useRef} from "react";
import BASE_URL from "@/constants";
import Cookies from "js-cookie";
import { UserId } from "@/contexts/UserIdContext";
import { useRouter } from "next/navigation";
import { LogedIn } from "@/contexts/LogedInContext";
import { ShowSignIn } from "@/contexts/ShowSignInContext";

export default function Soluions() {
    const [solutionsdata, setSolutionsData] = useState([])
    const [selectedImage, setSelectedImage] = useState(null);
    const {userId,setUserId} = useContext(UserId);
    const fileInputRef = useRef(null);
    const {isLogedIn,setIsLogedIn} = useContext(LogedIn);
    const {showSignIn, setShowSignIn} = useContext(ShowSignIn);
    const router = useRouter();
    useEffect(() => {
      if(!isLogedIn){
        setShowSignIn(true);
        router.push('/')
      }
      getUserImages()
    },[]);
    const handleImageClick = () => {
        // Trigger a click on the hidden file input element to open the file picker dialog.
        if (fileInputRef.current) {
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
            getUserImages();
          } else {
            console.log("error acuured",error);
          }
        } catch (error) {
          // Handle network errors.
        }
      };
    const getUserImages = async ()=>{
        await fetch(`${BASE_URL}/api/image?mine=1`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setSolutionsData(data)
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    
    return (
        <div>
            {solutionsdata.map((image)=>(
                <Solution key={image.id} solutionData={image}/>
            ))
            }
            <div className="flex flex-row mx-52 relative">
                <p className="text-white font-mono mt-44">Drag and drop anywhere <span className="text-purple">to upload </span></p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    />
                <Image 
                src={eqlipseIlusion} 
                alt="eqlipse-ilustion" 
                onClick={handleImageClick}
                className="w-80 absolute right-0"/>
                <p className="text-sm absolute right-12 bottom-0">JPG, PNG, WebP up to 50 mb</p>
            </div>
        </div>
        )
}