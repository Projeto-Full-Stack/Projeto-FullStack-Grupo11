import { useState } from "react";
import Input from "./Inputs/input";
import { ModalHeader } from "./modal/modalHeader";
import { CarContext } from "@/context/cars.context";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnnoucementInterface, annoucementSchema } from "@/schemas/announcement.schemas";
import { AnnouncementContext } from "@/context/announcement.context";

export const AnnForm = () => {
  const addImageInput = () => {
    setAux([...aux, { images: "" }]);
  };

  const removeImageInput = (index: number) => {
    const auxList = [...aux];
    auxList.splice(index, 1);
    setAux(auxList);
  };

  const getSpecificCarData = (value: string) => {
    const fuelType = ["Flex", "Híbrido", "Elétrico"];
    const car: any = Object.values(carsByBrand).find(
      (car: any) => car.name === value
    );
    setValue("year", car.year)
    setValue("fipe", car.value)
    setValue("fuel", fuelType[car.fuel - 1])
  };

  const resetValues = (value: string) => {
    if (value !== "default") setModelSelectState(false)
    if (value === "default") setModelSelectState(true)

    setValue("model", "default")
    setValue("year", "")
    setValue("fipe", "")
    setValue("fuel", "")
  }

  const [aux, setAux] = useState([{ images: "" }]);
  
  const [modelSelectState, setModelSelectState] = useState(true)

  const { cars, carsByBrand, getCarsByBrand } = CarContext();
  const { createAnnouncement } = AnnouncementContext()

  const { register, setValue, handleSubmit, formState } = useForm<AnnoucementInterface>({
    resolver: zodResolver(annoucementSchema)
  })


  return (
    <>
      <ModalHeader>{`Criar anúncio`}</ModalHeader>
      <h1 className={`mb-6`}>Informações do veículo</h1>
      <form className={`flex flex-col w-full gap-6`} onSubmit={handleSubmit(createAnnouncement)}>
        <select
          {...register("brand")}
          onChange={(e) => {
            getCarsByBrand(e.target.value)
            resetValues(e.target.value)
          }}
          id={"select01"}
          className={`border-grey-4 border-[1.5px] focus:outline-none focus:ring focus:ring-brand-1 placeholder:text-grey-3 rounded font-normal px-6 py-1`}
        >
          <option value="default">Insira a marca</option>
          {Object.keys(cars).map((brand) => {
            return (
              <option
                key={`${brand}`}
                value={`${brand}`}
                id={`${brand}`}
              >{`${brand}`}</option>
            );
          })}
        </select>
        <select
          {...register("model")}
          onChange={(e) => {
            getSpecificCarData(e.target.value);
          }}
          id="select02"
          className={`border-grey-4 border-[1.5px] focus:outline-none focus:ring focus:ring-brand-1 placeholder:text-grey-3 rounded font-normal px-6 py-1`}
          disabled={modelSelectState}
        >
          <option value="default" disabled={!modelSelectState}>Insira o modelo</option>
          {Object.values(carsByBrand).map((model: any) => {
            return (
              <option key={`${model.id}`} value={`${model.name}`}>
                {model.name}
              </option>
            );
          })}
        </select>
        <div className={`flex gap-2 w-full`}>
          <Input
            input_type={`text`}
            input_name={`year`}
            label={`Ano`}
            extra_classes={`w-full`}
            state={true}
            register={register("year")}
          >{`Insira o ano`}</Input>
          <Input
            input_type={`text`}
            input_name={`fuel`}
            label={`Combustível`}
            extra_classes={`w-full`}
            state={true}
            register={register("fuel")}
            >{`Insira o combustível`}</Input>
        </div>
        <div className={`flex gap-2 w-full`}>
          <Input
            input_type={`text`}
            input_name={`mileage`}
            label={`Quilometragem`}
            extra_classes={`w-full`}
            register={register("mileage")}
          >{`Insira a quilometragem`}</Input>
          <Input
            input_type={`text`}
            input_name={`color`}
            label={`Cor`}
            extra_classes={`w-full`}
            register={register("color")}
          >{`Insira a cor`}</Input>
        </div>
        <div className={`flex gap-2 w-full`}>
          <Input
            input_type={`text`}
            input_name={`fipe`}
            label={`Preço FIPE`}
            extra_classes={`w-full`}
            state={true}
            register={register("fipe")}
            >{`Insira o preço da fipe`}</Input>
          <Input
            input_type={`text`}
            input_name={`price`}
            label={`Preço`}
            extra_classes={`w-full`}
            register={register("price")}
            >{`Insira o preço`}</Input>
        </div>
        <Input
          input_type={`textArea`}
          input_name={`description`}
          label={`Descrição`}
          extra_classes={`w-full`}
          register={register("description")}
          >{`Insira uma descrição`}</Input>
        <Input
          input_type={`text`}
          input_name={`coverImage`}
          label={`Imagem de capa`}
          extra_classes={`w-full`}
          register={register("coverImage")}
          >{`Insira uma imagem de capa`}</Input>
        {/* <Input
          input_type={`text`}
          input_name={`image`}
          label={`1ª imagem da galeria`}
          extra_classes={`w-full`}
        >{`Insira a imagem`}</Input>
        {aux.map((image, index) => (
          <div key={index} className={`flex w-full`}>
            <Input
              input_type={`text`}
              input_name={`image`}
              label={`${index + 2}ª imagem da galeria`}
              extra_classes={`w-full`}
            >{`Insira a imagem`}</Input>
            {aux.length > 1 && (
              <button
                type="button"
                className={`bg-brand-4 rounded text-brand-1 w-[8%] h-[8%] mt-5 p-2`}
                onClick={() => removeImageInput(index)}
              >
                X
              </button>
            )}
          </div>
        ))}
        {aux.length < 5 && (
          <button
            type="button"
            className={`bg-brand-4 rounded text-brand-1 w-[80%] mb-6 p-2`}
            onClick={addImageInput}
          >
            Adicionar campo para imagem da galeria
          </button>
        )} */}
        <div className={`flex gap-2 justify-end`}>
          <button className={`bg-grey-6 rounded p-2 px-6`}>Cancelar</button>
          <button
            className={`bg-brand-3 p-2 px-6 rounded text-colors_color_white_fixed`}
          >
            Criar anúncio
          </button>
        </div>
      </form>
    </>
  );
};
