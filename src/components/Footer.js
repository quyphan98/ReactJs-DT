import React from "react";
import "./style.css";

const Footer = () => {
    return (
        <section className="Footer-JS">
            <hr className="w-100 bg-danger" style={{ height: '1px' }} />
            <section className="container">
                <div className="row py-4">
                    <div className="col-sm-12">
                        <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.178358006192!2d106.65379951480102!3d10.797647792307124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529343ba430cb%3A0xb6aeea274dc8469a!2zMzkwIEhvw6BuZyBWxINuIFRo4bulLCBQaMaw4budbmcgNCwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1553068037554" width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div>
            </section>
            <section className="container pb-5">
                <div className="row">
                    <div className="col-sm-3 d-flex mx-auto">
                        <i className="vchuyen fas fa-shipping-fast" />
                        <span className="textspan">MIỄN PHÍ VẬN CHUYỂN
              </span>
                    </div>
                    <div className="col-sm-3 d-flex mx-auto">
                        <i className="vchuyen fas fa-shield-alt" />
                        <span className="textspan">THANH TOÁN BẢO MẬT
              </span>
                    </div>
                    <div className="col-sm-3 d-flex mx-auto">
                        <i className="vchuyen fas fa-headset" />
                        <span className="textspan">HỔ TRỢ 24/7
              </span>
                    </div>
                    <div className="col-sm-3 mx-auto "><span className="lh text-center">LIÊN HỆ VỚI CHÚNG TÔI</span><br />
                        <i className="icon1 fab fa-facebook-square pt-2 pr-2 flex-column">

                        </i>
                        <i className="icon2 fab fa-instagram text-dark pr-2">

                        </i>
                        <i className="icon3 fab fa-viber pr-2">

                        </i>
                        <i className="icon4 far fa-envelope">

                        </i>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="w-50 float-right" src={require("../images/45.jpg")} alt="#" />
                        </div>
                        <div className=" col-sm-6 float-right pt-5">
                            <h3>© 2018 All Right Reserved By AORUS</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
export default Footer;