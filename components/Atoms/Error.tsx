import error from "../icons/error.png"
import Image from "next/image"

export default function Error (){
    return(
        <>
        <button className="bg-transparent">
            <Image 
            className="bg-transparent w-5 h-5"
            src={error}
            alt="error"
            
            />
        </button>
        </>
    )
}