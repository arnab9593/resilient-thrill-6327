import { Link } from "react-router-dom"
import Slider from "../Components/Slider/Slider"
import "../Pages/CSS/Homepage.css"
import { NewArrivals, SwiperFunc } from "../Components/Swiper/Swiper"
import { BestSellingProduct } from "../Components/Swiper/Swiper"
const Home = () => {
    return (
        <>
            <div className="hm_fstDiv">
                <Slider></Slider>
                <div className="hp_secondDiv">
                    <div>
                        <img src="https://www.uboric.com/wp-content/uploads/2022/08/61OR0aPLJAL._SL1500_-670x575.jpg" alt="" />
                        <h2 class="txtOnimg1">Kitchen</h2>
                        <h3 class="txtOnimg2">Tools</h3>
                    </div>
                    <div>
                        <img src="https://image.made-in-china.com/318f0j00IafGJvNgYPre/video.jpg" alt="" />
                        <h2 class="txtOnimg3">Air Tight</h2>
                        <h3 class="txtOnimg4">Containers</h3>
                    </div>
                    <div>
                        <img src="https://colorlib.com/cdn-cgi/image/width=1200,height=800,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/skin-care-WordPress-themes.jpg" alt="" />
                        <h2 class="txtOnimg5">Health & Personal Care</h2>
                    </div>
                </div>
                <div className="hp_shopByCat">
                    <h2>Shop By Category</h2>
                    <Link to='/' className="hp_shopByCat_link">Clothing</Link>
                    <SwiperFunc></SwiperFunc>
                </div>
                <div className="hp_fourDiv">
                    <div>
                        <p class="txtOn_hpfour1">Bathroom Accessories</p>
                        <img src="https://www.thespruce.com/thmb/qkmtQZFjNVUysd60GF49V7hag0A=/2048x1152/smart/filters:no_upscale()/fancy-bathroom-ideas-4325947-hero-4777bf14fe2b447b86a21e8a64194c29.jpg"></img>
                    </div>
                    <div>
                        <p class="txtOn_hpfour2">Electric Appliances</p>
                        <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cm9uaWN8ZW58MHx8MHx8&w=1000&q=80"></img>
                    </div>
                    <div>
                        <p class="txtOn_hpfour3">Clothing</p>
                        <img src="https://www.thespruce.com/thmb/C40zkQAdm6bfDAwcA4KdEmfVGnQ=/3000x1687/smart/filters:no_upscale()/storing-your-clothes-without-a-closet-2648456-001-cfe0a333273b4b66a56ce1e65e7a9643.jpg"></img>
                    </div>
                    <div>
                        <p class="txtOn_hpfour4">Jewellery</p>
                        <img src="https://www.krishnajewellers.com/blog/wp-content/uploads/2021/07/RV_10-1100x734.jpg"></img>
                    </div>
                </div>

                <BestSellingProduct></BestSellingProduct>
                <NewArrivals></NewArrivals>
            </div>
        </>
    )
}

export default Home
