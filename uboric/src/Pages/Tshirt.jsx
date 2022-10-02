import { Box, Button, Flex, Grid, GridItem, Heading, Menu, MenuButton, MenuItem, MenuList, Text, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/Tshirt.css"
import Footer from "./Footer"
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Tshirt = () => {

    const getData = () => {
        return axios.get(`https://intense-journey-23599.herokuapp.com/api/tshirt`)
    }

    const getDataAscDsc = (params = {}) => {
        return axios.get(`https://intense-journey-23599.herokuapp.com/api/tshirt`, {
            params: {
                _sort: params.sort,
                _order: params.order
            }
        }

        )
    }


    const [data, getDataFromApi] = useState([])

    useEffect(() => {
        getData().then((res) => getDataFromApi(res.data))
    }, [])


    const ascending = () => {
        getDataAscDsc({ sort: "price", order: "asc" }).then((res) => getDataFromApi(res.data))

    }

    const descending = () => {
        getDataAscDsc({ sort: "price", order: "desc" }).then((res) => getDataFromApi(res.data))
    }

    return (
        <div>
            <Flex >
                <Sidebar />
                <Box>
                    <Box display="flex" justifyContent="space-between" marginBottom="20px" mt="30px">
                        <Heading ml="180px">T-shirts</Heading>
                        <Select placeholder='Default' w="250px" >
                            <option value='default_sorting'>Default Sorting</option>
                            <option value='sort_by_popularity'>Sort by popularity</option>
                            <option value='sort_by_average_rating'>Sort by average rating</option>
                            <option value='sort_by_latest'>Sort by latest</option>
                            <option value='sort_by_lth' onClick={() => ascending()}>Sort by price: low to high</option>
                            <option value='sort_by_htl' onClick={() => descending()}>Sort by price: high to low</option>
                        </Select>
                    </Box>
                    <Grid templateColumns="repeat(3,1fr)" gap="10px" w="900px" textAlign="center" ml="10px" border="1px solid white" padding="20px">
                        {data.map((item) => (
                            <Link to={`/tshirt/${item.id}`}>
                                <GridItem key={item.id} border="1px solid white" className="imgHover" >
                                    <Box w="full" >
                                        <img width="300px" height="300px" src={item.image}></img>
                                    </Box>
                                    <Text>{item.name}</Text>
                                    <Text>₹{item.price}</Text>
                                </GridItem>
                            </Link>
                        ))}
                    </Grid>
                </Box>

            </Flex>
            <Footer></Footer>
        </div>
    )
}

export default Tshirt
