import Button from "@/components/button";
import { ModalHeader } from "@/components/modal/modalHeader";
import { Text } from "@/components/typography/text.component";
import { commentContext } from "@/context/comments.context";
import { ContextModal } from "@/context/modal.context";
import { IncludeIdCommentInterface } from "@/schemas/comment.schemas";


interface EditCommentProps {
    comment_content: IncludeIdCommentInterface;
}

export function DeleteComment ({comment_content}: EditCommentProps){
    const { setModalContent } = ContextModal()
    const { deleteComment } = commentContext()

    return (
        <>
            <ModalHeader>Deleção de comentário</ModalHeader>
            <div className="flex flex-col gap-4">
                <Text type="b1" weight={600} extra_classes="text-feedback-alert_1">Você tem certeza que quer deletar esse comentário?</Text>
                <Text type="b1" weight={600} extra_classes="text-feedback-alert_1">Essa ação é irreversível!</Text>
            </div>
            <div className="flex justify-between mt-10">
                <Button type="bg-alert" click_event={() => deleteComment(comment_content.id)}>Deletar comentário</Button>
                <Button type="bg-grey" click_event={() => setModalContent(false)}>Cancelar</Button>
            </div>
        </>
    )
}