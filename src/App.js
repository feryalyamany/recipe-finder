import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import NotFound from './pages/NotFound';
import RecipePages from "./pages/RecipePages";
import MainCourse from "./pages/MainCourse";


const routers= createBrowserRouter([
  {path:"*", element: <NotFound/>},
  {path:"/", element: <RootLayout/>, children: [

    {index:true, element: <Home/>},
    {path:"recipepages", element: <RecipePages/>},
    // {path:"recipepages/:ingredientId", element: <MainCourse/>},
    {path:"/:mealId", element: <RecipePage/>},
    

    
  ]}
])

function App() {

  
  return (
    <>
   
    <RouterProvider router={routers}/>
    </>
  );
}

export default App;
