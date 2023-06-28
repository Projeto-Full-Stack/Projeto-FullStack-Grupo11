import { AnnoucementInterface, EditAnnouncementInterface, IncludeIdAnnouncementInterface } from "@/schemas/announcement.schemas"
import motorsApi from "@/services/motors.service"
import { ReactNode, createContext, useContext, useState } from "react"
import { ContextModal } from "./modal.context";
import { UserInterface } from "@/schemas/user.schemas";

interface Props {
    children: ReactNode
}

interface AnnouncementContextInterface {
    createAnnouncement: (data: AnnoucementInterface) => void;
    getAllUserAnnouncements: (user_id: string) => void;
    setUserAnnouncements: (data: []) => void;
    userAnnouncements: IncludeIdAnnouncementInterface[];
    editAnnouncement: (data: EditAnnouncementInterface) => void;
    deleteAnnouncement: (announcement_id: string) => void;
    getAnnouncement: (announcement_id: string | string[]) => void;
    announcementData: IncludeIdAnnouncementInterface | null;
    announcementUserData: UserInterface;
}

const announcementContext = createContext<AnnouncementContextInterface>({} as AnnouncementContextInterface)

export function AnnouncementProvider ({children}: Props){
    const [userAnnouncements, setUserAnnouncements] = useState<IncludeIdAnnouncementInterface[] | []>([])
    const [announcementData, setAnnouncementData] = useState<IncludeIdAnnouncementInterface | null>(null)
    const [announcementUserData, setAnnouncementUserData] = useState<UserInterface>({} as UserInterface)
    const { setModalContent } = ContextModal()

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

    async function getAllUserAnnouncements (user_id: string){
        const announcements = await motorsApi.get(`announcements/users/${user_id}`)
        setUserAnnouncements(announcements.data)
    }

    async function editAnnouncement (data: EditAnnouncementInterface){
        const {id, ...announcementDetails} = data
        try {
            const updatedAnnouncement = await motorsApi.patch(`announcements/${id}`, announcementDetails, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`
                }
            })
            const index = userAnnouncements.findIndex((element: IncludeIdAnnouncementInterface) => element.id === id)
            userAnnouncements[index] = updatedAnnouncement.data
            setUserAnnouncements(userAnnouncements)
            setModalContent(false)
        }
        catch (error){
            console.log(error)
        }
    }

    async function deleteAnnouncement (announcement_id: string){
        await motorsApi.delete(`announcements/${announcement_id}`, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem("token")}`
            }
        })
        const index = userAnnouncements.findIndex((element: IncludeIdAnnouncementInterface) => element.id === announcement_id)
        const array = [...userAnnouncements]
        array.splice(index, 1)
        setUserAnnouncements(array)
        setModalContent(false)
    }

    async function getAnnouncement (announcement_id: string | string[]){
        try {
            const announcement = await motorsApi.get(`announcements/${announcement_id}`)
            setAnnouncementData(announcement.data)
            setAnnouncementUserData(announcement.data.user)
        }
        catch (error){
            setAnnouncementData(null)
        }
    }

    return (
        <announcementContext.Provider value={{createAnnouncement, getAllUserAnnouncements, userAnnouncements,
         setUserAnnouncements, editAnnouncement, deleteAnnouncement, getAnnouncement, announcementData, announcementUserData
         }}>
            {children}
        </announcementContext.Provider>
    )
}

export const AnnouncementContext = () => useContext(announcementContext)