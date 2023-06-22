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
        console.log(data)
        const { name, email, phone, birthDate, description, password, cpf, isVendor, confirmPassword, ...rest} = data
        const userData = {name, email, phone, birthDate, description, password, cpf, isVendor}
        const addressData = {...rest}
       
        try {
            const createUser = await motorsApi.post("users", userData)
            console.log(createUser)
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <RegisterContext.Provider value={{registerRequest, registerError, setRegisterError}}>
            {children}
        </RegisterContext.Provider>
    )
}

export const registerContext = () => useContext(RegisterContext)