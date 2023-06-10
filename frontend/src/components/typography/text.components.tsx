interface TextSchema {
    type: "b1" | "b2"
    weight: 600 | 500| 400
    extra_classes?: string
    children: string
}

export function Text ({type, weight, extra_classes="", children}: TextSchema){
    if (extra_classes) extra_classes += " " + extra_classes

    if (type == "b1" && weight == 600){ return ( <p className={`text-[16px] leading-[28px] font-semibold font-inter${extra_classes}`}>{children}</p> ) }
    if (type == "b1" && weight == 400){ return ( <p className={`text-[16px] leading-[28px] font-normal font-inter${extra_classes}`}>{children}</p> ) }

    if (type == "b2" && weight == 500){ return ( <p className={`text-[14px] leading-[24px] font-medium font-inter${extra_classes}`}>{children}</p> ) }
    if (type == "b2" && weight == 400){ return ( <p className={`text-[14px] leading-[24px] font-normal font-inter${extra_classes}`}>{children}</p> ) }
}