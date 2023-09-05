/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;
    return(
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input 
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputForm;