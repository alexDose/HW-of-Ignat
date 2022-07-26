import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div>
            // add NavLinks
            <nav>
                <div>
                    <NavLink to={'/*'}>error</NavLink>
                </div>
                <div>
                    <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
