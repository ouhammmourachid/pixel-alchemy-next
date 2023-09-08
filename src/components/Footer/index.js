import Image from "next/image";
import logoLight from '/public/logo-light.svg';
import Link from "next/link";

export default function Footer() {
    return(
        <main>
            <div>
                <Image src={logoLight} alt="logo-light" />
                Copyright © 2023 Pixel alchemy , Inc.<br/> All Rights Reserved
            </div>
            <div>
                <div>
                    Company <br/>
                    <Link href="#">Blog</Link>
                    <Link href="#">Jobs</Link>
                    <Link href="#">How to use</Link>
                </div>
                <div>
                    Community <br/>
                    <Link href="#">Facebook</Link>
                    <Link href="#">Linkedin</Link>
                    <Link href="#">Twitter</Link>
                    <Link href="#">Youtube</Link>
                </div>
            </div>
        </main>
        )
}