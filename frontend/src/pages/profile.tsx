import Button from "@/components/button";
import Card from "@/components/card";
import { Footer } from "@/components/footer";
import EditAddressForm from "@/components/forms/formAddressEdit";
import EditUserForm from "@/components/forms/formUserEdit";
import NavBar from "@/components/navbar";
import Next from "@/components/next";
import Profile from "@/components/profile";
import { Heading } from "@/components/typography/heading.component";
import { Text } from "@/components/typography/text.component";
import { ModalContext } from "@/context/modal.context";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LoginContext } from "@/context/login.context";

const inter = Inter({ subsets: ["latin"] });

const ViewUser = () => {
  const router = useRouter();

  const { setModalContent } = useContext(ModalContext);
  const { userInfo, tokenState } = LoginContext();

  return (
    <div>
      <main className={"body"}>
        <NavBar />
        <div className="px-4 py-20 flex flex-col max-w-[2300px] m-auto">
          <section className="flex items-center w-full justify-center">
            <Profile
              type="big"
              name={userInfo.name}
              extra_classes="h-96 flex flex-col gap-y-4 bg-colors_color_white_fixed py-10 px-3 mb-8 w-[1140px] h-fit "
            >
              <Text
                type="b1"
                weight={400}
                extra_classes="text-grey_2 h-35 w-full"
              >
                {userInfo.description}
              </Text>
              {userInfo.isVendor == true ? (
                <div className="mt-2 flex flex-col gap-4 sm:[500px] sm:flex-row sm:justify-between">
                  <div className="flex justify-between w-full sm:w-[30%] gap-4">
                    <Button
                      type="bg-brand"
                      click_event={() => setModalContent(<EditUserForm />)}
                    >
                      Editar Perfil
                    </Button>
                    <Button
                      type="bg-brand"
                      click_event={() => setModalContent(<EditAddressForm />)}
                    >
                      Editar Endereço
                    </Button>
                  </div>
                  <Button
                    type="bg-alert"
                    extra_classes="w-[30%] sm:[500px] sm:w-[20%]"
                  >
                    Excluir Perfil
                  </Button>
                </div>
              ) : (
                <div></div>
              )}
            </Profile>
          </section>
          <Heading
            type="h5"
            weight={600}
            extra_classes="text-grey_0 mt-10 mb-11 px-4"
          >
            Anúncios
          </Heading>
          <ul className="flex gap-4 overflow-scroll md:[613px] md:overflow-hidden md:flex-wrap md:justify-center ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
          <Next />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ViewUser;
