import Image from "next/image";
import Footer from "../components/Footer";
import exampleSuperResolution from '/public/example-super-resolution.png';
import exampleStylization from '/public/images-stylization.png';

export default function Home() {
  return (
    <main >

      <section key="section-1">
        
      </section>
      <section key="section-2">
        <p>Sharper, Crisper, and More Vibrant: AI Super Resolutions Redefine Visual Quality</p>
        <Image src={exampleSuperResolution} alt="example-super-resolution"/>
        <ul>
          <li>Upscale pics with AI</li>
          <li>Fix pixelation and blur</li>
          <li>Correct colors and lighting</li>
        </ul>
      </section>
      <section key="section-3">
        <p>Transform Your Photos into Artwork: Explore the Magic of Image Stylization!</p>
        <Image src={exampleStylization} alt="example-stylization"/>
      </section>
      <Footer/>
    </main>
  )
}
