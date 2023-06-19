import dexter from "../image/Dexter.jpg";
import { Heading } from "./typography/heading.component";
import { Text } from "./typography/text.components";

interface IProfileProps {
  type: "big" | "small";
  name: string;
  children?: any;
  extra_classes?: string;
}

const Profile = ({ type, name, children, extra_classes }: IProfileProps) => {
  if (extra_classes) extra_classes += " " + extra_classes;

  if (type == "big") {
    return (
      <div className={`${extra_classes}`}>
        <img className="rounded-full w-20 h-20 " src={dexter.src} />
        <Heading type="h5" weight={600}>
          {name}
        </Heading>
        {children}
      </div>
    );
  }

  if (type == "small") {
    return (
      <div className={`${extra_classes}`}>
        <img className="rounded-full w-8 h-8 " src={dexter.src} />
        <Text type="b2" weight={400}>
          {name}
        </Text>
        {children}
      </div>
    );
  }
};


    return (
        <div className="flex align-middle items-center gap-2">
            <img className="rounded-full w-8 h-8" src={dexter.src}/>
            <Text type="b2" weight={500} extra_classes="text-grey-grey_2">{name}</Text>
        </div>
    )
}

export default Profile
