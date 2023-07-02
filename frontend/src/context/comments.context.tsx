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
  getAllAnnoucementComments: (announcementId: string | string[]) => void;
  // editComments: (data: CommentInterface, commentId: string) => void;
  // deleteComments: (commentId: string) => void;
  listComments: IncludeIdCommentInterface[];
}

const CommentContext = createContext<ICommentProvider>({} as ICommentProvider);

export const CommentProvider = ({ children }: Props) => {
  const [listComments, setListComments] = useState<
    IncludeIdCommentInterface[] | []
  >([]);

  const commentRequest = async (
    data: CommentInterface,
    announcementId: string
  ) => {
    try {
      const commentData = await motorsApi.post(
        `comments/${announcementId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      setListComments([...listComments, commentData.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getAllAnnoucementComments(announcementId: string | string[]) {
    const comments = await motorsApi.get(`comments/${announcementId}`);
    setListComments(comments.data);
  }

  // async function editComments(data: CommentInterface, commentId: string) {
  //   const { comment } = data;

  //   try {
  //     const updateComment = await motorsApi.patch(
  //       `comments/${commentId}`,
  //       comment,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     const index = comments.findIndex(
  //       (element: IncludeIdCommentInterface) => element.id === commentId
  //     );
  //     comments[index] = updateComment.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function deleteComments(commentId: string) {
  //   await motorsApi.delete(`comments/${commentId}`, {
  //     headers: {
  //       Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  //     },
  //   });
  //   const index = comments.findIndex(
  //     (element: IncludeIdCommentInterface) => element.id === commentId
  //   );
  //   const array = [...comments];
  //   array.splice(index, 1);
  //   setComments(array);
  // }

  return (
    <CommentContext.Provider
      value={{
        commentRequest,
        getAllAnnoucementComments,
        listComments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const commentContext = () => useContext(CommentContext);
