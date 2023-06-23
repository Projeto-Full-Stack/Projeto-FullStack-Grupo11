import { ModalProvider } from "@/context/modal.context";
import { Modal } from "@/components/modal/modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "@/context/login.context";
import { CarProvider } from "@/context/cars.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <CarProvider>
        <LoginProvider>
          <Component {...pageProps} />
          <Modal />
        </LoginProvider>
      </CarProvider>
    </ModalProvider>
  );
}
