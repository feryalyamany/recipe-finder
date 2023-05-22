import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  
  
  return (
   
       <>

     
    
          <div className="col-12 col-md-3">
               <Link to={`/${recipe.idMeal}`} style={{textDecoration:"none"}}>
            <div className={styles.card}>
            
              <div className={styles["card-image"]}>
             <picture>
                <source srcSet={recipe.webpSrc} type="image/webp" />
               <source srcSet={recipe.strMealThumb} type="image/jpeg" />
                <img
                  src={recipe? recipe.strMealThumb : "meal-img"}
                  srcSet={`${recipe.strMealThumb} 1x, ${recipe.strMealThumb} 2x`}
                  alt="meal-image"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  className="w-100 h-100"
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
             </picture>
          
              </div>
              <div className={styles.heading}>{recipe? recipe.strMeal : "Meal's Name"}</div>
           
            </div>
            </Link>
          </div>
          
      
          </>
   
  );
};

export default Card;


//  {`recipepage/${recipe.id}`}