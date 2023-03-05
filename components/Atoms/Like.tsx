import like from "../icons/like.png"
import Image from "next/image"

export default function Like (){
    return(
        <>
            <button className="bg-gray-600 button-like">
            <Image 
            className="like"
            src={like}
            alt="imagen de corazon"
            />
            </button>
        </>
    )
}