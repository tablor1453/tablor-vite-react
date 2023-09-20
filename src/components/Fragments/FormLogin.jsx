import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => 
{
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    // console.log(event.target.username.value)
    if(!event.target.username.value) {
      console.log('Email harus diisi');
      return;
    }

    if(!event.target.password.value) {
      console.log('Password harus diisi');
      return;
    }

    // localStorage.setItem('email', event.target.email.value);
    // localStorage.setItem('password', event.target.password.value);
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }

    login(data, (status, res) => {
      if(status) {
        console.log(res);
        localStorage.setItem('token', res);
        window.location.href = "/products";
      }else{
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });

  };

  const usernameRef = useRef(null);
  useEffect(() => {
    // console.log(usernameRef);
    usernameRef.current.focus();
  }, []);

  return(
      <form onSubmit={handleLogin}>
        <InputForm
          label="Username"
          type="text"
          placeholder="Jhon Doe"
          name="username"
          ref={usernameRef}
        />
        <InputForm 
          label="Password"
          type="password"
          placeholder="xxxxxxxxxxxxxx"
          name="password"
        />
        <Button customclass="bg-blue-700 w-full" type="submit" >Login</Button>
        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        {/* <Button customclass="bg-blue-700 w-full" onClick={() => console.log('polos')} >Test</Button>
        <Button customclass="bg-blue-700 w-full" >Cik Test</Button> */}
      </form>
  );
}

export default FormLogin;