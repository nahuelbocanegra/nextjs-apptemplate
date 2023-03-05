import Image from "next/image"
import lents from "../icons/Vector.png"

export default function Input (){
    return(
        <div className="container-input__one bg-cyan-400">
            <div className="container-input__lupita">
                <input type="text" placeholder="¿Que quieres ver en tu ciudad?" className="rounded-3xl bg-white mr-auto"/>
                <Image
                className="lupita"
                src={lents}
                alt="lupita"
                />
            </div>
        </div>
    )
}