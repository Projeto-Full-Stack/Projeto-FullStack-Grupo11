import {
  RecoveryInterface,
  ResetPassInterface,
} from "@/schemas/recovery.schema";
import motorsApi from "@/services/motors.service";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext } from "react";

interface Props {
  children: ReactNode;
}

interface IRecoveryProvider {
  sendRecoveryEmail: (data: RecoveryInterface) => void;
  resetPassword: (
    token: string | string[] | undefined,
    data: ResetPassInterface
  ) => void;
}

const recoveryContext = createContext<IRecoveryProvider>(
  {} as IRecoveryProvider
);

export const RecoveryProvider = ({ children }: Props) => {
  const router = useRouter();

  const sendRecoveryEmail = async (data: RecoveryInterface) => {
    await motorsApi
      .post("users/resetPassword", data)
      .then(() => {
        alert("Email enviado com sucesso!");
        router.push("login");
      })
      .catch((error) => {
        alert("Usuário não encontrado");
        console.error(error);
      });
  };

  const resetPassword = async (
    token: string | string[] | undefined,
    data: ResetPassInterface
  ) => {
    await motorsApi
      .patch(`users/resetPassword/${token}`, data)
      .then(() => {
        alert("Senha modificada com sucesso!");
        router.push("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <recoveryContext.Provider value={{ sendRecoveryEmail, resetPassword }}>
      {children}
    </recoveryContext.Provider>
  );
};

export const RecoveryContext = () => useContext(recoveryContext);
