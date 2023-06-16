interface IButtonSchema {
  type:
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
}

const Button = ({
  type,
  extra_classes = "",
  children,
  click_event,
}: IButtonSchema) => {
  if (extra_classes) extra_classes += " " + extra_classes;

  if (type == "bg-black") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-grey_0  text-colors_color_white_fixed hover:bg-grey-grey_1 font-medium py-1.5 px-7 rounded min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-brand") {
    return (
      <button
        onClick={click_event}
        className={`bg-brand-brand_1 hover:bg-brand-brand_2 text-colors_color_white_fixed py-1.5 px-7 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-grey") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-grey_6 text-grey-grey_2 hover:bg-grey-grey_5 disabled:text-colors_color_white_fixed py-1.5 px-7 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "specifications") {
    return (
      <span
        className={`bg-brand-brand_4 text-brand-brand_1 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </span>
    );
  }
  if (type == "bg-light") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-grey_10 border-grey-grey_10 text-grey-grey_2 hover:border-grey-grey_2 hover:text-grey-grey_0 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "b-brand") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-grey_10 border-brand-brand_1 hover:bg-brand-brand_4 text-brand-brand_1 disabled:bg-brand-brand_3 disabled:text-brand-brand_4 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-transparent") {
    return (
      <button
        onClick={click_event}
        className={`text-grey-grey_0 hover:bg-grey-grey_8 py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-alert") {
    return (
      <button
        onClick={click_event}
        className={`text-feedback-alert_1 bg-feedback-alert_3 hover:bg-feedback-alert_2 py-1.5 px-5 rounded font-medium  min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-successfull") {
    return (
      <button
        onClick={click_event}
        className={`text-feedback-success_1 bg-feedback-success_3 hover:bg-feedback-success_2 py-1.5 px-5 rounded font-medium  min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "b-black") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-grey_10 border-grey-grey_2 text-grey-grey_0 border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
  if (type == "bg-none") {
    return (
      <button
        onClick={click_event}
        className={`bg-grey-grey_10 border-grey-grey_10 text-brand-brand_2 hover:text-brand-brand_1 hover:underline border-[1.5px] py-1.5 px-5 rounded font-medium min-w-max max-h-[48px] max-w-full ${extra_classes}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
