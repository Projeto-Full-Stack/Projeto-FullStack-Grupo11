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
import { useContext, useEffect } from "react";
import { LoginContext } from "@/context/login.context";
import { ProfileContext } from "@/context/profile.context";
import { DeleteUserForm } from "@/components/forms/formUserDelete";

const inter = Inter({ subsets: ["latin"] });

const ViewUser = () => {
  const router = useRouter();

  const { setModalContent } = useContext(ModalContext);
  const { getProfileDetails, profilePageInformation } = ProfileContext()
  const { userInfo, tokenState } = LoginContext();

  useEffect(() => {
    if (router.query.id){
      getProfileDetails(router.query.id)
    }
  }, [router.query.id])



  return (
    <div>
      <main className={"body"}>
        <NavBar />
        {profilePageInformation ? 
          <div className="px-4 py-20 flex flex-col max-w-[2300px] m-auto">
            <section className="flex items-center w-full justify-center">
              <Profile
                type="big"
                name={profilePageInformation!.name}
                extra_classes="h-96 flex flex-col gap-y-4 bg-colors_color_white_fixed py-10 px-3 mb-8 w-[1140px] h-fit "
              >
                <Text
                  type="b1"
                  weight={400}
                  extra_classes="text-grey_2 h-35 w-full"
                >
                  {profilePageInformation!.description}
                </Text>
                {userInfo?.id === profilePageInformation.id && (
                  <div className="mt-2 flex flex-row gap-4 lg:flex-row lg:flex-row lg:justify-between">
                    <div className="flex flex-col w-full lg:w-[30%] lg:flex-row gap-4">
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
                      extra_classes="lg:w-[20%]"
                      click_event={() => setModalContent(<DeleteUserForm />)}
                    >
                      Excluir Perfil
                    </Button>
                  </div>
                )}
              </Profile>
            </section>
            {userInfo?.isVendor ?
              <>
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
              </>
              :
              <p>"not vendor"</p>
            }
            
          </div>
          :
          <div>
            Esse usuário não existe
          </div>
        
        }
        <Footer />
      </main>
    </div>
  );
};

export default ViewUser;
