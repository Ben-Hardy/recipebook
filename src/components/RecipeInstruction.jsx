import { useState } from "react";

export default function RecipeInstruction(props) {
	const instruction= props.instruction

	const [checked, setChecked] = useState(false);

	function handleChange() {
		setChecked(!checked)
	}

	return (
		<div>
			<label>
				<input type="checkbox" checked={checked} onChange={handleChange} className=""/>
				{" "}
				<text className={ checked ?"text-left text-gray-500 line-through " : "text-left text-black"}>
					{props.counter + ". " + instruction}
				</text>
			</label>
		</div>
	)
}