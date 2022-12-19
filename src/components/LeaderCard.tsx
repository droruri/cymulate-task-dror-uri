import React from "react";
import logo from "../Group-1074-1.png";

export function LeaderCard() {
    return (
        <div className="leader-background">
            <img className="leader-photo" width={118} height={118} src={logo} alt="logo"/>
            <span className="bold-text">Name Name</span>
            <span>Role Role</span>
        </div>
    )
}