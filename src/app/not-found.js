import Image from "next/image"
import errorIlustration from '/public/404-ilustration.svg'

export default function NotFound() {
  return (
        <main className="main-error">
          <h1 className="font-bold text-4xl">Oops...</h1>
          <Image src={errorIlustration} alt="4O4-ilustration" className='max-w-3xl my-9'/>
          <h2 className="text-secondary text-2xl ">
             It looks like the page you're after doesn't exist
          </h2>
        </main>
    )
}