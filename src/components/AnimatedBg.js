import './Concerts.css';
import { useEffect } from 'react';
import './AnimatedBg.css';

export default function AnimatedBg(){

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--posX', x - l - w / 2);
    e.currentTarget.style.setProperty('--posY', y - t - h / 2);
  }
  
  return (
    <div className="animated-bg" onMouseMove={handleMouseMove}></div>
  );
}

