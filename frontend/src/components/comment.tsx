import { CommentInterface } from "@/schemas/comment.schemas";
import Profile from "./profile";
import { Text } from "@/components/typography/text.component";
import { LoginContext } from "@/context/login.context";
import { ProfileContext } from "@/context/profile.context";

interface Props {
  comment: CommentInterface;
}

const Comment = ({ comment }: Props) => {
  const { getProfileDetails, profilePageInformation } = ProfileContext();
  return (
    <>
      <li className={`flex flex-col gap-3`}>
        <div className={`flex items-center gap-2`}>
          <Profile
            type="small"
            name={profilePageInformation!.name}
            extra_classes="flex items-center gap-3"
          />
          <div className="flex gap-3 items-center">
            <div className="w-1 h-1 bg-grey-grey_4 rounded-full"></div>
            <small className="text-grey-grey_3 font-normal font-[14px]">
              {comment.createdAt}
            </small>
          </div>
        </div>
        <Text type="b1" weight={400}>
          {comment.comment}
        </Text>
      </li>
    </>
  );
};
export default Comment;
