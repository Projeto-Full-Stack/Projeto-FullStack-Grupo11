import { CommentInterface } from "@/schemas/comment.schemas";
import Comment from "./comment";

interface IListCommentsProps {
  comments: CommentInterface[];
}

const ListComments = ({ comments }: IListCommentsProps) => {
  return (
    <ul>
      {comments.map((comment, index) => (
        <Comment comment={comment} />
      ))}
    </ul>
  );
};
export default ListComments;
