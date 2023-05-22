import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Ingredient from "../component/ingredients/Ingredient";
import axios from "axios";
import SearchBar from "../component/home/SearchBar";
import Pagination from "../component/Pagination";



const RecipePages = () => {
  
  const [ingredient, setIngredient]=useState([])

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i="
  const [isLoading, setIsLoading]=useState(false)
  const [query, setQuery]=useState("")
  const [recipes, setRecipes]= useState([])

  
 

  const getMainIngr = async()=>{
    const url = apiUrl + query;
    const {data}= await axios.get(url)
    console.log(data.meals)
    setIngredient(data.meals)
  }

  useEffect(()=>{
    getMainIngr()
   
    
  },[])

  const searchHandler =()=>{
    // e.preventDefault();
    getMainIngr()
  }

  return (
    <Container className="min-vh-100 py-3">
      <SearchBar 
      searchHandler={searchHandler}
      onChange={e=>setQuery(e.target.value)}
      value={query}
      getMainIngr={getMainIngr}
      />
      <Row className="gy-4 py-5">
{ingredient? ingredient.map((data, index)=>{
    return <Ingredient key={index} data={data}/>
}) : "Not Found"}
     

      </Row>

      <Pagination data={ingredient}/>
    </Container>
  );
};

export default RecipePages;
