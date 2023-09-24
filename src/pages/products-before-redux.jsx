/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";



const ProductsPage = () => 
{
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalPriceRef = useRef([null]);
    const [products, setProduct] = useState([]);
    const username = useLogin();

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        getProducts((data) => setProduct(data));
    }, [cart]);

    
    useEffect(() => {
        if(products.length > 0 && cart.length > 0){
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        }else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

    const handlerAddToCard = (id) => {
        if(cart.find(item => item.id === id)) return setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1 } : item));
        return setCart([...cart, {id, qty: 1}]);
    }

    const resetCart = () => {
        setCart([]);
        setTotalPrice([0]);
        localStorage.removeItem("cart");
        
    };

    return(
        <Fragment>
            <div className="flex justify-end h-14 bg-blue-600 text-white items-center px-5">
                Welcome, {username}
                <Button customclass="ms-5 bg-yellow-400 px-4" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} alt={product.title} id={product.id} />
                            <CardProduct.Body name={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer 
                                price={product.price} 
                                id={product.id}
                                handlerAddToCard={handlerAddToCard}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-300">Cart</h1>
                    <table className="my-4">
                        <thead>
                            <tr className="text-left">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return ((product) ?
                                    <tr key={item.id}>
                                        <td className="pe-4">{product.title.substring(0, 20)} ...</td>
                                        <td className="pe-4">
                                            ${" "}
                                            {product.price.toLocaleString("id-ID", {styles: "currency", currency: "USD"})}
                                        </td>
                                        <td className="pe-10">
                                            {item.qty}
                                        </td>
                                        <td className="pe-4">$ {(item.qty * product.price).toLocaleString("id-ID", {styles: "currency", currency: "USD"})} </td>
                                    </tr>
                                :
                                ""
                                );
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3} className="pt-5">
                                    <b>
                                        Total Price
                                    </b>
                                </td>
                                <td  className="pt-5">
                                    <b>
                                        ${" "}
                                        {(totalPrice).toLocaleString("id-ID", {styles: "currency", currency: "USD"})}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button onClick={resetCart}>Reset Cart</Button>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductsPage;