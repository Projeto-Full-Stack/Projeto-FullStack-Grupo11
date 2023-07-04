import Input from "@/components/Inputs/input";
import Button from "@/components/button";
import { ModalHeader } from "@/components/modal/modalHeader"
import { commentContext } from "@/context/comments.context";
import { IncludeIdCommentInterface } from "@/schemas/comment.schemas";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface EditCommentProps {
    comment_content: IncludeIdCommentInterface;
}


export function EditComment ({comment_content}: EditCommentProps){
    const { register, handleSubmit, setValue, formState } = useForm<IncludeIdCommentInterface>()
    const { editComment } = commentContext()

    useEffect(() => {
        console.log(formState.errors)
    }, [formState.errors])

    return (
        <>
            <ModalHeader>Editar comentário</ModalHeader>
            <form onSubmit={handleSubmit((data) => editComment(data, comment_content.id))}>
                <Input register={register("comment")} input_type="textArea" input_name="comment" label="Comentário" extra_classes="gap-4">Digite o seu comentário...</Input>
                <div className="flex gap-4 justify-end">
                    <Button type="bg-brand">Editar</Button>
                    <Button type="b-grey">Cancelar</Button>
                </div>
            </form>
        </>
    )
}