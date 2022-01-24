import { NavLink, Outlet, useSearchParams } from "react-router-dom"

import { getRecipes } from "../recipe_data"

export default function Recipes() {
	let recipes = getRecipes();

	return (

			<div>
				<nav className={"Recipes"}>
					
					{recipes.map(recipe => (
						<NavLink 
						to={`/recipes/${recipe.slug}`}
						key={recipe.slug}
						>
							<div className="RecipePane">
								<img src={"../img/" + recipe.imageName} className="Image" />
								<h2>{recipe.name}</h2>
								<p>{recipe.notes}</p>
							</div>	
						</NavLink>
					)
						
					)}
				</nav>
				
			</div>
	)
}