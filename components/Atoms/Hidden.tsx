import hidden from "../icons/hidden.png"
import Image from "next/image"

export default function Hidden (){
    return(
        <>
            <button className="bg-transparent mr-1">
                <Image 
                className="bg-transparent w-7 h-5 mr-2"
                src={hidden}
                alt="hidden"
                />
            </button>
        </>
    )
}