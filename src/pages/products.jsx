/* eslint-disable no-unused-vars */
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
    const [products, setProduct] = useState([]);
    const username = useLogin();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    useEffect(() => {
        getProducts((data) => setProduct(data));
    }, []);

    return (
        <Fragment>
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
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
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-300">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </Fragment>
    );
}

export default ProductsPage;