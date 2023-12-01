/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Label = (props) => {
    const { htmlfor, children } = props;
    // eslint-disable-next-line no-unused-vars
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    return (
        <label
            htmlFor={htmlfor}
            className={`block ${isDarkMode ? "text-white " : 'text-slate-700'} text-sm font-bold mb-2`}
        >
            {children}
        </label >
    );
}

export default Label;