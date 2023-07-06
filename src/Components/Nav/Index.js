import React from 'react'
import { Link } from "react-router-dom";
{/*import images*/}

function Nav() {

  return (
    <div>
    <header>
        <nav class="wrapper">
            <Link to="/Process">Process</Link>  
            <Link to="/Gallery">Gallery</Link>
        </nav>
    </header>
    </div>
  )
}

export default Nav