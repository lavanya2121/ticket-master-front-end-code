import React from 'react'
import project from '../images/project.jpg'

function Home(){

    return(
        <div>
            <h2>Home Component</h2>
            {/* <img src="/static/media/image.402c825e.png" alt="man holding sign"/> */}
            <div className="container" style={{backgroundImage:`url(${project})`,backgroundSize:'cover',width:'1200px',height:'580px'}}></div>
        </div>
    )
}
export default Home