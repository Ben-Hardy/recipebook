import { useParams, Link, useRoutes } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getRecipe } from "../recipe_data";
import '../index.css'

export default function Recipe() {
	let params = useParams();
	let recipe = getRecipe(params.recipeSlug);
	let counter = 1;
	
	return (
		<div className="h-full">
			<div className="grid grid-cols-1 gap-8 px-8 my-8">
				<Link to="/recipes" className="w-fit bg-gray-100 hover:bg-white py-4 px-8 rounded-lg shadow-lg shadow-gray-600 hover:shadow-gray-900 hover:scale-105">Go Back</Link>

				<div className="bg-white border-2 rounded-lg py-6 shadow-lg shadow-gray-600">
					

					
					
					<img src={"../img/" + recipe.imageName} className="scale-90 " />
					<h2 className="text-2xl py-4 font-semibold px-16">{recipe.name}</h2>
					<h4 className="text-xl font-medium text-left px-24">Ingredients:</h4>
					<ul className="pb-8 pt-4  grid grid-cols-2">
					{recipe.ingredients.map(ingredient => (
						<li key={ingredient[2]} className="text-left px-32">
							- {ingredient[0].toString() + " " + ingredient[1] + " " + ingredient[2]}
						</li>
					))}
					</ul>

					<h4 className="text-xl font-medium text-left px-24">Instructions:</h4>
					
					<ol className="pb-8 pt-4">
						{recipe.steps.map( step => (
							<li key={counter++} className="text-left px-32">
								- {step}
							</li>
						))}
					</ol>
					<h4 className="text-xl font-medium text-left px-24">Notes: </h4>
					<p className="text-left px-32 pt-4">{recipe.notes}</p>
				</div>
			</div>

		</div>
	)
}