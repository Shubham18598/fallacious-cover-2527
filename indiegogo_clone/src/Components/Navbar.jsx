import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Modal from 'react-bootstrap/Modal';
import Login from '../Pages/Login';
import { AppContext } from '../Context/AppContext';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const {logoutUser,isAuth}=useContext(AppContext)
    const handleLogout=()=>{
        logoutUser()
      }

    return (

        <div className='navbar1'>
            <Link to="./"><img width="100px" src="http://jazznightsfilm.com/wp-content/uploads/2021/03/indiegogo-inc-logo-vector.png" alt="" /></Link>
            <div className="dropdown " style={{ paddingTop: "8px"}} >
                <button  className="btn btn-secondary dropdown-toggle bg-white text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                </button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="tech&inovation">Tech & Inovation</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
            </div>
            <Link className='nav3' to="./ourtop10finds"><b>Our Top 10 Finds</b></Link>
            <Link className='nav3' to="./teamfavorites"><b>Team Favorites</b></Link>
            <Link className='nav3' to="./startacampaign"><b>Start a Campaign</b></Link>
            <Link className='nav3' to="./whatwedo"><b>What We Do</b></Link>
           {isAuth?(<b onClick={handleLogout} className='nav3'>SignOut</b>) : (<div className='nav3' ><b>
                <div className='mo'>
                    <Link className='modal-tag' variant="secondary" onClick={handleShow}>
                        Sign In
                    </Link>

                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h4>Welcome back!</h4>
                                <h5>Log in to continue.</h5>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='mo-body'>

                            <Login handleClose={handleClose} />

                        </Modal.Body>
                    </Modal>

                </div>
            </b></div>)}
            
        </div>

    )
}

export default Navbar