import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import styles from '../component/home/Home.module.css'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
const MainCourse = () => {
 const {ingredientId}= useParams();
 const [recipes, setRecipes]= useState([]);
//  const getMainCourse =async ()=>{
//   const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientId}`)
//   // console.log(data.meals[0])
//   // setRecipes(data.meals[0])
//  }

//  useEffect(()=>{
//   getMainCourse()
//  },[])

  return (
    <div className='min-vh-100'>
      <Container>
        <Row>
        {recipes? recipes.map((recipe, index)=>{
      return <div key={index} className="col-12 col-md-3">
               <Link to={`recipepages/${recipe.idMeal}`} style={{textDecoration:"none"}}>
            <div className={styles.card}>
            
              <div className={styles["card-image"]}>
             
                <img
                  src={ recipe.strMealThumb }
        
                  alt="meal-image"
                 
                  className="w-100 h-100"
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
            
          
              </div>
              <div className={styles.heading}>{ recipe.strMeal}</div>
           
            </div>
            </Link>
          </div>

      


    }): null}


        </Row>
      </Container>
   
    
    </div>
  )
}

export default MainCourse