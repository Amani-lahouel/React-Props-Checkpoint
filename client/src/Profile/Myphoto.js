  
import React from 'react'
import  img1 from './ssss.png';

export const Myphoto = (props) => {
    return (
        <div>
            <img src={img1} alt='' width={350}/>
 {props.children}
        </div>
    )
}
export default Myphoto;