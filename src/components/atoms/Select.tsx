import React from "react";

interface Option {
    label: string;
    value: string | number;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
    return (
        <select {...props}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;