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
        <p>Image Stylization & Image enhancer. Improve your photos</p>  
        <Image src={uploadEqlipseIlustration} alt="upload-eqlipse-ilustration" />
        <ul>
          <il>Increase image resolution, improve quality, and add clarity</il>
          <il>Make your photos look their best in one click</il>
          <il>Transform Your Photos into Art: Explore the Magic of Neural Style Transfer!</il>
        </ul>
        <Link href="#">Start free</Link>
      </section>
      <section key="section-2" className="section-2">
        <p>Sharper, Crisper, and More Vibrant: AI Super Resolutions Redefine Visual Quality</p>
        <Image src={exampleSuperResolution} alt="example-super-resolution"/>
        <ul>
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
