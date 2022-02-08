import { useParams, Link } from "react-router-dom";
import { getRecipe } from "../recipe_data";
import '../index.css'
import RecipeItem from "../components/RecipeItem";
import RecipeInstruction from "../components/RecipeInstruction";

export default function Recipe() {
	let params = useParams();
	let recipe = getRecipe(params.recipeSlug);
	let counter = 1;
	
	return (
		<div className="h-full">
			<div className="grid grid-cols-1 gap-8 px-8 my-8">
				<Link to="/recipebook/recipes" className="w-fit bg-gray-100 hover:bg-white py-4 px-8 rounded-sm shadow-sm shadow-gray-600 hover:shadow-gray-900 hover:scale-105">Go Back</Link>

				<div className="bg-white rounded-sm py-6 shadow-lg shadow-gray-600 px-8">
					<img src={"../../img/" + recipe.imageName} className="px-16 py-8" />
					<h2 className="text-2xl py-4 font-semibold px-16">{recipe.name}</h2>
					<h4 className="text-xl font-medium text-left sm:px-8 lg:px-24">Ingredients:</h4>
					<ul className="pb-8 pt-4  grid sm:grid-cols-1 lg:grid-cols-2">
					{recipe.ingredients.map(ingredient => (
						<li key={ingredient[2]} className="text-left sm:px-16 md:px-16 lg:px-32 py-2">
							<RecipeItem ingredient={ingredient}/>
						</li>
					))}
					</ul>

					<h4 className="text-xl font-medium text-left sm:px-8 lg:px-24">Instructions:</h4>
					
					<ol className="pb-8 pt-4">
						{recipe.steps.map( step => (
							<li key={counter} className="text-left sm:px-16 md:px-16 lg:px-32 py-2">
								<RecipeInstruction instruction={step} counter={counter++}/>
							</li>
						))}
					</ol>
					<h4 className="text-xl font-medium text-left sm:px-4 lg:px-24">Notes: </h4>
					<p className="text-left sm:px-16 lg:px-32 pt-4">{recipe.notes}</p>
				</div>
			</div>

		</div>
	)
}