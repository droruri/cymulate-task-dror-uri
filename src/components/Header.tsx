import logo from "../cymulate-logo.png";
import React from "react";

export function Header() {
    return (
        <header className="contact-us-header">
            <img src={logo} alt="logo" className="image-separator"/>
            <span className="contact-us-header-button">Products</span>
            <span className="contact-us-header-button">What's in it for you?</span>
            <span className="contact-us-header-button">Resources</span>
            <span className="contact-us-header-button">Company</span>
            <span className="contact-us-header-button">Partners</span>
            <button type="submit" className="contact-us-button contact-us-button-blue">Get Started</button>
        </header>
    )
}