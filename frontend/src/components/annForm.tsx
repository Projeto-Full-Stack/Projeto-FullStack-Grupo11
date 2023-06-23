import { useEffect, useRef, useState } from "react";
import Input from "./Inputs/input";
import { ModalHeader } from "./modal/modalHeader";
import { CarContext } from "@/context/cars.context";
import { useFieldArray, useForm } from "react-hook-form";

export const AnnForm = () => {
  const addImageInput = () => {
    setAux([...aux, { images: "" }]);
  };

  const removeImageInput = (index: number) => {
    const auxList = [...aux];
    auxList.splice(index, 1);
    setAux(auxList);
  };

  const handleSecondSelect = (value: string) => {
    if (value != "default") {
      setSecondValue(value);
      getSpecificCarData(value);
    } else {
      setSecondValue("default");
    }
  };

  const resetInputs = () => {
    document.getElementById(`year`)?.setAttribute("value", "");
    document.getElementById(`fuel`)?.setAttribute("value", "");
    document.getElementById(`fipe`)?.setAttribute("value", "");
  };

  const getSpecificCarData = (value: string) => {
    const fuelType = ["Flex", "Híbrido", "Elétrico"];
    const car: any = Object.values(carsByBrand).find(
      (car: any) => car.name === value
    );
    setValue("year", car.year)
    // document.getElementById(`year`)?.setAttribute("value", `${car.year}`);
    // document
    //   .getElementById(`fuel`)
    //   ?.setAttribute("value", `${fuelType[car.fuel - 1]}`);
    // document.getElementById(`fipe`)?.setAttribute("value", `${car.value}`);
  };

  function findCarDetails (modelName: string){
    const fuelType = ["Flex", "Híbrido", "Elétrico"];

    const carDetails: any = Object.values(carsByBrand).find(
      (car: any) => {
        if (car.name === modelName){
          car.fuel = fuelType[car.fuel - 1]
          return car
        }
      });

      setCarData(carDetails)
      console.log(carDetails)
  }

  interface carDataInterface{
    id: string;
    brand: string;
    fuel: string;
    name: string;
    value: number;
    year: string;
  }

  function teste (){
    if (!modelSelectState){
      setValue("year", car.year)
    }else {

    }
  }

  const [aux, setAux] = useState([{ images: "" }]);
  const [firstValue, setFirstValue] = useState("default");
  const [secondValue, setSecondValue] = useState("default");
  
  const [modelSelectState, setModelSelectState] = useState(true)
  const [carData, setCarData] = useState<carDataInterface>({} as carDataInterface);


  const { cars, carsByBrand, setCarsByBrand, getCarsByBrand } = CarContext();

  const { register, setValue } = useForm({
    
  })

  return (
    <>
      <ModalHeader>{`Criar anúncio`}</ModalHeader>
      <h1 className={`mb-6`}>Informações do veículo</h1>
      <form className={`flex flex-col w-full gap-6`}>
        <select
          onChange={(e) => {
            getCarsByBrand(e.target.value)
            if (e.target.value !== "default") setModelSelectState(false)
            if (e.target.value === "default") setModelSelectState(true)
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
          onChange={(e) => {
            handleSecondSelect(e.target.value);
            findCarDetails(e.target.value)
          }}
          id="select02"
          className={`border-grey-4 border-[1.5px] focus:outline-none focus:ring focus:ring-brand-1 placeholder:text-grey-3 rounded font-normal px-6 py-1`}
          disabled={modelSelectState}
        >
          <option value="" disabled={!modelSelectState}>Insira o modelo</option>
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
            >{`Insira o combustível`}</Input>
        </div>
        <div className={`flex gap-2 w-full`}>
          <Input
            input_type={`text`}
            input_name={`mileage`}
            label={`Quilometragem`}
            extra_classes={`w-full`}
          >{`Insira a quilometragem`}</Input>
          <Input
            input_type={`text`}
            input_name={`color`}
            label={`Cor`}
            extra_classes={`w-full`}
          >{`Insira a cor`}</Input>
        </div>
        <div className={`flex gap-2 w-full`}>
          <Input
            input_type={`text`}
            input_name={`fipe`}
            label={`Preço FIPE`}
            extra_classes={`w-full`}
            state={true}
            >{`Insira o preço da fipe`}</Input>
          <Input
            input_type={`text`}
            input_name={`price`}
            label={`Preço`}
            extra_classes={`w-full`}
          >{`Insira o preço`}</Input>
        </div>
        <Input
          input_type={`textArea`}
          input_name={`description`}
          label={`Descrição`}
          extra_classes={`w-full`}
        >{`Insira uma descrição`}</Input>
        <Input
          input_type={`text`}
          input_name={`coverImage`}
          label={`Imagem de capa`}
          extra_classes={`w-full`}
        >{`Insira uma imagem de capa`}</Input>
        <Input
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
        )}
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
