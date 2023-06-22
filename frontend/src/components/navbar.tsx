import { useState } from "react";
import Button from "./button";
import { Heading } from "./typography/heading.component";
import Link from "next/link";

const NavBar = () => {
  const [navStatus, setNavStatus] = useState("hidden");

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
          <Link href="/login">
            <Button type={"bg-light"} extra_classes="mx-2">
              Fazer login
            </Button>
          </Link>
          <Link href="/register">
            <Button type={"bg-light"}>Cadastrar</Button>
          </Link>
        </div>
        <button className="lg:hidden" onClick={showNavigation}>
          {textButton()}
        </button>
      </header>
      <div
        className={`absolute min-w-[100%] flex justify-evenly py-[5px] bg-colors_color_white_fixed ${navStatus} lg:hidden`}
      >
        <Button type={"bg-light"} extra_classes="mx-2">
          Fazer login
        </Button>
        <Button type={"bg-light"}>Cadastrar</Button>
      </div>
    </div>
  );
};


export default NavBar;
