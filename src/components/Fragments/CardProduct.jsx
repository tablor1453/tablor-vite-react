/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
    const { children } = props;
    return(
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between">
            {children}
        </div>
    );
}

const Header = (props) => {
    const { image, alt, id } = props;
    return(
        <Link to={`/product/${id}`}>
            <img src={image} alt={alt} className="p-5 rounded-t-lg h-60 w-full object-cover" />
        </Link>
    );
}

const Body = (props) => {
    const { children, name } = props;
    return(
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name.substring(0, 30)} ...
                </h5>
            </a>
            <p className="text-m text-white">
                {children.substring(0, 100)} ...
            </p>
        </div>
    );
}

const Footer = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { price, id } = props;
    const dispatch = useDispatch();
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">USD {price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD' })}</span>
            <Button customclass="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
                Add To Cart
            </Button>
        </div>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;