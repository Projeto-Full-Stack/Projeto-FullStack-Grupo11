import { ReactNode, createContext, useContext, useState } from "react";
import { RegisterInterface } from "../schemas/register.schemas"
import motorsApi from "@/services/motors.service";

interface Props {
    children: ReactNode
}

interface IRegisterProvider {
    registerRequest: (data: RegisterInterface) => void
    registerError: string
    setRegisterError: (text: string) => void
}

const RegisterContext = createContext<IRegisterProvider>({} as IRegisterProvider)

export const RegisterProvider = ({children}: Props) =>{
    const [registerError, setRegisterError] = useState<string>("")

    const registerRequest = async (data: RegisterInterface) =>{
        await motorsApi.post("auth", data)
        .then((response) => {
            console.log(response)
            console.log(data)
        })
        .catch((error) =>{
            setRegisterError(error.response.data.message)
        })
    }

    return (
        <RegisterContext.Provider value={{registerRequest, registerError, setRegisterError}}>
            {children}
        </RegisterContext.Provider>
    )
}

export const registerContext = () => useContext(RegisterContext)