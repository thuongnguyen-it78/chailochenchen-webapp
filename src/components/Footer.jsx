import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/logo.jpg'

const footerAboutLinks = [
    {
        display: "Facebook",
        path: "/about"
    },
    {
        display: "Shopee",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Địa chỉ",
        path: "/about"
    },
]

const footerCustomerLinks = [
    {
        display: "Chai nhựa",
        path: "/about"
    },
    {
        display: "Hộp đựng sữa chua",
        path: "/about"
    },
    {
        display: "Hộp làm bánh flan",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Điện thoại
                        </div>
                        <div className="footer__content">
                            <p>
                                Hotline: 0379.031.479
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về  CHAI LỌ CHENCHEN
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về sản phẩm
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                        Chuyên cung cấp SỈ & LẺ CHAI NHỰA CÁC LOẠI.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
