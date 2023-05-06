import logo from './logo.svg';
import './App.css';
import './index.css';
import Bg from "./components/bg";
import Header from './components/Header';
import Vlogs from './components/Vlogs';
import Music from './components/Music'
import {HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import VideoHeader from './components/VideoHeader';
import About from './components/About';
import NavBar from './components/NavBar';
import Concerts from './components/Concerts';
import MusicCard from './components/MusicCard';

import AnimatedBg from './components/AnimatedBg';
import NewsItem from './components/NewsItem';
function App() {
 
  return (<HashRouter>

                <Routes>
                  <Route path="/" element={
                      <>
                            <Header/> <NewsItem/> <NewsItem/> <NewsItem/> <NewsItem/>
                      </>}/>
                  

                    <Route path="/concerts" element={<>
                            <VideoHeader link="https://www.youtube.com/embed/OosADmqfj3c?autoplay=1&mute=1&controls=0&loop=1&start=145&cc_load_policy=3"/>
                            <div className='content'>
                              <Concerts/>
                            </div>
                            
                          </>}/>


                      <Route path="/music" element={<>
                      <VideoHeader link="https://www.youtube.com/embed/SDCyy8JLAt4?autoplay=1&mute=1&controls=0&loop=1&cc_load_policy=3"/>
                      <div className='content'>
                         <Music/>
                      </div>
                     
                      </>} />
                      <Route path="/about" element={<><NavBar/><About/></>} />

                </Routes>
         
         </HashRouter>);

        
    (
    
    <div className="App">
      
      <head>
      <script src="https://cdn.jsdelivr.net/npm/mediaelement@4.2.12/dist/mediaelement.min.js"></script>

      </head>
      <nav class="navbar">
         <div class="logo"></div>
        <a href="#">Home</a>
        <a href="./about.html">About</a>
        <a href="#">Songs</a>
        <a href='#'>Photos</a>
        <a href="#">Concerts</a>
        <a href='./blog.html'>Vlogs</a>
      </nav>

      <div className="head-container">
        <Bg/>
          <img src="images/7066.jpeg"  alt="luna" height="100%"/>
        
          <h1 className="text-overlay">ЛУНА</h1>
          <h1 className='by-line'><li>Photographer</li> <li>Singer</li><li>Model</li></h1>
      </div>

      <blockquote id="about">" Glamorously heartbroken synthpop  "</blockquote>
      <div className='row'>
          <div className="small-card">
            
          <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/3B674B81nKqmaSwYnurwMV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/track/7hQk8LX9N610K7Ax0b8B5N?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe syle={{borderRadius:12}} src="https://open.spotify.com/embed/track/4O6INdI6cljUWSb5c9wwQc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         
         



          <iframe  width="100%" height="100%" src="//www.youtube.com/embed/qUJYqhKZrwA?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>


          </div>
          
         {/* <div className='card-textbox'>
       oivroivmoviemvovnornvc cwc c co coj ceofjc fojc ocje coj coejc o


  </div>*/}
          
      </div>
     
      
    </div>
  );
}



export default App;
