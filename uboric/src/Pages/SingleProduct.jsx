import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {

    const getData = (url) => {
        return fetch(url).then((res) => res.json())
    }

    const { products_id } = useParams();

    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        getData(`https://intense-journey-23599.herokuapp.com/api/tshirt?id=${products_id}`).then((res) => {
            setProductDetails(res)
            // console.log(res.id);
        }
        ).catch((err) => {
            console.log(err);
        })

    }, [products_id])
    console.log(productDetails[0]);

    return (
        <div key={productDetails.id} >
            {productDetails && productDetails.map((item) =>
                <div>
                    <img src={item.image} alt="error"></img>
                    <p></p>
                </div>

            )}
        </div>

    )

}

export default SingleProduct

