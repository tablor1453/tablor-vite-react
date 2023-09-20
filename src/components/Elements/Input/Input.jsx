import { forwardRef } from "react";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/display-name
const Input = forwardRef((props, ref) => {
    const { type, name, placeholder } = props;
    return(
        <input 
            type={type}
            name={name}
            id={name}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" 
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default Input;