import { ModalProvider } from "@/context/modal.context";
import { Modal } from "@/components/modal/modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "@/context/login.context";
import { CarProvider } from "@/context/cars.context";
import { RegisterProvider } from "@/context/register.context";
import { AnnouncementProvider } from "@/context/announcement.context";
import { RecoveryProvider } from "@/context/recovery.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <CarProvider>
        <AnnouncementProvider>
          <RegisterProvider>
            <LoginProvider>
              <RecoveryProvider>
                  <Component {...pageProps} />
              </RecoveryProvider>
              <Modal />
            </LoginProvider>
          </RegisterProvider>
        </AnnouncementProvider>
      </CarProvider>
    </ModalProvider>
  );
}
