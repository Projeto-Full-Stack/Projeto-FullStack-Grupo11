import { ReactNode } from "react"

interface Props {
    list_length: number
    children: ReactNode
}

export function ImageList ({list_length, children}: Props){
    const quantity_column = list_length !== 1 && list_length > 3 ? Math.ceil(list_length / 2) : list_length
    const quantity_rows = list_length !== 1 && list_length > 3 ? 2 : 1

    return (
        <ul className={`flex flex-col
        lg:grid lg:grid-cols-${quantity_column} lg:grid-rows-${quantity_rows} lg:gap-8 lg:items-start lg:w-full`}>
            {children}
        </ul>
    )
}