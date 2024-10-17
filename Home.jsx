import React from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom"; 

function Home(){

    const navigate=useNavigate();

    return(
        <div>
            <button onClick={()=>navigate('Form')}> Fill the Form</button>
            <button onClick={()=>navigate('Data')}>Show the data</button>
            <button onClick={()=>navigate('Weather')}>Weather Report</button>
        </div>
        

    )
}
export default Home;