import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {ContactForm} from "./components/ContactForm";
import {ContactDemo} from "./components/ContactDemo";
import {CompanyLeaders} from "./components/CompanyLeaders";

function App() {
    return (
        <div className="contact-us-page">
            <Header/>
            <div className="contact-us-actions">
                <ContactDemo/>
                <ContactForm/>
            </div>
            <CompanyLeaders/>
        </div>
    );
}

export default App;
