import "../Pages/CSS/Footer.css"


const Footer = () => {
    return (
        <>
            <div className="footer_div">
                <div className="footer_email">
                    <h1>Want style Ideas and Treats?</h1>
                    <input type="text" placeholder="      Enter Email" />
                    <button>Subcribe</button>
                    <hr></hr>
                </div>
                <div className="footer_detailDiv">
                    <div className="footer_logo">
                        <img src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/uboric.png" alt="" />
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAAAD////d3d3p6el0dHTW1tY0NDS3t7fR0dHa2tqVlZXBwcGqqqrMzMwsLCx8fHz5+fmFhYWPj49VVVVnZ2ecnJyxsbGkpKTv7+85OTlGRka7u7s/Pz9hYWFLS0sfHx+MjIwNDQ0XFxe4dxQDAAACY0lEQVR4nO3d23KCMBRAUYsWBcQ7amtbtf//kX3oZRhNIAiZ5Jzu/aw5s6bUVsQwGhEREREREREREREREREREREREf3flkWWhCwr1l59k9VTBC39AavQtp/mvoCT0LK/fB2pURyi3/kBLkOzam28CIvQrFqlF2EWmlVr7EWYhGbVQogQYfgQIkQYPoQIEYZPqDAp94cqz/PqMJ9PizJLjoqEq2L9Yhy6eFUhLHcNYxUIT4vGseKFSdoyVrowbx0rXLhtHytb2HaEihe6AEULHQ5R2cLKbaxcYeI4Vq7wTbuwcB0rVtj8r5oCofuHR1KFTe8mVAhX7mOFCp1fZ8QKO1wwIlTY8Er6Xk3LWS2hQuuQqdvzoxdmlhEfrgtELzyZJ5ydF4heeDBPKPUIL8YBV/cFohea/1h0uOgqeuHEOGCuXtjhsjKhwmeECBEiRIgQIUKECBEi7JT5HXCHAZEJF+ltn8YB949L07N5amTCXlPNV+9pEpqXVCRM1Qt36oUX9ULLGUZFQsuJfkVCy1BFQsv3x/UIr5Yl9QjNV+prEtq2cdAjzNUL9+qFts+99QjH6oW2JRE+VgDhVr3QuqtRZMLpbSfzNy2q0+0DrRvGRCa8z3y+tMMGOEKFms4II0SIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChL0b8N55kQoHvP9hb+HMi3AdkbD9hgMPFZHQD3DAG5H2FXr6EXbaFM+r0LJ15hAN9avYT+jnRrK/bcpx/47mva4Ll+eW3o5QIiIiIiIiIiIiIiIiIiIiIiIiAX0BPL5NLMb8j/cAAAAASUVORK5CYII=" alt="" />
                            <img src="data:image/png;base64,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"></img>
                        </div>
                    </div>
                    <div className="footer_support">
                        <h3>SUPPORT</h3>
                        <h4>About Us</h4>
                        <h4>Contact Us</h4>
                    </div>
                    <div className="footer_shop">
                        <h3>SHOP</h3>
                        <h4>My account</h4>
                    </div>
                    <div className="footer_company">
                        <h3>COMPANY</h3>
                        <h4>Shipping & Returns</h4>
                        <h4>Privacy Policy</h4>
                        <h4>Terms & Conditions</h4>
                    </div>
                    <div className="footer_contact">
                        <h3>CONTACT</h3>
                        <h4>Customer Care</h4>
                        <h4>Contact Support Available</h4>
                        <h4>Mon to Sat : 10:00 Am to 6:00 Pm</h4>
                        <h4>Email</h4>
                        <h4>uboricllp@gmail.com</h4>
                        <h4>Mobile</h4>
                        <h4>+91 97243 82162</h4>
                        <h4>+91 82000 99386</h4>
                    </div>
                </div>

                <div className="footer_lastDiv">
                    <hr></hr>
                    <p>© 2019 – 2022 UBORIC. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
