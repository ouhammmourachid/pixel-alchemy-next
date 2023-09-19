import Image from "next/image";
import downloadIco from '/public/download.svg';
import scaleUpIco from '/public/scaleup.svg';
import stylizationIco from '/public/stylization.svg'
import BASE_URL from "@/constants";
import Cookies from "js-cookie";

export default function Soluion({solutionData}) {
    const handleClickDownload = async()=>{
        try {
            const response = await fetch(`${BASE_URL}/api/download/image/${solutionData.id}`); // Replace '1' with the actual image ID
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `image-pixel-alchemy-n-${solutionData.id}.jpg`; // Set the desired file name
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Failed to download image');
            }
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    }
    return (
        <div className="solution">
            <Image 
            src={`${BASE_URL}/api/image/${solutionData.id}`} 
            alt="image-solution"
            width={100}
            height={100}
            className="w-32 rounded-lg h-20 mr-6"/>
            <p className="w-1/2 text-left line-clamp-3 max-h-[4.3em]">
            {solutionData && solutionData.description ? solutionData.description : 'no description is availible'}
            </p>
            <div className="flex flex-row mx-12">
                <button className="pr-3">
                    <Image src={stylizationIco} alt="stylization-icon" />
                </button>
                <button>
                    <Image 
                    src={scaleUpIco} 
                    alt="scaleup-icon" 
                    className="border-l-2"/>
                </button>
                <button onClick={handleClickDownload}>
                    <Image 
                    src={downloadIco} 
                    alt="download-icon" 
                    className="border-l-2"/>
                </button>
            </div>
        </div>
        )
}