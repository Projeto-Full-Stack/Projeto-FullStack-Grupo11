import dexter from "../image/Dexter.jpg";
import { Text } from "./typography/text.components";

interface IProfileProps {
  name: string;
  children?: any;
}

const Profile = ({name, children}: IProfileProps) => {

    return (
        <div className="flex align-middle items-center gap-2">
            <img className="rounded-full w-8 h-8" src={dexter.src}/>
            <Text type="b2" weight={500} extra_classes="text-grey-grey_2">{name}</Text>
        </div>
    )
}

export default Profile
