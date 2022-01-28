import { getRecipes } from "../recipe_data"
import { NavLink } from "react-router-dom";

export default function Home() {
	let recipes = getRecipes();
	let randomRecipe = recipes[Math.floor((Math.random() * recipes.length))]
	return (
		<div className="h-full">
			<div className="grid grid-cols-1 gap-8 px-8 my-8">
				<div className="bg-white border-2 rounded-lg py-8 shadow-lg shadow-gray-600">
					<div className="px-16">
						<h1 className="text-2xl font-medium">
							Welcome to Ben's Recipe Book.
						</h1>
						<div className="px-8 mt-8">
							<p>Hello! I needed a place to keep track of all of my favourite recipes so I decided to make this website. It's nothing fancy.</p>
							<br/>
							<p>I hope you like pancakes.</p>
							<br/>

						</div>
				</div>
			</div>

			<h3 className=" text-xl font-medium text-gray-500">Featured Recipe:</h3>
			</div>
			<div className="px-16 md:px-32 lg:px-64 mb-8"> 
			<NavLink 
					to={`/recipes/${randomRecipe.slug}`}
					key={randomRecipe.slug}
					>
						<div className="bg-gray-100 hover:bg-white text-center border-2 rounded-sm pb-6 pt-2 shadow-lg shadow-gray-600 hover:shadow-gray-900 hover:scale-105">
							<img src={"../img/" + randomRecipe.imageName} className="scale-90" alt={randomRecipe.altText}/>
							<h2 className="text-2xl">{randomRecipe.name}</h2>
							<p className="px-2">{randomRecipe.description}</p>
						</div>	
					</NavLink>
			</div>
		</div>
	)

}