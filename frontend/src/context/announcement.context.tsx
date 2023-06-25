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
    async function createAnnouncement (data: AnnoucementInterface){
        try{
            const announcement = await motorsApi.post("/announcements", data, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`
                }
            })
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <announcementContext.Provider value={{createAnnouncement}}>
            {children}
        </announcementContext.Provider>
    )
}

export const AnnouncementContext = () => useContext(announcementContext)