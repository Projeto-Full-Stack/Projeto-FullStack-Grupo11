import {
  CommentInterface,
  IncludeIdCommentInterface,
  includeIdCommentSchema,
} from "@/schemas/comment.schemas";
import Profile from "./profile";
import { Text } from "@/components/typography/text.component";
import { LoginContext } from "@/context/login.context";
import { ProfileContext } from "@/context/profile.context";
import { commentContext } from "@/context/comments.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  comment: IncludeIdCommentInterface;
}

const Comment = ({ comment }: Props) => {
  const { userInfo } = LoginContext();

  return (
    <>
      <li className={`flex flex-col gap-3`}>
        <div className={`flex items-center gap-2`}>
          <Profile
            type="small"
            name={userInfo!.name}
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
