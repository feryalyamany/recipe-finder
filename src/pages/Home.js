import React, { useState, useEffect} from 'react'
import Card from '../component/home/Card'
import SearchBar from '../component/home/SearchBar'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap';


const Home = () => {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  const [isLoading, setIsLoading]=useState(false)
  const [query, setQuery]=useState("")
  const [recipes, setRecipes]= useState([])

  const getRecipes = async()=>{
    setIsLoading(true);
    const url = apiUrl + query;
    const {data}= await axios.get(url)
    setRecipes(data.meals)
    setIsLoading(false)

  }
  useEffect(()=>{
    getRecipes()
   
    
  },[])

  const searchHandler =()=>{
    // e.preventDefault();
    getRecipes()
  }

  return (
    <Container className='min-vh-100'>
      <SearchBar 
      searchHandler={searchHandler}
      onChange={e=>setQuery(e.target.value)}
      isLoading={isLoading}
      value={query}
      getRecipes={getRecipes}
      />

     <Row className=" mt-5">

    
     {recipes? 
          recipes.map((recipe)=> (
            <Card key={recipe.idMeal} recipe={recipe}/>
          ))
           :  <h3 className='text-center'>No Recipes</h3>
        }
       

    

     </Row>
   
     
    </Container>
  )
}

export default Home