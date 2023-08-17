import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/protected'>Protected Page</Link></li>
                    <li><Link to='/unprotected'>Unprotected Page</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
