import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Homepage </Link> </li>
                    <li><Link to="/users"> Users</Link></li>
                    <li><Link to="/pessoas"> Pessoas</Link> </li>
                    <li id="about"><Link to="/about"> About </Link></li>
                </ul>
            </nav>
        </header>
    )
}
