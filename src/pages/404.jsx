import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();

    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold text-blue-600 mb-3">Oops!</h1>
            <p>Sory, an unexpected error has occured.</p>
            <p className="font-bold">{error.statusText || error.message}</p>
        </div>
    );
}

export default ErrorPage;