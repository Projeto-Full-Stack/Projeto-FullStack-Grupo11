import { AnnoucementInterface, EditAnnouncementInterface, IncludeIdAnnouncementInterface } from "@/schemas/announcement.schemas"
import motorsApi from "@/services/motors.service"
import { ReactNode, createContext, useContext, useState } from "react"
import { ContextModal } from "./modal.context";

interface Props {
    children: ReactNode
}

interface AnnouncementContextInterface {
    createAnnouncement: (data: AnnoucementInterface) => void;
    getAllUserAnnouncements: (user_id: string) => void;
    setUserAnnouncements: (data: []) => void;
    userAnnouncements: IncludeIdAnnouncementInterface[];
    editAnnouncement: (data: EditAnnouncementInterface) => void;
}

const announcementContext = createContext<AnnouncementContextInterface>({} as AnnouncementContextInterface)

export function AnnouncementProvider ({children}: Props){
    const [userAnnouncements, setUserAnnouncements] = useState<IncludeIdAnnouncementInterface[] | []>([])
    const { setModalContent } = ContextModal()

    async function createAnnouncement (data: AnnoucementInterface){
        try{
            const announcement: any = await motorsApi.post("announcements", data, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`
                }
            })
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

    return (
        <announcementContext.Provider value={{createAnnouncement, getAllUserAnnouncements, userAnnouncements, setUserAnnouncements, editAnnouncement}}>
            {children}
        </announcementContext.Provider>
    )
}

export const AnnouncementContext = () => useContext(announcementContext)