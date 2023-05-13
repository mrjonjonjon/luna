import BackgroundCollage from '../BackgroundCollage/BackgroundCollage.js';
import { Outlet,Link } from 'react-router-dom';
import './Header.css';
import NavBar from '../NavBar/NavBar.js';
import portrait from '../../images/7066.jpeg'
function Header(){
    return  <>
              <NavBar/>

            <div className="head-container">
                <BackgroundCollage/>
                    <img src={portrait} style={{pointerEvents:'none'}} alt="luna" height="100%"/>
                
                    <h1 className="text-overlay" style={{pointerEvents:'none'}}>ЛУНА</h1>
                    <h1 className='by-line'><li>Photographer</li> <li>Singer</li><li>Model</li></h1>
            </div>
         
            
            
                <Outlet />
            
          
 </>
}


export default Header;