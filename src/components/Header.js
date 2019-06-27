import React from "react";
import "./style.css";

const Header = () => {
  return (
    // m chuyển thành jsx chưa r đó m
    <section id="all">
      <div className="contai">
        <nav className="navbar navbar-expand-sm">
          {/* Brand */}
          <a className="navbar-brand" />
          <img
            className="img-logo"
            src={require("../images/45.jpg")}
            alt="df"
          />
          {/* Links */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <i className="icon-toggle fa fa-align-left" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse py-2" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="true">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="true"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Sản Phẩm
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="true">
                    LapTop
                  </a>
                  <a className="dropdown-item" href="true">
                    Main
                  </a>
                  <a className="dropdown-item" href="true">
                    Điện Thoại
                  </a>
                  <a className="dropdown-item" href="true">
                    CPU
                  </a>
                  <a className="dropdown-item" href="true">
                    Card Màn Hình
                  </a>
                  <a className="dropdown-item" href="true">
                    Case
                  </a>
                  <a className="dropdown-item" href="true">
                    Màn Hình
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="true">
                  Liên Hệ
                </a>
              </li>
            </ul>
            <div className="cart">
              <i className="fas fa-shopping-cart" />
              <span>Giỏ Hàng</span>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default Header;
