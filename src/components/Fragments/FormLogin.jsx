import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return(
        <form action="">
          <InputForm
            label="Email"
            type="text"
            placeholder="exammple@mail.com"
            name="email"
          />
          <InputForm 
            label="Password"
            type="password"
            placeholder="xxxxxxxxxxxxxx"
            name="password"
          />
          <Button classname="bg-blue-700 w-full">Login</Button>
        </form>
    );
}

export default FormLogin;