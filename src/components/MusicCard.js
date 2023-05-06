import '../index.css';
import '../App.css';
import './MusicCard.css';
export default function MusicCard(){

    return <>

    
    <div className='music-card'>
                <img src='images/lunamagnets.jpg' style={{alignSelf:'start',height:'100%'}} ></img>
                <div style={{overflow:'scroll', height:'100%', width:'50%'}}>

                    
                        <div style={{ display:'flex', flexFlow:'column', margin:'0px',top:'0px',width:'100%', transform: 'scale(100%)',transformOrigin: 'top left'}}>
                                <iframe src="https://open.spotify.com/embed/track/6clrB2X5SwqG1Qu9UR78i0?utm_source=generator&theme=0" style={{width:'100%'}}  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                                <iframe src="https://open.spotify.com/embed/track/6clrB2X5SwqG1Qu9UR78i0?utm_source=generator&theme=0" style={{width:'100%'}} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                                <iframe src="https://open.spotify.com/embed/track/6clrB2X5SwqG1Qu9UR78i0?utm_source=generator&theme=0" style={{width:'100%'}}  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                                <iframe src="https://open.spotify.com/embed/track/6clrB2X5SwqG1Qu9UR78i0?utm_source=generator&theme=0" style={{width:'100%'}}  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         

                        </div>
           
                 </div>
     </div>
    </>
};



