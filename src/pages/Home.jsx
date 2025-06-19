import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer"
import { getAllProducts } from "../service/products.service";


const Home = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products)
        }).catch((error) => console.error(error)).finally(() => setLoading(false));
    }, []);
    return loading ? <>Cargando productos...</> : <ItemListContainer products={products} />;
};

export default Home;
