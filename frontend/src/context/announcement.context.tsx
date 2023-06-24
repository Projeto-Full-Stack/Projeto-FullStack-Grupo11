import { AnnoucementInterface } from "@/schemas/announcement.schemas"
import motorsApi from "@/services/motors.service"
import { ReactNode, createContext, useContext } from "react"

interface Props {
    children: ReactNode
}

interface AnnouncementContextInterface {
    createAnnouncement: (data: AnnoucementInterface) => void
}

const announcementContext = createContext<AnnouncementContextInterface>({} as AnnouncementContextInterface)

export function AnnouncementProvider ({children}: Props){
    async function createAnnouncement (data: AnnoucementInterface){
        const announcement = motorsApi.post("/")


    }

    return (
        <announcementContext.Provider value={{createAnnouncement}}>
            {children}
        </announcementContext.Provider>
    )
}

export const AnnouncementContext = () => useContext(announcementContext)