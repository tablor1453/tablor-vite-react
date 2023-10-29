import { useLogin } from "../hooks/useLogin";

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const username = useLogin();
  return (
    <>
      Home Page
    </>
  )
}

export default HomePage;