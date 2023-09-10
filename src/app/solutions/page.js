import Soluion from "@/components/Solution";
import imageSwan from '/public/swan.jpg';
import cafe from '/public/cafe.jpg';
import eqlipseIlusion from '/public/eqlipse-ilus.svg';
import Image from "next/image";

export default function Soluions() {
    return (
        <div>

            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>

            <div className="flex flex-row mx-52 relative">
                <p className="text-white font-mono mt-44">Drag and drop anywhere <span className="text-purple">to upload </span></p>
                <Image 
                src={eqlipseIlusion} 
                alt="eqlipse-ilustion" 
                className="w-80 absolute right-0"/>
                <p className="text-sm absolute right-12 bottom-0">JPG, PNG, WebP up to 50 mb</p>
            </div>
        </div>
        )
}