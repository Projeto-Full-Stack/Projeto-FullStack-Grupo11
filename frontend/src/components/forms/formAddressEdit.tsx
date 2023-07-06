import Input from "@/components/Inputs/input";
import { Text } from "@/components/typography/text.component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ModalHeader } from "../modal/modalHeader";
import { LoginContext } from "@/context/login.context";
import Button from "../button";
import {
  IdOmitedAddressInterface,
  idOmitedAddressSchema,
} from "@/schemas/address.schemas";
import motorsApi from "@/services/motors.service";
import { ContextModal } from "@/context/modal.context";

const EditAddressForm = () => {
  const [selected, setSelected] = useState(true);

  const handleSelected = (value: string) => {
    if (value === "default") {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<IdOmitedAddressInterface>({
    resolver: zodResolver(idOmitedAddressSchema),
    mode: "onChange",
  });

  const { userInfo, tokenState, addressInfo, setAddressInfo } = LoginContext();
  const { setModalContent } = ContextModal();

  useEffect(() => {
    setValue("cep", addressInfo.cep);
    setValue("street", addressInfo.street);
    setValue("city", addressInfo.city);
    setValue("number", addressInfo.number);
    setValue("complement", addressInfo.complement);
  }, []);

  async function teste(data: any) {
    try {
      const updatedAddress = await motorsApi.patch(
        `address/${addressInfo.id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${tokenState}`,
          },
        }
      );
      setAddressInfo(updatedAddress.data);
      setModalContent(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ModalHeader>Editar endereço</ModalHeader>
      <form
        onSubmit={handleSubmit(teste)}
        className={`bg-grey-10 rounded flex flex-col items-start  min-h-min `}
      >
        <div className="w-full h-fit">
          <Text weight={500} type="b2" extra_classes="">
            {"Informações de Endereço"}
          </Text>
          <Input
            register={register("cep")}
            input_name="cep"
            input_type="text"
            label="CEP"
            extra_classes="my-[5px]  h-[40px] flex flex-col w-full"
          >
            {"00000-000"}
          </Input>
          {errors.cep && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.cep.message}
            </p>
          )}
          <span className="flex gap-[10px] w-full my-[10px]">
            <div className="w-[60%]">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                <Text weight={500} type="b2">
                  Estado
                </Text>

                <select
                  {...register("state")}
                  onChange={(e) => handleSelected(e.target.value)}
                  required={true}
                  id="state"
                  name="state"
                  className="my-[5px] h-[40px] text-[14px] focus:outline-none focus:ring focus:ring-brand-1 text-grey-3 border-[1.5px] font-normal rounded border-grey-4 block w-full"
                >
                  <option value="default">Selecione seu estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </label>
              {selected && (
                <p className={`flex py-2 text-feedback-alert_1`}>
                  {"Selecione um estado"}
                </p>
              )}
            </div>
            <div>
              <Input
                register={register("city")}
                input_name="city"
                input_type="text"
                label="Cidade"
                extra_classes="my-[5px] w-full text-[13px] h-[40px]"
              >
                {"Digite sua Cidade"}
              </Input>
              {errors.city && (
                <p className={`flex py-2 text-feedback-alert_1`}>
                  {errors.city.message}
                </p>
              )}
            </div>
          </span>
          <Input
            register={register("street")}
            input_name="street"
            input_type="text"
            label="Rua"
            extra_classes="my-[5px] flex flex-col w-full h-[40px]"
          >
            {"Digite sua Rua"}
          </Input>
          {errors.street && (
            <p className={`flex py-2 text-feedback-alert_1`}>
              {errors.street.message}
            </p>
          )}
          <span className="flex gap-[10px] w-full">
            <div className="max-w-[35%]">
              <Input
                register={register("number")}
                input_name="number"
                input_type="text"
                label="Número *"
                extra_classes="my-[5px] h-[40px] text-[15px] w-full"
              >
                {"Digitar Número"}
              </Input>
              {errors.number && (
                <p className={`flex py-2 text-feedback-alert_1`}>
                  {errors.number.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <Input
                register={register("complement")}
                input_name="complement"
                input_type="text"
                label="Complemento"
                extra_classes="my-[5px]  h-[40px] flex flex-col w-full "
              >
                {"Ex: apart 307"}
              </Input>
              {errors.complement && (
                <p className={`flex py-2 text-feedback-alert_1`}>
                  {errors.complement.message}
                </p>
              )}
            </div>
          </span>
          <section className="w-full flex gap-2 justify-end mt-2">
            <Button type="b-brand">Editar</Button>
          </section>
        </div>
      </form>
    </>
  );
};

export default EditAddressForm;
