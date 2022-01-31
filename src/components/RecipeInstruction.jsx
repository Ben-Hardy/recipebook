import { useState } from "react";

export default function RecipeInstruction(props) {
	const instruction= props.instruction

	const [checked, setChecked] = useState(false);

	function handleChange() {
		setChecked(!checked)
	}

	return (
		<div>
			<label className={ checked ? "text-justify text-gray-500 line-through " : "inline-block text-black "}>
				<input type="checkbox" checked={checked} onChange={handleChange} className=""/>
				{" "}{instruction}
			</label>
		</div>
	)
}