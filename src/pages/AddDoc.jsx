import { Button, Input } from "@chakra-ui/react";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../service/config/firebase";

const AddDoc = () => {
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        price: 0.0,
        image: "",
        category: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        const productsCollection = collection(db, "products");
        addDoc(productsCollection, formState)
            .then(({ id }) => {
                console.log(id);
            })
            .catch((e) => console.error(e))
    }
    return <form onSubmit={(e) => handleSubmit(e)}>
        <Input type="text" placeholder="Titulo" onChange={(e) => {
            setFormState({
                ...formState,
                title: e.target.value
            })
        }} />
        <Input type="text" placeholder="Descripcion" onChange={(e) => {
            setFormState({
                ...formState,
                description: e.target.value
            })
        }} />
        <Input type="number" placeholder="Precio" onChange={(e) => {
            setFormState({
                ...formState,
                price: e.target.value
            })
        }} />
        <Input type="text" placeholder="Image" onChange={(e) => {
            setFormState({
                ...formState,
                image: e.target.value
            })
        }} />
        <Input type="text" placeholder="Categoría" onChange={(e) => {
            setFormState({
                ...formState,
                category: e.target.value
            })
        }} />
        <Button type="submit">CREAR</Button>
    </form>;
};

export default AddDoc;
