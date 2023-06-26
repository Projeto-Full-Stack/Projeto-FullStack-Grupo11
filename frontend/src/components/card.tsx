import { Heading } from "./typography/heading.component";
import { Text } from "./typography/text.component";
import Profile from "./profile";
import Button from "./button";
import { LoginContext } from "@/context/login.context";
import { useContext } from "react";
import { ModalContext } from "@/context/modal.context";

const Card = () => {
  const { setModalContent } = useContext(ModalContext);
  const { userInfo, tokenState } = LoginContext();

  return (
    <li className="flex flex-col min-w-[288px] max-w-[288px] gap-4 h-fit mb-4 relative">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/this-handout-photo-from-toyota-shows-the-companys-2002-news-photo-1591364386.jpg"
        alt="car-photo"
        className="w-fit"
      />
      <Heading type="h7" weight={600}>
        Car title
      </Heading>
      <Text type="b2" weight={400}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
        doloribus molestiae commodi consequuntur sint deleniti vitae neque
        corrupti ipsa ab?
      </Text>

      <Profile type="small" name={"Mayza"} />

      <div className="flex justify-between items-center">
        <div className="flex w-1/3 gap-3 ">
          <Button type="specifications">0 KM</Button>
          <Button type="specifications">2019</Button>
        </div>
        <Heading type="h7" weight={500}>
          R$ 00.000,00
        </Heading>
      </div>
      {userInfo.isVendor == true ? (
        <div className="mt-2 flex gap-4 ">
          <Button type="bg-light">Editar</Button>
          <Button type="bg-light">Ver detalhes</Button>
          {userInfo.isVendor == true ? (
            <span className="w-fit h-fit bg-brand-1 text-colors_color_white_fixed absolute top-2 left-2 py-1 px-2 rounded">
              Ativo
            </span>
          ) : (
            <span className="w-10 h-6 bg-grey-4  text-colors_color_white_fixed absolute top-2 left-2 py-1 px-2 rounded">
              Inativo
            </span>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </li>
  );
};

export default Card;
