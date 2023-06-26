import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { LoginInterface } from "@/schemas/login.schemas";
import motorsApi from "@/services/motors.service";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { UserInterface } from "@/schemas/user.schemas";

interface Props {
  children: ReactNode;
}

interface ILoginProvider {
  loginRequest: (data: LoginInterface) => void;
  loginError: string;
  setLoginError: (text: string) => void;
  setUserInfo: (data: UserInterface) => void;
  userInfo: UserInterface | null;
  setToken: (token: string) => void;
  tokenState: string;
  logout: () => void;
}

interface DecodedInterface {
  email: string;
  sub: string;
  exp: number;
  iat: number;
  vendor: boolean;
}

const loginContext = createContext<ILoginProvider>({} as ILoginProvider);

export const LoginProvider = ({ children }: Props) => {
  const [loginError, setLoginError] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInterface | null>(null)
  const [tokenState, setToken] = useState<string>("")

  const router = useRouter();

  const stateUserDetails = async (token: string) => {
    const decoded: DecodedInterface = jwtDecode(token);

    const userDetails = await motorsApi.get(`users/${decoded.sub}`);
    setUserInfo(userDetails.data);
  };

  const loginRequest = async (data: LoginInterface) => {
    await motorsApi
      .post("auth", data)
      .then(async (response) => {
        window.localStorage.setItem("token", response.data.token);
        setToken(response.data.token);

        stateUserDetails(response.data.token);

        router.push("/");
        setLoginError("");
      })
      .catch((error) => {
        setLoginError(error.response.data.message);
      });
  };

  const logout = () => {
    window.localStorage.removeItem("token")
    router.push("/")
    setUserInfo(null)
    setToken("")
  }

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      const checkToken = async () => {
        try {
          const decoded: DecodedInterface = jwtDecode(window.localStorage.getItem("token")!)
          const userDetails = await motorsApi.get(`/users/${decoded.sub}`)
          setUserInfo(userDetails.data)
          setToken(window.localStorage.getItem("token")!)
        }
        catch (error){
          router.push("/login")
          window.localStorage.removeItem("token")
        }
      }
      checkToken()
    }else {
      router.push("/login")
    }
  }, [])

  return (
    <loginContext.Provider value={{ loginRequest, loginError, setLoginError, setUserInfo, userInfo, setToken, tokenState, logout}}>
      {children}
    </loginContext.Provider>
  );
};

export const LoginContext = () => useContext(loginContext);
