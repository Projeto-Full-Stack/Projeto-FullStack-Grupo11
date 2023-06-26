import { LoginContext } from "@/context/login.context"
import motorsApi from "@/services/motors.service"
import { useRouter } from "next/router"
import { ModalHeader } from "../modal/modalHeader"
import { Text } from "../typography/text.component"
import Button from "../button"
import { ContextModal } from "@/context/modal.context"


export function DeleteUserForm (){
    const { userInfo, tokenState, logout } = LoginContext()
    const { setModalContent } = ContextModal()

    async function deleteAccount (){
        await motorsApi.delete(`users/${userInfo!.id}`, {
            headers: {
                Authorization: `Bearer ${tokenState}`
            }
        })
        logout()
    }

    return (
        <>
            <ModalHeader>Deleção de usuário</ModalHeader>
            <div className="flex flex-col gap-4">
                <Text type="b1" weight={600} extra_classes="text-feedback-alert_1">Você tem certeza que quer deletar sua conta?</Text>
                <Text type="b1" weight={600} extra_classes="text-feedback-alert_1">Essa ação é irreversível!</Text>
            </div>
            <div className="flex justify-between mt-10">
                <Button type="bg-alert" click_event={() => deleteAccount()}>Deletar a conta</Button>
                <Button type="bg-grey" click_event={() => setModalContent(false)}>Cancelar</Button>
            </div>
        </>
    )
}