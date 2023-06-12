interface IInput {
    type: string | "select",
    label: string,
    placeholder: string,
    htmlFor:string,
    options?: [string],
    extra_classes?: string
}

const Input = ({type, htmlFor, label, placeholder, extra_classes}: IInput) =>{
    if (type != "select") { return (
        <div className="block max-w-min ">
            <label htmlFor={htmlFor} className={`font-medium text-grey-grey_1 ${extra_classes}`}>{label}</label>
            <input type={type} placeholder={placeholder} className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}/>
        </div>
    )}

    if (type == "select"){ return(
        <div>
            <label htmlFor={htmlFor} className={`font-medium text-grey-grey_1 ${extra_classes}`}>{label}</label>
            <select name="" id="" className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}>{placeholder}</select>
        </div>
    )}
}

export default Input