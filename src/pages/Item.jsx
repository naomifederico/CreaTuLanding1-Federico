import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router";
import { getProductById } from "../service/products.service";

const Item = () => {
   
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!id) return;

        getProductById(id)
            .then((res) => setProduct(res.data))
            .catch((error) => console.error(error)).finally(() => setLoading(false));
    }, [id]);

    return <ItemDetailContainer product={product} />;
};

export default Item;