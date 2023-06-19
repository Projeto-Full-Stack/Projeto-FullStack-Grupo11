import { Heading } from "./typography/heading.component";
import { Text } from "./typography/text.components";
import Profile from "./profile";
import Button from "./button";

const Card = () => {
  return (
    <li className="flex flex-col min-w-[288px] max-w-[288px] gap-4 h-fit mb-4">
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
    </li>
  );
};

export default Card;
