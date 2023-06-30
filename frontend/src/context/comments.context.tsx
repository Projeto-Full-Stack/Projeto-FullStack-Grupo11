import {
  CommentInterface,
  IncludeIdCommentInterface,
} from "@/schemas/comment.schemas";
import motorsApi from "@/services/motors.service";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ICommentProvider {
  commentRequest: (data: CommentInterface, commentId: string) => void;
  editComments: (data: CommentInterface, commentId: string) => void;
  deleteComments: (commentId: string) => void;
}

const CommentContext = createContext<ICommentProvider>({} as ICommentProvider);

export const CommentProvider = ({ children }: Props) => {
  const [comments, setComments] = useState<IncludeIdCommentInterface[] | []>(
    []
  );

  const commentRequest = async (
    data: CommentInterface,
    announcementId: string
  ) => {
    try {
      const createComment = await motorsApi.post(
        `comments/${announcementId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      setComments([createComment.data, ...comments]);
    } catch (error) {
      console.log(error);
    }
  };

  async function editComments(data: CommentInterface, commentId: string) {
    const { comment } = data;

    try {
      const updateComment = await motorsApi.patch(
        `comments/${commentId}`,
        comment,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      const index = comments.findIndex(
        (element: IncludeIdCommentInterface) => element.id === commentId
      );
      comments[index] = updateComment.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteComments(commentId: string) {
    await motorsApi.delete(`comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
    const index = comments.findIndex(
      (element: IncludeIdCommentInterface) => element.id === commentId
    );
    const array = [...comments];
    array.splice(index, 1);
    setComments(array);
  }

  return (
    <CommentContext.Provider
      value={{
        commentRequest,
        editComments,
        deleteComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const commentContext = () => useContext(CommentContext);
