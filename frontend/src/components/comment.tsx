import { IncludeIdCommentInterface } from "@/schemas/comment.schemas";
import Profile from "./profile";
import { Text } from "@/components/typography/text.component";
import moment from "moment";

interface Props {
  comment: IncludeIdCommentInterface;
}

const Comment = ({ comment }: Props) => {
  const momentDate = moment();
  const commentDate = moment(comment.createdAt);
  const daysPost = momentDate.diff(commentDate, "days");
  return (
    <>
      <li className={`flex flex-col gap-3 h-fit sm:h-[116px]`}>
        <div className={`flex items-center gap-2`}>
          <Profile
            type="small"
            name={comment.author.name}
            extra_classes="flex items-center gap-3"
          />
          <div className="flex gap-3 items-center">
            <div className="w-1 h-1 bg-grey-grey_4 rounded-full"></div>
            <small className="text-grey-grey_3 font-normal font-[14px]">
              há {daysPost} dias
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
