import { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import './index.css'
import Home from './routes/home';
import Footer from './components/Footer';

export default function App() {
	return (
		<div className=" bg-gray-300"
		>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
		
	)
}
