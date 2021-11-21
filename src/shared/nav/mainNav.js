import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import './mainNav.css'
import Button from '../form/button'
const MainNav = props => {
    const [click , setClick] = useState(false);
    const [button , setbutton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = ( ) => setClick(false);

    const showButton =() => {
        if(window.innerWidth <=960){
            setbutton(false);

        }else{
            setbutton(true);
        }
    }

    window.addEventListener('resize' , showButton);
    return(
        <>
        
        
        <nav className="navbar" >
            <div className="navbar-container">
                <Link to="/" className="logo">
               WishSend <i className="fa fa-bandcamp" aria-hidden="true"></i>
                </Link>
            </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
           
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to = "/" className="nav-links" onClick={closeMenu}>Guide</Link></li>
                    <li className="nav-item "><Link to = "/b-day" className="nav-links" onClick={closeMenu}>Birthdays</Link></li>
                    <li className="nav-item "><Link to = "/ann-day" className="nav-links" onClick={closeMenu}>Anniversary</Link>

                </li>
            </ul>
            
        </nav>
        </>
    )
}

export default MainNav