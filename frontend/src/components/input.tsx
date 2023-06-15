interface IInput {
    name: string,
    type: "text" | "select" | "textArea" | "email" | "tel" | "date", 
    label: string,
    placeholder: string,
    htmlFor:string,
    required?: boolean,
    options?: [string],
    extra_classes?: string
}

const Input = ({
        type, 
        name, 
        htmlFor,
        label, 
        placeholder, 
        extra_classes,  
        required
    }: IInput
    ) =>{
    if (type == "text" || type == "email") { return (
        <label 
            htmlFor={htmlFor} 
            className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}
        >
            {label}
            <input
                name={name}
                type={type} 
                required={required} 
                placeholder={placeholder} 
                className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}
            />
        </label>
    )}

    if (type == "date") { return (
        <label 
            htmlFor={htmlFor} 
            className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}
        >
            {label}
            <input
                name={name}
                type={type} 
                required={required} 
                placeholder={placeholder} 
                className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}
            />
        </label>
    )}

    if (type == "tel"){ return(
        <label 
            htmlFor={htmlFor} 
            className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}
        >
            {label}
            <input
                name={name}
                type={type} 
                required={required} 
                placeholder={placeholder}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}
            />
        </label>
    )}

    if (type == "select"){ return(
        <label htmlFor={htmlFor} className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}>
            {label}
            <select name={name} required={required} className={`border-grey-grey_4 border-[1.5px] focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}>
                {placeholder}
            </select>
        </label>
    )}

    if (type == "textArea"){ return(
            <label htmlFor={htmlFor} className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}>
                {label}
                <textarea name={name} required={required} cols={30} rows={5}></textarea>    
            </label> 
    )}
}

export default Input