import React from 'react'
import { NavLink } from 'react-router-dom'
const PlanCard = ({price,plans}) => {
  return (
    <div style={{width:"318px",height:"540px",background:"white",borderRadius:"16px",padding:"30px 16px 30px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        <div>
            <p style={{fontWeight:"600"}}>Novice</p>
            <div>
           {price}

            </div>
            <div>
             {plans}

            </div>
        </div>
      
 
              <NavLink to={"/"}>
           <button style={{width:"90%",background:"#7257FF",color:"white",borderRadius:"16px",padding:"10px 53px 10px 53px"}}>Start Plan</button>
           </NavLink>
        
       
    </div>
  )
}

export default PlanCard