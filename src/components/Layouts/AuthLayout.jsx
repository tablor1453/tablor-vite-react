import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
    const {children, title, type} = props;
    return(
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slat-500 mb-8">
                    Welcome, please enter your details.
                </p>
                {children}
                <p className="text-sm mt-3">
                    {type === 'login' ? `Don't have an account? ` : `Already have an account? `}
                    {type === 'login' && (
                        <Link to="/register" className="font-bold text-blue-600">
                            Sign up
                        </Link>
                    )}
                    {type === 'register' && (
                        <Link to="/login" className="font-bold text-blue-600">
                            Sign in
                        </Link>
                    )}
                </p>
            </div>
        </div>
    );
}

export default AuthLayout;