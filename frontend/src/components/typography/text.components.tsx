interface HeadingSchema {
    type: "b1" | "b2"
    weight: 600 | 500| 400
    extra_classes?: string
    children: string
}

export function Text ({type, weight, extra_classes="", children}: HeadingSchema){
    if (extra_classes) extra_classes += " " + extra_classes

    if (type == "b1" && weight == 600){ return ( <h1 className={`text-[16px] leading-[28px] font-semibold font-inter${extra_classes}`}>{children}</h1> ) }
    if (type == "b1" && weight == 400){ return ( <h1 className={`text-[16px] leading-[28px] font-normal font-inter${extra_classes}`}>{children}</h1> ) }

    if (type == "b2" && weight == 500){ return ( <h1 className={`text-[14px] leading-[24px] font-medium font-inter${extra_classes}`}>{children}</h1> ) }
    if (type == "b2" && weight == 400){ return ( <h1 className={`text-[14px] leading-[24px] font-normal font-inter${extra_classes}`}>{children}</h1> ) }
}