import Input from "@/components/Inputs/input";
import Button from "@/components/button";
import { ModalHeader } from "@/components/modal/modalHeader";
import { AnnouncementContext } from "@/context/announcement.context";
import { ContextModal } from "@/context/modal.context";
import { EditAnnouncementInterface, IncludeIdAnnouncementInterface, editAnnouncementSchema } from "@/schemas/announcement.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

interface Props {
    announcement: IncludeIdAnnouncementInterface;
}

export function EditAnnouncementForm ({announcement}: Props){
    const array = announcement.image.length ? announcement.image : [{imageUrl: ""}]

    const {handleSubmit, register, setValue, formState: { errors }, control} = useForm<EditAnnouncementInterface>({
        resolver: zodResolver(editAnnouncementSchema),
        defaultValues: {
            image: array
        }
    });

    const { fields, append, remove } = useFieldArray({
        name: "image",
        control,
        rules: {
          minLength: 2,
          maxLength: 6
        }
      })

    const { editAnnouncement } = AnnouncementContext()
    const { setModalContent } = ContextModal()

    useEffect(() => {
        setValue("description", announcement.description)
        setValue("price", announcement.price)
        setValue("color", announcement.color)
        setValue("mileage", announcement.mileage)
    }, [])


    return (
        <>
            <ModalHeader>Editar anúncio</ModalHeader>
            <form onSubmit={handleSubmit((data) => editAnnouncement(data, announcement.image))} className="flex flex-col gap-5">
                <input className="hidden" value={announcement.id} {...register("id")}></input>
                <Input input_type="textArea" input_name="description" label="Descrição" register={register("description")}>Digite a descrição...</Input>
                <div className="flex justify-between gap-4">
                    <Input input_type="text" input_name="price" label="Preço" register={register("price")} extra_classes="w-full">Digite o preço...</Input>
                    <Input input_type="text" input_name="color" label="Cor" register={register("color")}  extra_classes="w-full">Cor do carro...</Input>
                </div>
                <div className="flex flex-col gap-5">
                    <Input input_type="text" input_name="mileage" label="Quilometragem" register={register("mileage")}>Milhagem do carro...</Input>
                    <div className="flex gap-2">
                        <label htmlFor="avaliable_true"><input type="radio" id="avaliable_true"  {...register("avaliable")} value={"true"} />Disponível</label>
                        <label htmlFor="avaliable_false"><input type="radio" id="avaliable_false" {...register("avaliable")} value={"false"} />Indisponível</label>
                    </div>
                </div>

                <label className={`font-medium text-grey-1 w-full`}>Fotos</label>
                {fields.map((element, index) => 
                    <div className="flex gap-2">
                        <input type="text" placeholder="Coloque uma url da foto do carro..." className="border w-full p-1 rounded border-grey-4" {...register(`image.${index}.imageUrl`)} key={element.id}/>
                    { fields.length > 1 &&  
                        <button onClick={() => remove(index)} type="button" className="border rounded bg-brand-3 border-brand-3 px-3">X</button>
                    }
                    </div>
                )}
                {fields.length >= 1 && fields.length < 6 &&
                    <Button type="bg-brand" click_event={() => append({imageUrl: ""})}  button_type="button" extra_classes="lg:w-fit">Adicionar mais fotos</Button>
                }


                <div className="flex justify-between">
                    <Button type="bg-brand">Editar</Button>
                    <Button type="bg-grey" click_event={() => setModalContent(false)}>Cancelar</Button>
                </div>
            </form>
        </>
    )
}