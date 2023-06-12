import { useState } from "react"
import Button from "./button"

const NavBar = () => {
    const [navStatus, setNavStatus] = useState("hidden")

    function showNavigation (){
        if (navStatus == "hidden"){
            setNavStatus("block")
        }else {
            setNavStatus("hidden")
        }
    }
    function textButton (){
       return navStatus == "hidden" ? "Open" : "Close"
    }

    return (
        <>
            <header className='flex justify-between items-center px-[16px] py-[26px]'>
                <div>
                    <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-tr from-grey-grey_0 to-brand-brand_1">Motors <span>shops</span></h1>
                </div>
                <div className="lg:border-grey-grey_6 lg:border-l-[2px] lg:items-center lg:px-5 lg:min-h-full hidden lg:block">
                    <Button type={"bg-light"} children={"Fazer login"} extra_classes="mx-2"/>
                    <Button type={"bg-light"} children={"Cadastrar"}/>
                </div>
                <button className="lg:hidden" onClick={showNavigation}>{textButton()}</button>
            </header>
            <div className={`absolute min-w-[100%] flex justify-evenly py-[5px] bg-colors_color_white_fixed ${navStatus} lg:hidden`}>
                <Button type={"bg-light"} children={"Fazer login"} extra_classes="mx-2"/>
                <Button type={"bg-light"} children={"Cadastrar"}/>
            </div>
        </>
        )
}

export default NavBar