import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Recipes from './routes/recipes'
import Recipe from './routes/recipe'
import Home from './routes/home'
import Homepage from './routes/homepage'
import Contact from './routes/contact'
import Portfolio from './routes/portfolio'

const rootElement = document.getElementById('root')

ReactDOM.render(
	<HashRouter>
		<Routes>
			<Route path="/" element={<Homepage />} exact/>
			<Route path="/contact" element={<Contact />} exact/>
			<Route path="/portfolio" element={<Portfolio/>} exact/>
			<Route path="/recipebook" element={<App />} exact>
				<Route path="/recipebook" element={<Home />} exact/>
				<Route path="/recipebook/recipes" element={<Recipes />} exact>
				</Route>
				<Route path="/recipebook/recipes/:recipeSlug" element={<Recipe />} exact/>
			</Route>
		</Routes>
	</HashRouter>,
	rootElement
);
