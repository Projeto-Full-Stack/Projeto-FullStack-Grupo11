import { JSX, useState } from "react";
import Button from "./button";
import { Heading } from "./typography/heading.component";
import Link from "next/link";
import { LoginContext } from "@/context/login.context";
import Image from "next/image";
// import Profile from "./profile";
import bars from "../../public/bars.svg";
import Profile from "./profile";
import EditAddressForm from "./forms/formAddressEdit";
import { useContext } from "react";
import { ModalContext } from "@/context/modal.context";
import EditUserForm from "./forms/formUserEdit";

const NavBar = () => {
  const [navStatus, setNavStatus] = useState("hidden");

  const { userInfo, logout } = LoginContext();

  function showNavigation() {
    navStatus == "hidden" ? setNavStatus("block") : setNavStatus("hidden");
  }

  const { setModalContent } = useContext(ModalContext);

  return (
    <div className="w-full  bg-grey-10 ">
      <header className="max-w-[2300px] flex justify-between items-center px-[16px] h-[80px] bg-grey-10 m-auto relative">
        <Link href={`/`}>
          <Heading
            type="h3"
            weight={600}
            extra_classes="bg-clip-text text-transparent bg-gradient-to-tr from-grey-0 to-brand-1"
          >
            Motors shops
          </Heading>
        </Link>
        {userInfo ? (
          <>
            <button onClick={showNavigation}>
              <div className="flex flex-col items-end sm:hidden">
                <Image
                  src={bars}
                  className="w-5 sm:hidden"
                  alt="Symbol drop down"
                ></Image>
              </div>
              <Profile
                type="small"
                name={userInfo.name}
                extra_classes="items-center gap-2 max-w-[244px] hidden sm:flex"
              />
            </button>
            <div className={`${navStatus} flex w-fit flex-col absolute top-[100%] right-0 h-fit`}>
              <section>
                <div
                  className={`flex-col flex items-start p-2  h-full shadow-[1px_1px_1px_1px_rgba(0, 0, 0, 0.332)]
              bg-colors_color_white_fixed sm:mt-0 sm:w-fit `}
                >
                  <Button
                    type={"bg-light"}
                    extra_classes="w-full flex items-start"
                    click_event={() => setModalContent(<EditUserForm />)}
                  >
                    Editar Perfil
                  </Button>
                  <Button
                    type={"bg-light"}
                    click_event={() => setModalContent(<EditAddressForm />)}
                  >
                    Editar endereço
                  </Button>
                  {userInfo.isVendor == true && (
                    <Link href={`/profile/${userInfo.id}`}>
                      <Button type={"bg-light"}>Meus anúncios</Button>
                    </Link>
                  )}
                  <Button click_event={() => logout()} type={"bg-light"} extra_classes="w-full flex flex-start">
                    Sair
                  </Button>
                </div>
              </section>
            </div>
          </>
        ) : (
          <>
            <button onClick={showNavigation} className="sm:hidden">
              <Image
                src={bars}
                className="w-5 sm:hidden"
                alt="Symbol drop down"
              ></Image>
            </button>
            <div
              className={`flex flex-col items-center shadow-sm h-fit ${navStatus}
              bg-colors_color_white_fixed shadow-indigo-500/40 sm:flex-row sm:w-fit sm:bg-transparent sm:static sm:flex
              absolute right-0 top-[100%]
              `}
            >
              <Link href="/login">
                <Button type={"bg-light"}>Fazer login</Button>
              </Link>
              <Link href="/register">
                <Button type={"bg-light"} extra_classes="w-full ">
                  Cadastrar
                </Button>
              </Link>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default NavBar;
