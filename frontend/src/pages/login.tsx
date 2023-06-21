import Input from "@/components/Inputs/input";
import Button from "@/components/button";
import { Footer } from "@/components/footer";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";
import { loginContext } from "@/context/login.context";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInterface, loginSchema } from "@/schemas/login.schemas";
import Link from "next/link";

export default function Login() {
  const { register, handleSubmit, formState } = useForm<LoginInterface>({
    resolver: zodResolver(loginSchema),
  });
  const { loginRequest, loginError, setLoginError } = loginContext();
  useEffect(() => {
    return setLoginError("");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-grey-6">
      <NavBar />
      <main className="flex-1">
        <div className="flex justify-center items-center p-6">
          <form
            className={`flex flex-col gap-8 items-start p-10 w-[412px] h-[542px] bg-colors_color_white_fixed rounded`}
          >
            <Heading type={`h5`} weight={500}>{`Login`}</Heading>
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
                href="/"
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
              <Button type={`b-grey`}>{`Cadastrar`}</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
