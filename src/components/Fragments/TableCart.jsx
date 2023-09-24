/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Elements/Button";
import { resetCart } from "../../redux/slices/cartSlice";

const TableCart = (props) => {
    const dispatch = useDispatch();
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);
    const totalPriceRef = useRef([null]);

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

    return(
        <>
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
            {/* <Button onClick={resetCart}>Reset Cart</Button> */}
            <Button onClick={() => dispatch(resetCart())}>Reset Cart</Button>
        </>
    );
}

export default TableCart;