import Button from "./button"

const NavBar = () => {

    return (
        <header className="flex justify-between pl-16 border-b-2 border-grey-grey_6 items-center h-20">
            <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-tr from-grey-grey_0 to-brand-brand_1">Motors shop</h1>
            <div className="flex border-grey-grey_6 border-l-[2px] items-center px-5 min-h-full ">
                <Button type={"bg-light"} children={"Fazer login"} extra_classes="mx-2"/>
                <Button type={"bg-light"} children={"Cadastrar"}/>
            </div>
        </header>
    )
}

export default NavBar