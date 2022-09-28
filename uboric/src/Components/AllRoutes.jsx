import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Shop from "../Pages/Shop";
import Categories from "../Pages/Categories";
import ContactUs from "../Pages/ContactUs";
import SignIn from "../Pages/SignIn";

const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutUs></AboutUs>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/categories" element={<Categories></Categories>}></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
        </Routes>
    )

}

export default AllRoutes