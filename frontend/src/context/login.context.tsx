import { ReactNode, createContext, useContext, useState } from "react";
import { LoginInterface } from "@/schemas/login.schemas";
import motorsApi from "@/services/motors.service";

interface Props {
    children: ReactNode
}

interface ILoginProvider {
    loginRequest: (data: LoginInterface) => void
    loginError: string
    setLoginError: (text: string) => void
}

const LoginContext = createContext<ILoginProvider>({} as ILoginProvider)

export const LoginProvider = ({children}: Props) => {
    const [loginError, setLoginError] = useState<string>("")

    const loginRequest = async (data: LoginInterface) => {
        await motorsApi.post("auth", data)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            setLoginError("")
        })
        .catch((error) => {
            setLoginError(error.response.data.message)
        })
    }

    return (
        <LoginContext.Provider value={{loginRequest, loginError, setLoginError}}>
            {children}
        </LoginContext.Provider>
    )
}

export const loginContext = () => useContext(LoginContext)