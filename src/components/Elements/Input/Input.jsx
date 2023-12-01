import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {

    // eslint-disable-next-line no-unused-vars
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { type, name, placeholder } = props;
    return (
        <input
            type={type}
            name={name}
            id={name}
            className={`text-sm border border-slate-700 rounded w-full py-2 px-3 text-slate-700 ${isDarkMode ? 'placeholder: bg-white' : 'placeholder: opacity-50'}`}
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default Input;