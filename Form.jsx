import React, { useState } from "react";


function Form(){
    const [formData, setFormData] = useState([])
       
        
    
      const handleChange = (e) => {
      
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData)
        console.log(formData);
       


        
        
      };

      
    

    


    
    return(
        <form onSubmit={handleSubmit} > 
            <label>FirstName:<input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange}></input> </label>
            <label>LastName:<input type="text" name="LastName" value={formData.LastName} onChange={handleChange}></input></label>
            <label>Email:<input type="text" name="Email" value={formData.Email} onChange={handleChange}></input></label>
            <label>Phone Number:<input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange}></input></label>
            <button type="submit">Submit</button>
            
            

        </form>



    )
}
export default Form;