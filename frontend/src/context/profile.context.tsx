import { UserInterface } from "@/schemas/user.schemas"
import motorsApi from "@/services/motors.service"
import { ReactNode, createContext, useContext, useState } from "react"

interface Props {
    children: ReactNode
}

interface ProfileProviderInterface {
    profilePageInformation: UserInterface | null;
    setProfileInformation: (data: UserInterface | null) => void;
    getProfileDetails: (id: string) => void;
}

const profileContext = createContext<ProfileProviderInterface>({} as ProfileProviderInterface)

export function ProfileProvider ({children}: Props){
    const [profilePageInformation, setProfileInformation] = useState<UserInterface | null>(null)

    const getProfileDetails = async (user_id: string) => {
        try {
            const details = await motorsApi.get(`users/${user_id}`)
            setProfileInformation(details.data)
        }
        catch(error) {
            setProfileInformation(null)
        }
    }

    return (
        <profileContext.Provider value={{getProfileDetails, profilePageInformation, setProfileInformation}}>
            {children}
        </profileContext.Provider>
    )
}

export const ProfileContext = () => useContext(profileContext)