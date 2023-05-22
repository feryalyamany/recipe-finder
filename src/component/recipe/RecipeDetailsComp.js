import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import styles from '../home/Home.module.css'

const RecipeDetailsComp = ({ recipe }) => {

  let ingredients = Array.from({length: 20}, (_, i) => i + 1)
  .map(i => {
    if (recipe[`strIngredient${i}`]) {
      return (
        <li key={i} className="me-1 alert m-1 px-1 py-0  alert-success">
          {recipe[`strMeasure${i}`]} {recipe[`strIngredient${i}`]}
        </li>
      )
    }
    return null;
  });

  let tags = recipe.strTags?.split(",") || [];
  let tagsList = tags.map((tag, i) => (
    <li key={i} className="me-1 alert m-1 px-1 py-0 alert-danger">
      {tag}
    </li>
  ));

  return (
    <Container className="py-5">
      <Row>
        <div className="col-12 col-md-4">
          <div className={styles.card}>
            <div className={styles["card-image"]}>
              <picture>
            <source srcSet={recipe.webpSrc} type="image/webp" />
              <source srcSet={recipe.strMealThumb} type="image/jpeg" />
              <img
                src={recipe.strMealThumb}
                srcSet={`${recipe.strMealThumb} 1x, ${recipe.strMealThumb} 2x`}
                alt="meal-image"
                sizes="(max-width: 600px) 100vw, 50vw"
                className="w-100 h-100"
                style={{ objectFit: "cover", borderRadius: "6px" }}
              />
              </picture>
            </div>
            <div className={styles.heading}>{recipe.strMeal}</div>
          </div>
        </div>

        <div className="col-md-8 col-12">
          <h3>Instructions: </h3>
          <p>{recipe.strInstructions}</p>
          <p className="fw-bold text-black ">
            Area: <span className=" muted fw-semibold" style={{fontSize:"15px"}}>{recipe.strArea}</span>
          </p>
          <p className="fw-bold text-black">
            Category:{" "}
            <span className="muted fw-semibold" style={{fontSize:"15px"}}>{recipe.strCategory}</span>
          </p>
          <h4>Recipe:</h4>
          <ul className="recipe list-unstyled g-3">
           
           {ingredients}
  
          </ul>
          <h4>Tags:</h4>
          <ul className="recipe list-unstyled g-3">
          {tagsList}
          </ul>
          <a
            target="_blank"
            href={recipe.strSource}
            className="mt-3 me-2 btn btn-sm btn-success"
          >
            Source
          </a>
          <a
            target="_blank"
            href={recipe.strYoutube}
            className="mt-3 btn btn-sm btn-danger"
          >
            Youtube
          </a>
        </div>
      </Row>
    </Container>
  );
};

export default RecipeDetailsComp;
