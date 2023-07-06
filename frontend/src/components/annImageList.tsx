import { ReactNode } from "react"

interface Props {
    list_length: number
    children: ReactNode
}

export function ImageList ({list_length, children}: Props){
    if (list_length < 4){
        return (
            <ul className={`flex flex-wrap justify-between
            lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-8 lg:items-start lg:w-full`}>
                {children}
            </ul>
        )
    }else {
        return (
            <ul className={`flex flex-wrap justify-between
            lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:items-start lg:w-full`}>
                {children}
            </ul>
        )
    }
}