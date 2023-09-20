/* eslint-disable react/prop-types */
const Button = (props) => {
    const { children, customclass = "bg-black", type = 'button' } = props;

    return(
        <button 
            className={`h-10 px-6 font-semibold rounded-md text-white ${customclass}`}
            type={type}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;