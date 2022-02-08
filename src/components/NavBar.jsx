import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
	let isInRecipes = useLocation().pathname.includes("recipes");
	let isInHome = !isInRecipes;
	
	console.log(isInRecipes)

	return (
		<div className="max-w-full sticky top-0 z-50">
			<nav className="relative w-full flex flex-wrap items-center justify-between py-3 shadow-md shadow-gray-600 bg-white">
				
				<div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
					<Link to="/recipebook" className="px-2">
						<h1 className="text-4xl hover:text-gray-700">RecipeBook</h1>
					</Link>
					<div className="container-fluid flex flex-row justify-end items-stretch">
						<Link to="/recipebook" className={isInHome ? "px-2 hover:text-gray-700 underline underline-offset-8": "px-2 hover:text-gray-700"}>Home</Link>
						<Link to="/recipebook/recipes" className={isInRecipes ?"px-2 hover:text-gray-700 underline underline-offset-8": "px-2 hover:text-gray-700"}>Recipes</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

