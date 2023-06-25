import Input from "../Inputs/input";
import { Text } from "../typography/text.component";
import { ModalHeader } from "../modal/modalHeader";
import Button from "../button";
import { registerSchema, RegisterInterface } from "@/schemas/register.schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerContext } from "@/context/register.context";
import { useContext, useEffect } from "react";
import { ModalContext } from "@/context/modal.context";

const EditUserForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterInterface>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const { registerRequest, registerError, setRegisterError } =
    registerContext();

  useEffect(() => {
    return setRegisterError("");
  });

  return (
    <>
      <ModalHeader>Editar perfil</ModalHeader>
      <form
        onSubmit={handleSubmit(registerRequest)}
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
            {"Ex: Samuel Leão"}
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
            {"Ex: samuel@kenzie.com.br"}
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
            {"000.000.000-00"}
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
            {"(DDD) 90000-0000"}
          </Input>
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
            {"00/00/00"}
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
            {"Digitar descrição"}
          </Input>
          {errors.description && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.description.message}
            </p>
          )}
        </div>
        <section className="w-full mt-2 flex justify-end">
          <Button type="bg-brand" extra_classes="">
            Salvar alterações
          </Button>
        </section>
      </form>
    </>
  );
};

export default EditUserForm;
