import { IncludeIdCommentInterface } from "@/schemas/comment.schemas";
import Profile from "./profile";
import { Text } from "@/components/typography/text.component";
import "moment/locale/pt-br"
import moment from "moment";
import { LoginContext } from "@/context/login.context";
import Button from "./button";
import { ContextModal } from "@/context/modal.context";
import { EditComment } from "./forms/comments/editComment";
import { DeleteComment } from "./forms/comments/deleteComment";

interface Props {
  comment: IncludeIdCommentInterface;
}

const Comment = ({ comment }: Props) => {
  const { userInfo } = LoginContext()
  const { setModalContent } = ContextModal()

  const commentDate = moment(comment.createdAt).fromNow();
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
              {commentDate}
            </small>
          </div>
        </div>
        <Text type="b1" weight={400}>
          {comment.comment}
        </Text>
        {userInfo?.id === comment.authorId &&
          <div className="flex gap-4">
            <Button type="bg-brand" click_event={() => setModalContent(<EditComment comment_content={comment}/>)}>Editar</Button>
            <Button type="bg-alert" click_event={() => setModalContent(<DeleteComment comment_content={comment} />)} button_type="button">Deletar</Button>
          </div>
        }
      </li>
    </>
  );
};
export default Comment;
