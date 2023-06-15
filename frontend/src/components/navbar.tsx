import { useState } from "react"
import Button from "./button"
import { Heading } from "./typography/heading.component"

const NavBar = () => {
    const [navStatus, setNavStatus] = useState("hidden")

    function showNavigation (){
        navStatus == "hidden" ? setNavStatus("block") : setNavStatus("hidden")
    }
    
    function textButton (){
       return navStatus == "hidden" ? "Open" : "Close"
    }

    return (
        <>
            <header className="flex justify-between items-center px-[16px] h-[80px] border-b-2 border-grey-grey_6 bg-grey-grey_10 3">
                <Heading type="h3" weight={600} extra_classes="bg-clip-text text-transparent bg-gradient-to-tr from-grey-grey_0 to-brand-brand_1">Motors shops</Heading>
                <div className="lg:border-grey-grey_6 items-center lg:border-l-[2px] h-full py-[20px] lg:items-center lg:px-5 lg:min-h-full hidden lg:block">
                    <Button type={"bg-none"} children={"Fazer login"} extra_classes="mx-2 "/>
                    <Button type={"b-black"} children={"Cadastrar"}/>
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