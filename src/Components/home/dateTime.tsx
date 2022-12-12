import  { useState , useEffect } from 'react'
import styles from './dateTime.module.scss';


const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div >
            <p className={styles.time}>{date.toLocaleTimeString()}</p>
            <p className={styles.date}>{date.toLocaleDateString()}</p>
            
            
        </div>
    )
}

export default DateTime