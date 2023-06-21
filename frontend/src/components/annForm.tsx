import { useState } from "react";
import Input from "./Inputs/input";
import { ModalHeader } from "./modal/modalHeader";

export const AnnForm = () => {
  const addImageInput = () => {
    setAux([...aux, { images: "" }]);
  };

  const removeImageInput = (index: number) => {
    const auxList = [...aux];
    auxList.splice(index, 1);
    setAux(auxList);
  };

  const [aux, setAux] = useState([{ images: "" }]);

  return (
    <>
      <ModalHeader>{`Criar anúncio`}</ModalHeader>
      <h1>Informações do veículo</h1>
      <form className={`flex flex-col w-full gap-6`}>
        <Input
          input_type={`text`}
          input_name={`brand`}
          label={`Marca`}
          extra_classes={`w-full`}
        >{`Insira a marca`}</Input>
        <Input
          input_type={`text`}
          input_name={`model`}
          label={`Modelo`}
          extra_classes={`w-full`}
        >{`Insira o modelo`}</Input>
        <div className={`flex gap-2 w-full`}>
          <Input
            input_type={`text`}
            input_name={`year`}
            label={`Ano`}
            extra_classes={`w-full`}
          >{`Insira o ano`}</Input>
          <Input
            input_type={`text`}
            input_name={`fuel`}
            label={`Combustível`}
            extra_classes={`w-full`}
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
          <div key={index} className={`flex`}>
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
