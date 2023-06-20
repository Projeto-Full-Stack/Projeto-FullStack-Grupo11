import { ModalProvider } from "@/context/modal.context";
import { Modal } from "@/components/modal/modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "@/context/login.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <LoginProvider>
        <Component {...pageProps} />
        <Modal />
      </LoginProvider>
    </ModalProvider>
  )
}
