interface OptionProps {
    index: number,
    selectedIndex?: number,
    onSelect: (index: number) => void,
    children: React.ReactNode,
}

const Option = (props: OptionProps) => {
  const isSelected = props.index === props.selectedIndex;
  return (
    <div
      className={`flex items-center cursor-pointer text-grey-0 box-border border-grey-6 border-[1.5px] py-1.5 px-8 rounded font-medium min-w-max max-h-[48px] ${
        isSelected && "bg-brand-1 text-grey-7"
      }`}
      onClick={() => props.onSelect(props.index)}
    >
      <div className={`opacity-0 ${isSelected && ""}`}/>
      {props.children}
    </div>
  )
}

export default Option