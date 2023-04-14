import Bg from './bg.js';
import { Outlet,Link } from 'react-router-dom';
import './Header.css';
import NavBar from './NavBar.js';
function Header(){
    return  <>
              <NavBar/>

            <div className="head-container">
            <Bg/>
                <img src="/images/7066.jpeg"  alt="luna" height="100%"/>
            
                <h1 className="text-overlay">ЛУНА</h1>
                <h1 className='by-line'><li>Photographer</li> <li>Singer</li><li>Model</li></h1>
            </div>
            <Outlet />
 </>
}


export default Header;