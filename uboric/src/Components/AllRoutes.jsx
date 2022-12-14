import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Shop from "../Pages/Shop";
import Categories from "../Pages/Categories";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";
import Tshirt from "../Pages/Tshirt";
import SingleProduct from "../Pages/SingleProduct";

const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutUs></AboutUs>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/tshirt" element={<Tshirt></Tshirt>}></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path='/tshirt/:id' element={<SingleProduct></SingleProduct>}></Route>
        </Routes>
    )

}

export default AllRoutes