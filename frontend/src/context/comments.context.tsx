import {
  CommentInterface,
  IncludeIdCommentInterface,
} from "@/schemas/comment.schemas";
import motorsApi from "@/services/motors.service";

import { ReactNode, createContext, useContext, useState } from "react";
import { ContextModal } from "./modal.context";

interface Props {
  children: ReactNode;
}

interface ICommentProvider {
  commentRequest: (data: CommentInterface, commentId: string) => void;
  getAllAnnoucementComments: (announcementId: string | string[]) => void;
  editComment: (data: CommentInterface, comment_id: string) => void;
  // deleteComments: (commentId: string) => void;
  listComments: IncludeIdCommentInterface[];
}

export const CommentContext = createContext<ICommentProvider>({} as ICommentProvider);

export const CommentProvider = ({ children }: Props) => {
  const { setModalContent } = ContextModal()


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

  async function editComment (data: CommentInterface, comment_id: string){
    const array = [...listComments]
    try {
    const edited_comment = await motorsApi.patch(`comments/${comment_id}`, data, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}` 
      }
    })
    const edited_index = listComments.findIndex((item) => item.id === comment_id)
    array[edited_index].comment = edited_comment.data.comment
    setListComments(array)
    setModalContent(false)
  }
  catch (error){
    console.log(error)
  }
    
  }

  return (
    <CommentContext.Provider
      value={{
        commentRequest,
        getAllAnnoucementComments,
        listComments,
        editComment
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const commentContext = () => useContext(CommentContext);
