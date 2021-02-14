import React from 'react'
import WomenCards from '../Cards/WomenCards'
import image9 from "../image9.png"


function Women() {
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{marginTop:30,marginBottom:30}}>Women Clothing</h1>
            <img src={image9} style={{width:"800px",marginBottom:100}}/>
            <WomenCards/>

        </div>
    )
}

export default Women
