import { CommentInterface } from "@/schemas/comment.schemas";
import motorsApi from "@/services/motors.service";
import { ReactNode, createContext, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface ICommentProvider {
  commentRequest: (data: CommentInterface) => void;
}

const CommentContext = createContext<ICommentProvider>({} as ICommentProvider);

export const CommentProvider = ({ children }: Props) => {
  const commentRequest = async (data: CommentInterface) => {
    const { comment } = data;
    const commentData = { comment };

    try {
      const createComment = await motorsApi.post("comment", commentData);
      await motorsApi.post(`comments/${createComment.data.id}`);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <CommentContext.Provider value={{ commentRequest }}>
      {children}
    </CommentContext.Provider>
  );
};

export const commentContext = () => useContext(CommentContext);
