import Bg from '../BackgroundCollage/BackgroundCollage.js';
import { Outlet,Link } from 'react-router-dom';
import './About.css';
import backgroundimage from '../../images/luna-1.webp';
function About(){
    return  <>
                <div className='about-body'>
                   {/* <div className='about-row'>*/}
                            <img src={backgroundimage}/>
                    {/*</div>*/}
                    <div className='about-content'>
                        <div className='quote-wrapper'>
                        <blockquote>the Face of Ukraine’s Musical Revolution </blockquote>
                    </div>
                    

                    <div className='bio-text'>
                            <p>
                                “Luna” («Луна») is the musical group of the singer Kristina Gerasimova, est. in Kiev, Ukraine in 2015 on the independent label Luna Prod.
                            </p>

                            <p>
                                Vogue magazine has called Luna as the face of Ukrainian musical revolution. The style of the project is defined by the performers as "soulful pop", most critics say that the electronic sound of the project is related to the pop music culture of 90s and 00s. Collective is characterized by its intellectual texts and music, and the project's videos are interesting for their DIY aesthetics, as far as they are often taken with a VHS camera in a characteristic eclectic deconstructivism manner using experimental digital technologies.
                            </p>
                            <p>
                            Kristina Gerasimova is a bright and unique icon of her own style, the interest in which is shown by the main fashion magazines. The group actively gives live shows for big clubs in the CIS and beyond, performs at music festivals. Project's clips are constantly rotated on TV and gain millions of views on YouTube, and the songs are played on various radio stations. The project is popular among listeners from the USA, Europe, Australia, Israel, Canada, and the singer's albums are in the top 3 best albums, according to the charts of the CIS countries.
                            </p>
                    </div>
            
                
                </div>
                    </div>
                    
   
                
            </>
}


export default About;