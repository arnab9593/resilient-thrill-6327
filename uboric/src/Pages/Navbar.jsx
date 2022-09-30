import { json, Link } from "react-router-dom"
import "../Pages/CSS/Navbar.css"
import React, { useState } from "react"
import Shop from "./Shop"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Image,
    Alert
} from '@chakra-ui/react'



const links = [
    { path: "/", title: 'Home ' },
    { path: "/about", title: 'About Us' },
    { path: "/shop", title: 'Shop' },
    { path: "/tshirt", title: 'Categories' },
    { path: "/contactus", title: 'Contact Us' }

]
const customerDetail = JSON.parse(localStorage.getItem("userData")) || []
const checkLogin = JSON.parse(localStorage.getItem("loginStatus")) || []

const Navbar = () => {

    const [text, setText] = React.useState({
        email: "",
        passwd: "",
        conPasswd: "",
    })

    const handleChange = (e) => {
        const { value, name, type } = e.target;
        // const newValue = name === "passwd" && "conPasswd" === "passwd" ? value : console.log("Password missmatched")

        setText({ ...text, [name]: value })
    }

    const [user, setUser] = React.useState(customerDetail)

    const signupUser = () => {
        setUser([...user, text])
        setText({
            email: "",
            passwd: "",
            conPasswd: "",
        })
    }

    React.useEffect(() => {

        localStorage.setItem("userData", JSON.stringify(user))

    }, [user])

    // console.log(user);

    const [login, setLogin] = useState([])

    const handleLogin = (e) => {
        const { value, name } = e.target;
        // console.log(value);
        setLogin({ ...login, [name]: value })
    }
    // console.log(login);

    const [True, setTrue] = useState(checkLogin)
    React.useEffect(() => {
        localStorage.setItem("loginStatus", JSON.stringify(True))
    }, [True])
    console.log(True);
    const loginUser = () => {
        let flag = false;
        customerDetail.map((data) => {
            if (data.email === login.username && data.passwd === login.password) {
                console.log("true");
                flag = true;
                return <Shop />
                // <Home></Home>
                // alert("Login Sucessful")

            }
            else {
                flag = false;
            }
        })
        if (flag) {
            alert("Login Sucessful")
            setTrue(flag)
        }
        else {
            alert("Incorrect Credentials")
            setTrue(flag)
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <div className="firstchild_nav">
                <p> FOR ONLINE PAYMENT EXTRA ₹5% DISCOUNT ON ORDERS ABOVE ₹500</p>
            </div>
            <div className="secondchild_nav">
                <div className="secondchild_nav_img">
                    <Link to="/"> <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png" alt="" /></Link>
                </div>
                <div className="secondchild_nav_allCat">
                    {links.map((link) => (
                        <Link className="secondchild_nav_allCat_link" key={link.path} to={link.path}>{link.title}</Link>
                    ))}
                </div>
                <div className="secondchild_nav_profiles">
                    <img src="https://cdn-icons-png.flaticon.com/512/2811/2811806.png" alt="search" />
                    <Image src="https://cdn-icons-png.flaticon.com/512/2207/2207595.png" onClick={onOpen}></Image>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader borderBottomWidth='1px'>Sign in</DrawerHeader>

                            <DrawerBody>
                                <Input placeholder='Username' name="username" value={login.username} onChange={handleLogin} />
                                <Input placeholder='Password' name="password" value={login.password} onChange={handleLogin} />
                                <Button onClick={() => loginUser()} >Sign In</Button>
                            </DrawerBody>
                            <DrawerBody>
                                <Input placeholder='Username' name="email" value={text.email} onChange={handleChange} />
                                <Input placeholder='Password' name="passwd" value={text.passwd} onChange={handleChange} />
                                <Input placeholder='Confirm Password' name="conPasswd" value={text.conPasswd} onChange={handleChange} />
                                <Button onClick={() => signupUser()}>Sign Up</Button>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    <img src="https://cdn-icons-png.flaticon.com/512/535/535285.png" alt="wishlist" />
                    <img src="https://cdn-icons-png.flaticon.com/512/3034/3034002.png" alt="cart" />
                </div>

            </div>
        </>
    )
}

export default Navbar
