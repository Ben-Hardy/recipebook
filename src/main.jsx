import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recipes from './routes/recipes'
import Recipe from './routes/recipe'
import Home from './routes/home'
import Homepage from './routes/homepage'
import Contact from './routes/contact'

const rootElement = document.getElementById('root')

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Homepage />}/>
			<Route path="/contact" element={<Contact />}/>
			<Route path="/recipebook" element={<App />} >
				<Route path="/recipebook" element={<Home />} />
				<Route path="/recipebook/recipes" element={<Recipes />}>
				</Route>
				<Route path="/recipebook/recipes/:recipeSlug" element={<Recipe />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	rootElement
);
