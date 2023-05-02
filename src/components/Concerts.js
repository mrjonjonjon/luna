
import './Concerts.css';
import { useEffect } from 'react';
function Concerts(){
  

const addOnClick = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
useEffect(()=>{
    addOnClick()
}, []) // <-- empty dependency array

    return <>
    
    <div className="concerts">
        <div className='accordion'>EUROPE
            
            
        </div>
        <div className='panel'>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li> 
            </div>
    </div>

    </>

    
}

export default Concerts;