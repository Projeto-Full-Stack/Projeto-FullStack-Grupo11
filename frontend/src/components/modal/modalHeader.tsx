import { ContextModal } from "@/context/modal.context"
import { Heading } from "../typography/heading.component"


interface Props {
    children: string
}

export const ModalHeader = ({children}: Props) => {
    const { setModalContent } = ContextModal()

    return (
        <header className="flex justify-between items-center py-5">
            <Heading type="h7" weight={500}>{children}</Heading>
            <button onClick={() => setModalContent(null)}>
                <div className="w-4 h-4 flex flex-col justify-center relative">
                    <div className="border w-4 border-grey-grey_2 bg-grey-grey_2 rotate-45 rounded absolute"></div>
                    <div className="border w-4 border-grey-grey_2 bg-grey-grey_2 -rotate-45 rounded"></div>
                </div>
            </button>
        </header>
    )
}