import Bg from './bg.js';
import { Outlet,Link } from 'react-router-dom';
import './Header.css';
function NavBar(){
    return  <>
                <nav className="navbar">
                <div className="logo"></div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
            <Link to='/photos'>Photos</Link>
            <Link to="/concerts">Concerts</Link>
            {/*<Link to='/vlogs'>Vlogs</Link>*/}
            <Link to='https://www.unicefusa.org/stories/unicef-spilno-centers-are-refuge-children-ukraine?form=23-Ukraine-1-year&gclid=CjwKCAjw0N6hBhAUEiwAXab-Tekp3N4fLwKCa_XAOp3J_SsQBD47HcI6U5DNMz-RvFjLLbcf7BPB3hoCHt0QAvD_BwE' className='donate-button' target="_blank">Donate</Link>
            </nav>

         
 </>
}


export default NavBar;