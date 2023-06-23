import Input from "@/components/Inputs/input"
import Button from "@/components/button"
import { Footer } from "@/components/footer"
import NavBar from "@/components/navbar"
import { Heading } from "@/components/typography/heading.component"
import { Text } from "@/components/typography/text.component"


export default function (){

    return (
        <div className="flex flex-col min-h-screen bg-colors_color_white_fixed lg:bg-grey-6">
            <NavBar />
            <main className="flex flex-1 items-center">
                <form className="flex flex-col px-11 py-6 rounded bg-colors_color_white_fixed w-screen gap-8
                lg:max-w-[512px]
                lg:mx-auto
                ">
                    <Heading type="h5" weight={500}>Title</Heading>
                    <Text type="b1" weight={600}>Digite seu email para fazer o envio do email para recuperar a senha.</Text>
                    <Input input_name="email" input_type="email" label="Email" extra_classes="flex flex-col w-full">Digite seu email...</Input>
                    <Button type="bg-brand" extra_classes="self-end">Enviar</Button>
                </form>
            </main>
            <Footer />
        </div>
    )
}