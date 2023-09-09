import Image from "next/image";
import Footer from "../components/Footer";
import exampleSuperResolution from '/public/example-super-resolution.png';
import exampleStylization from '/public/images-stylization.png';
import uploadEqlipseIlustration from '/public/eqlipse-ilus.svg';
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <section key="section-1" className="section-1">
        <p className="text-4xl font-semibold pt-11">Image Stylization & Image enhancer. Improve your photos</p>  
        <Image 
        src={uploadEqlipseIlustration} 
        alt="upload-eqlipse-ilustration" 
        className="absolute right-0 top-0 h-3/4"/>
        <ul className="list-disc flex flex-col text-sm text-third pb-5 pt-32 pl-3">
          <li className="py-1">Increase image resolution, improve quality, and add clarity</li>
          <li className="py-1">Make your photos look their best in one click</li>
          <li className="py-1">Transform Your Photos into Art: Explore the Magic of Neural Style Transfer!</li>
        </ul>
        <Link href="#" className="bg-purple rounded-full py-2 px-3 hover:bg-secondry ml-20">Start free</Link>
      </section>
      <section key="section-2" className="section-2">
        <p className="text-lg">Sharper, Crisper, and More Vibrant: AI Super Resolutions Redefine Visual Quality</p>
        <Image 
        src={exampleSuperResolution} 
        alt="example-super-resolution"
        className="w-2/3 py-9 pl-48"/>
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
