import React from "react";
import pic from '../assets/HomePic.png';
import '../style/Home.css';

function Home(){
    return(
        <div className="box">
            <img src={pic} alt="picture" />
        </div>
    );
}

export default Home;