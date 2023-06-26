import { useState } from "react";
import Button from "./button";
import { Heading } from "./typography/heading.component";
import Link from "next/link";
import { LoginContext } from "@/context/login.context";
import Profile from "./profile";

const NavBar = () => {
  const [navStatus, setNavStatus] = useState("hidden");

  const { userInfo, logout } = LoginContext()

  function showNavigation() {
    navStatus == "hidden" ? setNavStatus("block") : setNavStatus("hidden");
  }

  function textButton (){
    return navStatus == "hidden" ? "Open" : "Close"
 }


  return (
    <div className="w-full  bg-grey-10 ">
      <header className="max-w-[2300px] flex justify-between items-center px-[16px] h-[80px] bg-grey-10 m-auto ">
        <Heading
          type="h3"
          weight={600}
          extra_classes="bg-clip-text text-transparent bg-gradient-to-tr from-grey-0 to-brand-1"
        >
          Motors shops
        </Heading>
        <div className="lg:border-grey-6 items-center lg:border-l-[2px] h-full py-[20px] lg:items-center lg:px-5 lg:min-h-full hidden lg:block">
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
      </div>
    </div>
  );
};


export default NavBar;
