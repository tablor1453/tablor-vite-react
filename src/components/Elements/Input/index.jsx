/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

// eslint-disable-next-line react/display-name
const InputForm = forwardRef((props, ref) => {
    const { label, name, type, placeholder } = props;
    return(
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input 
                name={name}
                type={type}
                placeholder={placeholder}
                ref={ref}
            />
        </div>
    );
});

export default InputForm;