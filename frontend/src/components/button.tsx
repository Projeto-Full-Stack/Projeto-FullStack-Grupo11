interface IButtonSchema {
  type:
    | "b-grey"
    | "bg-none"
    | "b-black"
    | "bg-black"
    | "bg-transparent"
    | "bg-light"
    | "bg-brand"
    | "bg-grey"
    | "specifications"
    | "b-brand"
    | "bg-alert"
    | "bg-successfull"
    | "bg-inactive"
    | "no-border";
  extra_classes?: string;
  children: string;
  click_event?: any;
  button_type?: "submit" | "button";
}

const Button = ({
  type,
  extra_classes = "",
  children,
  click_event,
  button_type="submit"
}: IButtonSchema) => {
  if (extra_classes) extra_classes += " " + extra_classes;

  if (type == "bg-black") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-0 text-colors_color_white_fixed hover:bg-grey-1 font-medium py-1.5 px-7 rounded min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-brand") {
    return (
      <button
        onClick={click_event}
        className={`bg-brand-1 hover:bg-brand-2 text-colors_color_white_fixed py-1.5 px-7 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-grey") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-6 text-grey-2 hover:bg-grey-5 disabled:text-colors_color_white_fixed py-1.5 px-7 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "specifications") {
    return (
      <span
        className={`bg-brand-4 text-brand-1 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </span>
    );
  }
  if (type == "bg-light") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-10 border-grey-10 text-grey-2 hover:border-grey-2 hover:text-grey-0 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "b-brand") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-10 border-brand-1 hover:bg-brand-4 text-brand-1 disabled:bg-brand-3 disabled:text-brand-4 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-transparent") {
    return (
      <button
        onClick={click_event}
        className={`text-grey-0 hover:bg-grey-8 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-alert") {
    return (
      <button
        onClick={click_event}
        className={`text-feedback-alert_1 bg-feedback-alert_3 hover:bg-feedback-alert_2 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-successfull") {
    return (
      <button
        onClick={click_event}
        className={`text-feedback-success_1 bg-feedback-success_3 hover:bg-feedback-success_2 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-none") {
    return (
      <button
        onClick={click_event}
        className={`text-brand-2 box-border border-grey-10 border-[1.5px] hover:border-brand-1  hover:text-brand-1 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
  if (type == "b-grey") {
    return (
      <button
        onClick={click_event}
        className={`text-grey-0 box-border border-grey-6 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
        type={button_type}
      >
        {children}
      </button>
    );
  }
};

export default Button;
