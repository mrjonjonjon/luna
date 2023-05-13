import Bg from '../BackgroundCollage/BackgroundCollage.js';
import { Outlet,Link } from 'react-router-dom';

import './NavBar.css'
function NavBar(){
    return  <>
                <nav className="navbar">
                <img className='logo' src="https://web.archive.org/web/20180715011034im_/http://l-u-n-a.com/img/luna-logo.png"/>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/music">Music</Link>
            <Link to='/photos'>Photos</Link>
            <Link to="/concerts">Concerts</Link>
            {/*<Link to='/vlogs'>Vlogs</Link>*/}
            <Link className='fb'></Link>
            <Link className='twitter'></Link>
            <Link to='https://www.unicefusa.org/stories/unicef-spilno-centers-are-refuge-children-ukraine?form=23-Ukraine-1-year&gclid=CjwKCAjw0N6hBhAUEiwAXab-Tekp3N4fLwKCa_XAOp3J_SsQBD47HcI6U5DNMz-RvFjLLbcf7BPB3hoCHt0QAvD_BwE' className='donate-button' target="_blank">Donate</Link>
            
            </nav>

         
 </>
}


export default NavBar;