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
import { AnnouncementContext } from "@/context/announcement.context";
import { AnnForm } from "@/components/annForm";

const inter = Inter({ subsets: ["latin"] });

const ViewUser = () => {
  const router = useRouter();

  const { setModalContent } = useContext(ModalContext);
  const { getProfileDetails, profilePageInformation } = ProfileContext();
  const { userAnnouncements, getAllUserAnnouncements } = AnnouncementContext();
  const { userInfo, tokenState } = LoginContext();

  useEffect(() => {
    if (router.query.id) {
      getProfileDetails(router.query.id);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (profilePageInformation?.isVendor) {
      getAllUserAnnouncements(profilePageInformation.id);
    }
  }, [profilePageInformation]);

  return (
    <div>
      <div className="h-screen absolute -z-10">
        <div className="bg-brand-1 w-screen h-[35%] -z-10"></div>
      </div>
      <main>
        <NavBar />
        {profilePageInformation ? (
          <div className="px-4 py-20 flex flex-col m-auto">
            <section className="flex items-center w-full justify-center">
              <Profile
                type="big"
                name={profilePageInformation!.name}
                extra_classes="h-96 flex flex-col gap-y-4 bg-colors_color_white_fixed py-10 px-3 mb-8 w-[1600px] h-fit rounded"
              >
                <Text
                  type="b1"
                  weight={400}
                  extra_classes="text-grey_2 h-35 w-full"
                >
                  {profilePageInformation!.description}
                </Text>
              </Profile>
            </section>

            {profilePageInformation?.isVendor ? (
              <section className="flex flex-col lg:mx-auto lg:max-w-[1600px] lg:w-full gap-4">
                <div className="flex flex-col mb-5 gap-4 lg:flex-row items-center">
                  <Heading
                    type="h5"
                    weight={600}
                    extra_classes="text-grey_0 px-4"
                  >
                    Anúncios
                  </Heading>
                  {profilePageInformation?.id === userInfo?.id && (
                    <Button
                      type="bg-brand"
                      click_event={() => setModalContent(<AnnForm />)}
                    >
                      Criar anuncio
                    </Button>
                  )}
                </div>
                <ul className="grid grid-flow-row grid-cols-3 auto-rows-auto">
                  {userAnnouncements.length ? (
                    userAnnouncements.map((element) => (
                      <Card key={element.id} car={element} />
                    ))
                  ) : (
                    <Text type="b1" weight={600}>
                      Você não possui nenhum carro anunciado
                    </Text>
                  )}
                </ul>
                {userAnnouncements.length > 0 && (
                  <Next user_id={profilePageInformation.id} />
                )}
              </section>
            ) : (
              <Heading
                type="h1"
                weight={700}
                extra_classes="text-feedback-alert_1 text-center"
              >
                Esse usuário não é um anunciante
              </Heading>
            )}
          </div>
        ) : (
          <div>Esse usuário não existe</div>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default ViewUser;
