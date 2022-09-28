import { Link } from "react-router-dom"

const links = [
    { path: "/", title: 'Home ' },
    { path: "/about", title: 'About Us' },
    { path: "/shop", title: 'Shop' },
    { path: "/categories", title: 'Categories' },
    { path: "/contactus", title: 'Contact Us' }

]

const Navbar = () => {
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
                    <img src="https://cdn-icons-png.flaticon.com/512/2207/2207595.png" alt="profile" />
                    <img src="https://cdn-icons-png.flaticon.com/512/535/535285.png" alt="wishlist" />
                    <img src="https://cdn-icons-png.flaticon.com/512/3034/3034002.png" alt="cart" />
                </div>
            </div>
        </>
    )
}

export default Navbar
