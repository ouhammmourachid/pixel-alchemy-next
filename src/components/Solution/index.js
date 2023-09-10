import Image from "next/image";
import downloadIco from '/public/download.svg';
import scaleUpIco from '/public/scaleup.svg';
import stylizationIco from '/public/stylization.svg'

export default function Soluion({src}) {
    return (
        <div className="solution">
            <Image 
            src={src} 
            alt="image-solution" 
            className="w-32 rounded-lg h-20 mr-6"/>
            <p className="w-1/2 text-left">
                Drag and drop anywhere Drag and drop anywhere Drag and drop
                Drag and drop anywhere Drag and drop anywhere Drag and drop
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