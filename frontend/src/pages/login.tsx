import Input from "@/components/input";
import NavBar from "@/components/navbar";

export default function Login() {
  return (
    <main className={`loginBody`}>
      <NavBar />
      <div className="flex justify-center items-center h-[90vh]">
        <form
          className={`flex flex-col gap-4 items-start p-5 w-[412px] h-[542px] bg-colors_color_white_fixed`}
        >
          <h1>Login</h1>
          <div>
            <Input
              placeholder={`Digitar email`}
              htmlFor={`email`}
              type={`email`}
              label={`Email`}
            />
            <p>Esqueci minha senha</p>
            <button>Entrar</button>
            <p>Ainda não possui conta?</p>
            <button>Cadastrar</button>
          </div>
        </form>
      </div>
    </main>
  );
}
