import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import NavBar from "./components/NavBar"

import './App.css'

function App() {
	return (
		<div>
			<NavBar />
			<p>
				Welcome to Ben's Recipe Book.
			</p>
			
		</div>
		
	)
}

export default App
