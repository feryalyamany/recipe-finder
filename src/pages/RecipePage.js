import React, { useState, useEffect } from 'react'
import RecipeDetailsComp from '../component/recipe/RecipeDetailsComp'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  const {mealId}= useParams();

  const [recipe, setRecipe]= useState([]);
 
    
    const getRecipe = async ()=>{
      const {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      setRecipe(data.meals[0])
    }
    
   



  useEffect(()=>{
    getRecipe()
  },[])

  return (
    <div className='min-vh-100'>
   
    {recipe? 
      <RecipeDetailsComp recipe={recipe}/>
    : "Not Found"}

    </div>
  )
}

export default RecipePage