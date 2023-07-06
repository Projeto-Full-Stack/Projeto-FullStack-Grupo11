import Button from "@/components/button";
import { ModalHeader } from "@/components/modal/modalHeader";
import { Text } from "@/components/typography/text.component";
import { AnnouncementContext } from "@/context/announcement.context";
import { ContextModal } from "@/context/modal.context";

interface Props {
    id: string
}

export function DeleteAnnouncementForm ({id}: Props){
    const { setModalContent } = ContextModal()
    const { deleteAnnouncement } = AnnouncementContext()


    return (
        <>
            <ModalHeader>Deleção de anúncio</ModalHeader>
            <div className="flex flex-col gap-4">
                <Text type="b1" weight={600} extra_classes="text-feedback-alert_1">Você tem certeza que quer deletar esse anúncio?</Text>
                <Text type="b1" weight={600} extra_classes="text-feedback-alert_1">Essa ação é irreversível!</Text>
            </div>
            <div className="flex justify-between mt-10">
                <Button type="bg-alert" click_event={() => deleteAnnouncement(id)}>Deletar a anúncio</Button>
                <Button type="bg-grey" click_event={() => setModalContent(false)}>Cancelar</Button>
            </div>
        </>
    )
}