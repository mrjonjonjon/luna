import Bg from './bg.js';
import { Outlet,Link } from 'react-router-dom';
import './Header.css';
import NavBar from './NavBar.js';
import AnimatedBg from './AnimatedBg.js';
import SpiralBg from './SpiralBg.js';
function Header(){
    return  <>



              <NavBar/>

            <div className="head-container">
                <Bg/>
                    <img src="/images/7066.jpeg" style={{pointerEvents:'none'}} alt="luna" height="100%"/>
                
                    <h1 className="text-overlay" style={{pointerEvents:'none'}}>ЛУНА</h1>
                    <h1 className='by-line'><li>Photographer</li> <li>Singer</li><li>Model</li></h1>
            </div>
           <SpiralBg/>
            
            
                <Outlet />
            
          
 </>
}


export default Header;