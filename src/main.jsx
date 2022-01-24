import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recipes from './routes/recipes'
import Recipe from './routes/recipe'
import Home from './routes/home'

const rootElement = document.getElementById('root')

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} >
				<Route path="/" element={<Home />} />
				<Route path="/recipes" element={<Recipes />}>
					<Route
						index
						element={
							<main style={{ padding: "1rem"}}>
								<p>Pick a recipe!</p>
							</main>
						}/>
					
				</Route>
				<Route path="/recipes/:recipeSlug" element={<Recipe />} />

			</Route>

		</Routes>
	</BrowserRouter>,
	rootElement
);
