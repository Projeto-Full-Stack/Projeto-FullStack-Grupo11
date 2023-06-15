interface HeadingSchema {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8"
  weight: 700 | 600 | 500 | 400
  extra_classes?: string
  children: string
}

export function Heading ({type, weight, extra_classes="", children}: HeadingSchema){
  if (extra_classes) extra_classes += " " + extra_classes

  if (type == "h1" && weight == 700){ return ( <h1 className={`text-[44px] leading-[56px] font-bold font-lexend${extra_classes}`}>{children}</h1> ) }

  if (type == "h2" && weight == 600){ return ( <h2 className={`text-[36px] leading-[45px] font-semibold font-lexend${extra_classes}`}>{children}</h2> ) }

  if (type == "h3" && weight == 600){ return ( <h3 className={`text-[32px] leading-[40px] font-semibold font-lexend${extra_classes}`}>{children}</h3> ) }
  if (type == "h3" && weight == 500){ return ( <h3 className={`text-[32px] leading-[40px] font-medium font-lexend${extra_classes}`}>{children}</h3> ) }

  if (type == "h4" && weight == 600){ return ( <h4 className={`text-[28px] leading-[35px] font-semibold font-lexend${extra_classes}`}>{children}</h4> ) }
  if (type == "h4" && weight == 500){ return ( <h4 className={`text-[28px] leading-[35px] font-medium font-lexend${extra_classes}`}>{children}</h4> ) }

  if (type == "h5" && weight == 600){ return ( <h5 className={`text-[24px] leading-[30px] font-semibold font-lexend${extra_classes}`}>{children}</h5> ) }
  if (type == "h5" && weight == 500){ return ( <h5 className={`text-[24px] leading-[30px] font-medium font-lexend${extra_classes}`}>{children}</h5> ) }

  if (type == "h6" && weight == 600){ return ( <h6 className={`text-[20px] leading-[25px] font-semibold font-lexend${extra_classes}`}>{children}</h6> ) }
  if (type == "h6" && weight == 500){ return ( <h6 className={`text-[20px] leading-[25px] font-medium font-lexend${extra_classes}`}>{children}</h6> ) }

  if (type == "h7" && weight == 600){ return ( <p className={`text-[16px] leading-[20px] font-semibold font-lexend${extra_classes}`}>{children}</p> ) }
  if (type == "h7" && weight == 500){ return ( <p className={`text-[16px] leading-[20px] font-medium font-lexend${extra_classes}`}>{children}</p> ) }

  if (type == "h8" && weight == 500){ return ( <p className={`text-[14px] leading-[20px] font-semibold font-inter${extra_classes}`}>{children}</p> ) }
  if (type == "h8" && weight == 400){ return ( <p className={`text-[14px] leading-[20px] font-medium font-inter${extra_classes}`}>{children}</p> ) }
}
