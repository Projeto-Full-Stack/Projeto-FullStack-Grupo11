import { ReactNode, createContext, useContext } from "react";
import { LoginInterface } from "@/schemas/login.schemas";

interface Props {
    children: ReactNode
}

interface ILoginProvider {
    loginRequest: (data: LoginInterface) => void
}

const LoginContext = createContext<ILoginProvider>({} as ILoginProvider)

export const LoginProvider = ({children}: Props) => {
    const loginRequest = (data: LoginInterface) => {
        console.log(data)
    }

    return (
        <LoginContext.Provider value={{loginRequest}}>
            {children}
        </LoginContext.Provider>
    )
}

export const loginContext = () => useContext(LoginContext)