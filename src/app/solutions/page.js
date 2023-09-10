import Soluion from "@/components/Solution"
import imageSwan from '/public/swan.jpg'
import cafe from '/public/cafe.jpg'

export default function Soluions() {
    return (
        <div className="">
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
            <Soluion src={imageSwan}/>
            <Soluion src={cafe}/>
        </div>
        )
}