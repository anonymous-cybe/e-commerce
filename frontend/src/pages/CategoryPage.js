import axios from "axios";
import { useEffect, useState } from "react";

function CategoryPage(props) {
    const categoryId = props.match.params.id;
    const [category, setCategory] = useState("");

    async function getCategory(categoryId) {
        const { data } = await axios.get(`http://localhost:5000/categories/${categoryId}`);
        setCategory(data);
        console.log(data)
    }

    useEffect(() => {
        getCategory(categoryId);
    }, [categoryId])

    return <>
        <div className="product-page">

            {category && <>
                <div className="product-details text-light">
                    <h1>{category.name}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis similique minima adipisci eveniet, doloremque at.</p>
                </div>
            </>}

        </div>
    </>
}

export default CategoryPage;