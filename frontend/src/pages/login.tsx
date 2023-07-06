import Input from "@/components/Inputs/input";
import Button from "@/components/button";
import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginInterface, loginSchema } from "@/schemas/login.schemas";
import { LoginContext } from "@/context/login.context";
import { useEffect } from "react";
import Link from "next/link";
import { Text } from "@/components/typography/text.component";

export default function Login() {
  const { 
    register, 
    handleSubmit, 
    formState } = useForm<LoginInterface>({
    resolver: zodResolver(loginSchema)
  })

  const { loginRequest, loginError, setLoginError } = LoginContext()

  useEffect(() => {
    return (
      setLoginError("")
    )
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-grey-6">
      <NavBar />
      <main className="flex-1">
        <div className="flex justify-center items-center p-6">
          <form
            className={`flex flex-col gap-8 items-start p-10 w-[412px] h-[542px] bg-colors_color_white_fixed rounded`}
            onSubmit={handleSubmit(loginRequest)}
            >
            <Heading type={`h5`} weight={500}>{`Login`}</Heading>
            {loginError && <Text type="b2" weight={500} extra_classes="text-feedback-alert_1">{loginError}</Text>}
            <div className="flex flex-col justify-center w-full gap-8">
              <Input
                label={`Email`}
                input_type={`email`}
                input_name={`email`}
                extra_classes={`w-full`}
                register={register("email")}
              >
                Digite seu email
              </Input>
              <Input
                label={"Senha"}
                input_type={`password`}
                input_name={`password`}
                extra_classes={`w-full`}
                register={register("password")}
              >
                Digite sua senha
              </Input>
              <Link
                href="/recovery"
                className={`flex justify-end align-center font-semibold text-[14px] leading-[24px] font-inter`}
              >
                Esqueci minha senha
              </Link>
              <Button type={`bg-brand`}>{`Entrar`}</Button>
              <p
                className={`flex justify-center align-center font-medium text-[14px] leading-[24px] font-inter`}
              >
                Ainda não possui conta?
              </p>
            </div>
              <Link href="/register" className="text-grey-0 box-border border-grey-6 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full w-full text-center">Cadastrar</Link>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}