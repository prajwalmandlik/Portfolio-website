import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__cantainer container">
                <h1 className="footer__title">Prajwal</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">
                            services
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/prajwalmandlik7/"
                        className="footer__social-link"
                    >
                        <i class="uil uil-instagram"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/prajwal-mandlik-55863a234"
                        className="footer__social-link"
                    >
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/prajwalmandlik" className="footer__social-link">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">Thanks for seeing my website.,<br />
Designed by Prajwal Mandlik with the help of &#169;crypticalcoder</span>
            </div>
        </footer>
    );
};

export default Footer;
