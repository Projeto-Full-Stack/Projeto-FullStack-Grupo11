import { useRef, useEffect } from "react";

interface IInput {
  input_name: string;
  input_type:
    | "text"
    | "select"
    | "textArea"
    | "email"
    | "tel"
    | "date"
    | "password";
  label: string;
  is_required?: boolean;
  extra_classes?: string;
  children: string;
}

const Input = ({
  input_type,
  input_name,
  label,
  extra_classes,
  is_required = true,
  children,
}: IInput) => {
  let input_pattern = "";
  if (input_type == "tel") input_pattern = "[0-9]{3}-[0-9]{3}-[0-9]{4}";
  if (input_type == "date")
    input_pattern =
      "^(?:(?:31(/|-|.)(?:0?[13578]|1[02]))\x01|(?:(?:29|30)(/|-|.)(?:0?[13-9]|1[0-2])\x02))(?:(?:1[6-9]|[2-9]d)?d{2})$|^(?:29(/|-|.)0?2\x03(?:(?:(?:1[6-9]|[2-9]d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1d|2[0-8])(/|-|.)(?:(?:0?[1-9])|(?:1[0-2]))\x04(?:(?:1[6-9]|[2-9]d)?d{2})$";

  if (
    input_type == "text" ||
    input_type == "email" ||
    input_type == "password"
  ) {
    return (
      <label
        htmlFor={input_name}
        className={`block font-medium text-grey-grey_1 ${extra_classes}`}
      >
        {label}
        <input
          id={input_name}
          name={input_name}
          type={input_type}
          required={is_required}
          placeholder={children}
          className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}
        />
      </label>
    );
  }

  if (input_type == "date" || input_type == "tel") {
    return (
      <label
        htmlFor={input_name}
        className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}
      >
        {label}
        <input
          id={input_name}
          name={input_name}
          type={input_type}
          required={is_required}
          placeholder={children}
          pattern={input_pattern}
          className={`border-grey-grey_4 border-[1.5px]  focus:border-brand-brand_1 placeholder:text-grey-grey_3 rounded font-normal  px-6 py-1 ${extra_classes}`}
        />
      </label>
    );
  }

  if (input_type == "textArea") {
    return (
      <label
        htmlFor={input_name}
        className={`block max-w-min font-medium text-grey-grey_1 ${extra_classes}`}
      >
        {label}
        <textarea
          id={input_name}
          name={input_name}
          required={is_required}
          cols={30}
          rows={5}
          placeholder={children}
        ></textarea>
      </label>
    );
  }
};

export default Input;
