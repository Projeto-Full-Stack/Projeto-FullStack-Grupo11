import { ContextModal } from "@/context/modal.context";
import { ModalHeader } from "./modal/modalHeader";

interface Props {
    image_url: string
}

export function ShowImage ({image_url}: Props){
    return (
        <>
            <ModalHeader>Foto</ModalHeader>
                <div className="flex justify-center items-center">
                    <img src={image_url} className="w-full h-full" />
                </div>
        </>
    )
}
