import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return(
      <form action="">
        <InputForm
          label="Full Name"
          type="text"
          placeholder="Insert your name..."
          name="fullname"
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
        <Button classname="bg-blue-700 w-full">Register</Button>
      </form>
    );
}

export default FormRegister;