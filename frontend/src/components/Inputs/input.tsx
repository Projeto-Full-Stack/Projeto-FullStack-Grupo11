interface IInput {
  input_name: string;
  input_type:
    | "text"
    | "select"
    | "textArea"
    | "email"
    | "tel"
    | "date"
    | "password"
    | "radio";
  label: string;
  children: string;
  register?: {};
  extra_classes?: string;
  state?: boolean;
  reference?: string;
}

const regex: string =
  "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))\x01|(?:(?:29|30)(/|-|.)(?:0?[13-9]|1[0-2])\x02))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?2\x03(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))\x04(?:(?:1[6-9]|[2-9]d)?d{2})$";

const Input = ({
  input_type,
  input_name,
  label,
  extra_classes,
  register,
  children,
  state = false,
}: IInput) => {
  let input_pattern = "";
  if (input_type == "tel") input_pattern = "[(][0-9]{2}[)][9]{1}[0-9]{4}-[0-9]{4}";
  if (input_type == "date") input_pattern = regex;
  if (
    input_type == "text" ||
    input_type == "email" ||
    input_type == "password"
  ) {
    return (
      <label htmlFor={input_name} className={`font-medium text-grey-1 w-full`}>
        {label}
        <input
          id={input_name}
          name={input_name}
          type={input_type}
          placeholder={children}
          {...register}
          className={`border-grey-4 border-[1.5px] focus:outline-none focus:ring focus:ring-brand-1 placeholder:text-grey-3 rounded font-normal px-6 py-1 ${extra_classes}`}
          disabled={state}
        />
      </label>
    );
  }

  if (input_type == "tel") {
    return (
      <label htmlFor={input_name} className={`block font-medium text-grey-1`}>
        {label}
        <input
          id={input_name}
          name={input_name}
          type={input_type}
          placeholder={children}
          pattern={input_pattern}
          {...register}
          className={`border-grey-4 border-[1.5px] focus:outline-none focus:ring focus:ring-brand-1 placeholder:text-grey-3 rounded font-normal px-6 py-1 ${extra_classes}`}
          disabled={state}
        />
      </label>
    );
  }

  if (input_type == "date") {
    return (
      <label htmlFor={input_name} className={`font-medium text-grey-1`}>
        {label}
        <input
          id={input_name}
          name={input_name}
          type={input_type}
          placeholder={children}
          pattern={input_pattern}
          {...register}
          className={`select-none mb-[10px] text-grey-3 border-grey-4 border-[1.5px] focus:outline-none focus:ring focus:ring-brand-1 placeholder:text-grey-3 rounded font-normal px-6 py-1 ${extra_classes}`}
          disabled={state}
        />
      </label>
    );
  }

  if (input_type == "textArea") {
    return (
      <label
        htmlFor={input_name}
        className={`flex flex-col mb-2 max-w-full font-medium py-2 text-grey-1 ${extra_classes}`}
      >
        {label}
        <textarea
          id={input_name}
          {...register}
          className={`border-grey-4 font-normal focus:outline-none focus:ring focus:ring-brand-1 rounded px-6 pt-3 resize-none border-[1.5px] h-[80px]`}
          name={input_name}
          placeholder={children}
        />
      </label>
    );
  }
};

export default Input;
