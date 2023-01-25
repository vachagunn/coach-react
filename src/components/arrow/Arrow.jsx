import { useEffect, useState } from 'react';
import './style.css'


const Arrow = () => {
    const [scroll, setScroll] = useState(0);

    const ScrollHandler = () => {
        setScroll(window.scrollY);
    } 

    const MoveHandler = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", ScrollHandler);
        return () => window.removeEventListener("scroll", ScrollHandler);
      }, []);

    return ( 
        <>
            <button className={`up-button ${scroll > 200 ? 'shown' : ''}`} onClick={MoveHandler}>↑</button>
        </>
     );
}
 
export default Arrow;