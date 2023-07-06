import { ContextModal } from "@/context/modal.context"
import { ShowImage } from "./imageModal"


interface Props {
    image: string
}

export function ImageCard ({image}: Props){
    const { setModalContent } = ContextModal()

    return (
        <li className="min-w-[90px] min-h-[90px] max-w-[90px] max-h-[90px] lg:min-w-[108px] lg:min-h-[108px] lg:max-w-[108px] lg:max-h-[108px] flex justify-center cursor-pointer"
            onClick={() => setModalContent(<ShowImage image_url={image}/>)}
        >
            <img
            className="object-scale-down"
            src={image}
            onError={({currentTarget}) => {
                currentTarget.onerror = null
                currentTarget.src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              }}
            />
        </li>
    )
}