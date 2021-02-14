import React from 'react'
import image8 from "../image8.png"
import MenCards from '../Cards/MenCards'
function Men() {
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{marginTop:30,marginBottom:30}}>Men Clothing</h1>
            <img src={image8} style={{width:"800px",marginBottom:100}}/>
            <MenCards/>
   
        </div>
    )
}

export default Men
