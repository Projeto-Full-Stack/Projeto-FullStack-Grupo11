import React, { useState } from "react";
import Option from "./option";
import { Text } from "../typography/text.components";

interface IProps {
  options: React.ReactElement[];
  onChange?: (selectedIndex: number) => void;
  value?: number;
  labelText?: string;
}
const RadioGroup = ({ options, onChange, value, labelText }: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(value);
  function onSelect(index: number) {
    setSelectedIndex(index);
    onChange && onChange(index);
  }
  return (
    <div>
      { <Text weight={500} type="b2">{`${labelText}`}</Text> && (
        <label className="block text-gray-600 mb-2 text-xs lg:text-sm xl:text-base">
          {labelText}
        </label>
      )}
      <div className="flex justify-evenly">
        {options.map((el, index) => (
          <Option
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            onSelect={(index) => onSelect(index)}
          >
            {el}
          </Option>
        ))}
      </div>
    </div>
  );
};
export default RadioGroup;