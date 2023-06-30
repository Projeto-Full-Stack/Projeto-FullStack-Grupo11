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
      <header className="max-w-[2300px] flex justify-between items-center px-[16px] h-[80px] bg-grey-10 m-auto ">
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
          <div className="flex w-fit items-end flex-col gap-6 absolute top-6 right-0 px-[16px]">
            <button onClick={showNavigation} className="w-full">
              <Profile
                type="small"
                name={userInfo.name}
                extra_classes="flex items-end justify-end gap-2 max-w-[244px]"
              />
            </button>
            <section className={`${navStatus} `}>
              <div
                className={`flex-col flex items-start p-2  h-full shadow-[1px_1px_1px_1px_rgba(0, 0, 0, 0.332)]
            bg-colors_color_white_fixed sm:[425px] sm:mt-0   sm:w-fit `}
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
                <Button click_event={() => logout()} type={"bg-light"}>
                  Sair
                </Button>
              </div>
            </section>
          </div>
        ) : (
          <div
            className="w-[40%] flex flex-col items-end p-2 h-fit absolute top-5 right-0 mb-3 
         sm:w-fit sm:mb-5 sm:flex-row"
          >
            <button onClick={showNavigation} className="sm:hidden">
              <Image
                src={bars}
                className=" w-5 sm:[425px] sm:hidden"
                alt="Symbol drop down"
              ></Image>
            </button>
            <section className={`${navStatus} sm:block`}>
              <div
                className={`flex-col flex items-center p-2 mt-5 shadow-sm h-full
            bg-colors_color_white_fixed  shadow-indigo-500/40 sm:[425px] sm:mt-0  sm:flex-row sm:w-fit sm:bg-transparent `}
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
            </section>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
