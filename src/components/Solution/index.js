import Image from "next/image";
import downloadIco from '/public/download.svg';
import scaleUpIco from '/public/scaleup.svg';
import stylizationIco from '/public/stylization.svg'
import BASE_URL from "@/constants";

export default function Soluion({data}) {
    return (
        <div className="solution">
            <Image 
            src={`${BASE_URL}/api/image/${data.id}`} 
            alt="image-solution"
            width={100}
            height={100}
            className="w-32 rounded-lg h-20 mr-6"/>
            <p className="w-1/2 text-left line-clamp-3 max-h-[4.3em]">
            {data && data.description ? data.description : 'no description is availible'}
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
                <button >
                    <Image 
                    src={downloadIco} 
                    alt="download-icon" 
                    className="border-l-2"/>
                </button>
            </div>
        </div>
        )
}