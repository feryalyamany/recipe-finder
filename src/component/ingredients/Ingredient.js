import React from 'react'
import './Ingredient.css'
import { Link } from 'react-router-dom'
const Ingredient = ({data}) => {
  


  return (
         <div class="col-md-3 col-12">
          <Link to={`/${data.idIngredient}`} style={{textDecoration:"none", color:"black"}}>
              <div class="shady meal text-center px-2 py-3 card">
              <i class="fa-solid fa-drumstick-bite icon fa-3x my-2"></i>
              <h4 class="fw-bold ">{data.strIngredient}</h4>  
              </div>
              </Link>
        </div>
  )
}

export default Ingredient