import { NavLink, useSearchParams } from "react-router-dom"
import { getRecipes } from "../recipe_data"

export default function Recipes() {
	let recipes = getRecipes();
	let [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="">
			<div className="my-8 bg-gray-300 text-center text-gray-600">
				Search for a recipe:
				<input value={searchParams.get("filter") || ""}
					onChange={event => {
						let filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
					className=" mx-2 px-2 bg-gray-100 focus:bg-white text-left border-2 rounded-lg shadow-sm shadow-gray-600 focus:shadow-gray-900"
				/>
			</div>
			<nav className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 my-8"}>
				
				{recipes
				.filter(recipe => {
					let filter = searchParams.get("filter");
					if (!filter) return true;
					let recipe_name = recipe.name.toLowerCase();
					return recipe_name.includes(filter.toLowerCase());
				})
				.map(recipe => (
					<NavLink 
					to={`/recipes/${recipe.slug}`}
					key={recipe.slug}
					>
						<div className="bg-gray-100 hover:bg-white text-center border-2 rounded-lg pb-6 pt-2 shadow-lg shadow-gray-600 hover:shadow-gray-900 hover:scale-105">
							<img src={"../img/" + recipe.imageName} className="scale-90" alt={recipe.altText}/>
							<h2 className="text-2xl">{recipe.name}</h2>
							<p className="px-2">{recipe.description}</p>
						</div>	
					</NavLink>
				))}
			</nav>
		</div>
	)
}