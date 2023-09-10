import Image from "next/image";
import imageCafe from '/public/cafe.jpg';
import lockClosed from '/public/lock-closed.svg';
import editIco from '/public/edit.svg';
import downloadIco from '/public/download.svg';
import stylizationIco from '/public/stylization.svg';
import scaleUpIco from '/public/scaleup.svg';
import line from '/public/line.svg';
import heart from '/public/heart.svg';
import comment from '/public/comment.svg';


export default function PostedImage() {
    return (
        <div className="posted-image relative">
            <Image 
            src={imageCafe} 
            alt="posted-image" 
            className="w-1/3 mx-12 py-12"/>
            <div className="mt-16">
                <div className="flex justify-between mr-12">
                    <h1 className="font-semibold">@_rachid_ouhamm</h1>
                    <button>
                        <Image src={lockClosed} alt="lock-closed-icon" />
                    </button>
                </div>
                <div className="flex justify-between my-16 mr-12">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam eget sapien non libero efficitur vehicula. Sed auctor, 
                    justo quis congue facilisis, odio justo convallis eros, 
                    nec consequat felis erat id urna. Vestibulum ante ipsum primis 
                    in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Mauris at ex ut lorem tristique consectetur. Fusce bibendum, 
                    quam id blandit consequat, tellus enim lacinia neque, sed interdum 
                    odio nisi nec elit. Vivamus sed mi in ex suscipit feugiat.
                    </p>
                    <Image src={editIco} alt="edit-ico" />
                </div>
                <div className="flex justify-between border-t-2 mx-40 pb-16 pt-6">
                    <button className="">
                        <Image src={stylizationIco} alt="stylization-icon"/>
                    </button>
                    <Image src={line} alt="line-1" />
                    <button>
                        <Image src={scaleUpIco} alt="scale-up-icon"/>
                    </button>
                    <Image src={line} alt="line-2" />
                    <button>
                        <Image src={downloadIco} alt="download-ico"/>
                    </button>
                </div>
                <div className="absolute bottom-1 right-3 flex justify-between">
                    <Image 
                    src={heart} 
                    alt="heart-icon" 
                    className="mx-1"/>
                    <p>2K</p>
                    <Image 
                    src={comment} 
                    alt="comment-icon"
                    className="mx-1"/>
                    <p>2K</p>
                    <p className="ml-6">2023-08-29</p>
                </div>
            </div>
        </div>
        )
}