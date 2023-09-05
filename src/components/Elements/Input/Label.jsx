/* eslint-disable react/prop-types */
const Label = (props) => {
    const { htmlfor, children } = props;
    return(
        <label 
            htmlFor={htmlfor} 
            className="block text-slate-700 tetx-sm font-bold mb-2"
        >
            {children}
        </label>
    );
}

export default Label;