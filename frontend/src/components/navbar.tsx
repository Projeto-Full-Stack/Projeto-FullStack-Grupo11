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

const NavBar = () => {
  const [navStatus, setNavStatus] = useState("hidden");

  const { userInfo, logout } = LoginContext();

  function showNavigation() {
    navStatus == "hidden" ? setNavStatus("block") : setNavStatus("hidden");
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
                className={`flex-col flex items-start p-2 shadow-sm h-full
            bg-colors_color_white_fixed  shadow-indigo-500/40 sm:[425px] sm:mt-0   sm:w-fit `}
              >
                <Link href={`/profile/${userInfo.id}`}>
                  <Button type={"bg-light"}>Editar Perfil</Button>
                </Link>
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
        {/* <div className="lg:border-grey-6 items-center lg:border-l-[2px] h-full py-[20px] lg:items-center lg:px-5 lg:min-h-full hidden lg:block">
          {userInfo ?
          <div className="flex gap-6 items-center">
            <Link href={`/profile/${userInfo.id}`}><Profile type="small" name={userInfo.name} extra_classes="flex items-center gap-5"/></Link>
            <Button type="bg-alert" click_event={() => logout()}>Logout</Button>
          </div>
          : 
          <>
          <Link href="/login">
            <Button type={"bg-light"} extra_classes="mx-2">
              Fazer login
            </Button>
          </Link>
          <Link href="/register">
            <Button type={"bg-light"}>Cadastrar</Button>
          </Link>
          </>
          }
        </div>
        <button className="lg:hidden" onClick={showNavigation}>
          {textButton()}
        </button>
      </header>
      <div
        className={`absolute min-w-[100%] flex justify-evenly py-[5px] bg-colors_color_white_fixed ${navStatus} lg:hidden`}
      >
         {userInfo ?
          <div className="flex flex-col gap-3 w-full">
             <Link className="w-full text-[14px] leading-[24px] font-medium font-inter text-center" href={`/profile/${userInfo.id}`}>Perfil</Link>
             <button className="w-full text-[14px] leading-[24px] font-medium font-inter text-center text-feedback-alert_1" onClick={() => logout()}>Logout</button>
           </div>
           :
           <>
            <Link className="bg-grey-10 border-grey-10 text-grey-2 hover:border-grey-2 hover:text-grey-0 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full" href="/login">Fazer login</Link>
            <Link className="bg-grey-10 border-grey-10 text-grey-2 hover:border-grey-2 hover:text-grey-0 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full" href="/register">Cadastrar</Link>
          </>
         }
      </div> */}
      </header>
    </div>
  );
};

export default NavBar;
