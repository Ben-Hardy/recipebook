import { render } from "react-dom";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="NavBar">
			<h1>RecipeBook</h1>
				<nav >
					<Link to="/">Home</Link> | {" "}
					<Link to="/recipes">Recipes</Link>
				</nav>
		</div>
	);
};