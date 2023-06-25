import { ReactNode, createContext, useContext, useState } from "react";
import { RegisterInterface } from "../schemas/register.schemas"
import motorsApi from "@/services/motors.service";
import { useRouter } from "next/router";

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
    const router = useRouter()

    const registerRequest = async (data: RegisterInterface) =>{
        const { name, email, phone, birthDate, description, password, cpf, isVendor, confirmPassword, ...rest} = data
        const userData = {name, email, phone, birthDate, description, password, cpf, isVendor}
        const addressData = {...rest}
       
        try {
            const createUser = await motorsApi.post("users", userData)
            await motorsApi.post(`address/${createUser.data.id}`, addressData)
            router.push("/")
        }
        catch(error: any) {
            window.scrollTo(0,0)
            setRegisterError(error.response.data.message)
        }
    }

    return (
        <RegisterContext.Provider value={{registerRequest, registerError, setRegisterError}}>
            {children}
        </RegisterContext.Provider>
    )
}

export const registerContext = () => useContext(RegisterContext)