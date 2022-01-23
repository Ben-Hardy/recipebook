import { render } from "react-dom";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<h1>RecipeBook</h1>
				<nav 
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "1rem"
				}}>
					<Link to="/">Home</Link> | {" "}
					<Link to="/recipes">Recipes</Link>
				</nav>
		</div>
	);
};