import { Text } from "../typography/text.component";
import { ModalHeader } from "../modal/modalHeader";
import Button from "../button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Input from "@/components/Inputs/input";
import { LoginContext } from "@/context/login.context";
import { ProfileContext } from "@/context/profile.context";
import { omitIdUserSchema, OmitedUserInterface } from "@/schemas/user.schemas";
import motorsApi from "@/services/motors.service";
import { ContextModal } from "@/context/modal.context";

const EditUserForm = () => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<OmitedUserInterface>({
    resolver: zodResolver(omitIdUserSchema),
    mode: "onChange",
  });

  const { userInfo, setUserInfo, tokenState } = LoginContext();
  const { profilePageInformation , setProfileInformation ,updateProfile } = ProfileContext()
  const { setModalContent } = ContextModal()

  useEffect(() => {
    setValue("name", userInfo!.name)
    setValue("email", userInfo!.email)
    setValue("cpf", userInfo!.cpf)
    setValue("phone", userInfo!.phone)
    setValue("description", userInfo!.description)
  }, [])

  async function editUser (data: any){
    try {
      const updated = await motorsApi.patch(`users/${userInfo!.id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenState}`
        }
      })
      setUserInfo(updated.data)
      setModalContent(false)
    }
    catch (error){
      console.log(error)
    }
  }

  return (
    <>
      <ModalHeader>Editar perfil</ModalHeader>
      <form
        onSubmit={(handleSubmit(editUser))}
        className={`bg-grey-10 rounded flex flex-col items-start  min-h-min `}
      >
        <div className="w-full h-fit">
          <Text weight={500} type="b2" extra_classes="mb-[24px]">
            {"Informações Pessoais"}
          </Text>
          <Input
            register={register("name")}
            input_name="name"
            input_type="text"
            label="Nome *"
            extra_classes="my-[5px] w-full h-[40px] flex flex-col"
          >
            Digite seu nome...
          </Input>
          {errors.name && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.name.message}
            </p>
          )}
          <Input
            register={register("email")}
            input_name="email"
            input_type="email"
            label="Email *"
            extra_classes="my-[5px] w-full h-[40px] flex flex-col"
          >
            Digite seu email...
          </Input>
          {errors.email && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.email.message}
            </p>
          )}
          <Input
            register={register("cpf")}
            input_name="cpf"
            input_type="text"
            label="CPF *"
            extra_classes="my-[5px] w-full h-[40px] flex flex-col"
          >
            Digite seu CPF...
          </Input>
          {errors.cpf && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.cpf.message}
            </p>
          )}

          <Input
            register={register("phone")}
            input_name="phone"
            input_type="tel"
            label="Celular *"
            extra_classes="my-[5px] w-full h-[40px] flex flex-col"
          >
            Digite seu telefone...
          </Input>
          <Text type="b2" weight={400}>Ex: (ZZ)9XXXX-YYYY</Text>
          {errors.phone && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.phone.message}
            </p>
          )}
          <Input
            register={register("birthDate")}
            input_name="birthDate"
            input_type="date"
            label="Data de nascimento *"
            extra_classes="my-[5px] w-full h-[40px] "
          >
            MM/DD/YYYY
          </Input>
          {errors.birthDate && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.birthDate.message}
            </p>
          )}
          <Input
            register={register("description")}
            input_name="description"
            input_type="textArea"
            label="Descrição *"
          >
            Escreva sobre você...
          </Input>
          {errors.description && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.description.message}
            </p>
          )}
        </div>
        <section className="w-full flex flex-col gap-2">
          <div className="flex justify-end">
            <Button type="bg-brand">Salvar alterações</Button>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditUserForm;
