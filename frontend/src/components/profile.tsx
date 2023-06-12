import dexter from "../image/Dexter.jpg"

interface IProfileProps {
    name: string,
    children?: any
}

const Profile = ({name, children}: IProfileProps) =>{

    return (
        <div className="flex m-4 align-middle">
            <img className="rounded-full w-10 h-10" src={dexter.src}/>
            <p className="font-medium text-grey-grey_2 m-2">{name}</p>
        </div>
    )
}

export default Profile
