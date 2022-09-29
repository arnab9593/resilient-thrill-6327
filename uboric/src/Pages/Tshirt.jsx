import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/Tshirt.css"


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
            <div className="tshirt_firstDiv">
                <Text className="text">T-shirts</Text>
                <Menu >
                    <MenuButton as={Button} className="filter" borderRadius="0">
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </div>
            <div className="container">
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={item.image}></img>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Tshirt
