import { Footer } from "@/components/footer";
import Input from "@/components/input";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";
import { Inter  } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

function RegisterPage() {


    return (
        <div className="bg-grey-grey_7 min-h-full">
            <NavBar/>
            <section>
                <Heading type="h5" weight={500} children="Cadastro"/>
                <form action="" className="">
                    <div>
                        <Input type="text" label="Nome" name="name" placeholder="Ex: Samuel Leão" htmlFor="name"/>
                        <Input type="email" label="Email" name="email" placeholder="Ex: samuel@kenzie.com.br" htmlFor="email"/>
                        <Input type="text" label="CPF" name="cpf" placeholder="000.000-00" htmlFor="cpf"/>
                        <Input type="tel" label="Celular" name="phone" placeholder="(DDD) 90000-0000" htmlFor="phone"/>
                        <Input type="date" label="Data de nascimento" placeholder="00/00/00" name="birthdate" htmlFor="date"/>
                        <Input type="textArea" name="description" label="Descrição" placeholder="Digitar descrição" htmlFor="description"/>
                    </div>
                    <div>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                        <Input type="text" label="" name="" placeholder="" htmlFor=""/>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default RegisterPage