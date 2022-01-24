import { useParams, Link, useRoutes } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getRecipe } from "../recipe_data";
import '../App.css'

export default function Recipe() {
	let params = useParams();
	let recipe = getRecipe(params.recipeSlug);
	let counter = 1;
	
	return (
		<div className="RecipeContainer">
			<div className="Recipe">
				<Link to="/recipes">Go Back To Recipes</Link>

				
				<h2 className="RecipeItem">{recipe.name}</h2>
				<img src={"../img/" + recipe.imageName} className="Image RecipeItem" />
				<h4>Ingredients:</h4>
				<ul>
				{recipe.ingredients.map(ingredient => (
					<li key={ingredient[2]}>
						{ingredient[0].toString() + " " + ingredient[1] + " " + ingredient[2]}
					</li>
				))}
				</ul>

				<h4>Instructions:</h4>
				
				<ol>
					{recipe.steps.map( step => (
						<li key={counter++}>
							{step}
						</li>
					))}
				</ol>
				<h4>Notes: </h4>
				<p style={{paddingLeft: "1rem"}}>{recipe.notes}</p>
			</div>
		</div>
	)
}