let recipes = [
	{
		name: "Pancakes",
		slug: "pancakes",
		imageName: "pancakes.jpg",
		ingredients: [
			[1, "Cup", "Flour"],
			[2, "Tbsp", "Baking Powder"],
			[1, "Tbsp", "Sugar"],
			[1, "", "Egg"],
			[1, "Cup", "Milk"],
			[2, "Tbsp", "Oil"]
		],
		steps: [
			"Preheat griddle to medium heat",
			"Mix together flour, baking powder, and sugar",
			"Whisk together milk, egg, and oil",
			"Combine dry and wet ingredients. Whisk together ingredients until smooth",
			"Portion out as many pancakes as you can fit on the griddle (I use a 1/4 cup measuring cup for this)",
			"Repeat until all batter is gone. Between rounds, which the bubbles out of the batter"
		],
		notes: "Makes approximately 8 pancakes if using a 1/4 cup measuring cup"
	},
	{
		name: "Pancakes 2",
		slug: "pancakes2",
		imageName: "pancakes.jpg",
		ingredients: [
			[1, "Cup", "Flour"],
			[2, "Tbsp", "Baking Powder"],
			[1, "Tbsp", "Sugar"],
			[1, "", "Egg"],
			[1, "Cup", "Milk"],
			[2, "Tbsp", "Oil"]
		],
		steps: [
			"Preheat griddle to medium heat",
			"Mix together flour, baking powder, and sugar",
			"Whisk together milk, egg, and oil",
			"Combine dry and wet ingredients. Whisk together ingredients until smooth",
			"Portion out as many pancakes as you can fit on the griddle (I use a 1/4 cup measuring cup for this)",
			"Repeat until all batter is gone. Between rounds, which the bubbles out of the batter"
		],
		notes: "Makes approximately 8 pancakes if using a 1/4 cup measuring cup"
	}
]

export function getRecipes() {
	return recipes;
}

export function getRecipe(slug) {
	return recipes.find(recipe => recipe.slug === slug);
}