import { Box, Button, Flex, Grid, GridItem, Heading, Menu, MenuButton, MenuItem, MenuList, Text, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/Tshirt.css"
import Footer from "./Footer"
import Sidebar from "./Sidebar";


const getData = () => {
    return axios.get("https://intense-journey-23599.herokuapp.com/api/tshirt")
}

const Tshirt = () => {

    const [data, getDataFromApi] = useState([])

    useEffect(() => {
        getData().then((res) => getDataFromApi(res.data))
    }, [])



    return (
        <div>
            <Flex >
                <Sidebar />
                <Box>
                    <Box display="flex" justifyContent="space-between" marginBottom="20px" mt="30px">
                        <Heading  ml="180px">T-shirts</Heading>
                        <Select placeholder='Default' w="250px">
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                    <Grid templateColumns="repeat(3,1fr)" gap="10px" w="900px" textAlign="center" ml="10px" border="1px solid white" padding="20px">
                        {data.map((item) => (
                            <GridItem key={item.id} border="1px solid white" >
                                <Box w="full">
                                    <img width="300px" height="300px" src={item.image}></img>
                                </Box>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </GridItem>

                        ))}
                    </Grid>
                </Box>

            </Flex>
            <Footer></Footer>
        </div>
    )
}

export default Tshirt
