import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/Darkmode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { total } = useTotalPrice();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);

        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    return (
        <div className="flex justify-end h-14 bg-blue-600 text-white items-center px-5">
            Welcome, {username}
            <Button customclass="ms-5 bg-yellow-400 px-4" onClick={handleLogout}>
                Logout
            </Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md mx-2">
                Item: {totalCart} | Price: $ {total.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
            </div>
            <Button className="bg-gray-800 py-2 px-5 text-white rounded-md" onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light" : "Dark"}
            </Button>

        </div>
    );
}

export default Navbar;