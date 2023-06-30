import {
  CommentInterface,
  IncludeIdCommentInterface,
} from "@/schemas/comment.schemas";
import Comment from "./comment";

interface IListCommentsProps {
  comments: IncludeIdCommentInterface[];
}

const ListComments = ({ comments }: IListCommentsProps) => {
  return (
    <ul className="flex flex-col gap-11">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};
export default ListComments;
