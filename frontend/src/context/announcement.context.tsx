import { AnnoucementInterface } from "@/schemas/announcement.schemas"
import motorsApi from "@/services/motors.service"
import { ReactNode, createContext, useContext, useState } from "react"

interface Props {
    children: ReactNode
}

interface AnnouncementContextInterface {
    createAnnouncement: (data: AnnoucementInterface) => void
}

const announcementContext = createContext<AnnouncementContextInterface>({} as AnnouncementContextInterface)

export function AnnouncementProvider ({children}: Props){
    const [userAnnouncements, setUserAnnouncements] = useState()

    async function createAnnouncement (data: AnnoucementInterface){
        try{
            const announcement = await motorsApi.post("announcements", data, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`
                }
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    async function getAllUserAnnouncements (user_id: string){
        const announcements = await motorsApi.get(`announcements/${user_id}`)
        console.log(announcements)
    }

    return (
        <announcementContext.Provider value={{createAnnouncement}}>
            {children}
        </announcementContext.Provider>
    )
}

export const AnnouncementContext = () => useContext(announcementContext)