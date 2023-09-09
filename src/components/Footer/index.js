import Image from "next/image";
import logoLight from '/public/logo-light.svg';
import Link from "next/link";

export default function Footer() {
    return(
        <main className="footer">
            <div>
                <Image src={logoLight} alt="logo-light" className="w-36"/>
                Copyright © 2023 Pixel alchemy , Inc.<br/> All Rights Reserved
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col mx-12">
                    <p className="font-semibold pb-6">Company</p>
                    <Link href="#" className="footer-link">Blog</Link>
                    <Link href="#" className="footer-link">Jobs</Link>
                    <Link href="#" className="footer-link">How to use</Link>
                </div>
                <div className="flex flex-col mx-12">
                    <p className="font-semibold pb-6">Community</p>
                    <Link href="#" className="footer-link">Facebook</Link>
                    <Link href="#" className="footer-link">Linkedin</Link>
                    <Link href="#" className="footer-link">Twitter</Link>
                    <Link href="#" className="footer-link">Youtube</Link>
                </div>
            </div>
        </main>
        )
}