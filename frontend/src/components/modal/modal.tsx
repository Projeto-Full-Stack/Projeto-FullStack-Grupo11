import { useState, useEffect } from "react"
import { modalContext } from "@/context/modal.context"
import { ModalHeader } from "./modalHeader"

export const Modal = () => {
    const { modalContent } = modalContext()

    return (
        <>
            { modalContent && 
                (
                    <div className={`fixed top-0 left-0 w-screen h-screen bg-[#00000080] flex items-center lg:justify-center lg:items-start lg:overflow-y-scroll`}>
                        <div className="w-screen h-fit px-4 pb-5 bg-colors_color_white_fixed rounded-lg overflow-y-scroll max-h-[80%]
                        lg:px-6
                        lg:pb-8
                        lg:max-w-[520px]
                        lg:max-h-none
                        lg:mt-[98px]
                        ">
                            {modalContent}
                        </div>
                    </div>
                )
            }
        </>
    )
}