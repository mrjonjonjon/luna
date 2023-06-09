
import { Outlet,Link } from 'react-router-dom';
import './VideoHeader.css';
import NavBar from '../NavBar/NavBar.js';
function VideoHeader({link}){
    return  <>
               <NavBar/>

                <div className="head-container">
                    <div className='frame-container'>
                   
                        <iframe width="1184" height="666" src={link} title="LUNA - Sparkle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    
                        </iframe>
                      
                    
                
                 
                    </div>
                      <h1 className="text-overlay">ЛУНА</h1>
                
                   
                    <h1 className='by-line'><li>Photographer</li> <li>Singer</li><li>Model</li></h1>
                </div>

              
                                <Outlet/>
             
    
            </>
}


export default VideoHeader;