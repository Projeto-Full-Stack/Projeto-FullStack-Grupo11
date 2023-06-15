import Input from "@/components/input";
import NavBar from "@/components/navbar";
import { Text } from "@/components/typography/text.component";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function RegisterPage() {
    return (
        <>
            <NavBar/>
            <form action="">
                <Text type="b2" weight={500} children="Cadastro"/>
                <Input type="" label="" placeholder="" htmlFor=""/>
                <Input type="" label="" placeholder="" htmlFor=""/>
                <Input type="" label="" placeholder="" htmlFor=""/>
                <Input type="" label="" placeholder="" htmlFor=""/>
                <Input type="" label="" placeholder="" htmlFor=""/>
                <Input type="" label="" placeholder="" htmlFor=""/>
                <Input type="" label="" placeholder="" htmlFor=""/>
            </form>
        </>
    )
}

export default RegisterPage