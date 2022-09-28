import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (

        <div className='navbar1'>
            <Link to="./"><img width="100px"  src="http://jazznightsfilm.com/wp-content/uploads/2021/03/indiegogo-inc-logo-vector.png" alt="" /></Link>
            <div className="dropdown " style={{paddingTop:"8px"}} >
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
            </div>
            <Link className='nav3' to="./ourtop10finds"><b>Our Top 10 Finds</b></Link>
            <Link className='nav3' to="./teamfavorites"><b>Team Favorites</b></Link>
            <Link className='nav3' to="./startacampaign"><b>Start a Campaign</b></Link>
            <Link className='nav3' to="./whatwedo"><b>What We Do</b></Link>
            <Link className='nav3' to="./login"><b>Log In</b></Link>
            <Link className='nav3' to="./signup"><b>Sign Up</b></Link>
        </div>

    )
}

export default Navbar

// http://jazznightsfilm.com/wp-content/uploads/2021/03/indiegogo-inc-logo-vector.png