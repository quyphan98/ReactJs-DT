import React from "react";
import "./style.css";

const Carousel = () => {
    return (
        <section className="carousel">
            <div
                id="demo"
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                    <li data-target="#demo" data-slide-to={3} />
                    <li data-target="#demo" data-slide-to={4} />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="mx-auto d-block"
                            src={require("../images/banner1.png")}
                            alt="Los Angeles"
                        />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../images/banner2.jpg")} width="100%" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../images/banner3.jpg")} width="100%" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../images/banner4.jpg")} width="100%" alt="Los Angeles" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../images/banner5.png")} width="100%" alt="Los Angeles" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        </section>
    );
};
export default Carousel;
