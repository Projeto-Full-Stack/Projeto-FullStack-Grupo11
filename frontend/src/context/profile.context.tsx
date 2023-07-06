import { OmitedUserInterface, UserInterface } from "@/schemas/user.schemas"
import motorsApi from "@/services/motors.service"
import { ReactNode, createContext, useContext, useState } from "react"
import { LoginContext } from "./login.context";

interface Props {
    children: ReactNode
}

interface ProfileProviderInterface {
    profilePageInformation: UserInterface | null;
    setProfileInformation: (data: UserInterface | null) => void;
    getProfileDetails: (id: string | string[]) => void;
    updateProfile: (data: OmitedUserInterface) => void;
}

const profileContext = createContext<ProfileProviderInterface>({} as ProfileProviderInterface)

export function ProfileProvider ({children}: Props){
    const [profilePageInformation, setProfileInformation] = useState<UserInterface | null>(null)
    const { tokenState } = LoginContext()

    const getProfileDetails = async (user_id: string | string[]) => {
        if (typeof user_id === "object") return setProfileInformation(null)
        try {
            const details = await motorsApi.get(`users/${user_id}`)
            setProfileInformation(details.data)
        }
        catch(error) {
            setProfileInformation(null)
        }
    }

    const updateProfile = async (data: OmitedUserInterface) => {
        console.log(data)
    }

    return (
        <profileContext.Provider value={{getProfileDetails, profilePageInformation, setProfileInformation, updateProfile}}>
            {children}
        </profileContext.Provider>
    )
}

export const ProfileContext = () => useContext(profileContext)