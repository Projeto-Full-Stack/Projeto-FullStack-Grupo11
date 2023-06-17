interface OptionProps {
    index: number;
    selectedIndex?: number;
  
    onSelect: (index: number) => void;
  
    children: React.ReactNode;
}
const Option = (props: OptionProps) => {
  const isSelected = props.index === props.selectedIndex;
  return (
    <div
      className={`flex items-center cursor-pointer mx-1 p-2 py-3 ${
        isSelected && "bg-brand-1 text-grey-7 font-medium"
      }`}
      onClick={() => props.onSelect(props.index)}
    >
      <div
        className={`rounded-full w-4 h-4 border transition ${
          isSelected && "border-4 border-sky-500 bg-sky-300"
        } `}
      />
      {props.children}
    </div>
  );
};

export default Option;