import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data);
        });
    }, [id])

    return (
        <div>
        {Object.keys(product).length > 0 && (
            <div>
                <div>Name: {product.title}</div>
                <div>Price: {product.price}</div>
                <img src={product.image} alt={product.image} width={150} />
                <div>Description: {product.description}</div>
                <div>Rating: {product.rating.rate}</div>
            </div>
        )}
        </div>
    );
}

export default DetailProduct;