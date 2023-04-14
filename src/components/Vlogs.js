import '../index.css';
import '../App.css';
export default function Vlogs(){

    return <>
           <video width="320" height="240" controls>
                <source src="/vlogs/video.mp4" type="video/mp4"/>
           </video>
            <video width="320" height="240" controls>
                <source src="/vlogs/video2.mp4" type="video/mp4"/>
            </video>
            <video width="320" height="240" controls>
                <source src="/vlogs/video3.mp4" type="video/mp4"/>
            </video>
     <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/3B674B81nKqmaSwYnurwMV?utm_source=generator" width="10000px" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/7hQk8LX9N610K7Ax0b8B5N?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe syle={{borderRadius:12}} src="https://open.spotify.com/embed/track/4O6INdI6cljUWSb5c9wwQc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </>
};



