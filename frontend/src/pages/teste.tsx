import { AnnForm } from "@/components/annForm";
import { LoginContext } from "@/context/login.context";
import { ContextModal } from "@/context/modal.context";
import { useFieldArray, useForm } from "react-hook-form";

export default function Teste() {
  const { userInfo } = LoginContext();

  const { register, handleSubmit, control } = useForm({
    defaultValues : {
      images: [{
        url: ""
      }]
    }
  })

  const { fields, append, prepend, remove } = useFieldArray({ control, name: "images", rules: {minLength: 2, maxLength: 6}})

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-7 w-[500px] mx-auto">
        {fields.map((field, index) => {
         return (
          <>
            <div className="flex flex-col">
              <label>{`Imagem ${index + 1}`}</label>
              <input type="text" placeholder="url da imagem" {...register(`images.${index}.url`)} className="border" key={field.id}/>
            </div>
            {fields.length > 2 &&
              <button onClick={() => remove(index)}>X</button>
            }
          </>
         )  
        })}
        <button onClick={() => append({url: "append"})}>append</button>
        <button>Submit</button>
      </form>
    </>
  );
}
