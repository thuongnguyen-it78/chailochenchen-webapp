import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { mainNav } from "../constants/product";
import { getAll } from "../redux/product/productSlice";

const Header = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        headerRef.current?.classList.add("shrink");
      } else {
        headerRef.current?.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-x"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                {!item.children && (
                  <Link to={item.path} className="header__menu__item__nav">
                    <span>{item.display}</span>
                  </Link>
                )}

                {item.children && (
                  <div to={item.path} className="header__menu__item__nav">
                    <span>{item.display}</span>
                  </div>
                )}

                {item.children && (
                  <div className="header__menu__list-item">
                    {item.children.map((item, index) => (
                      <Link
                        to={`/products?category=${item.category}`}
                        className="header__menu__sub-item"
                      >
                        <span>{item.display}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-user"></i>
                        </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
