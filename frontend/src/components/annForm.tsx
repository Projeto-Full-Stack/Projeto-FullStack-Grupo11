import Input from "./input";
import { ModalHeader } from "./modal/modalHeader";

export const AnnForm = () => {
  return (
    <>
      <ModalHeader>{`Criar anúncio`}</ModalHeader>
      <h1>Informações do veículo</h1>
      <form className={`flex flex-col w-full gap-6`}>
        <Input
          input_type={`text`}
          input_name={`brand`}
          label={`Marca`}
        >{`Insira a marca`}</Input>
        <Input
          input_type={`text`}
          input_name={`model`}
          label={`Modelo`}
        >{`Insira o modelo`}</Input>
        <div className={`flex gap-2`}>
          <Input
            input_type={`text`}
            input_name={`year`}
            label={`Ano`}
          >{`Insira o ano`}</Input>
          <Input
            input_type={`text`}
            input_name={`fuel`}
            label={`Combustível`}
          >{`Insira o combustível`}</Input>
        </div>
        <div className={`flex gap-2`}>
          <Input
            input_type={`text`}
            input_name={`mileage`}
            label={`Quilometragem`}
          >{`Insira a quilometragem`}</Input>
          <Input
            input_type={`text`}
            input_name={`color`}
            label={`Cor`}
          >{`Insira a cor`}</Input>
        </div>
        <div className={`flex gap-2`}>
          <Input
            input_type={`text`}
            input_name={`fipe`}
            label={`Preço Tabela FIPE`}
          >{`Insira o preço da fipe`}</Input>
          <Input
            input_type={`text`}
            input_name={`price`}
            label={`Preço`}
          >{`Insira o preço`}</Input>
        </div>
        <Input
          input_type={`textArea`}
          input_name={`description`}
          label={`Descrição`}
        >{`Insira uma descrição`}</Input>
        <Input
          input_type={`text`}
          input_name={`coverImage`}
          label={`Imagem de capa`}
        >{`Insira uma imagem de capa`}</Input>
        <Input
          input_type={`text`}
          input_name={`image`}
          label={`1ª imagem da galeria`}
        >{`Insira a primeira imagem`}</Input>
        <Input
          input_type={`text`}
          input_name={`image`}
          label={`2ª imagem da galeria`}
        >{`Insira a segunda imagem`}</Input>
        <button className={`bg-brand-4 rounded text-brand-1 w-[80%] mb-6 p-2`}>
          Adicionar campo para imagem da galeria
        </button>
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
