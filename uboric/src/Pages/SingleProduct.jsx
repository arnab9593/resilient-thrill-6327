import { Flex, Box, Image, Text, Select, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer"
import { BestSellingProduct } from "../Components/Swiper/Swiper";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
};

const SingleProduct = () => {

    const [qty, setQty] = useState(1)
    const handleInc = () => {
        setQty(qty + 1)
    }

    const handleDec = () => {
        setQty(qty - 1)
    }

    const { id } = useParams();
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        getData(`https://intense-journey-23599.herokuapp.com/api/tshirt/?id=${id}`).then((res) =>
            setProductDetails(res)
        );
    }, [id])

    console.log(productDetails);

    return (
        <>
            <Flex padding="80px">
                <Box border="1px solid white" w="600px" h="500px" key={productDetails.id}>
                    {productDetails && productDetails.map((item) =>
                        <Image src={item.image} h="100%"></Image>
                    )}
                </Box>
                <Box border="1px solid white" w="600px" padding="30px">
                    {productDetails && productDetails.map((item) =>
                        <Box>
                            <Text fontSize="27px" fontWeight="800" >{item.name}</Text>
                            <Text mt="10px" color="#FF6F61" fontSize="25px" fontWeight="500" >₹{item.price}</Text>
                            <Text marginTop="30px">Size</Text>
                            <Select mt="20px" placeholder='Choose An Option' w="250px">
                                <option value='l'>L</option>
                                <option value='m'>M</option>
                                <option value='s'>S</option>
                                <option value='xl'>XL</option>
                                <option value='xxl'>XXL</option>
                            </Select>
                            <Box mt="15px" display="flex" border="1px solid white" width="450px" justifyContent="space-around">
                                <Box mt="10px" display="flex" border="1px solid gray" w="150px" justifyContent="space-between" textAlign="center">
                                    <Button fontSize="20px" mt="8px" backgroundColor="transparent" disabled={qty === 1} onClick={handleDec}>-</Button>
                                    <Text fontSize="25px" mt="10px">{qty}</Text>
                                    <Button fontSize="20px" mt="8px" backgroundColor="transparent" onClick={handleInc}>+</Button>
                                </Box>
                                <Button mt="18px">Add to Cart</Button>
                                <Button mt="18px">Add to Wishlist</Button>
                            </Box>
                            <Text marginTop="20px">Categories: Clothing</Text>
                            <Box marginTop="20px" display="flex" border="1px solid white" width="200px" justifyContent="space-around">
                                <Text ml="-10px" mt="5px">Share: </Text>
                                <Image w="30px" h="30px" src="https://cdn-icons-png.flaticon.com/512/4628/4628653.png" alt="fb"></Image>
                                <Image w="30px" h="30px" src="https://cdn-icons-png.flaticon.com/512/1362/1362857.png" alt="insta"></Image>
                                <Image w="30px" h="30px" src="https://cdn-icons-png.flaticon.com/512/4628/4628695.png" alt="twitter"></Image>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Flex>
            <BestSellingProduct></BestSellingProduct>
            <Footer></Footer>
        </>
    )

}

export default SingleProduct

