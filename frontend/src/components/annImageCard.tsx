interface Props {
    image: string
}

export function ImageCard ({image}: Props){

    return (
        <li className="min-w-[90px] min-h-[90px] max-w-[90px] max-h-[90px] lg:min-w-[108px] lg:min-h-[108px] lg:max-w-[108px] lg:max-h-[108px] flex justify-center">
            <img
            className="object-scale-down"
            src={image}
            alt=""
            />
        </li>
    )
}