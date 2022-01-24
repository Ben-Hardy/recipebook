import { useParams, Link, useRoutes } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getRecipe } from "../recipe_data";

export default function Recipe() {
	let params = useParams();
	let recipe = getRecipe(params.recipeSlug);
	
	return (
		<div>
			<main style= {{
				padding: "1rem"
			}}>
				<Link to="/recipes">Go Back To Recipes</Link>

				
				<h2>{recipe.name}</h2>
				
			</main>
		</div>
		
	)
}