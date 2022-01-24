import { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css'
import Home from './routes/home';

function App() {
	let useLoc = useLocation();
	console.log(useLoc.pathname);
	return (
		<div
			style={{
				padding: "1rem"
			}}
		>
			<NavBar />
			<Outlet />
		</div>
		
	)
}

export default App
