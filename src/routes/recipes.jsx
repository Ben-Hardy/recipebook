import { NavLink, Outlet, useSearchParams } from "react-router-dom"
import NavBar from "../components/NavBar";

import { getRecipes } from "../recipe_data"

export default function Recipes() {
	let recipes = getRecipes();

	return (
		<div>
			<NavBar />
			<div style={{ display: "flex"}}>
				<nav style={{
					
					padding: "1rem"
				}}>
					
					{recipes.map(recipe => (
						<NavLink
						style={({ isActive }) => {
							return {
								display: "block",
								margin: "1rem 0",
								color: isActive ? "red" : ""
							};
						}}
						to={`/recipes/${recipe.slug}`}
						key={recipe.slug}
						>
							
							{recipe.name}
							
						</NavLink>
					)
						
					)}
				</nav>
				
			</div>
		</div>
	)
}