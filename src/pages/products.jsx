/* eslint-disable no-unused-vars */
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "Sate Atichan",
        price: "Rp. 50.000",
        image: "/images/sate.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem id accusantium nesciunt laborum quaerat, aspernatur debitis voluptas aut corporis maxime error natus facilis animi harum cupiditate! Voluptatibus, cupiditate voluptas.",
    },
    {
        id: 2,
        name: "Sate Atichan",
        price: "Rp. 30.000",
        image: "/images/sate.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem id accusantium nesciunt laborum quaerat, aspernatur debitis voluptas aut corporis maxime error natus facilis animi harum cupiditate! Voluptatibus, cupiditate voluptas.",
    },
    {
        id: 3,
        name: "Sate Atichan",
        price: "Rp. 30.000",
        image: "/images/sate.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem id accusantium nesciunt laborum quaerat, aspernatur debitis voluptas aut corporis maxime error natus facilis animi harum cupiditate! Voluptatibus, cupiditate voluptas.",
    },
]

const ProductsPage = () => {
    return(
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} alt={product.name} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    );
}



export default ProductsPage;