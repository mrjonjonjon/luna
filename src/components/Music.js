import '../index.css';
import '../App.css';
import MusicCard from './MusicCard';
export default function Music(){

    return <>
    <div style={{display:'flex',justifyContent:'flex-start'}}>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
        <MusicCard/>
    </div>
    </>
};



