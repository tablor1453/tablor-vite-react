import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const fullnameRef = useRef(null);
  useEffect(() => {
    fullnameRef.current.focus();
  }, []);
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Insert your name..."
        name="fullname"
        ref={fullnameRef}
      />
      <InputForm
        label="Email"
        type="text"
        placeholder="exammple@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="**********"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="**********"
        name="confirm-password"
      />
      <Button customclass="bg-blue-700 w-full hover:bg-blue-600">Register</Button>
    </form>
  );
}

export default FormRegister;