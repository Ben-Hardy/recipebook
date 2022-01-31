import { useState } from "react";

export default function RecipeItem(props) {
	const ingredient = props.ingredient;
	let recipe_text = ingredient[0].toString() + " " + ingredient[1] + " " + ingredient[2]

	const [checked, setChecked] = useState(false);

	function handleChange() {
		setChecked(!checked)
	}

	return (
		<div>
			<label className={ checked ?"text-left text-gray-500 line-through " : "text-left text-black"}>
				<input type="checkbox" checked={checked} onChange={handleChange} className=""/>
				{" "}{recipe_text}
			</label>
		</div>
	)
}