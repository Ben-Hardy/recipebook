let recipes = [
	{
		name: "Pancakes",
		slug: "pancakes",
		imageName: "pancakes.jpg",
		altText: "A photo of pancakes",
		description: "A basic recipe for pancakes",
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
		name: "More Pancakes",
		slug: "pancakes2",
		imageName: "otherpancakes.jpeg",
		altText: "A photo of pancakes",
		description: "A basic recipe for pancakes",
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
		name: "Bagels",
		slug: "bagels",
		imageName: "bagels.jpeg",
		altText: "A photo of pancakes",
		description: "A simple recipe to make bagels without kneading",
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
		name: "Banana Bread",
		slug: "bananabread",
		imageName: "bananabread.jpeg",
		altText: "A photo of banana bread",
		description: "A banana bread recipe that doesn't use lots of fancy ingredients",
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
		name: "Roasted Chicken",
		slug: "roastedchicken",
		imageName: "chicken.jpeg",
		altText: "A photo of a roasted chicken in a pan",
		description: "Roasted chicken without all of the extra work",
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
		name: "Gingerbread Cookies",
		slug: "gingerbread",
		imageName: "gingerbread.jpeg",
		altText: "A photo of stacks of gingerbread cookies",
		description: "A Christmas tradition",
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
		name: "Apple Pie",
		slug: "applepie",
		imageName: "pie.jpeg",
		altText: "A photo of apple pie",
		description: "Apple pie with a butter pastry crust",
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
		name: "Barbecued Back Ribs",
		slug: "ribs",
		imageName: "ribs.jpeg",
		altText: "A photo of barbecued ribs",
		description: "A less time-intensive version of back ribs",
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
	
]

export function getRecipes() {
	return recipes;
}

export function getRecipe(slug) {
	return recipes.find(recipe => recipe.slug === slug);
}