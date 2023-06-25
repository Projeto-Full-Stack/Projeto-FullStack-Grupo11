import { ReactNode, createContext, useContext, useState } from "react";
import { LoginInterface } from "@/schemas/login.schemas";
import motorsApi from "@/services/motors.service";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

interface ILoginProvider {
  loginRequest: (data: LoginInterface) => void;
  loginError: string;
  setLoginError: (text: string) => void;
}

const loginContext = createContext<ILoginProvider>({} as ILoginProvider);

export const LoginProvider = ({ children }: Props) => {
  const [loginError, setLoginError] = useState<string>("");
  const router = useRouter();

  const loginRequest = async (data: LoginInterface) => {
    await motorsApi
      .post("auth", data)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        router.push("/");
        setLoginError("");
      })
      .catch((error) => {
        setLoginError(error.response.data.message);
      });
  };

  return (
    <loginContext.Provider value={{ loginRequest, loginError, setLoginError }}>
      {children}
    </loginContext.Provider>
  );
};

export const LoginContext = () => useContext(loginContext);
