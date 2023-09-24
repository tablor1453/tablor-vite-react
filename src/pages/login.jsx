import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import { useLogin } from "../hooks/useLogin";

const LoginPage = () => {
    const userLogin = useLogin();
    return(
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    );
}

export default LoginPage;