import {
  AnnoucementInterface,
  AnnouncementImagesInterface,
  EditAnnouncementInterface,
  IncludeIdAnnouncementInterface,
} from "@/schemas/announcement.schemas";
import motorsApi from "@/services/motors.service";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ContextModal } from "./modal.context";
import { UserInterface } from "@/schemas/user.schemas";

interface Props {
  children: ReactNode;
}

interface AnnouncementContextInterface {
  createAnnouncement: (data: AnnoucementInterface) => void;
  getAllUserAnnouncements: (user_id: string) => void;
  setUserAnnouncements: (data: []) => void;
  setAllAnnouncementData: (data: []) => void;
  setPageData: Dispatch<SetStateAction<string>>;
  setActualPage: Dispatch<SetStateAction<number>>;
  userAnnouncements: IncludeIdAnnouncementInterface[];
  totalAnn: number;
  pageData: string;
  actualPage: number;
  editAnnouncement: (data: EditAnnouncementInterface, originalImages: AnnouncementImagesInterface) => void;
  deleteAnnouncement: (announcement_id: string) => void;
  getAnnouncement: (announcement_id: string | string[]) => void;
  getAllAnnouncements: (number?: number) => void;
  filterFunction: (data: any) => void;
  changePage: (data: any, page: string, type: number) => void;
  announcementData: IncludeIdAnnouncementInterface | null;
  announcementUserData: UserInterface;
  allAnnouncementData: IncludeIdAnnouncementInterface[] | [];
}

const announcementContext = createContext<AnnouncementContextInterface>(
  {} as AnnouncementContextInterface
);

export function AnnouncementProvider({ children }: Props) {
  const [userAnnouncements, setUserAnnouncements] = useState<
    IncludeIdAnnouncementInterface[] | []
  >([]);
  const [announcementData, setAnnouncementData] =
    useState<IncludeIdAnnouncementInterface | null>(null);
  const [announcementUserData, setAnnouncementUserData] =
    useState<UserInterface>({} as UserInterface);
  const [allAnnouncementData, setAllAnnouncementData] = useState<
    IncludeIdAnnouncementInterface[] | []
  >([]);
  const [totalAnn, setTotalAnn] = useState<number>(0);
  const [pageData, setPageData] = useState<string>("");
  const [actualPage, setActualPage] = useState<number>(1);
  const { setModalContent } = ContextModal();

  async function createAnnouncement (data: AnnoucementInterface){
    try{
        const { images, ...announcementData } = data
        const announcement: any = await motorsApi.post("announcements", announcementData, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`
            }
        })
        await motorsApi.post(`images/${announcement.data.id}`, images)
        const array = [...userAnnouncements]
        array.push(announcement.data)
        setUserAnnouncements(array)
        setModalContent(false)
    }
    catch(error) {
        console.log(error)
    }
  }


  async function getAllAnnouncements(number = 1) {
    setAllAnnouncementData([]);
    const allAnnouncements = await motorsApi.get(
      `announcements?page=${number}&limit=12`
    );
    setAllAnnouncementData(allAnnouncements.data.announcements);
    setTotalAnn(allAnnouncements.data.totalPages);
    setActualPage(allAnnouncements.data.actualPage);
  }

  async function getAllUserAnnouncements(user_id: string, page = 1) {
    const announcements = await motorsApi.get(
      `announcements/users/${user_id}?page=${page}&perPage=12`
    );
    setUserAnnouncements(announcements.data.announcements);
    setTotalAnn(announcements.data.totalPages);
    setActualPage(announcements.data.actualPage);
  }

  async function editAnnouncement (data: EditAnnouncementInterface, originalImages: AnnouncementImagesInterface){
    const {id, image, ...announcementDetails} = data


    const newImages = image.filter((photo) => !photo.id)

    const deleted = originalImages.filter((oldPhoto) => {
        if (!image.some((element) => oldPhoto.id === element.id)){
            return oldPhoto.id
        }
    })
    const deletedIds = deleted.map(element => element.id)

    const edited = image.filter((newPhoto) => originalImages.some((oldPhoto) => (newPhoto.id === oldPhoto.id && newPhoto.imageUrl !== oldPhoto.imageUrl )))


    try {
        if (newImages) await motorsApi.post(`images/${id}`, newImages)

        if (deletedIds.length) await motorsApi.delete("images", { params: deletedIds})


        if (edited){
            edited.map(async (photo) => {
                const data = {imageUrl: photo.imageUrl}
                const editedPhoto = await motorsApi.patch(`images/${photo.id}`, data)
            })
        }

        const updatedAnnouncement = await motorsApi.patch(`announcements/${id}`, announcementDetails, {
          headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`
          }
        })
        const index = userAnnouncements.findIndex((element: IncludeIdAnnouncementInterface) => element.id === id)

        userAnnouncements[index] = updatedAnnouncement.data
        userAnnouncements[index].image = updatedAnnouncement.data.image
        console.log(userAnnouncements[index].image)
        setUserAnnouncements(userAnnouncements)
        setModalContent(false)
    }
    catch (error){
        console.log(error)
    }
}

  async function deleteAnnouncement(announcement_id: string) {
    try {
      await motorsApi.delete(`announcements/${announcement_id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      const index = userAnnouncements.findIndex(
        (element: IncludeIdAnnouncementInterface) =>
          element.id === announcement_id
      );
      const array = [...userAnnouncements];
      array.splice(index, 1);
      setUserAnnouncements(array);
      setModalContent(false);
    }
    catch (error){
      console.log(error)
    } 
  }

  async function getAnnouncement(announcement_id: string | string[]) {
    try {
      const announcement = await motorsApi.get(
        `announcements/${announcement_id}`
      );
      setAnnouncementData(announcement.data);
      setAnnouncementUserData(announcement.data.user);
    } catch (error) {
      setAnnouncementData(null);
    }
  }

  async function filterFunction(data: any) {
    let newData = "";
    if (data._reactName === "onClick") {
      newData = "";
    } else {
      for (const key of Object.keys(data)) {
        if (data[key] !== null && data[key] !== "") {
          newData += `&${key}=${data[key]}`;
        }
      }
    }
    try {
      const filteredAnn = await motorsApi.get(
        `announcements?page=1&limit=12${newData}`
      );
      setAllAnnouncementData(filteredAnn.data.announcements);
      setTotalAnn(filteredAnn.data.totalPages);
      setPageData(newData);
      setActualPage(filteredAnn.data.actualPage);
    } catch (error) {
      console.error(error);
    }
  }

  async function changePage(
    data: any,
    page: string,
    type: number,
    user_id?: string
  ) {
    if (type === 1) {
      try {
        const pageChange = await motorsApi.get(
          `announcements?page=${Number(page) + 1}&limit=12${data}`
        );
        setAllAnnouncementData(pageChange.data.announcements);
        setActualPage(pageChange.data.actualPage);
      } catch (error) {
        console.error(error);
      }
    }
    if (type === 2) {
      try {
        const pageChange = await motorsApi.get(
          `announcements?page=${Number(page) - 1}&limit=12${data}`
        );
        setAllAnnouncementData(pageChange.data.announcements);
        setActualPage(pageChange.data.actualPage);
      } catch (error) {
        console.error(error);
      }
    }
    if (type === 3) {
      try {
        const pageChange = await motorsApi.get(
          `announcements/users/${user_id}?page=${Number(page) + 1}&perPage=12`
        );
        setUserAnnouncements(pageChange.data.announcements);
        setActualPage(pageChange.data.actualPage);
      } catch (error) {
        console.error(error);
      }
    }
    if (type === 4) {
      try {
        const pageChange = await motorsApi.get(
          `announcements/users/${user_id}?page=${Number(page) - 1}&perPage=12`
        );
        console.log(pageChange.data.announcements);
        setUserAnnouncements(pageChange.data.announcements);
        setActualPage(pageChange.data.actualPage);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <announcementContext.Provider
      value={{
        createAnnouncement,
        getAllUserAnnouncements,
        getAllAnnouncements,
        setAllAnnouncementData,
        setPageData,
        setActualPage,
        userAnnouncements,
        totalAnn,
        pageData,
        actualPage,
        setUserAnnouncements,
        editAnnouncement,
        deleteAnnouncement,
        getAnnouncement,
        filterFunction,
        changePage,
        announcementData,
        announcementUserData,
        allAnnouncementData,
      }}
    >
      {children}
    </announcementContext.Provider>
  );
}

export const AnnouncementContext = () => useContext(announcementContext);
