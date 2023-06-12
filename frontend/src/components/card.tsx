import carImage  from "../image/Carro.png"
import Profile from "./profile"
import Button from "./button"

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

interface ICardProps {
    name: string,
    children: any
}

const Card = ({name, children}: ICardProps) => {
    
    return (
        <li className="">
            <div className="m-4">
                <span className="available">Ativo</span>
                <img className ="bg-grey-grey_7 border-grey-grey_7" src={carImage.src}/>
            </div>
            <div className="m-4">
                <h4 className="font-semibold my-4 text-grey-grey_1">Product title stays here - max 1 line</h4>
                <p className="font-medium text-grey-grey_3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla deserunt illo labore sequi</p>
            </div>
            <Profile name={"teste"}/>
            <div className="flex justify-between w-full m-4">
                <div className="flex justify-start w-1/4">
                    <Button type="specifications" children="0 KM" extra_classes="mr-4"/>
                    <Button type="specifications" children="2019" extra_classes="mr-4"/> 
                </div>
                <div className="mt-2 mr-11">
                    <p className="font-medium text-grey-grey_1">R$ 00.000,00</p>
                </div>
            </div>
        </li>
    )
}

export default Card