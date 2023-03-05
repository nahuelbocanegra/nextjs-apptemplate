import person from "../icons/person.png"
import Image from "next/image"

export default function Person (){
    return(
        <>
            <button className="bg-gray-600 button-person">
            <Image 
            className="person"
            src={person}
            alt="contorno de cuerpo"
            />
            </button>
        </>
    )
}