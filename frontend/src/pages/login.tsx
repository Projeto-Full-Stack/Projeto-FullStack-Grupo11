import Button from "@/components/button";
import { Footer } from "@/components/footer";
import Input from "@/components/input";
import NavBar from "@/components/navbar";
import { Heading } from "@/components/typography/heading.component";

export default function Login() {
  return (
    <>
      <NavBar />
      <main className={`loginBody`}>
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
              >
                {`Digitar email`}
              </Input>
              <Input
                label={"Senha"}
                input_type={`password`}
                input_name={`password`}
                extra_classes={`w-full`}
              >{`Digitar senha`}</Input>
              <a
                href=""
                className={`flex justify-end align-center font-semibold text-[14px] leading-[24px] font-inter`}
              >
                Esqueci minha senha
              </a>
              <Button type={`bg-brand`}>{`Entrar`}</Button>
              <p
                className={`flex justify-center align-center font-medium text-[14px] leading-[24px] font-inter`}
              >
                Ainda não possui conta?
              </p>
              <Button type={`b-black`}>{`Cadastrar`}</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
