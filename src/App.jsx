import { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import './App.css'
import Home from './routes/home';
import Footer from './components/Footer';

export default function App() {
	return (
		<div className="App"
		>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
		
	)
}
