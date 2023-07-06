import { Heading } from "./typography/heading.component";
import { Text } from "./typography/text.component";
import Profile from "./profile";
import Button from "./button";
import { LoginContext } from "@/context/login.context";
import { useContext } from "react";
import { ModalContext } from "@/context/modal.context";
import { useRouter } from "next/router";
import { IncludeIdAnnouncementInterface } from "@/schemas/announcement.schemas";
import { EditAnnouncementForm } from "./forms/announcement/editAnnouncement";
import { DeleteAnnouncementForm } from "./forms/announcement/deleteAnnouncement";
import Link from "next/link";

interface Props {
  car: IncludeIdAnnouncementInterface;
}

const Card = ({ car }: Props) => {
  const { setModalContent } = useContext(ModalContext);
  const { userInfo, tokenState } = LoginContext();
  const router = useRouter();

  return (
    <li className="flex flex-col min-w-[400px] max-w-[400px] gap-4 h-fit mb-4 relative">
      <Link href={`/announcement/${car.id}`}>
        <div className="relative">
          <img
            src={car.coverImage}
            alt={car.model}
            onError={({currentTarget}) => {
              currentTarget.onerror = null
              currentTarget.src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
            }}
            className="w-full h-[162px] object-cover"
          />
          {car.avaliable == true ? (
              <span className="w-fit bg-brand-1 text-colors_color_white_fixed absolute py-1 px-2 rounded top-2 left-2">
                Ativo
              </span>
            ) : (
              <span className="w-fit bg-grey-4  text-colors_color_white_fixed absolute py-1 px-2 rounded top-2 left-2">
                Inativo
              </span>
            )}
        </div>
        <Heading type="h7" weight={600} extra_classes="line-clamp-1">{car.model}</Heading>
        <Text type="b2" weight={400} extra_classes="line-clamp-1">
          {car.description}
        </Text>

        <Profile type="small" name={car.user.name} extra_classes="flex items-center gap-3"/>

        <div className="flex justify-between items-center">
          <div className="flex w-1/3 gap-3 ">
            <Button type="specifications">{`${String(car.mileage)} KM`}</Button>
            <Button type="specifications">{car.year}</Button>
          </div>
          <Heading type="h7" weight={500}>
            {`R$ ${Number(car.price).toFixed(2).toString()}`}
          </Heading>
        </div>
      </Link>


      {userInfo?.id == router.query.id && router.pathname == "/profile/[id]" ? (
        <div className="mt-2 flex gap-4 ">
          <Button
            type="bg-light"
            click_event={() =>
              setModalContent(<EditAnnouncementForm announcement={car} />)
            }
          >
            Editar
          </Button>
          <Button
            type="bg-alert"
            click_event={() =>
              setModalContent(<DeleteAnnouncementForm id={car.id} />)
            }
          >
            Deletar
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </li>
  );
};

export default Card;